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

// modulo: remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

// power: base raised to exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// squareRoot: returns sqrt(n); error on negative input
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot take square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
