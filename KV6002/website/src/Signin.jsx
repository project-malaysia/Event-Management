import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    async function handleSubmit(event) {
        event.preventDefault()

        try{
            const response = await fetch("https://w19006674.nuwebspace.co.uk/Team%20Project/UserReg/Loginn/api.php?option=signin", {
                headers: {'Authorization': `Basic ${btoa(email + ':' + password)}` },
                method: 'POST'
           })

           const data = await response.json()

           if (!response.ok) throw new Error()

           alert('Signin success')

        } catch (err) {
            alert('Signin failed: ' + err)
        }
    }

    return (
        <main>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type='submit' value='Submit'/>
            </form>
            <h2>Don't have an account? You can sign up now!</h2>
            <Link to='/SignUp'>Sign Up</Link>
            {/* <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button> */}
        </main>
    )
}

