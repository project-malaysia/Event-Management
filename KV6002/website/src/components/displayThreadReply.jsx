import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewCommentForm from '../components/createNewComment';
import Footer from '../components/Footer';

function DisplayThreadReplies() {
    const [replies, setReplies] = useState([]);
    const [comment, setComment] = useState('');
    var { thread_id } = useParams(); // Accessing the threadId from URL params

    useEffect(() => {
        getReplies(thread_id);
    }, [thread_id]);

    const getReplies = async (threadId) => {
        try {
            const response = await fetch(`https://w16012692.nuwebspace.co.uk/project/backend/getReplies.php?thread_id=` + thread_id);
            if (!response.ok) {
                throw new Error('Failed to fetch replies');
            }
            const data = await response.json();
            console.log(data);
            setReplies(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentSubmit = async (e) => {
        getReplies(thread_id);
        setComment('');
    };

    return (
        <div className="flex flex-col min-h-screen bg-purple-200 dark:bg-gray-800">
            <div className="flex-grow">
                <div className="w-70 mx-auto mb-20 p-20 border border-gray-300 rounded-lg box-border bg-purple-200 dark:bg-gray-800">
                    <ul>
                        {replies.map(reply => (
                            <li key={reply.id}>
                                <p className="p-2 bg-pink-500 border-b border-gray-300">{reply.content}</p>
                                <p className="p-2 bg-pink-500 border-b border-gray-300">Posted by: {reply.username}</p>
                            </li>
                        ))}
                    </ul>
                    <NewCommentForm user_id={2} thread_id={thread_id} onSubmit={handleCommentSubmit} />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DisplayThreadReplies;
