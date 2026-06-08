#!/usr/bin/env node
"use strict";

/**
 * Node.js CLI Calculator
 * Supported operations:
 *  - add      (addition)
 *  - subtract (subtraction)
 *  - multiply (multiplication)
 *  - divide   (division)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3       -> 5
 *   node src/calculator.js subtract 5 2  -> 3
 *   node src/calculator.js multiply 4 6  -> 24
 *   node src/calculator.js divide 10 2   -> 5
 */

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

switch (cmd.toLowerCase()) {
  case 'add':
    // addition
    result = a + b;
    break;
  case 'subtract':
    // subtraction
    result = a - b;
    break;
  case 'multiply':
    // multiplication
    result = a * b;
    break;
  case 'divide':
    // division
    if (b === 0) {
      console.error('Error: division by zero is not allowed.');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error(`Error: unknown command '${cmd}'.`);
    usage();
    process.exit(1);
}

console.log(result);
process.exit(0);
