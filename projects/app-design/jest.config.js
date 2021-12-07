module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  // moduleNameMapper: {
  //   '^@app/(.*)$': '<rootDir>/../app/src/app/$1',
  //   '^@env$': '<rootDir>/src/environments/environment',
  //   '^environments/(.*)$': '<rootDir>/src/environments/$1'
  // },
  // setupFilesAfterEnv: ['<rootDir>/../../setup-jest.ts']
};
