import { useState } from 'react'
import { useForm } from "react-hook-form";
import API from '../../../utils/API'
import {useDispatch} from "react-redux";
import { setLoggedIn, setToken, setUsername } from "../../../reducers/auth/actions";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    const {register, handleSubmit} = useForm();
    // const [isAutorizated, setAutorization] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnSubmit = (data) => {
        API.post("/auth/login", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            dispatch(setLoggedIn(true));
            dispatch(setToken(response.data.token));
            dispatch(setUsername(response.data.username));
            history.push('/');
            setIsError(false);
        }).catch ((error) => {
            setErrorMessage(error.response.data.message);
            setIsError(true);
        })
    
    }



    return (
        <div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <p>
                    <input name="username" ref={register} placeholder="Логин"></input>
                </p>
                <p>
                    <input type="password" name="password" ref={register} placeholder="Пароль"></input>
                </p>
                <button type="submit">Войти</button>
            </form>
            {isError && <p style={{color: 'red'}}>{errorMessage}</p> }
        </div>
    )

}

export default LoginForm;
