module.exports = {
  name: 'releases',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/releases',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
