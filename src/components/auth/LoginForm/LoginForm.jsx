import react, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import API from '../../../utils/API'
import {useDispatch} from "react-redux";

const LoginForm = () => {

    const {register, handleSubmit} = useForm();
    const [isAutorizated, setAutorization] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleOnSubmit = (data) => {
        API.post("/auth/login", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setIsError(false);
            setIsError(true);
            setAutorization(true);
        }).catch ((error) => {
            setErrorMessage(error.response.data.message);
            setIsError(true);
        })
    
    }

    useEffect(() => {
       
    });

    if(!isAutorizated) {
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
    } else return (
        <div> hsdfg</div>
    )
}

export default LoginForm;
