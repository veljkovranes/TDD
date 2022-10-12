const {addCalculator, subCalculator, multipleCalculator, divideCalculator} = require("./calculator");

// test("addition of 0.4 and 0.3 to equal 0.7", () => {
//   expect(addCalculator(0.4, 0.3)).toBe(0.7);
  
// });

// test("addition of 2 and 3 to equal 5", () => {
//   expect(addCalculator(2, 5)).toBe(7);
  
// });

// test("addition of 2 and 3 to equal 5", () => {
//   expect(addCalculator(2, "",3)).toBe(5);
  
// });



// test("subtraction of 2 and 3 to equal -1", () => {
//   expect(subCalculator(2, 3)).toBe(-1);
// });

// test("multiplication of 2 and 3 to equal 6", () => {
//   expect(multipleCalculator(0.2, 3)).toBe(0.6);
// });

test("dividing of 9 and 3 to equal 3", () => {
  expect(divideCalculator(9, 3)).toBe(3);
});

test("dividing of 9 and 0 to get error message", () => {
  expect(()=>{
    expect(divideCalculator(9, 0));
  }).toThrow("Cannot divide by 0!");
});

test("dividing of 9 and string to get error message", () => {
  expect(()=>{
    expect(divideCalculator(9, "a"));
  }).toThrow("Cannot divide with string.");
});

// test("addition of 2,3, 5 to equal 10", () => {
//   expect(addCalculator(2, 5, 5)).toBe(14);
// });
