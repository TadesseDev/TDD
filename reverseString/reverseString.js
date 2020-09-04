const reverseString = function(givenString) {
   let reversedString="";
    for(let i=--givenString.length;i>=0;i--){
        reversedString = reversedString+givenString.charAt(i);
   }
   return reversedString;
}

module.exports = reverseString
