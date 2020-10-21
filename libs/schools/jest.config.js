module.exports = {
  name: 'schools',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/schools',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
