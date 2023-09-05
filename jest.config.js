module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    collectCoverage: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    }
};