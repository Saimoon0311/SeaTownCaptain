// module.exports = {
//   project: {
//     ios: {},
//     android: {},
//   },
//   assets: ['./assets/fonts/'],
// };

let supportsCodegenConfig = false;
try {
  const rnCliAndroidVersion =
    require('@react-native-community/cli-platform-android/package.json').version;
  const [major] = rnCliAndroidVersion.split('.');
  supportsCodegenConfig = major >= 9;
} catch (e) {
  // ignore
}

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
  dependency: {
    platforms: {
      android: supportsCodegenConfig
        ? {
            componentDescriptors: [
              'RNSFullWindowOverlayComponentDescriptor',
              'RNSScreenContainerComponentDescriptor',
              //  module.exports = {
              'RNSScreenComponentDescriptor',
            ],
            cmakeListsPath: '../android/src/main/jni/CMakeLists.txt',
          }
        : {},
    },
  },
};
