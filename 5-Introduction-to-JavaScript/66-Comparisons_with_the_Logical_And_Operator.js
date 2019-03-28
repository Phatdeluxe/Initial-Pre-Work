// instead of nesting if statements, you can use the && operator to make it so both statements need to be true to execute the following function

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <=50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
