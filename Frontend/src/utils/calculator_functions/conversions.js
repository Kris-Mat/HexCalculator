export function convertToDecimal(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }
    
    value = String(value).replace(/\s+/g, '');
    const decimal = parseInt(value, 16);

    if (isNaN(decimal)) {
        return null;
    }

    return decimal;
}

export function convertToHexadecimal(value) {
    value = String(value).replace(/\s+/g, '');

    if(typeof value !== 'number'){
        value = Number(value);
    }
    
    if (isNaN(value)) {
        return null;
    }

    return value.toString(16).toUpperCase();
}

export function getZeroIfAllZero(value){
    const cleanedValue = String(value).replace(/[\s-]+/g, '');

    // Check if all characters are '0'
    if ([...cleanedValue].every(char => char === '0')) {
        return '0';
    }

    return value;
}
