const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  
  // basePath: '/home/roger/Downloads/github/webpage/out',
  webpack: (config
    // , { dev, isServer }
    ) => {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments:false,
            terserOptions: {
              ecma: 10,
              warnings: false,
              output: {
                comments: false,
                indent_level: 2,
                ecma:10,
                indent_start: 0,
                quote_keys: false,
                wrap_iife: true,
              },
              compress: {
                drop_console: true,
                drop_debugger: true,
                hoist_funs: true,
                hoist_props: true,
                hoist_vars: true,
                inline: true,
                loops: true,
                negate_iife: true,
                passes: 3,
                reduce_funcs: true,
                reduce_vars: true,
                switches: true,
                toplevel: true,
                typeofs: true,
                unsafe: true,
                unsafe_arrows: true,
                unsafe_comps: true,
                unsafe_Function: true,
                unsafe_math: true,
                unsafe_methods: true,
                unsafe_proto: true,
                unsafe_regexp: true,
                unsafe_undefined: true,
              },
              ie8: false
            }
          }),
          new CssMinimizerPlugin({
            parallel: true,
            minify: [
              CssMinimizerPlugin.cssnanoMinify,
              CssMinimizerPlugin.cleanCssMinify
            ],
          }),
        ],
      };
    // Set the output path to /tmp/next
    // config.output.path = '/tmp/.next';
    // if (!isServer) {
    //   config.module.rules.forEach(rule => {
    //     if (rule.loader === 'babel-loader') {
    //       rule.options.cacheDirectory = '/tmp/.next';
    //     }
    //   });
    // }
    
    // Disable code splitting
    // config.optimization.splitChunks.cacheGroups = {
    //   default: false,
    // };

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
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config
  //   // console.log(config, '@@')
  //   // Important: return the modified config
  //   return config;
  // },
  // serverRuntimeConfig: { // Will only be available on the server side
  //   // rootDir: path.join(__dirname, './'),
  //   PORT: isDev ? 3006 : (process.env.PORT || 5999)
  // },
  // publicRuntimeConfig: { // Will be available on both server and client
  //   // staticFolder: '/static',
  //   isDev, // Pass through env variables
  // },
  
  reactStrictMode: true,
  output:"export",
},

);
