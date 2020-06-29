module.exports = {
  name: 'sorting-hat-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sorting-hat-service',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
