import React from 'react';

const Screen = ({ firstValue, secondValue, operation, output }) => {
    let inputDisplay = '0';
    let equalSign = '';
    
    if (output) {
        inputDisplay = output;
        equalSign = '=';
    } else if (secondValue) {
        inputDisplay = secondValue;
    } else if (firstValue) {
        inputDisplay = firstValue;
    }

    return (
         <div className="screen">
            <div className="small-equation">{firstValue} {operation} {secondValue} {equalSign}</div>
            <div className="input">{inputDisplay}</div>
        </div>
    );
};

export default Screen;