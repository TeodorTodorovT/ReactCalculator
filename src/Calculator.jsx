import './calculator.css'

function Calculator() {

    return (
        <div className="wrapper">
            <div className="screen">
                <p className="calculations">0</p>
            </div>
            <div className="buttons">
                <button className="btn">C</button>
                <button className="btn">%</button>
                <button className="btn">+/-</button>
                <button className="btn">/</button>
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn">*</button>
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn">-</button>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">+</button>
                <button className="btn dot">.</button>
                <button className="btn">0</button>
                <button className="btn">⌫</button>
                <button className="btn">=</button>
            </div>
        </div>
    );
}

export default Calculator;
