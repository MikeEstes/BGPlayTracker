/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const log = (...args) => {
  if (__DEV__) {
    console.log(...args);
  }
};

export default log;
