import React, { useState } from 'react';

const SimpleMessage = () => {
    const [inputValue, setInputValue] = useState('');

    // Handle change event for the input box
    const handleInputChange = (event) => {
        // alert(event.target.value);
        // s=s+"ss";
        console.log(inputValue);
        setInputValue(event.target.value);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Welcome to Our App</h2>
            
            <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '10px' }}>
                Enter your full name:
            </label>
            
            <input
                type="text"
                id="nameInput"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '5px', fontSize: '16px', width: '100%' }}
                placeholder="Type your name"
            />
            
                  {inputValue && (
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    Welcome, <strong>{inputValue}</strong>!
                </p>
            )}
        </div>
    );
};

export default SimpleMessage;