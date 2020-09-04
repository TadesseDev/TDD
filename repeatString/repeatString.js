const repeatString = function(inputString, repeatNumber) {
    let mainString="";
    if(repeatNumber <= -1){
        return "ERROR"
    }
    for(let i=0;i<repeatNumber;i++){
        mainString += inputString;
    }
    return mainString;
}

module.exports = repeatString
