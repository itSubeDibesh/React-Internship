import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
    const [number1, setNumber1] = useState(0),
        [number2, setNumber2] = useState(0),
        [result, setNumberResult] = useState(0);

    function Calculate(condition) {
        const n1 = parseFloat(number1),
            n2 = parseFloat(number2);
        // eslint-disable-next-line default-case
        switch (condition) {
            case "PLUS":
                setNumberResult(n1 + n2);
                break;
            case "MINUS":
                setNumberResult(n1 - n2);
                break;
            case "MULTIPLY":
                setNumberResult(n1 * n2);
                break;
            case "DIVIDE":
                setNumberResult(n2 === 0 ? 0 : n1 / n2);
                break;
        }
    }
    function Clear() {
        [setNumber1, setNumber2, setNumberResult].forEach((condition) =>
            condition(0)
        );
    }

    return (
        <div>
            <h1>Calculator</h1>
            <div className="calculator">
                <h1>Calculator</h1>
                <h3>
                    Result : <span>{result}</span>
                </h3>
                <div>
                    <input
                        type="number"
                        placeholder="Enter Number A"
                        value={number1 !== 0 ? number1 : " "}
                        onChange={(e) => setNumber1(e.target.value)}
                    ></input>
                    <input
                        type="number"
                        placeholder="Enter Number B"
                        value={number2 !== 0 ? number2 : " "}
                        onChange={(e) => setNumber2(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => Calculate("PLUS")}>Addition + </button>
                    <button className="btn btn-primary" onClick={() => Calculate("MINUS")}>Subtract - </button>
                    <button className="btn btn-warning" onClick={() => Calculate("MULTIPLY")}>Multiplication * </button>
                    <button className="btn btn-danger" onClick={() => Calculate("DIVIDE")}>Division / </button>
                    <button className="btn" onClick={Clear}>Clear </button>
                </div>
            </div>
        </div>
    );
}
export default Calculator;
