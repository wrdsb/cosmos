module.exports = {
  name: 'trillium',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/trillium',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
