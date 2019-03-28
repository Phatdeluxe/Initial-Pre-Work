// building sentences with words given by user input. Didnt think id be asked to do sentence construction as a part of coding lessons

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "I gave my sister a ";
  result += myNoun;
  result += " that was anything but ";
  result += myAdjective;
  result += ". As soon as the ";
  result += myNoun;
  result += " saw her, it ";
  result += myVerb + " as " + myAdverb;
  result += " as a fighter jet."



  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
