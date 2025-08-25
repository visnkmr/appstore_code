'use client'
import dynamic from 'next/dynamic'
import '../../styles/globals.css'
import { Search, Sparkles, Zap, Star, Heart, Rocket, Home } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const Projects = dynamic(() => import("../../src/components/project"));
const Ct = dynamic(() => import("../../src/components/ct"));

export default function AlternatePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen">

      {/* Creative Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            {/* Creative Badge */}
            {/* <div className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-800/50 px-6 py-3 text-sm font-medium text-purple-700 dark:text-purple-300 backdrop-blur-sm shadow-lg">
              <Sparkles className="h-5 w-5 animate-spin" />
              <span className="font-bold">Creative App Showcase</span>
            </div> */}

            {/* Hero Title with Animation */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                Discover Amazing Apps
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore a vibrant collection of innovative applications that push the boundaries of what's possible
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Innovative</span>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-bounce delay-100">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Powerful</span>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-bounce delay-200">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Beautiful</span>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Creative Apps Section */}
      <section className="py-16 relative z-10">
        <div>
          

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-3xl blur-3xl"></div>
            <div className="relative ">
              {/* Creative Search */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-50 animate-pulse"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-1">
                <div className="flex items-center space-x-3 bg-white dark:bg-gray-900 rounded-xl p-4">
                  <Search className="h-6 w-6 text-purple-500" />
                  <input
                    type="text"
                    placeholder="Search for creative apps..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="flex-1 bg-transparent border-0 outline-none text-lg placeholder-purple-300 dark:placeholder-purple-700"
                  />
                  <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </div>
              <Projects searchQuery={searchQuery}/>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content with Creative Styling */}
      {/* <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <Ct/>
        </div>
      </section> */}
      </div>
    </div>
  );
}