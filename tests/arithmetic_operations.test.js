// addition

test('adding 10 and 3F should return 4F', () =>{

});

test('adding 21 and AF should return D0', () =>{

});

test('adding FF and FF should return 1FE', () =>{

});

test('adding -FF and 21 should return null because negative number', () =>{

});

test('adding -FF and FF should return 0', () =>{

});

test('adding -FF and -FF should return null because negative number', () =>{

});

test('adding -AF and DF should return 30', () =>{

});

test('adding FF and 0 should return FF', () =>{

});

test('adding 0 and FF should return FF', () =>{

});

test('adding (FF + 3.1) should return null because invalid hexadecimal input', () =>{

});




// subtraction 
test('subtracting (3F - 3A) should return 5', () =>{

});

test('subtracting (AF - 21) should return 8E', () =>{

});

test('subtracting (21 - AF) should return null because negative number', () =>{

});

test('subtracting (FF - FF) should return 0', () =>{

});

test('subtracting (FF - 0) should return 0', () =>{

});

test('subtracting (0 - FF) should return null because the result is negative which is an error', () =>{
    // should return a negative number which should create an error
    expect(subtract('0', 'FF')).toBe(null);
});

test('subtracting (FF - 3.1) should return null because invalid hexadecimal input', () =>{

});

test('subtracting (-FF - -1) should return null because negative number', () =>{

});

test('subtracting (0 - -1) should return null because negative number', () =>{

});



// multiplication 
test('multiplying (3F * 3A) should return E46', () =>{

});

test('multiplying (AF * 21) should return 8E', () =>{

});

test('multiplying (FF * FF) should return FE01 which is the output limit for our calculator', () =>{

});

test('multiplying (0 * FF) should return 0', () =>{

});

test('multiplying (FF * 0) should return 0', () =>{

});

test('multiplying (FF * -FF) should return null because negative number output', () =>{

});

test('multiplying (-FF * -FF) should return FE01 which is the output limit for our calculator', () =>{

});

test('multiplying (F1 * -3A) should return null because it will be a negative number', () =>{
    expect(multiply('F1', '-3A')).toBe(null);
});

test('multiplying (FF * 3.1) should return null because invalid hexadecimal input', () =>{

});



// division 
test('dividing (3F / 3A) should return 5', () =>{

});

test('dividing (AF / 21) should return 8E', () =>{

});

test('dividing (FF / FF) should return 0', () =>{

});

test('dividing (-FF / -FF) should return 1', () =>{

});

test('dividing by zero (F2 / 0) should not be possible and should return null', () =>{
    // should not be possible and should return an error
    expect(divide('F2', '0')).toBe(null);
});

test('dividing zero by any number (0/F2)', () =>{
    expect(divide('0', 'F2')).toBe('0');
});

test('dividing (AF / -3A) should return null because the answer will be negative', () =>{
    expect(divide('AF', '-3A')).toBe(null);
});

test('dividing (3A / AF) should return null because the answer will have a decimal value ', () =>{
    expect(divide('3A', 'AF')).toBe(null);
});

test('dividing (AF / -3A) should return null because the answer will be negative', () => {
    expect(divide('AF', '-3A')).toBe(null);
});

test('dividing (AF / 3.1) should return null because invalid hexadecimal input', () => {
    expect(divide('AF', '3.1')).toBe(null);
});






