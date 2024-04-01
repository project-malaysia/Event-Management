import React, { useState } from 'react';

function DeleteEvent() {
    const [eventId, setEventId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await deleteEvent(eventId);
        setEventId(''); // Reset input after submission
    };

    const deleteEvent = async (id) => {
        try {
            const response = await fetch(`https://w21021015.nuwebspace.co.uk/teamProject/DeleteEvent/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Event deleted successfully!');
            } else {
                alert('Failed to delete event.');
            }
        } catch (error) {
            alert('Error deleting event.');
        }
    };

    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen p-8">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Delete Event</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4">
                <input
                    type="text"
                    value={eventId}
                    onChange={(e) => setEventId(e.target.value)}
                    placeholder="Event ID"
                    className="p-2 border rounded-md border-gray-300 mb-2 bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Delete Event
                </button>
            </form>
        </div>
    );
}

export default DeleteEvent;