module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", __dirname, "rtl"],
  testEnvironment: "jsdom",
};
