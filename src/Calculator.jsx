import { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [calculations, setCalculations] = useState('0');

    const pushNumber = (e) => {
        if (calculations === '0') {
            setCalculations(e.target.innerText);
        } else if (
            (calculations[calculations.length - 2] === '+' ||
                calculations[calculations.length - 2] === '-' ||
                calculations[calculations.length - 2] === '/' ||
                calculations[calculations.length - 2] === '*') &&
            e.target.innerText === '0'
        ) {
            return;
        } else {
            setCalculations(calculations + e.target.innerText);
        }
    };

    const pushOperation = (e) => {
        if (
            calculations[calculations.length - 2] === '+' ||
            calculations[calculations.length - 2] === '-' ||
            calculations[calculations.length - 2] === '/' ||
            calculations[calculations.length - 2] === '*'
        ) {
            setCalculations(
                calculations.slice(0, -2) + e.target.innerText + ' '
            );
        } else {
            setCalculations(
                (calculations) => calculations + ` ${e.target.innerText} `
            );
        }
    };

    const deleteLast = () => {
        if (calculations.length === 1) {
            setCalculations('0');
        } else {
            if (calculations[calculations.length - 1] === ' ') {
                setCalculations((calculations) => calculations.slice(0, -2));
            } else {
                setCalculations((calculations) => calculations.slice(0, -1));
            }
        }
    };

    const deleteAll = () => {
        setCalculations('0');
    };

    const calculate = () => {
        try {
            const parts = calculations.trim().split(' ');
            const lastChar = (parts[parts.length - 1]);
            if(!isNaN(lastChar)){
                setCalculations(eval(calculations).toString());
            }
        } catch {
            setCalculations("Error!")
        }
        
    };

    const pushPercentage = () => {
        const parts = calculations.trim().split(' ');

        if (parts.length > 0) {
            const lastNumber = parseFloat(parts[parts.length - 1]);
            const percentageValue = (lastNumber / 100).toString();
            parts[parts.length - 1] = percentageValue;
            setCalculations(parts.join(' '));
        }
    };

    const toggleSign = () => {
        const parts = calculations.trim().split(' ');

        if (parts.length > 0) {
            const lastNumber = parts[parts.length - 1];
            if (!isNaN(lastNumber)) {
                const toggledNumber = parseFloat(lastNumber) * -1;
                parts[parts.length - 1] = toggledNumber.toString();
                setCalculations(parts.join(' '));
            }
        }
    };

    const pushDot = () => {
        const parts = calculations.trim().split(' ');
    
        if (parts.length > 0) {
            const lastPart = parts[parts.length - 1];
            if (!lastPart.includes('.')) {
                setCalculations(calculations + '.');
            }
        }
    };

    return (
        <div className="wrapper">
            <div className="screen">
                <p className="calculations">{calculations}</p>
            </div>
            <div className="buttons">
                <button className="btn" onClick={deleteAll}>
                    C
                </button>
                <button className="btn" onClick={pushPercentage}>
                    %
                </button>
                <button className="btn" onClick={toggleSign}>
                    +/-
                </button>
                <button className="btn" onClick={pushOperation}>
                    /
                </button>
                <button className="btn" onClick={pushNumber}>
                    7
                </button>
                <button className="btn" onClick={pushNumber}>
                    8
                </button>
                <button className="btn" onClick={pushNumber}>
                    9
                </button>
                <button className="btn" onClick={pushOperation}>
                    *
                </button>
                <button className="btn" onClick={pushNumber}>
                    4
                </button>
                <button className="btn" onClick={pushNumber}>
                    5
                </button>
                <button className="btn" onClick={pushNumber}>
                    6
                </button>
                <button className="btn" onClick={pushOperation}>
                    -
                </button>
                <button className="btn" onClick={pushNumber}>
                    1
                </button>
                <button className="btn" onClick={pushNumber}>
                    2
                </button>
                <button className="btn" onClick={pushNumber}>
                    3
                </button>
                <button className="btn" onClick={pushOperation}>
                    +
                </button>
                <button className="btn dot" onClick={pushDot}>.</button>
                <button className="btn" onClick={pushNumber}>
                    0
                </button>
                <button className="btn" onClick={deleteLast}>
                    ⌫
                </button>
                <button className="btn" onClick={calculate}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
