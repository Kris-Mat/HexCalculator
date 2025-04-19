import React from 'react';

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'C', '='
    ];

    return (
        <div className="buttons">
            {buttons.map((button) => (
                <button key={button} onClick={() => onButtonClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    );
};

export default Buttons;