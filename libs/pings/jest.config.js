module.exports = {
  name: 'pings',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pings',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
