const sumAll = function(numOne,numTwo) {
if(typeof(numOne)!="number"||typeof(numTwo)!="number"|| numOne<0||numTwo<0){
    return "ERROR";
}

let i=numOne>numTwo ? numOne:numTwo;
numTwo=i!=numOne ? numOne: numTwo;
let sum=numTwo;
while(i>numTwo){
    sum +=i;
    i--;
}
return sum;
}
module.exports = sumAll 
