module.exports = {
  name: 'user-profiles',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/user-profiles',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
