module.exports = {
  name: 'gsuite',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/gsuite',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
