module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/codex-functions',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'codex-functions',
};
