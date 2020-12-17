import react, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

export default function LoginForm() {

    const {register, handleSubmit} = useForm();

    const handleOnSubmit = (data) => alert(JSON.stringify(data));

    useEffect(() => {
        console.log(count);
    });

    return (
        <div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input name="username" ref={register}></input>
                <button type="submit">asd</button>
            </form>
        </div>
    );
}
