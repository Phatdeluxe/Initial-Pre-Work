// you can use class zyntax to create a syntax that will create an object when the class is called

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(vegetableName){
      this.name = vegetableName;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
