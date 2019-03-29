// with the parseInt() function you can specify the base of the number you want returned using a radix. It looks like parseInt(string, radix)

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
