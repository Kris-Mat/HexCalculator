// tests to check that the conversions from hexadecimal to decimal and back vice versa are correct

test('hexadecimal value FF to decimal should return 255', () =>{
    expect(convertToDecimal('FF')).toBe('255');
});

test('hexadecimal value -FF to decimal should return -255', () =>{
    expect(convertToDecimal('-FF')).toBe('-255');
});

test('decimal value -175 to hexadecimal should return -AF', () =>{
    expect(convertToHexadecimal('-175')).toBe('-AF');
});

test('decimal value 175 to hexadecimal should return AF', () =>{
    expect(convertToHexadecimal('175')).toBe('AF');
});

