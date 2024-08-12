import '../calculator.css';

const Button = ({ lable, onClick, className = ''}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}> 
            {lable}
        </button>
    );
};

export default Button;
