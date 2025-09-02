'use client'

import React, { useState, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import { Upload, Download, FileImage, Archive } from 'lucide-react';

export default function Page() {
  const [zipStatus, setZipStatus] = useState('');
  const [imageStatus, setImageStatus] = useState('');
  const zipInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Image preview state
  const [showPreviews, setShowPreviews] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<Array<{
    name: string;
    original: string;
    compressed: string;
    originalSize: number;
    compressedSize: number;
  }>>([]);

  // Compression options state
  const [zipOptions, setZipOptions] = useState({
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    quality: 0.8
  });

  const [imageOptions, setImageOptions] = useState({
    maxSizeMB: 0.05,
    maxWidthOrHeight: 1024,
    quality: 0.6
  });

  // Map file extensions to MIME types
  const mimeTypes: { [key: string]: string } = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    gif: 'image/gif'
  };

  // Function to check if a file is a valid image based on MIME type and signature
  async function isValidImage(blob: Blob, fileName: string): Promise<boolean> {
    try {
      const arrayBuffer = await blob.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer.slice(0, 8));
      // Basic signature check for PNG, JPEG, WebP, GIF
      const signatures = {
        png: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A], // Full PNG signature
        jpeg: [0xFF, 0xD8, 0xFF], // JPEG signature
        webp: [0x52, 0x49, 0x46, 0x46], // WebP (RIFF) signature
        gif: [0x47, 0x49, 0x46, 0x38] // GIF signature
      };
      const extension = fileName.split('.').pop()?.toLowerCase() || '';
      const isValidSignature =
        (extension === 'png' && signatures.png.every((byte, i) => uint8Array[i] === byte)) ||
        (['jpg', 'jpeg'].includes(extension) && signatures.jpeg.every((byte, i) => uint8Array[i] === byte)) ||
        (extension === 'webp' && signatures.webp.every((byte, i) => uint8Array[i] === byte)) ||
        (extension === 'gif' && signatures.gif.every((byte, i) => uint8Array[i] === byte));
      return isValidSignature;
    } catch (error) {
      console.error(`Error checking image validity for ${fileName}:`, error);
      return false;
    }
  }

  // Convert Blob to File-like object with proper MIME type
  function blobToFile(blob: Blob, fileName: string): File {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    const mimeType = mimeTypes[extension] || 'application/octet-stream';
    return new File([blob], fileName, { type: mimeType });
  }

  async function processZip() {
    const zipInput = zipInputRef.current;
    if (!zipInput || !zipInput.files || !zipInput.files.length) {
      alert('Please select a ZIP file.');
      return;
    }

    const zipFile = zipInput.files[0];
    const newZip = new JSZip();
    setZipStatus('Processing ZIP file...');
    setImagePreviews([]); // Clear previous previews

    try {
      // Load the ZIP file
      const zip = await JSZip.loadAsync(zipFile);

      // Compression options for ZIP images
      const compressionOptions = {
        maxSizeMB: zipOptions.maxSizeMB,
        maxWidthOrHeight: zipOptions.maxWidthOrHeight,
        useWebWorker: true,
        maxIteration: 10,
        initialQuality: zipOptions.quality
      };

      // Collect all previews
      const allPreviews: Array<{
        name: string;
        original: string;
        compressed: string;
        originalSize: number;
        compressedSize: number;
      }> = [];

      // Process each file in the ZIP
      const promises: Promise<void>[] = [];
      const errors: string[] = [];
      zip.forEach((relativePath, file) => {
        // Check if the file is an image (based on extension)
        const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(relativePath);
        if (!file.dir && isImage) {
          promises.push(
            file.async('blob').then(async (blob) => {
              try {
                // Convert Blob to File with proper MIME type
                const fileObject = blobToFile(blob, relativePath.split('/').pop() || relativePath);
                console.log(`Processing ${relativePath}: MIME=${fileObject.type}, Size=${(fileObject.size / 1024).toFixed(2)} KB`);

                // Validate the file as an image
                if (await isValidImage(blob, relativePath)) {
                  // Compress the image
                  const compressedFile = await imageCompression(fileObject, compressionOptions);
                  setZipStatus(prev => prev + `<p>Compressed ${relativePath} (Original: ${(fileObject.size / 1024).toFixed(2)} KB, Compressed: ${(compressedFile.size / 1024).toFixed(2)} KB)</p>`);

                  // Create preview URLs for ZIP images
                  const originalUrl = URL.createObjectURL(blob);
                  const compressedUrl = URL.createObjectURL(compressedFile);

                  // Add to previews collection
                  allPreviews.push({
                    name: relativePath.split('/').pop() || relativePath,
                    original: originalUrl,
                    compressed: compressedUrl,
                    originalSize: fileObject.size,
                    compressedSize: compressedFile.size
                  });

                  newZip.file(relativePath, compressedFile);
                } else {
                  errors.push(`Skipped compression for ${relativePath}: Not a valid image`);
                  newZip.file(relativePath, blob);
                }
              } catch (error) {
                console.error(`Error compressing ${relativePath}:`, error);
                errors.push(`Error compressing ${relativePath}: ${(error as Error).message}`);
                newZip.file(relativePath, blob);
              }
            })
          );
        } else if (!file.dir) {
          // Non-image files
          promises.push(
            file.async('blob').then((blob) => {
              newZip.file(relativePath, blob);
            })
          );
        } else if (file.dir && relativePath.endsWith('/')) {
          // Preserve empty folders
          newZip.folder(relativePath.slice(0, -1));
        }
      });

      // Wait for all files to be processed
      await Promise.all(promises);

      // Display errors
      if (errors.length) {
        setZipStatus(prev => prev + `<p>Issues encountered:</p><ul>${errors.map((err) => `<li>${err}</li>`).join('')}</ul>`);
      }

      // Generate the new ZIP file
      setZipStatus(prev => prev + '<p>Generating new ZIP file...</p>');
      const newZipBlob = await newZip.generateAsync({
        type: 'blob',
        platform: 'UNIX'
      });

      // Trigger download
      const url = URL.createObjectURL(newZipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'compressed_images.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setZipStatus(prev => prev + '<p>ZIP file with compressed images has been downloaded!</p>');

      // Set all previews at once and show them
      if (allPreviews.length > 0) {
        setImagePreviews(allPreviews);
        setShowPreviews(true);
      }
    } catch (error) {
      console.error('Error processing ZIP file:', error);
      setZipStatus(prev => prev + `<p>Error processing ZIP file: ${(error as Error).message}</p>`);
      alert('An error occurred while processing the ZIP file.');
    }
  }

  async function processSingleImage() {
    const imageInput = imageInputRef.current;
    if (!imageInput || !imageInput.files || !imageInput.files.length) {
      alert('Please select an image file.');
      return;
    }

    const imageFile = imageInput.files[0];
    setImageStatus('Processing single image...');

    try {
      // Max compression options
      const maxCompressionOptions = {
        maxSizeMB: imageOptions.maxSizeMB,
        maxWidthOrHeight: imageOptions.maxWidthOrHeight,
        useWebWorker: true,
        maxIteration: 20,
        initialQuality: imageOptions.quality
      };

      // Validate the file
      if (await isValidImage(imageFile, imageFile.name)) {
        const compressedFile = await imageCompression(imageFile, maxCompressionOptions);
        setImageStatus(prev => prev + `<p>Compressed ${imageFile.name} (Original: ${(imageFile.size / 1024).toFixed(2)} KB, Compressed: ${(compressedFile.size / 1024).toFixed(2)} KB)</p>`);

        // Create preview URLs
        const originalUrl = URL.createObjectURL(imageFile);
        const compressedUrl = URL.createObjectURL(compressedFile);

        // Add to previews
        const newPreview = {
          name: imageFile.name,
          original: originalUrl,
          compressed: compressedUrl,
          originalSize: imageFile.size,
          compressedSize: compressedFile.size
        };

        setImagePreviews(prev => [...prev, newPreview]);
        setShowPreviews(true);

        // Trigger download
        const url = URL.createObjectURL(compressedFile);
        const link = document.createElement('a');
        link.href = url;
        link.download = `compressed_${imageFile.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        setImageStatus(prev => prev + '<p>Compressed image has been downloaded!</p>');
      } else {
        setImageStatus(prev => prev + `<p>Skipped: ${imageFile.name} is not a valid image.</p>`);
      }
    } catch (error) {
      console.error('Error compressing single image:', error);
      setImageStatus(prev => prev + `<p>Error compressing image: ${(error as Error).message}</p>`);
      alert('An error occurred while compressing the image.');
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Image Compression Tool</h1>
              <p className="text-muted-foreground">Compress images in ZIP files or single images efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* ZIP Compression Section */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Archive className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold text-card-foreground">Compress ZIP File</h2>
              </div>
              <p className="text-muted-foreground mb-4">Upload a ZIP file containing images to compress them while preserving the folder structure.</p>

              {/* Compression Options */}
              <details className="mb-4">
                <summary className="cursor-pointer text-sm font-medium text-card-foreground mb-2 hover:text-primary">Compression Options</summary>
                <div className="space-y-3 mt-2 p-3 bg-muted/50 rounded-md">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="zipMaxSize" className="block text-xs font-medium text-muted-foreground mb-1">Max Size (MB)</label>
                      <input
                        type="number"
                        id="zipMaxSize"
                        min="0.01"
                        max="10"
                        step="0.1"
                        value={zipOptions.maxSizeMB}
                        onChange={(e) => setZipOptions(prev => ({ ...prev, maxSizeMB: parseFloat(e.target.value) || 1 }))}
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipMaxWidth" className="block text-xs font-medium text-muted-foreground mb-1">Max Width/Height</label>
                      <input
                        type="number"
                        id="zipMaxWidth"
                        min="100"
                        max="4000"
                        step="50"
                        value={zipOptions.maxWidthOrHeight}
                        onChange={(e) => setZipOptions(prev => ({ ...prev, maxWidthOrHeight: parseInt(e.target.value) || 1920 }))}
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zipQuality" className="block text-xs font-medium text-muted-foreground mb-1">Quality (0.1 - 1.0)</label>
                    <input
                      type="range"
                      id="zipQuality"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={zipOptions.quality}
                      onChange={(e) => setZipOptions(prev => ({ ...prev, quality: parseFloat(e.target.value) }))}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground mt-1">{zipOptions.quality}</div>
                  </div>
                </div>
              </details>

              <div className="space-y-4">
                <div>
                  <label htmlFor="zipInput" className="block text-sm font-medium text-card-foreground mb-2">Select ZIP File</label>
                  <input
                    ref={zipInputRef}
                    type="file"
                    id="zipInput"
                    accept=".zip"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                  />
                </div>
                <button
                  onClick={processZip}
                  className="w-full flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Compress ZIP and Download
                </button>
              </div>
              {zipStatus && (
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <div dangerouslySetInnerHTML={{ __html: zipStatus }} />
                </div>
              )}
            </div>

            {/* Single Image Compression Section */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <FileImage className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold text-card-foreground">Compress Single Image</h2>
              </div>
              <p className="text-muted-foreground mb-4">Upload a single image file for maximum compression.</p>

              {/* Compression Options */}
              <details className="mb-4">
                <summary className="cursor-pointer text-sm font-medium text-card-foreground mb-2 hover:text-primary">Compression Options</summary>
                <div className="space-y-3 mt-2 p-3 bg-muted/50 rounded-md">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="imageMaxSize" className="block text-xs font-medium text-muted-foreground mb-1">Max Size (MB)</label>
                      <input
                        type="number"
                        id="imageMaxSize"
                        min="0.01"
                        max="5"
                        step="0.01"
                        value={imageOptions.maxSizeMB}
                        onChange={(e) => setImageOptions(prev => ({ ...prev, maxSizeMB: parseFloat(e.target.value) || 0.05 }))}
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="imageMaxWidth" className="block text-xs font-medium text-muted-foreground mb-1">Max Width/Height</label>
                      <input
                        type="number"
                        id="imageMaxWidth"
                        min="100"
                        max="2000"
                        step="50"
                        value={imageOptions.maxWidthOrHeight}
                        onChange={(e) => setImageOptions(prev => ({ ...prev, maxWidthOrHeight: parseInt(e.target.value) || 1024 }))}
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="imageQuality" className="block text-xs font-medium text-muted-foreground mb-1">Quality (0.1 - 1.0)</label>
                    <input
                      type="range"
                      id="imageQuality"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={imageOptions.quality}
                      onChange={(e) => setImageOptions(prev => ({ ...prev, quality: parseFloat(e.target.value) }))}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground mt-1">{imageOptions.quality}</div>
                  </div>
                </div>
              </details>

              <div className="space-y-4">
                <div>
                  <label htmlFor="imageInput" className="block text-sm font-medium text-card-foreground mb-2">Select Image File</label>
                  <input
                    ref={imageInputRef}
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                  />
                </div>
                <button
                  onClick={processSingleImage}
                  className="w-full flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Compress Image and Download
                </button>
              </div>
              {imageStatus && (
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <div dangerouslySetInnerHTML={{ __html: imageStatus }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Section */}
      {showPreviews && imagePreviews.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileImage className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-xl font-semibold text-card-foreground">Image Previews</h2>
                </div>
                <button
                  onClick={() => setShowPreviews(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hide Previews
                </button>
              </div>

              <div className="space-y-6">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-card-foreground mb-4">{preview.name}</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Original Image */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-muted-foreground">Original</h4>
                          <span className="text-xs text-muted-foreground">
                            {(preview.originalSize / 1024).toFixed(2)} KB
                          </span>
                        </div>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img
                            src={preview.original}
                            alt={`Original ${preview.name}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Compressed Image */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-muted-foreground">Compressed</h4>
                          <span className="text-xs text-muted-foreground">
                            {(preview.compressedSize / 1024).toFixed(2)} KB
                            <span className="ml-2 text-green-600 font-medium">
                              ({(((preview.originalSize - preview.compressedSize) / preview.originalSize) * 100).toFixed(1)}% smaller)
                            </span>
                          </span>
                        </div>
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img
                            src={preview.compressed}
                            alt={`Compressed ${preview.name}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Previews Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => {
                    // Clean up object URLs
                    imagePreviews.forEach(preview => {
                      URL.revokeObjectURL(preview.original);
                      URL.revokeObjectURL(preview.compressed);
                    });
                    setImagePreviews([]);
                    setShowPreviews(false);
                  }}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted transition-colors"
                >
                  Clear All Previews
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
