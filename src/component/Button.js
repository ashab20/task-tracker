import PropTypes from 'prop-types'


const Button = ({text,color,handleClick}) => {
    return (
        <button className="btn" style={{backgroundColor:color}} onClick={handleClick}>
            {text}
        </button>
    );
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.prototype ={
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Button;