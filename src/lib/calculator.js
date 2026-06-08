"use strict";

/**
 * Calculator library exporting basic arithmetic functions.
 * Functions accept numeric arguments and return a numeric result.
 * Division throws an Error on division-by-zero.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
