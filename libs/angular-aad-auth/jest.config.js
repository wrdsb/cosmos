module.exports = {
  name: 'angular-aad-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-aad-auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
