module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
<<<<<<< HEAD
    testMatch: ['**/test/**/*.test.ts'],
=======
    testMatch: ['**/tests/**/*.test.ts'],
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
    collectCoverage: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    }
};