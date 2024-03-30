//Form for adding a new comment
import React, { useState } from 'react';

function NewCommentForm({ user_id, thread_id, onSubmit }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const commentToSend = new URLSearchParams();
        commentToSend.append('thread_id', thread_id);
        commentToSend.append('user_id', user_id);
        commentToSend.append('content', content);
        fetch('https://w16012692.nuwebspace.co.uk/project/backend/addCommentToDb.php', {
            method: 'POST',
            mode: 'no-cors',
            body: commentToSend,
        })

        onSubmit({ thread_id, user_id, content });
        console.log({ thread_id, user_id, content });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded-md mb-4">
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Thread Content" required className="border border-gray-300 rounded-md p-2 w-full dark:text-gray-900" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Thread</button>
        </form>
    );
}

export default NewCommentForm;
