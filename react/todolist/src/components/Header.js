import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
const Header = ({title,onAdd,showAdd}) => {
    const location = useLocation()
    return (
        <header style={headrStyle}>
            <h1 style={{ color: 'red', backgroundColor: '#fff' }} >{title}</h1>
            <div onClick={onAdd}>
                {location.pathname === '/' &&
                    <Button color="#fff" text={showAdd ? 'Add' : 'Close'} backgroundColor={showAdd ? '#000' : '#222'} />
                }
            </div> 
        </header>
    )
}

Header.defaultProps = {
    title: 'App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
const headrStyle = {
    fontSize: "2vmin",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
}

export default Header
