import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewThreadForm from '../components/createNewThread';
import Footer from '../components/Footer';

function DisplayThreads() {
    // State to store the threads
    const [threads, setThreads] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Effect hook to fetch threads from the backend when the component mounts
    useEffect(() => {
        getTheThreads();
    }, []);

    // Function to fetch threads from the backend
    const getTheThreads = async () => {
        try {
            const response = await fetch('https://w16012692.nuwebspace.co.uk/project/backend/getThreads.php');
            if (!response.ok) {
                throw new Error('Failed to fetch threads');
            }
            const data = await response.json();
            setThreads(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddThread = async (newThread) => {
        getTheThreads();
    };

    return (
        <div className="flex flex-col min-h-screen bg-purple-200">
            <div className="flex-grow">
                <div className="w-70 mx-auto mb-20 p-20 border border-gray-300 rounded-lg box-border bg-purple-200 dark:bg-gray-800">
                    <ul>
                        {threads.map(thread => (
                            <li key={thread.id}>
                                <Link to={`/displayThreadReply/${thread.id}`}><h3 className="p-3 bg-purple-500 border-b border-gray-300 rounded-t-lg cursor-pointer">{thread.title}</h3></Link>
                                <p className="p-2 bg-pink-500 border-b border-gray-300">{thread.content}</p>
                                <p className="p-2 bg-pink-500 border-b border-gray-300 rounded-bl-lg rounded-br-lg">Posted by: {thread.username}</p>
                            </li>
                        ))}
                    </ul>
                    <NewThreadForm user_id={2} onSubmit={handleAddThread} />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DisplayThreads;
