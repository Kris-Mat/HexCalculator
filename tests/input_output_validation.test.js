const validationFunctions = require('../calculator_functions/input_output_validation');

// input and output format validation 
test('return false for invalid number of values input', ()=>{
    expect(validationFunctions.isValidInputLength('3333')).toBeFalsy();
});

test('return true for valid number of values input', ()=>{
    expect(validationFunctions.isValidInputLength('ff')).toBeTruthy();
});

test('return true if the output value is 4 digits or less', () =>{
    expect(validationFunctions.isValidOutputLength('22')).toBeTruthy();
});

test('return true if the output value is equal to 4 digits long', () =>{
    expect(validationFunctions.isValidOutputLength('4444')).toBeTruthy();
});

test('return false if the output value is more than 4 digits long', () =>{
    expect(validationFunctions.isValidOutputLength('44445')).toBeTruthy();
});

test('returns false for values that are not negative', () =>{
    expect(validationFunctions.isValueNegative('4F')).toBeFalsy();
});

test('returns true for values that are negative', () =>{
    expect(validationFunctions.isValueNegative('-4F')).toBeTruthy();
});

test('returns true for only hexadecimal values input', () =>{
    expect(validationFunctions.isValidHexadecimalInput('4F23')).toBeTruthy();
});

test('returns true for only hexadecimal values input', () =>{
    expect(validationFunctions.isValidHexadecimalInput('4F23')).toBeTruthy();
});


test('returns true for only hexadecimal values input despite lower case letter', () =>{
    expect(validationFunctions.isValidHexadecimalInput('4f23')).toBeTruthy();
});

test('returns true for only hexadecimal values input despite negative number', () =>{
    expect(validationFunctions.isValidHexadecimalInput('-4f')).toBeTruthy();
});

test('returns false for non-hexadecimal values input', () =>{
    expect(validationFunctions.isValidHexadecimalInput('R5FA@')).toBeFalsy();
});

test('returns false for non-hexadecimal values input despite lower case letter', () =>{
    expect(validationFunctions.isValidHexadecimalInput('r5af@')).toBeFalsy();
});

// checking that the arithmetic operations have an output that is only hexadecimal
test('returns a positive hexadecimal value as an answer for the addition', () =>{
    expect(addition()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a positive hexadecimal value as an answer for the subtraction', () =>{
    expect(subtraction()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a positive hexadecimal value as an answer for the division', () =>{
    expect(division()).toMatch('^[1-9A-Fa-f]+$');
});

test('returns a positive hexadecimal value as an answer for the multiplication', () =>{
    expect(multiplication()).toMatch('^[1-9A-Fa-f]+$');
});



