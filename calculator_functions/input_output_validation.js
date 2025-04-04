function validInputLength(inputValue){
    if(inputValue.length > 2){
        return false;
    }

    return true;
}

module.exports = validInputLength;