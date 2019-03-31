// Now im really confused. What is the rest operator? is it not ...? if ... is the spread operator then what is the rest operator?

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
