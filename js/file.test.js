import { capitalize, reverseString } from "./functions";
import { calculator } from "./calculator";
import { caesarCipher } from "./caesarCipher";
import { analyzeArray } from "./analyzeArray";

// write the test for a capitalize string function that takes a string and capitalizes the first character
// there are 3 cases: the first character is a lowercase letter, an upppercase letter, or it's not a letter at all (number, symbol)
// we just need to check if the first character is a capital letter

test('Expect capitalize(apple) to be Apple', () => {
    expect(capitalize('apple')).toMatch('Apple');
});

test('Expect capitalize(Boy) to be Boy', () => {
    expect(capitalize('Boy')).toMatch('Boy');
})

test('Expect capitalize(1234) to be 1234', () => {
    expect(capitalize('1234')).toMatch('1234')
})

test('Expect capitalize(#@$%) to be #@$%', () => {
    expect(capitalize('#@$%')).toMatch('#@$%')
})

test('expect reverseString(lord) to be drol', () => {
    expect(reverseString('lord')).toMatch('drol')
})



test('expect reverseString(ball) to be llab', () => {
    expect(reverseString('ball')).toMatch('llab')
})

test('expect reverseString(Velasquez) to be zeuqsaleV', () => {
    expect(reverseString('Velasquez')).toMatch('zeuqsaleV')
})

test('expect reverseString(1234) to be 4321', () => {
    expect(reverseString('1234')).toMatch('4321')
})

test('expect reverseString($#@!) to be !@#$', () => {
    expect(reverseString('$#@!')).toMatch('!@#$')
}) 



test('expect 2 + 2 to be 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('expect 1.9 + 3.3 to be 5.2', () => {
    expect(calculator.add(1.9, 3.3)).toBeCloseTo(5.2);
})

test('expect -4.9 + 2 to be -2.9', () => {
    expect(calculator.add(-4.9, 2)).toBeCloseTo(-2.9);
})

test('expect 10 - 3 to be 7', () => {
    expect(calculator.subtract(10, 3)).toBe(7)
})

test('expect 1 - 3 to be -2', () => {
    expect(calculator.subtract(1, 3)).toBe(-2)
})

test('expect 7.80 - 3 to be 4.8', () => {
    expect(calculator.subtract(7.8, 3)).toBeCloseTo(4.8)
})

test('expect 4 * 3 to be 12', () => {
    expect(calculator.multiply(4, 3)).toBe(12)
})

test('expect 5.4 * 2 to be 10.8', () => {
    expect(calculator.multiply(5.4, 2)).toBe(10.8)
})

test('expect 5.4 / 2 to be 2.7', () => {
    expect(calculator.divide(5.4, 2)).toBe(2.7)
})

test('expect 5.1 / 2 to be 2.55', () => {
    expect(calculator.divide(5.24, 2)).toBeCloseTo(2.62)
})




test('expect attack at dawn with a shift of 1 to be buubdl bu ebxo', () => {
    expect(caesarCipher('attack at dawn', 1)).toMatch('buubdl bu ebxo');
})

test('expect hello world with a shift of 3 to be khoor zruog', () => {
    expect(caesarCipher('hello world', 3)).toMatch('khoor zruog');
})


test('expect xylophone with a shift of 7 to be efsvwovul', () => {
    expect(caesarCipher('xylophone', 7)).toMatch('efsvwovul');
})

test('expect ab with a shift of 1 to be bc', () => {
    expect(caesarCipher('ab', 1)).toMatch('bc');
})

test('expect xyz with a shift of 2 to be zab', () => {
    expect(caesarCipher('xyz', 2)).toMatch('zab')
})

test('expect analyzeArray([1,8,3,4,2,6]) to have avg: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})

test('expect analyzeArray([1,2,3,4,5]) to have avg: 3, min: 1, max: 5, length: 5', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
      })
})