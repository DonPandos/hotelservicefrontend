import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import logo from '../../images/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import {setLoggedIn} from "../../reducers/auth/actions";

const Header = (props) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setLoggedIn(false));
    }
    return (
        <div className={s.root} >
            <div className={s.logoContainer}>
                <NavLink to="/">
                    <img className={s.logo} src={logo} alt={"logo"}/>
                </NavLink>
            </div>
            <div >
                {props.isLoggedIn ?
                    <div className={s.loginInfo}>
                        <div className={s.usernameLabel}>{auth.firstname + ' ' + auth.lastname}</div>
                        <div className={s.exitButton} onClick={logout}>Выйти</div>
                    </div>
                    :
                    <div className={s.loginInfo}>
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