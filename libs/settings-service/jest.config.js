module.exports = {
  name: 'settings-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/settings-service',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
