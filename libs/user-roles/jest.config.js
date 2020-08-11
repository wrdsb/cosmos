module.exports = {
  name: 'user-roles',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/user-roles',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
