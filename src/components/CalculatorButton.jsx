import React from 'react'

const CalculatorButton = ({children}) => {

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
    <button className={styles}>
        {children}
    </button>
    )
}

export default CalculatorButton
