module.exports = {
  name: 'codex',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/codex',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
