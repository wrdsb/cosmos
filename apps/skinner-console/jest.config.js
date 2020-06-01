module.exports = {
  name: 'skinner-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/skinner-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
