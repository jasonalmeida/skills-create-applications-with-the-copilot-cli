const calc = require('../lib/calculator');

describe('Calculator basic operations', () => {
  test('add: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtract: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiply: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('divide: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });
});

describe('Calculator edge cases', () => {
  test('division by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow('Division by zero');
  });

  test('supports negative numbers and floats', () => {
    expect(calc.add(-1, 1)).toBe(0);
    expect(calc.multiply(2.5, 2)).toBeCloseTo(5);
  });

  test('large numbers', () => {
    expect(calc.add(1e12, 1)).toBe(1000000000001);
  });
});
