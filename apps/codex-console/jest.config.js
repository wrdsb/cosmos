module.exports = {
  name: 'codex-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/codex-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
