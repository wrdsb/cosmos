module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/houston-functions',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'houston-functions',
};
