import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {

    return (
        <div className="header" >
            {props.isLoggedIn ? 
            <p>You're logged in </p> :
            <NavLink to="/login">Войти </NavLink>
            }
        </div>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default Header;