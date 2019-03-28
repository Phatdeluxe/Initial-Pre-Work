// local variables take precident over global variables, so if you use the name of a global variable for a local variable, the global variable will be ignored for the remainder of the function

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
