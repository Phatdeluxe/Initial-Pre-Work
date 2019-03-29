// you can check to see if an object has a property with the .hasOwnProperty modifier to return a boolean if the property exists or not

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
