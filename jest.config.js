module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',  // Ensures JSX files are transformed with Babel
    },
    testEnvironment: 'jest-environment-jsdom',  // Set to use jest-environment-jsdom
    moduleFileExtensions: ['js', 'jsx'],  // Handles both JS and JSX extensions
    transformIgnorePatterns: ['<rootDir>/node_modules/'],  // Avoids transforming node_modules
  };
  