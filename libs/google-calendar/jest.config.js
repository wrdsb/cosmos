module.exports = {
  name: 'google-calendar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/google-calendar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
