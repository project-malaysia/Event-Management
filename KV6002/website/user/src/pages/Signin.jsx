import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/about');
        }
    }, [token, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();
        const emailLowercased = email.toLowerCase();

        try {
            const response = await fetch("https://w19006674.nuwebspace.co.uk/Team%20Project/UserReg/Loginn/api.php?option=signin", {
                headers: { 'Authorization': `Basic ${btoa(email + ':' + password)}` },
                method: 'POST'
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Login failed');

            localStorage.setItem('token', data.token);
            setToken(data.token);

            navigate('/about');
        } catch (err) {
            alert('Signin failed: ' + err.message);
        }
    }

    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Sign in</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <label htmlFor='email' className="dark:text-white">Email</label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="p-2 border rounded-md border-black mb-2 w-full bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white"
                    />
                    <label htmlFor='password' className="dark:text-white">Password</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="p-2 border rounded-md border-black mb-2 w-full bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white"
                    />
                    <input type='submit' value='Submit' className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md w-full" />
                </form>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Don't have an account? You can sign up now!</h2>
                    <Link to='/SignUp' className="text-blue-500 underline">Sign Up</Link>
                </div>
            </main>
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}