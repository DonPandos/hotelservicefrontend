import react, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import API from '../../utils/API'

export default function LoginForm() {

    const {register, handleSubmit} = useForm();

    const handleOnSubmit = (data) => {
        alert(JSON.stringify(data));
        const response =  API.post("/auth/login", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    }

    useEffect(() => {
    });

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
        </div>
    );
}
