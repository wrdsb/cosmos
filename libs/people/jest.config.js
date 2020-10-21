module.exports = {
  name: 'people',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/people',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
