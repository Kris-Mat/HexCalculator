const validInputLength = require('../calculator_functions/input_output_validation')

// input and output format validation 
test('return false for invalid number of values input', ()=>{
    expect(validInputLength('3333')).toBeFalsy();
});

test('return true for valid number of values input', ()=>{
    expect(validInputLength('ff')).toBeTruthy();
});

test('return true if the output value is 4 digits or less', () =>{
    expect(isValidOutputLength('22')).toBeTruthy();
});

test('return false if the output value is more than 4 digits long', () =>{
    expect(isValidOutputLenght('4444')).toBeFalsy();
});

test('returns true for only hexadecimal values input', () =>{
    expect(isValidHexadecimalInput('4F23')).toBeTruthy();
});


test('returns true for only hexadecimal values input despite lower case letter', () =>{
    expect(isValidHexadecimalInput('4f23')).toBeTruthy();
});

test('returns false for non-hexadeciaml values input', () =>{
    expect(isValidHexadecimalInput('R5FA@')).toBeFalsy();
});

test('returns false for non-hexadeciaml values input despite lower case letter', () =>{
    expect(isValidHexadecimalInput('r5af@')).toBeFalsy();
});

// checking that the arithmetic operatoins have an output that is only hexadecimal
test('returns a hexadeciamal value as an answer for the addition', () =>{
    expect(addition()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a hexadeciamal value as an answer for the subtraction', () =>{
    expect(subtraction()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a hexadeciamal value as an answer for the division', () =>{
    expect(division()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a hexadeciamal value as an answer for the multiplication', () =>{
    expect(multiplication()).toMatch('^[1-9A-Fa-f]+$');
});
