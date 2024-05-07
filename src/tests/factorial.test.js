
const { factorial } = require('../users');

test('factorial calculates the factorial of a number', () => {
    expect(factorial(5)).toBe(120); // El factorial de 5 debería ser 120
});

test('factorial returns 1 when the input is 0', () => {
    expect(factorial(0)).toBe(1); // El factorial de 0 es 1
});

test('factorial returns undefined for negative numbers or non-integer inputs', () => {
    expect(factorial(-1)).toBe(undefined); // El factorial de un número negativo debería ser undefined
    expect(factorial(2.5)).toBe(undefined); // El factorial de un número no entero debería ser undefined
});