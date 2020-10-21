module.exports = {
  name: 'aad',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/aad',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
