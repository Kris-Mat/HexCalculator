// IOErrors

test('dividing (212 / b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('dividing (2@ / !1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

test('multiplying (212 * b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('multiplying (2@ * !1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

test('subtracting (212 - b1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('subtracting (2@ - !1) should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]",  IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});

test('adding 212 and b1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 212: Please input only 2 digit numbers"})
});

test('adding 2@ and !1 should return an error message for input too long', () =>{
    expect().toEqual({IOError: "Error with value 2@: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]", IOError: "Error with value !1: Please input only valid hexadecimal digits [0 1 2 3 4 5 6 7 8 9 A B C D E F]"})
});