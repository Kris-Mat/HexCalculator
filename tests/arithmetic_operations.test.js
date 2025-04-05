// addition

test('adding 10 and 3F should return 4F', () =>{

});

test('adding 21 and AF should return D0', () =>{

});

test('adding FF and FF should return 1FE', () =>{

});

test('adding 212 and b1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('adding 2@ and !1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});


// subtraction 
test('subtracting (3F - 3A) should return 5', () =>{

});

test('subtracting (AF - 21) should return 8E', () =>{

});

test('subtracting (FF - FF) should return 0', () =>{

});

test('subtracting (212 - b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('subtracting 2@ and !1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]",  IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

// multiplication 
test('multiplying (3F * 3A) should return 5', () =>{

});

test('multiplying (AF * 21) should return 8E', () =>{

});

test('multiplying (FF * FF) should return 0', () =>{

});

test('multiplying (212 * b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('multiplying 2@ and !1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

// division 
test('dividing (3F / 3A) should return 5', () =>{

});

test('dividing (AF / 21) should return 8E', () =>{

});

test('dividing (FF / FF) should return 0', () =>{

});

test('dividing (212 / b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('dividing (2@ / !1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

