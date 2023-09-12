module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    testMatch: ['**/tests/**/*.test.ts'],
    collectCoverage: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    }
};