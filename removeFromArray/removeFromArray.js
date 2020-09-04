const removeFromArray = function() {
    let newArray=arguments[0];
for(let i=1;i<arguments.length;i++){
    for(let j=0;j<newArray.length;j++){
        if(arguments[i]===newArray[j]){
            newArray.splice(j,1);
        }
    }
}
return newArray;
}

module.exports = removeFromArray
