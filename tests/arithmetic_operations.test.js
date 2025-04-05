const {add, subtract, multiply, divide} = require('../calculator_functions/arithmetic_operations')

test('adding 10 and 3F should return 4F', () => {
    expect(add('10', '3F')).toBe('4F');
});

test('adding 21 and AF should return D0', () => {
    expect(add('21', 'AF')).toBe('D0');
});

test('adding FF and FF should return 1FE', () => {
    expect(add('FF', 'FF')).toBe('1FE');
});

test('adding -FF and 21 should return null because negative number', () => {
    expect(add('-FF', '21')).toBe(null);
});

test('adding -FF and FF should return 0', () => {
    expect(add('-FF', 'FF')).toBe('0');
});

test('adding -FF and -FF should return null because negative number', () => {
    expect(add('-FF', '-FF')).toBe(null);
});

test('adding -AF and DF should return 30', () => {
    expect(add('-AF', 'DF')).toBe('30');
});

test('adding FF and 0 should return FF', () => {
    expect(add('FF', '0')).toBe('FF');
});

test('adding 0 and FF should return FF', () => {
    expect(add('0', 'FF')).toBe('FF');
});

test('adding (FF + 3.1) should return null because invalid hexadecimal input', () => {
    expect(add('FF', '3.1')).toBe(null);
});


// subtraction
test('subtracting (3F - 3A) should return 5', () => {
    expect(subtract('3F', '3A')).toBe('5');
});

test('subtracting (AF - 21) should return 8E', () => {
    expect(subtract('AF', '21')).toBe('8E');
});

test('subtracting (21 - AF) should return null because negative number', () => {
    expect(subtract('21', 'AF')).toBe(null);
});

test('subtracting (FF - FF) should return 0', () => {
    expect(subtract('FF', 'FF')).toBe('0');
});

test('subtracting (FF - 0) should return FF', () => {
    expect(subtract('FF', '0')).toBe('FF');
});

test('subtracting (0 - FF) should return null because the result is negative which is an error', () => {
    expect(subtract('0', 'FF')).toBe(null);
});

test('subtracting (FF - 3.1) should return null because invalid hexadecimal input', () => {
    expect(subtract('FF', '3.1')).toBe(null);
});

test('subtracting (-FF - -1) should return null because negative number', () => {
    expect(subtract('-FF', '-1')).toBe(null);
});

test('subtracting (0 - -1) should return null because negative number', () => {
    expect(subtract('0', '-1')).toBe(null);
});


// multiplication
test('multiplying (3F * 3A) should return E46', () => {
    expect(multiply('3F', '3A')).toBe('E46');
});

test('multiplying (AF * 21) should return 168F', () => {
    expect(multiply('AF', '21')).toBe('168F');
});

test('multiplying (FF * FF) should return FE01 which is the output limit for our calculator', () => {
    expect(multiply('FF', 'FF')).toBe('FE01');
});

test('multiplying (0 * FF) should return 0', () => {
    expect(multiply('0', 'FF')).toBe('0');
});

test('multiplying (FF * 0) should return 0', () => {
    expect(multiply('FF', '0')).toBe('0');
});

test('multiplying (FF * -FF) should return null because negative number output', () => {
    expect(multiply('FF', '-FF')).toBe(null);
});

test('multiplying (-FF * -FF) should return FE01 which is the output limit for our calculator', () => {
    expect(multiply('-FF', '-FF')).toBe('FE01');
});

test('multiplying (F1 * -3A) should return null because it will be a negative number', () => {
    expect(multiply('F1', '-3A')).toBe(null);
});

test('multiplying (FF * 3.1) should return null because invalid hexadecimal input', () => {
    expect(multiply('FF', '3.1')).toBe(null);
});


// division
test('dividing (3F / 3A) should return 1', () => {
    expect(divide('3F', '3A')).toBe('1');
});

test('dividing (AF / 21) should return 5', () => {
    expect(divide('AF', '21')).toBe('5');
});

test('dividing (FF / FF) should return 1', () => {
    expect(divide('FF', 'FF')).toBe('1');
});

test('dividing (-FF / -FF) should return 1', () => {
    expect(divide('-FF', '-FF')).toBe('1');
});

test('dividing by zero (F2 / 0) should not be possible and should return null', () => {
    expect(divide('F2', '0')).toBe(null);
});

test('dividing zero by any number (0/F2)', () => {
    expect(divide('0', 'F2')).toBe('0');
});

test('dividing (AF / -3A) should return null because the answer will be negative', () => {
    expect(divide('AF', '-3A')).toBe(null);
});

test('dividing (3A / AF) should return null because the answer will have a decimal value ', () => {
    expect(divide('3A', 'AF')).toBe(null);
});

test('dividing (AF / -3A) should return null because the answer will be negative', () => {
    expect(divide('AF', '-3A')).toBe(null);
});

test('dividing (AF / 3.1) should return null because invalid hexadecimal input', () => {
    expect(divide('AF', '3.1')).toBe(null);
});
