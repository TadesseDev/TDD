const ftoc = function(fahrenheit) {
  result = ((fahrenheit-32)*(5/9));
  return  Number((Math.floor(result) != result) ? result.toFixed(1): result)
}

const ctof = function(celsius) {
  result = ((celsius*(9/5))+32);
   return  Number((Math.floor(result) != result) ? result.toFixed(1): result);
}

module.exports = {
  ftoc,
  ctof
}
