const { sum, substract, multiply, divide, power } = require('../calculator');

// const { sum } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(sum(4,2)).toBe(6);//
})

test('substracts a - b', () => {
   expect(substract(4,2)).toBe(2);//
})

test('multiplies a * b', () => {
    expect(multiply(4,2)).toBe(8);//
})

test('divides a / b', () => {
    expect(divide(4,2)).toBe(2);// Consider decimals
})

test('Raises to power a ^ b', () => {
    expect(power(4,2)).toBe(16);//
});