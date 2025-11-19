import React from 'react'
import CalculatorButton from './CalculatorButton'
import { useState } from 'react'

const calculatorButtons = [
    'AC', "/", "X", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", ".",
]

const operators = ['/', 'X', '-', '+', '=', '*'];

const getCalculatorValue = (expr, button) => {
    if (operators.includes(button)) {
        if (operators.includes(expr.at(-1))) {
            return expr.slice(0, -1) + (button === 'X' ? '*' : button);
        }
        if (expr === "0"){
            return expr;
        }
        return expr + (button === 'X' ? '*' : button);
    } else if (expr === "0") {
        return button;
    }
     else {
        return expr + button;
    }
}

const Calculator = () => {

    const [input, setInput] = useState("0");

    const handleButtonClick = (value) => {
        if (value === "AC") {
            setInput("0");
        } else if (value === "=") {
            try {
                setInput(eval(input.replace("X", "*")));
            } catch {
                setInput("Error");
            }
        } else {
            setInput((prev) => (getCalculatorValue(prev, value)));
        }
    };

    return (
        <div className="flex w-full h-120 max-w-md p-4 bg-gray-600 rounded-lg shadow-md mx-auto mt-30 flex-col items-center gap-4">
            <div className="h-1/5 w-full bg-white rounded-md mb-4 p-2 text-right text-4xl font-mono flex items-end justify-end tracking-wide">
                <span className="text-black overflow-hidden" id="display">{input}</span>
            </div>
            <div className="w-full h-2/5 mx-2 grid grid-cols-4 gap-4">
                {calculatorButtons.map((button) => (
                    <CalculatorButton key={button} onClick={() => handleButtonClick(button)}>{button}</CalculatorButton>
                ))}
            </div>
        </div>
    )
}

export default Calculator
