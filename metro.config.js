const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Your existing Metro configuration
const baseConfig = getDefaultConfig(__dirname);

// Optional: Add custom configurations if needed
const customConfig = {
  resolver: {
    // Additional resolver settings can go here
  },
};

// Merge the base and custom configurations
const config = mergeConfig(baseConfig, customConfig);

// Wrap with Reanimated's Metro Config wrapper
module.exports = wrapWithReanimatedMetroConfig(config);
