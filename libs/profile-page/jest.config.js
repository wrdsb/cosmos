module.exports = {
  name: 'profile-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/profile-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
