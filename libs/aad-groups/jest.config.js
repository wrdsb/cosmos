module.exports = {
  name: 'aad-groups',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/aad-groups',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
