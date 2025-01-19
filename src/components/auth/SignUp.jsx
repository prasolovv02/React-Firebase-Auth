import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function register(e) {
        e.preventDefault()
        if (confirmPassword !== password) {
            setError("Passwords didn`t match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            setError("");
            setEmail("");
            setConfirmPassword("");
            setPassword("");
        })
        .catch((error)=>console.log(error));
    }

    return (
        <div>
            <form onSubmit={register}>
                <h2>Create an account</h2>
                <input placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                <input placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <input placeholder="Сonfirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password"/>
                <button>Create</button>
                {error ? <p style={{color: "red"}}>{error}</p> : ""}
            </form>
        </div>
    )
}

export default SignUp;