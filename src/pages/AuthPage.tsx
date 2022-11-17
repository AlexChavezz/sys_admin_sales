import styles from '../styles/AuthPage.module.css';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { AuthMode } from '../context/AuthMode';
import { useForm } from '../hooks/useForm';
import { path } from '../path';

const initialState = {
    userName: "",
    password: ""
}

export const AuthPage = () => {
    const { authMode } = useContext(AuthMode);
    const { values, handleChange } = useForm(initialState);
    const { userName, password } = values;

    async function onSubmit(e:React.FormEvent)
    {
        e.preventDefault();
        try
        {
            const response = await window.fetch(`${path}/users/get`, { 
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            console.log(data);
            if(data.length > 0)
            {
               return console.log("Existe el usuario");
            }
            console.log("NO existe el usuario");
        }
        catch(e)
        {
            console.log(e);
        }
    }
    return (
        <section
            className={styles.authPageConatiner}
        >
            <article className={styles.authPageHeader}>
                <h1 className={styles.authPageHeaderTitle}>BIENVENIDO</h1>
                <span className={styles.authPageHeaderMode}>{authMode}</span>
            </article>
            <article className={styles.authPageFormContainer}>
                <form
                    className={styles.authPageForm}
                    onSubmit={onSubmit}
                >
                    <label
                        htmlFor="userName"
                        className={styles.authPageFormLabel}
                    >USUARIO</label>
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                        className={styles.authPageFormInput}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="password"
                        className={styles.authPageFormLabel}
                    >CONTRASEÑA</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        className={styles.authPageFormInput}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        className={styles.authPageFormSubmit}
                        value="ENVIAR"
                    />
                </form>
            </article>
            <Link
                className={styles.arrowContainer}
                to="/"
            >
                <img
                    src="/backArrow.svg"
                    alt="arrow"
                />
            </Link>
        </section>
    );
}