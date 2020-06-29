module.exports = {
  name: 'codex-people',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/codex-people',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
