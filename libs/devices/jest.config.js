module.exports = {
  name: 'devices',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/devices',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
