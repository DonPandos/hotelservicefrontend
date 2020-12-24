import s from './SignInForm.module.css'
import {useForm} from "react-hook-form";
import API from "../../../utils/API";
import {useState} from "react";
import {setLoggedIn, setToken, setUsernameInfo} from "../../../reducers/auth/actions";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const SignInForm = (props) => {

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {register, handleSubmit} = useForm();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnSubmit = (data) => {
        API.post('/auth/signin', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setIsError(false)
            dispatch(setLoggedIn(true))
            dispatch(setToken(response.data.token));
            dispatch(setUsernameInfo(
                response.data.username,
                response.data.firstname,
                response.data.lastname,
            ))
            history.push('/');
        }).catch((error) => {
            setErrorMessage(error.response.data.message);
            setIsError(true);
        })
    }

    return (
        <div>
            <form className={s.signInForm} onSubmit={handleSubmit(handleOnSubmit)}>
                <input name={'username'} ref={register} placeholder={'Логин'}></input>
                <input type="password" name={'password'} ref={register} placeholder={'Пароль'}/>
                <input name={'firstname'} ref={register} placeholder={'Имя'}/>
                <input name={'lastname'} ref={register} placeholder={'Фамилия'}/>
                <button type={'submit'}>Зарегистрироваться</button>
            </form>
            {isError && <p style={{color: 'red'}}>{errorMessage}</p> }
        </div>
    )
}

export default SignInForm