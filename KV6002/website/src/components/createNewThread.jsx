// NewThreadForm.jsx
import React, { useState } from 'react';

function NewThreadForm({ user_id, onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const threadData = new URLSearchParams();
        threadData.append('user_id', user_id);
        threadData.append('title', title);
        threadData.append('content', content);
        fetch('https://w16012692.nuwebspace.co.uk/project/backend/addNewThreadToDatabase.php', {
            method: 'POST',
            body: threadData,
        })

        onSubmit({ user_id, title, content });
        //console.log({ user_id, title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded-md mb-4">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Thread Title" required className="border border-gray-300 rounded-md p-2 w-full" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Thread Content" required className="border border-gray-300 rounded-md p-2 w-full" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Thread</button>
            </form>
        </div>

    );
}

export default NewThreadForm;
