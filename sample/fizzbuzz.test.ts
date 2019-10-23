// node_modules/.bin/jest sample/fizzbuzz.test.js
const fizzbuzz = (number: number): number | string => {
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

test('Number', () => {
  expect(fizzbuzz(1)).toBe(1)
})
test('Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz')
})
test('Buzz', () => {
  expect(fizzbuzz(5)).toBe('Buzz')
})
test('FizzBuzz', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz')
})
