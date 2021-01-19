module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/flynn',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'flynn',
};
