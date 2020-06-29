module.exports = {
  name: 'codex-console-private',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/codex-console-private',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
