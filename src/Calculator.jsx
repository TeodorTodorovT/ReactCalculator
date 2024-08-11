import { useState } from 'react';

import './calculator.css';

import Button from './Components/Button';

import {isOperator} from './utils/helpers';

const Calculator = () => {
    const [calculations, setCalculations] = useState('0');

    const pushNumber = (e) => {
        const lastChar = calculations[calculations.length - 2]

        if (calculations === '0') {
            setCalculations(e.target.innerText);
        } else if (
            isOperator(lastChar) &&
            e.target.innerText === '0'
        ) {
            return;
        } else {
            setCalculations(calculations + e.target.innerText);
        }
    };
    
    const pushOperation = (e) => {
        const lastChar = calculations[calculations.length - 2]
        
        if (isOperator(lastChar)) {
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
            const lastChar = parts[parts.length - 1];
            if (!isNaN(lastChar)) {
                setCalculations(eval(calculations).toString());
            }
        } catch {
            setCalculations('Error!');
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

    const buttons = [
        { label: 'C', onClick: deleteAll },
        { label: '%', onClick: pushPercentage },
        { label: '+/-', onClick: toggleSign },
        { label: '/', onClick: pushOperation },
        { label: '7', onClick: pushNumber },
        { label: '8', onClick: pushNumber },
        { label: '9', onClick: pushNumber },
        { label: '*', onClick: pushOperation },
        { label: '4', onClick: pushNumber },
        { label: '5', onClick: pushNumber },
        { label: '6', onClick: pushNumber },
        { label: '-', onClick: pushOperation },
        { label: '1', onClick: pushNumber },
        { label: '2', onClick: pushNumber },
        { label: '3', onClick: pushNumber },
        { label: '+', onClick: pushOperation },
        { label: '.', onClick: pushDot, className: 'dot' },
        { label: '0', onClick: pushNumber },
        { label: '⌫', onClick: deleteLast },
        { label: '=', onClick: calculate },
    ];

    return (
        <div className="wrapper">
            <div className="screen">
                <p className="calculations">{calculations}</p>
            </div>
            <div className="buttons">
                {buttons.map((button) => (
                    <Button
                        key={button.label}
                        lable={button.label}
                        onClick={button.onClick}
                        className={button.className}
                    />
                ))}
            </div>
        </div>
    );
}

export default Calculator;
