import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import logo from '../../images/logo.png'

const Header = (props) => {

    return (
        <div className={s.root} >

            <div className={s.logoContainer}>
                <NavLink to="/">
                    <img className={s.logo} src={logo} alt={"logo"}/>
                </NavLink>
            </div>
            <div className={s.loginInfo}>
                {props.isLoggedIn ?
                <p>You're logged in </p> :
                    <div>
                        <NavLink className={s.loginButton} to="/login">Войти </NavLink>
                        <NavLink className={s.loginButton} to="/signin">Зарегестироваться</NavLink>
                    </div>
                }
            </div>
        </div>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default Header;