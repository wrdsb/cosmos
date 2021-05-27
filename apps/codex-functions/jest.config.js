module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/codex-functions',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'codex-functions',
};
