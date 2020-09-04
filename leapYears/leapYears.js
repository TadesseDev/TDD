const leapYears = function(givenYear) {
    if(givenYear%4==0){
        if(givenYear%100==0)
        {
            if(givenYear%400==0)
            {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

module.exports = leapYears
