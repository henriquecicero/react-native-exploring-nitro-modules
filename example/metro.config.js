const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Path to the local library
const libraryRoot = path.resolve(__dirname, '..');
const exampleNodeModules = path.resolve(__dirname, 'node_modules');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [libraryRoot],
  resolver: {
    // Ensure Metro can resolve the library's node_modules
    nodeModulesPaths: [exampleNodeModules],
    // Don't resolve symlinks to their real paths
    unstable_enableSymlinks: true,
    // Block the library's node_modules from being used for these core modules
    blockList: [
      new RegExp(`${libraryRoot}/node_modules/react-native/.*`),
      new RegExp(`${libraryRoot}/node_modules/react/.*`),
    ],
    // Force these modules to resolve from the example's node_modules
    extraNodeModules: {
      react: path.resolve(exampleNodeModules, 'react'),
      'react-native': path.resolve(exampleNodeModules, 'react-native'),
      'react-native-nitro-modules': path.resolve(
        exampleNodeModules,
        'react-native-nitro-modules',
      ),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
