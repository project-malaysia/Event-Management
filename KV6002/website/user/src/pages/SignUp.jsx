import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function SignUp() {
    // State variables for form fields and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');

    // Function to get the current year
    const getCurrentYear = () => new Date().getFullYear();
    // Generate arrays for years, months, and days
    const years = Array.from(new Array(100), (val, index) => getCurrentYear() - index);
    const months = Array.from(new Array(12), (val, index) => index + 1);
    const days = Array.from(new Array(31), (val, index) => index + 1);

    // Function to calculate age based on date of birth
    const calculateAge = (dob) => {
        const diff = (new Date() - new Date(dob).getTime());
        const ageDate = new Date(diff); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    // Function to handle form submission
    async function handleSignUp(e) {
        e.preventDefault();
        const age = calculateAge(`${year}-${month}-${day}`);
        if (age < 18) {
            setError('You must be at least 18 years old to sign up.');
            return;
        }
        
        try {
            // Send sign up request to the server
            const response = await fetch("https://w19006674.nuwebspace.co.uk/Team%20Project/UserReg/Loginn/api.php?option=signup", {
                method: 'POST',
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password,
                    dob: `${year}-${month}-${day}`
                })
            });

            if (!response.ok) throw new Error();

            alert('Signup success');
        } catch (err) {
            alert(err);
        }
    }

    // JSX for the sign-up form
    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <main className="flex-grow p-8">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Sign Up</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSignUp} className="flex flex-col items-center justify-center space-y-4">
                    {/* Username input field */}
                    <div className="flex flex-col">
                        <label htmlFor='name' className="dark:text-white">Username</label>
                        <input
                            id='name'
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="p-2 border rounded-md border-black mb-2 bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white"
                        />
                    </div>
                    {/* Email input field */}
                    <div className="flex flex-col">
                        <label htmlFor='email' className="dark:text-white">Email</label>
                        <input
                            id='email'
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="p-2 border rounded-md border-black mb-2 bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white"
                        />
                    </div>
                    {/* Date of Birth input field */}
                    <div className="flex flex-col">
                        <label htmlFor='dob' className="dark:text-white">Date of Birth</label>
                        <div className="flex space-x-2">
                            <select value={day} onChange={(e) => setDay(e.target.value)} className="p-2 border rounded-md border-black bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white">
                                <option value="">Day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                            <select value={month} onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded-md border-black bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white">
                                <option value="">Month</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                            <select value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded-md border-black bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white">
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* Password input field */}
                    <div className="flex flex-col">
                        <label htmlFor='password' className="dark:text-white">Password</label>
                        <input
                            id='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="p-2 border rounded-md border-black bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-white"
                        />
                    </div>
                    {/* Submit button */}
                    <button type='submit' className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md">Submit</button>
                </form>
                {/* Sign in link */}
                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Already have an account? Sign in!</h2>
                    <Link to='/SignIn' className="text-blue-500 underline">Sign In</Link>
                </div>
            </main>
            {/* Footer component */}
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}
