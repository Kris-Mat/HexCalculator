import React from 'react';

const Errors = ({ error }) => {
    return (
        <div className="errors"> 
            {error.map((err, index) => (
                <div key={index} className="error">
                    {Object.values(err).join(', ')}
                </div>
            ))}
        </div>   
    );
};

export default Errors;