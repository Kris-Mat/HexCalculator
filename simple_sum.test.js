const sum = require('./simple_sum');

test('adds to and 2 to equal 4', ()=>{
    expect(sum(2,2)).toBe(4);
});