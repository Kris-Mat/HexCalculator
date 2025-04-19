import React from 'react';

const Buttons = ({ onButtonClick }) => {
    const valueButtons = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
    ];

    const operationButtons = [
        '+', '-', 'X', '/' ,'='
    ];

    const cleaningButtons = [
        'clear', 'del'
    ];


    return (
        <div className ='buttons-container'>
            <div>
                <div className ="cleaningButtons">
                    {cleaningButtons.map((button) => (
                        <button className = "cleaningButton" key={button} onClick={() => onButtonClick(button)}>
                            {button}
                        </button>
                    ))}
                </div>
                <div className="valueButtons">
                    {valueButtons.map((button) => (
                        <button className = "valueButton" key={button} onClick={() => onButtonClick(button)}>
                            {button}
                        </button>
                    ))}
                </div>
            </div>
            <div className= "operationButtons">
                {operationButtons.map((button) => (
                    <button className = "operationButton" key={button} onClick={() => onButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;