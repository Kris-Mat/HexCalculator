function isValidInputLength(inputValue){
    if(inputValue.length > 2){
        return false;
    }

    return true;
}

function isValidOutputLength(outputValue){
    if(outputValue.length > 4){
        return false;
    }

    return true;
}

module.exports = {isValidInputLength, isValidOutputLength};