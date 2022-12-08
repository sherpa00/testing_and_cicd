const sum = require('./sum');

test("adds 1 + 2 is equal to 3",() => {
    expect(sum(1,2)).toBe(3);
});

// object assignment
test("object assignment",() => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1,two: 2})
});

// not 
test("adding number is not zero",() => {
    let val = 0;
    for (let i = 0; i < 10; i++) {
        val += i;
    }
    expect(val).not.toBe(0);
});


// truthness
test("Is undefined",() => {
    let val = undefined;
    expect(val).toBeUndefined();
});

// null 
test("Is Null",() => {
    let val = null;
    expect(val).toBeNull();
});

// true
test("1 is truthy",() => {
    let i = 1;
    expect(i).toBeTruthy();
});

// false
test("0 is falsy",() => {
    let i = 0;
    expect(i).toBeFalsy();
});

// numbers
test("1 is smaller than 4",() => {
    expect(1).toBeLessThan(4);
})

// strings
test('chawang is equal to chaw',() => {
    expect("chawang").toMatch(/cha/);
});

// arrays
test("[cha,wang] contains cha",() => {
    let arr = ['cha','wang','sherpa']
    expect(arr).toContain('cha');
})