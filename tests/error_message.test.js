// IOErrors
const {checkForInputErrors, checkForOutputErrors} = require('../calculator_functions/input_output_validation');

test('(212 , b1) should return an error message for input too long', () =>{
    expect(checkForInputErrors('addition', '212', 'b1')).toEqual([{IOError: "The first number should only be 2 digits long"}]);
});

test('(2@, !1) should return an error message for invalid hexadecimal values input for both numbers', () =>{
    expect(checkForInputErrors('multiplication','2@', '!1')).toEqual([{IOError: "The first number needs to be a valid hexadecimal number only containing 0-9 and A-F"}, {IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F"}]);
});

test('(2@, F1) should return an error message for invalid hexadecimal values input for first number', () =>{
    expect(checkForInputErrors('subtraction', '2@', 'F1')).toEqual([{IOError: "The first number needs to be a valid hexadecimal number only containing 0-9 and A-F"}]);
});

test('(2F, !1) should return an error message for invalid hexadecimal values input for second number', () =>{
    expect(checkForInputErrors('addition', '2F', '!1')).toEqual([{IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F"}]);
});

test('(2F, 0) should return an error message for division by zero', () =>{
    expect(checkForInputErrors('division', '2F', '0')).toEqual([{MathError: "The second number needs to be a number greater than 0"}]);
});

test('(2F, F1) should return an empty errors array', () =>{
    expect(checkForInputErrors('addition','2F', 'F1')).toEqual([]);
});

test('(F1A4) should return an error message for the output being too long', () =>{
    expect(checkForOutputErrors('F1A4C')).toEqual([{IOError: "The length of the output was too long, please try input smaller values."}]);
});

test('(F1) should return an empty errors array', () =>{
    expect(checkForOutputErrors('F1')).toEqual([]);
});

test('(-F1) should return an error message saying the output was a negative value', () =>{
    expect(checkForOutputErrors('-F1')).toEqual([{MathError: "The answer was a negative number, which is not allowed. Please try input different numbers"}]);
});

test('(1.0) should return an error message saying the output was a fraction value', () =>{
    expect(checkForOutputErrors('0.1')).toEqual([{MathError: "The answer was a decimal fraction number, which is not allowed. Please try input different numbers"}]);
});
