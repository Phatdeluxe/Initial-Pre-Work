// instead of using the var keyword to declare a vaariable and run the risk of accidentally overwriting it, you can use the let keyword to enforce that no other variables with the same name are declared

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
