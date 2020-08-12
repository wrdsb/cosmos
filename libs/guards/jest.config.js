module.exports = {
  name: 'guards',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/guards',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
