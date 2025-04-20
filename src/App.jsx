import React, { useState } from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import Errors from './components/Errors';
import { add, subtract, multiply, divide } from './utils/calculator_functions/arithmetic_operations';
import './App.css';

const App = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState(''); // Added state for operation
    const [operation, setOperation] = useState(''); // Added state for operation

    const [output, setOutput] = useState('');
    const [error, setError] = useState([]);

    const handleButtonClick = (value) => {
        if (value === 'clear') {
            setFirstValue('');
            setSecondValue('');
            setOperation('');
            setOutput('');
            setError([]);
        } else if (value === 'del') {
          if(secondValue !==''){
            setSecondValue((prev) => prev.slice(0, -1));
          }
          else{
            if(operation !== ''){
              setOperation('');
            }
            else{
              setFirstValue((prev) => prev.slice(0, -1));
            }
          }
        }
        else if (value === '=') {
          try {
             if(operation ==='+'){
                const result = add(firstValue, secondValue);
                setOutput(result);
             }

             if(operation ==='-'){
                const result = subtract(firstValue, secondValue);
                setOutput(result);
             }

             if(operation === 'x'){
                const result = multiply(firstValue, secondValue);
                setOutput(result);
             }

             if(operation === '/'){
                const result = divide(firstValue, secondValue);
                setOutput(result);
             }
          } catch (e) {
              setError(e);
          }
        }
        else if(value === '+' || value === '-' || value === 'x' || value === '/') {
          if(operation !==''){
            setError((prev) => prev + {IOError: "Please only use one operation at a time"});
          }
          else{
            setOperation(value);
          }
        }
        else{
          if(output !== ''){
            setFirstValue('');
            setSecondValue('');
            setOperation('');
            setOutput('');
            setError([]);

            setFirstValue((prev) => prev + value);
          }
          else{
            if(operation === ''){
              setFirstValue((prev) => prev + value);
            }
            else{
              setSecondValue((prev) => prev + value);
            }
          }
        }
    };

    return (
      <div>        
        <div className="calculator">
            <Screen firstValue={firstValue} secondValue ={secondValue} operation={operation} output={output} />
            <Buttons onButtonClick={handleButtonClick} />
        </div>
        <div>
            {error && <Errors error={error} />}
        </div>
      </div>
    );
};

export default App;