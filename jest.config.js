module.exports = {
  testEnvironment: 'jsdom',  // React testing uses jsdom as the environment
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // Adds custom matchers like `toBeInTheDocument()`
};
