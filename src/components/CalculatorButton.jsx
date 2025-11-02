import React from 'react'

const getID = (buttonName) => {
    switch (buttonName) {
        case "AC":
            return "clear";
        case "/":
            return "divide";
        case "X":
            return "multiply";
        case "-":
            return "subtract";
        case "+":
            return "add";
        case "=":
            return "equals";
        case ".":
            return "decimal";
        case "0":
            return "zero";
        case "1":
            return "one";
        case "2":
            return "two";
        case "3":
            return "three";
        case "4":
            return "four";
        case "5":
            return "five";
        case "6":
            return "six";
        case "7":
            return "seven";
        case "8":
            return "eight";
        case "9":
            return "nine";
        default:
            return null;
    }
}

const CalculatorButton = ({children, onClick}) => {

    let styles = "w-full h-12 font-bold rounded-lg shadow-md cursor-pointer active:scale-95 transition-transform duration-100"

    if (children === "AC") {
        styles += " bg-red-500 text-white col-span-2"
    } else if (children === "=") {
        styles += " bg-green-500 text-white col-start-4 row-start-4 row-end-6 h-28"
    } else if (["/", "X", "-", "+"].includes(children)) {
        styles += " bg-blue-500 text-white"
    } else if (children === "0") {
        styles += " bg-gray-300 col-span-2"
    } else {
        styles += " bg-gray-300 text-black"
    }

    return (
    <button className={styles} onClick={onClick} id={getID(children)}>
        {children}
    </button>
    )
}

export default CalculatorButton
