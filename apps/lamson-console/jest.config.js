module.exports = {
  name: 'lamson-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lamson-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
