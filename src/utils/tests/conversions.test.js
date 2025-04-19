// tests to check that the conversions from hexadecimal to decimal and back vice versa are correct
const {convertToDecimal, convertToHexadecimal, getZeroIfAllZero} = require('../calculator_functions/conversions')

test('hexadecimal value FF to decimal should return 255', () =>{
    expect(convertToDecimal('FF')).toBe(255);
});

test('hexadecimal value -FF to decimal should return -255', () =>{
    expect(convertToDecimal('-FF')).toBe(-255);
});

test('decimal value -175 to hexadecimal should return -AF', () =>{
    expect(convertToHexadecimal(-175)).toBe('-AF');
});

test('decimal value 175 to hexadecimal should return AF', () =>{
    expect(convertToHexadecimal(175)).toBe('AF');
});

test('returns 0 value converting 000 to a single 0', () =>{
    expect(getZeroIfAllZero('000')).toBe('0');
});

test('returns FA value when trying to see if it needs to be converted to a single 0', () =>{
    expect(getZeroIfAllZero('FA')).toBe('FA');
});

test('returns XyZ value when trying to see if it needs to be converted to a single 0', () =>{
    expect(getZeroIfAllZero('XYZ')).toBe('XYZ');
});

test('value "hello" converted to hexadecimal should return a conversion error', () =>{
    expect(convertToHexadecimal('hello')).toBe(null);
});

test('value "XYZ" converted to decimal should return a conversion error', () =>{
    expect(convertToDecimal('XYZ')).toBe(null);
});

