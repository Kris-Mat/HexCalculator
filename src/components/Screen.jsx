import React from 'react';

const Screen = ({ input, output, error }) => {
    return (
        <div className="screen">
            <div className="input">{input || '0'}</div>
            <div className="output">{output}</div>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Screen;