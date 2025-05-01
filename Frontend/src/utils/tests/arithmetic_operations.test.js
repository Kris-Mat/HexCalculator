import { add, subtract, multiply, divide } from '../calculator_functions/arithmetic_operations';

test('adding 10 and 3F should return 4F', () => {
    expect(add('10', '3F')).toBe('4F');
});

test('adding 21 and AF should return D0', () => {
    expect(add('21', 'AF')).toBe('D0');
});

test('adding FF and FF should return 1FE', () => {
    expect(add('FF', 'FF')).toBe('1FE');
});

test('adding -FF and 21 should throw an error because negative number', () => {
    try {
        add('-FF', '21');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('adding -FF and FF should return 0', () => {
    expect(add('-FF', 'FF')).toBe('0');
});

test('adding -FF and -FF should throw an error because negative number', () => {
    try {
        add('-FF', '-FF');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
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

test('adding (FF + 3.1) should throw an error because invalid hexadecimal input', () => {
    try {
        add('FF', '3.1');
    } catch (error) {
        expect(error).toEqual([
            { IOError: "The second number should only be 2 digits long" },
            { IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F" },
        ]);
    }
});

// subtraction
test('subtracting (3F - 3A) should return 5', () => {
    expect(subtract('3F', '3A')).toBe('5');
});

test('subtracting (AF - 21) should return 8E', () => {
    expect(subtract('AF', '21')).toBe('8E');
});

test('subtracting (21 - AF) should throw an error because negative number', () => {
    try {
        subtract('21', 'AF');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('subtracting (FF - FF) should return 0', () => {
    expect(subtract('FF', 'FF')).toBe('0');
});

test('subtracting (FF - 0) should return FF', () => {
    expect(subtract('FF', '0')).toBe('FF');
});

test('subtracting (0 - FF) should throw an error because the result is negative', () => {
    try {
        subtract('0', 'FF');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('subtracting (FF - 3.1) should throw an error because invalid hexadecimal input', () => {
    try {
        subtract('FF', '3.1');
    } catch (error) {
        expect(error).toEqual([
            { IOError: "The second number should only be 2 digits long" },
            { IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F" },
        ]);
    }
});

test('subtracting (-FF - -1) should throw an error because negative number', () => {
    try {
        subtract('-FF', '-1');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('subtracting (0 - -1) should throw an error because negative number', () => {
    try {
        subtract('0', '-1');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
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

test('multiplying (FF * -FF) should throw an error because negative number output', () => {
    try {
        multiply('FF', '-FF');
    } catch (error) {
        expect(error).toEqual([
            { IOError: "The length of the output was too long, please try input smaller values." },
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('multiplying (-FF * -FF) should return FE01 which is the output limit for our calculator', () => {
    expect(multiply('-FF', '-FF')).toBe('FE01');
});

test('multiplying (F1 * -3A) should throw an error because it will be a negative number', () => {
    try {
        multiply('F1', '-3A');
    } catch (error) {
        expect(error).toEqual([
            { IOError: "The length of the output was too long, please try input smaller values." },
            { MathError: "The answer was a negative number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('multiplying (FF * 3.1) should throw an error because invalid hexadecimal input', () => {
    try {
        multiply('FF', '3.1');
    } catch (error) {
        expect(error).toEqual([
            { IOError: "The second number should only be 2 digits long" },
            { IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F" },
        ]);
    }
});