module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  setupFilesAfterEnv: ['<rootDir>jest/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    jest: {
      extends: './babel.config.js'
    }
  },
  moduleFileExtensions: ['js', 'jsx'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(js|jsx)', '**/*.spec.+(js|jsx)']
};
