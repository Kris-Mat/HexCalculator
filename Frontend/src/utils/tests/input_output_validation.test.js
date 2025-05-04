import {add, subtract, divide, multiply } from '../calculator_functions/arithmetic_operations';
import {isValidInputLength, isValidOutputLength, isValidHexadecimalValue, isValueNegative} from '../calculator_functions/input_output_validation'

// input and output format validation 
test('return false for invalid number of values input (3333)', ()=>{
    expect(isValidInputLength('3333')).toBeFalsy();
});

test('return true for valid number of values input (ff)', ()=>{
    expect(isValidInputLength('ff')).toBeTruthy();
});

test('return true if the output value is 4 digits or less (22)', () =>{
    expect(isValidOutputLength('22')).toBeTruthy();
});

test('return true if the output value is equal to 4 digits long (444)', () =>{
    expect(isValidOutputLength('4444')).toBeTruthy();
});

test('return false if the output value is more than 4 digits long (44445)', () =>{
    expect(isValidOutputLength('44445')).toBeFalsy();
});

test('returns false for values that are not negative (4F)', () =>{
    expect(isValueNegative('4F')).toBeFalsy();
});

test('returns true for values that are negative (-47)', () =>{
    expect(isValueNegative('-4F')).toBeTruthy();
});

test('returns true for only hexadecimal values input (4F23)', () =>{
    expect(isValidHexadecimalValue('4F23')).toBeTruthy();
});

test('returns true for only hexadecimal values input (4F)', () =>{
    expect(isValidHexadecimalValue('4F')).toBeTruthy();
});


test('returns true for only hexadecimal values input despite lower case letter (4f23)', () =>{
    expect(isValidHexadecimalValue('4f23')).toBeTruthy();
});

test('returns true for only hexadecimal values input despite negative number (-4f)', () =>{
    expect(isValidHexadecimalValue('-4f')).toBeTruthy();
});

test('returns false for non-hexadecimal values input (R5FA@)', () =>{
    expect(isValidHexadecimalValue('R5FA@')).toBeFalsy();
});

test('returns false for non-hexadecimal values input despite lower case letter (r5af@)', () =>{
    expect(isValidHexadecimalValue('r5af@')).toBeFalsy();
});

// checking that the arithmetic operations have an output that is only hexadecimal
test('returns a positive hexadecimal value as an answer for the addition (21, 2)', () =>{
    expect(add('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns a positive hexadecimal value as an answer for the subtraction (21, 2)', () =>{
    expect(subtract('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns an error because the answer has a fraction/remainder (21, 2)', () => {
    try {
        divide('21', '2');
    } catch (error) {
        expect(error).toEqual([
            { MathError: "The answer was a decimal fraction number, which is not allowed. Please try input different numbers" },
        ]);
    }
});

test('returns a positive hexadecimal value as an answer for the division (21, 21)', () =>{
    expect(divide('21', '21')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns a positive hexadecimal value as an answer for the multiplication (21, 2)', () =>{
    expect(multiply('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});