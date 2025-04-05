// IOErrors

test('(212 , b1) should return an error message for input too long', () =>{
    expect(checkForInputErrors('212', 'b1')).toEqual({IOError: "The first number should only be 2 digits long"})
});

test('(2@, !1) should return an error message for invalid hexadecimal values input for both numbers', () =>{
    expect(checkForInputErrors('2@', '!1')).toEqual({IOError: "The first number needs to be a valid hexadecimal number only containing 0-9 and A-F", IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F"});
});

test('(2@, !1) should return an error message for invalid hexadecimal values input for first number', () =>{
    expect(checkForInputErrors('2@', 'F1')).toEqual({IOError: "The first number needs to be a valid hexadecimal number only containing 0-9 and A-F"});
});

test('(2F, !1) should return an error message for invalid hexadecimal values input for second number', () =>{
    expect(checkForInputErrors('2@', 'F1')).toEqual({IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F"});
});

test('(2F, 0) should return an error message for division by zero', () =>{
    expect(checkForInputErrors('2@', '0')).toEqual({IOError: "The second number needs to be a number greater than 0"});
});

test('(2F, 0000) should return an error message for division by zero', () =>{
    expect(checkForInputErrors('2@', '0000')).toEqual({IOError: "The second number needs to be a number greater than 0"});
});

test('(2F, F1) should return an empty errors object', () =>{
    expect(checkForInputErrors('2F', 'F1')).toEqual({});
});

test('(F1A4) should return an error message for the output being too long', () =>{
    expect(checkForOutputErrors('F1A4')).toEqual({IOError: "The length of the output was too long, please try input smaller values."});
});

test('(F1) should return an empty errors object', () =>{
    expect(checkForOutputErrors('F1')).toEqual({});
});

test('(-F1) should return an error message saying the output was a negative value', () =>{
    expect(checkForOutputErrors('F1')).toEqual({NegError: "The answer was a negative number, which is not allowed. Please try input different numbers"});
});

test('(-1.0) should return an error message saying the output was a decimal value', () =>{
    expect(checkForOutputErrors('-0.1')).toEqual({DecError: "The answer was a decimal number, which is not allowed. Please try input different numbers"});
});
