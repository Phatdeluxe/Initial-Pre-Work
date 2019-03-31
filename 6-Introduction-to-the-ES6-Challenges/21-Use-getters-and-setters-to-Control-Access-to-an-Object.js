// get nad set can be used to obtain and set the property of an object without giving the user access to the private variable

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(temp) {
      this.temp = temp;
    }
    get temperature(){
      return 5/9 * (this.temp - 32);
    }
    set temperature(celsius){
      this.temp = celsius * 9.0 / 5 + 32;
    }
    }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
