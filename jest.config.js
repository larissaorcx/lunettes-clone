module.exports = {
  testIgnorePathPatterns: ['/node_modules', '/next/'],
  setupFilesAfterEnv: [
    //arquivo para se executado antes dos testes
    '<rootDir>src/tests/setupTests.ts',
  ],
  testEnvironment: 'jsdom', // ambiente de execução
};
