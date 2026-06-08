#!/usr/bin/env node
"use strict";

/**
 * CLI wrapper that uses src/lib/calculator.js for arithmetic.
 * Keeps the original CLI behaviour (parsing, validation, exit codes).
 */

const { add, subtract, multiply, divide } = require('./lib/calculator');
const [,, cmd, aRaw, bRaw] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
}

function parseNumber(x) {
  const n = Number(x);
  return Number.isFinite(n) ? n : null;
}

if (!cmd) {
  usage();
  process.exit(1);
}

if (aRaw === undefined || bRaw === undefined) {
  console.error('Error: two numeric operands are required.');
  usage();
  process.exit(1);
}

const a = parseNumber(aRaw);
const b = parseNumber(bRaw);

if (a === null || b === null) {
  console.error('Error: operands must be valid numbers.');
  process.exit(1);
}

let result;

try {
  switch (cmd.toLowerCase()) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      console.error(`Error: unknown command '${cmd}'.`);
      usage();
      process.exit(1);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}

console.log(result);
process.exit(0);
