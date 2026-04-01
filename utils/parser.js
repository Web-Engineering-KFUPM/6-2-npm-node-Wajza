import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  // Keep valid numbers (including 0), drop NaN only
  return _.filter(numbers, (num) => !Number.isNaN(num));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}