#!/usr/bin/env node
"use strict";

/**
 * CLI wrapper that uses src/lib/calculator.js for arithmetic.
 * Keeps the original CLI behaviour (parsing, validation, exit codes).
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('./lib/calculator');
const [,, cmdRaw, aRaw, bRaw] = process.argv;
const cmd = cmdRaw ? cmdRaw.toLowerCase() : null;

function usage() {
  console.error('Usage: node src/calculator.js <command> <num1> [num2]\nCommands:\n  add, subtract, multiply, divide, mod/modulo, pow/power  (require two operands)\n  sqrt (requires a single operand)');
}

function parseNumber(x) {
  const n = Number(x);
  return Number.isFinite(n) ? n : null;
}

if (!cmd) {
  usage();
  process.exit(1);
}

// Determine required operands based on command
const singleArgCommands = new Set(['sqrt']);
const twoArgCommands = new Set(['add','subtract','multiply','divide','mod','modulo','pow','power']);

if (singleArgCommands.has(cmd)) {
  if (aRaw === undefined) {
    console.error('Error: one numeric operand is required for sqrt.');
    usage();
    process.exit(1);
  }
  const a = parseNumber(aRaw);
  if (a === null) {
    console.error('Error: operand must be a valid number.');
    process.exit(1);
  }

  try {
    let result;
    if (cmd === 'sqrt') {
      result = squareRoot(a);
    } else {
      console.error(`Error: unknown command '${cmd}'.`);
      usage();
      process.exit(1);
    }
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

if (twoArgCommands.has(cmd)) {
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

  try {
    let result;
    switch (cmd) {
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
      case 'mod':
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'pow':
      case 'power':
        result = power(a, b);
        break;
      default:
        console.error(`Error: unknown command '${cmd}'.`);
        usage();
        process.exit(1);
    }
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

console.error(`Error: unknown command '${cmd}'.`);
usage();
process.exit(1);
