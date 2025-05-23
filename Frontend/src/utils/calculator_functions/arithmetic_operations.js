import { getZeroIfAllZero, convertToDecimal, convertToHexadecimal } from "./conversions"
import { checkForInputErrors, checkForOutputErrors } from "./input_output_validation"

export function add(first, second) {
    let errors = [];

    // Normalize input
    let firstValue = getZeroIfAllZero(first);
    let secondValue = getZeroIfAllZero(second);

    // Input validation`
    const inputErrors = checkForInputErrors('addition', firstValue, secondValue);
    if (inputErrors.length > 0) {
        errors.push(...inputErrors);
        throw errors;
    }

    // Convert to decimal
    firstValue = convertToDecimal(firstValue);
    secondValue = convertToDecimal(secondValue);

    if (typeof firstValue !== 'number') {
        errors.push({ ConversionError: `'${first}' could not be converted to decimal.` });
        throw errors;
    }

    if (typeof secondValue !== 'number') {
        errors.push({ ConversionError: `'${second}' could not be converted to decimal.` });
        throw errors;
    }

    let test = firstValue + secondValue;

    let finalCalculation = convertToHexadecimal(test);

    if (typeof finalCalculation !== 'string') {
        errors.push({ ConversionError: `The result could not be converted to hexadecimal.` });
        throw errors;
    }

    // Output validation
    const outputErrors = checkForOutputErrors(finalCalculation);
    if (outputErrors.length > 0) {
        errors.push(...outputErrors);
        throw errors;
    }

    return finalCalculation;
}


export function subtract(first, second) {
    let errors = [];

    let firstValue = getZeroIfAllZero(first);
    let secondValue = getZeroIfAllZero(second);

    const inputErrors = checkForInputErrors('subtraction', firstValue, secondValue);
    if (inputErrors.length > 0) {
        errors.push(...inputErrors);
        throw errors;
    }

    secondValue = secondValue.replace(/-+/g, '');

    firstValue = convertToDecimal(firstValue);
    secondValue = convertToDecimal(secondValue);

    if (typeof firstValue !== 'number') {
        errors.push({ ConversionError: `'${first}' could not be converted to decimal.` });
        throw errors;
    }

    if (typeof secondValue !== 'number') {
        errors.push({ ConversionError: `'${second}' could not be converted to decimal.` });
        throw errors;
    }

    let finalCalculation = convertToHexadecimal(firstValue - secondValue);

    if (typeof finalCalculation !== 'string') {
        errors.push({ ConversionError: `The result could not be converted to hexadecimal.` });
        throw errors;
    }

    const outputErrors = checkForOutputErrors(finalCalculation);
    if (outputErrors.length > 0) {
        errors.push(...outputErrors);
        throw errors;
    }

    return finalCalculation;
}


export function multiply(first, second) {
    let errors = [];

    let firstValue = getZeroIfAllZero(first);
    let secondValue = getZeroIfAllZero(second);

    const inputErrors = checkForInputErrors('multiplication', firstValue, secondValue);
    if (inputErrors.length > 0) {
        errors.push(...inputErrors);
        throw errors;
    }

    firstValue = convertToDecimal(firstValue);
    secondValue = convertToDecimal(secondValue);

    if (typeof firstValue !== 'number') {
        errors.push({ ConversionError: `'${first}' could not be converted to decimal.` });
        throw errors;
    }

    if (typeof secondValue !== 'number') {
        errors.push({ ConversionError: `'${second}' could not be converted to decimal.` });
        throw errors;
    }

    let finalCalculation = convertToHexadecimal(firstValue * secondValue);

    if (typeof finalCalculation !== 'string') {
        errors.push({ ConversionError: `The result could not be converted to hexadecimal.` });
        throw errors;
    }

    const outputErrors = checkForOutputErrors(finalCalculation);
    if (outputErrors.length > 0) {
        errors.push(...outputErrors);
        throw errors;
    }

    return finalCalculation;
}


export function divide(first, second) {
    let errors = [];

    let firstValue = getZeroIfAllZero(first);
    let secondValue = getZeroIfAllZero(second);

    const inputErrors = checkForInputErrors('division', firstValue, secondValue);
    if (inputErrors.length > 0) {
        errors.push(...inputErrors);
        throw errors;
    }

    firstValue = convertToDecimal(firstValue);
    secondValue = convertToDecimal(secondValue);

    if (typeof firstValue !== 'number') {
        errors.push({ ConversionError: `'${first}' could not be converted to decimal.` });
        throw errors;
    }

    if (typeof secondValue !== 'number') {
        errors.push({ ConversionError: `'${second}' could not be converted to decimal.` });
        throw errors;
    }

    let finalCalculation = convertToHexadecimal(firstValue / secondValue);

    if (typeof finalCalculation !== 'string') {
        errors.push({ ConversionError: `The result could not be converted to hexadecimal.` });
        throw errors;
    }

    const outputErrors = checkForOutputErrors(finalCalculation);
    if (outputErrors.length > 0) {
        errors.push(...outputErrors);
        throw errors;
    }

    return finalCalculation;
}
