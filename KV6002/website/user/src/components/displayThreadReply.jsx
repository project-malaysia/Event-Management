/**
 * Created by John W Ridley for KV6002
 * This file takes the input of the thread_id passed to it by the user clicking the title of the thread.
 * Thread ID is then used to query the replies table for the replies associated with that thread.
 */
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

    //Get the replies from the backend hosted at the URL to fill the page.
  //If the url changes please change! Should query fine on my nuwebspace account.
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

      //When the user submits the page will be briefly refreshed to display the new reply
    const handleCommentSubmit = async (e) => {
        getReplies(thread_id);
        setComment('');
    };

      //Return the replies for the thread so that they are displayed on the screen.
  //Note user_id={2} This has to be hardcoded for now.
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
