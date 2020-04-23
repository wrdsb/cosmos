module.exports = {
  name: 'viewfinder-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/viewfinder-console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
