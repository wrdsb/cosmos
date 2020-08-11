module.exports = {
  name: 'http-interceptors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/http-interceptors',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
