module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/houston-functions',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'houston-functions',
};
