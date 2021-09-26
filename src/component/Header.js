import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = ({title,onAddBtn,showAddForm}) => {

    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname==='/' &&
            <Button text={showAddForm ? 'Close' : 'Add'} 
            color={showAddForm ? 'red': 'green'} handleClick={onAddBtn}/>}
        </header>
    )
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header;