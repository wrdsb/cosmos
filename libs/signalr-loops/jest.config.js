module.exports = {
  name: 'signalr-loops',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/signalr-loops',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
