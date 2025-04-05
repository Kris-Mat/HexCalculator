const {add, subtract, divide, multiply } = require('../calculator_functions/arithmetic_operations');
const {isValidInputLength, isValidOutputLength, isValidHexadecimalValue, isValueNegative} = require('../calculator_functions/input_output_validation');

// input and output format validation 
test('return false for invalid number of values input', ()=>{
    expect(isValidInputLength('3333')).toBeFalsy();
});

test('return true for valid number of values input', ()=>{
    expect(isValidInputLength('ff')).toBeTruthy();
});

test('return true if the output value is 4 digits or less', () =>{
    expect(isValidOutputLength('22')).toBeTruthy();
});

test('return true if the output value is equal to 4 digits long', () =>{
    expect(isValidOutputLength('4444')).toBeTruthy();
});

test('return false if the output value is more than 4 digits long', () =>{
    expect(isValidOutputLength('44445')).toBeFalsy();
});

test('returns false for values that are not negative', () =>{
    expect(isValueNegative('4F')).toBeFalsy();
});

test('returns true for values that are negative', () =>{
    expect(isValueNegative('-4F')).toBeTruthy();
});

test('returns true for only hexadecimal values input', () =>{
    expect(isValidHexadecimalValue('4F23')).toBeTruthy();
});

test('returns true for only hexadecimal values input', () =>{
    expect(isValidHexadecimalValue('4F')).toBeTruthy();
});


test('returns true for only hexadecimal values input despite lower case letter', () =>{
    expect(isValidHexadecimalValue('4f23')).toBeTruthy();
});

test('returns true for only hexadecimal values input despite negative number', () =>{
    expect(isValidHexadecimalValue('-4f')).toBeTruthy();
});

test('returns false for non-hexadecimal values input', () =>{
    expect(isValidHexadecimalValue('R5FA@')).toBeFalsy();
});

test('returns false for non-hexadecimal values input despite lower case letter', () =>{
    expect(isValidHexadecimalValue('r5af@')).toBeFalsy();
});

// checking that the arithmetic operations have an output that is only hexadecimal
test('returns a positive hexadecimal value as an answer for the addition', () =>{
    expect(add('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns a positive hexadecimal value as an answer for the subtraction', () =>{
    expect(subtract('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns a positive hexadecimal value as an answer for the division', () =>{
    expect(divide('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});

test('returns a positive hexadecimal value as an answer for the multiplication', () =>{
    expect(multiply('21', '2')).toMatch(/^[0-9A-Fa-f]+$/);
});



