import React, { useState } from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import { checkForInputErrors, checkForOutputErrors } from './utils/calculator_functions/input_output_validation';

const App = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setOutput('');
            setError('');
        } else if (value === '=') {
            const errors = checkForInputErrors('operation', input, '0'); // Example validation
            if (errors.length > 0) {
                setError(errors[0].IOError || errors[0].MathError);
                return;
            }

            try {
                // Example calculation logic (replace with your actual logic)
                const result = parseInt(input, 16) + 1; // Example: Increment input
                const outputErrors = checkForOutputErrors(result.toString(16));
                if (outputErrors.length > 0) {
                    setError(outputErrors[0].IOError || outputErrors[0].MathError);
                    return;
                }
                setOutput(result.toString(16).toUpperCase());
                setError('');
            } catch (e) {
                setError('An error occurred during calculation.');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <div className="calculator">
            <Screen input={input} output={output} error={error} />
            <Buttons onButtonClick={handleButtonClick} />
        </div>
    );
};

export default App;