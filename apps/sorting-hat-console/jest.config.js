module.exports = {
  name: 'sorting-hat-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sorting-hat-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
