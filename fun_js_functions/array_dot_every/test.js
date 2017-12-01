const allPositive = require('./index').allPositive;
const isChar = require('./index').isChar;
const isDivisible = require('./index').isDivisible;
const isOrdered = require('./index').isOrdered;

test('function is defined', () => {
    expect(typeof allPositive).toEqual('function');
});

test('[1,2,3] are all positive', () => {
    expect(allPositive([1,2,3])).toBeTruthy();
});

test('[3,4,-5] i-5 is not positive', () => {
    expect(allPositive([3,4,-5])).toBeFalsy();
});

test('[1,0,3] 0 is not positive', () => {
    expect(allPositive([1,0,3])).toBeFalsy();
});

test('function is defined', () => {
    expect(typeof isChar).toEqual('function');
});

test('[a,b,c] is all characters', () => {
    expect(isChar(['a','b','c'])).toBeTruthy();
});

test('[aa,bb,cc] are words not single characters', () => {
    expect(isChar(['aa','bb','cc'])).toBeFalsy();
});

test('function is defined', () => {
    expect(typeof isDivisible).toEqual('function');
});

test('[3,9,12,15] are multiples of 3', () => {
    expect(isDivisible([3,9,12,15], 3)).toBeTruthy();
});

test('[3,8,12,15] 8 is not a multiple of 3', () => {
    expect(isDivisible([3,8,12,15], 3)).toBeFalsy();
});

test('function is defined', () => {
    expect(typeof isOrdered).toEqual('function');
});

test('[1,2,3] is ordered', () => {
    expect(isOrdered([1,2,3])).toBeTruthy();
});

test('[1,1,2,3] is ordered', () => {
    expect(isOrdered([1,1,2,3])).toBeTruthy();
});

test('[-3,-2,-1] is ordered', () => {
    expect(isOrdered([-3,-2,-1])).toBeTruthy();
});

test('[1,2,3,4,5,3,6] is not ordered', () => {
    expect(isOrdered([1,2,3,4,5,3,6])).toBeFalsy();
});