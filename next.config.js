
/** @type {import('next').NextConfig} */
module.exports = {
  // basePath: '/home/roger/Downloads/github/webpage/out',
  webpack: (config, { dev, isServer }) => {

    
    // Disable code splitting
    config.optimization.splitChunks.cacheGroups = {
      default: false,
    };

    // Merge chunks instead of creating new ones
    config.optimization.minimize = true;

    // Always create a single chunk for all code
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    // Disable file-based dynamic imports
    // config.module.rules.push({
    //   test: /\.js$/,
    //   use: {
    //     loader: 'next-babel-loader',
    //     options: {
    //       isServer,
    //     },
    //   },
    // });

    return config;
  },
  reactStrictMode: true,
  output:"export",
};
