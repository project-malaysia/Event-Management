/**
 * A from allowing the user to create new threads that will then be displayed onto
 * the page.
 */
import React, { useState } from 'react';

function NewThreadForm({ user_id, onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

         /**
     * Created by John W Ridley for KV6002
     * Take the input in the form to create a new thread and store that data into the database.
     * Ideally keep it hosted at this location
     */
        const threadData = new URLSearchParams();
        threadData.append('user_id', user_id);
        threadData.append('title', title);
        threadData.append('content', content);
        fetch('https://w16012692.nuwebspace.co.uk/project/backend/addNewThreadToDatabase.php', {
            method: 'POST',
            body: threadData,
        })

        //Use console.log as data wasnt't passing to the db to make help isolate the issue.
        onSubmit({ user_id, title, content });
        //console.log({ user_id, title, content });
        setTitle('');
        setContent('');
    };

     //Return the from so that it can be called and displayed on the threads page.
    return (
        <div>
            <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded-md mb-4">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Thread Title" required className="border border-gray-300 rounded-md p-2 w-full dark:text-gray-900" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Thread Content" required className="border border-gray-300 rounded-md p-2 w-full dark:text-gray-900" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Thread</button>
            </form>
        </div>

    );
}

export default NewThreadForm;
