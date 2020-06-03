module.exports = {
  name: 'hedwig-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hedwig-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
