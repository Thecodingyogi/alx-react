module.exports = {
  setupFilesAfterEnv: ['./config/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  }
};
