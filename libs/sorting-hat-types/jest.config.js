module.exports = {
  name: 'sorting-hat-types',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sorting-hat-types',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
