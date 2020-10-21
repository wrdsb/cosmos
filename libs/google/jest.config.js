module.exports = {
  name: 'google',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/google',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
