module.exports = {
  name: 'google-groups',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/google-groups',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
