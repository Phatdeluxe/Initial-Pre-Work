// practice writing Code

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6 && card >= 2) {
    count++;
  }
  else if (card >= 7 && card <= 9) {
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count--;
  }
  else {
  return "Change Me";
  }
  if(count <= 0) {
    return count + " Hold";
  }
  else if (count > 0) {
    return count + " Bet";
  }
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
