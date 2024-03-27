import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    async function handleSignUp(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://w19006674.nuwebspace.co.uk/Team%20Project/UserReg/Loginn/api.php?option=signup", {
                method: 'POST',
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password
                })
            })

            if (!response.ok) throw new Error()

            alert('Signup success')
        } catch (err) {
            alert(err)
        }
    }


    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor='name'>Username</label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br/>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br/>
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>
                <button type='submit'>Submit</button>
            </form>
            <h2>Already have an account? Sign in!</h2>
            <Link to='/SignIn'>Sign In</Link>
        </main>
    )
}

