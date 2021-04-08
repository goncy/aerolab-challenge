module.exports = {
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
