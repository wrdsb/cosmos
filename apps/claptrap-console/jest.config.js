module.exports = {
  name: 'claptrap-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/claptrap-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
