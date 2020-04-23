module.exports = {
  name: 'hagar-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hagar-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
