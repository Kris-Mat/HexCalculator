export function isValidInputLength(inputValue){
    inputValue = String(inputValue).replace(/[\s-]/g, '');

    if(inputValue.length > 2){
        return false;
    }

    return true;
}

export function isValidOutputLength(outputValue){
    if(outputValue.length > 4){
        return false;
    }

    return true;
}

export function isValidHexadecimalValue(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }

    value = String(value).replace(/\s+/g, '');

    const hexRegex = /^-?[0-9a-fA-F]+$/;

    return hexRegex.test(value);
}

export function isValueNegative(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }

    value = String(value).replace(/\s+/g, '');

    return value.startsWith('-');
}

export function isAFraction(value){
    if (typeof value !== 'string') {
        value = String(value);
    }

    value = String(value).replace(/[\s-]+/g, '');

    return value.includes('.');
}


export function checkForInputErrors(operation, firstValue, secondValue){
    const errors = [];
   
    // length
    if(!isValidInputLength(firstValue)){
        errors.push({IOError: "The first number should only be 2 digits long"});
    }

    if(!isValidInputLength(secondValue)){
        errors.push({IOError: "The first number should only be 2 digits long"});
    }

    if(!isValidHexadecimalValue(firstValue)){
        errors.push({IOError: "The first number needs to be a valid hexadecimal number only containing 0-9 and A-F"});
    }

    if(!isValidHexadecimalValue(secondValue)){
        errors.push({IOError: "The second number needs to be a valid hexadecimal number only containing 0-9 and A-F"});
    }

    if(operation == 'division' && secondValue =='0'){
        errors.push({MathError: "The second number needs to be a number greater than 0"});
    }

    return errors;
}



export function checkForOutputErrors(outputValue){
    const errors = [];

    if(!isValidOutputLength(outputValue)){
        errors.push({IOError: "The length of the output was too long, please try input smaller values."});
    }

    if(isValueNegative(outputValue)){
        errors.push({MathError: "The answer was a negative number, which is not allowed. Please try input different numbers"});
    }

    if(isAFraction(outputValue)){
        errors.push({MathError: "The answer was a decimal fraction number, which is not allowed. Please try input different numbers"});
    }

    return errors;
}
