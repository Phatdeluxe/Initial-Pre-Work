// instead of using a switch statement, you can use an object to quickly look up data, similar to a dictionary

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
