module.exports = {
  name: 'people-sets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/people-sets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
