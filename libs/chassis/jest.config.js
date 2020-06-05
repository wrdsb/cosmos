module.exports = {
  name: 'chassis',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/chassis',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
