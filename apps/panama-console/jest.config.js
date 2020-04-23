module.exports = {
  name: 'panama-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/panama-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
