module.exports = {
  name: 'panels',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/panels',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
