module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/flynn',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'flynn',
};
