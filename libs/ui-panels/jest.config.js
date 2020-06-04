module.exports = {
  name: 'ui-panels',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-panels',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
