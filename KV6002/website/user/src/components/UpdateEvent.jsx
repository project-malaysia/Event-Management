import React, { useState } from 'react';

function UpdateEvent() {
    const [eventData, setEventData] = useState({
        event_id: '',
        date: '',
        city: '',
        village: '',
        time: '',
        address: '',
        location: '',
        additional_details: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateEvent(eventData);
        // Optionally reset form or navigate away
        setEventData({
            event_id: '',
            date: '',
            city: '',
            village: '',
            time: '',
            address: '',
            location: '',
            additional_details: '',
        });
    };

    const updateEvent = async (data) => {
        try {
            const response = await fetch(`https://w21021015.nuwebspace.co.uk/teamProject/UpdateEvent/${data.event_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert('Event updated successfully!');
            } else {
                alert('Failed to update event.');
            }
        } catch (error) {
            alert('Error updating event.');
        }
    };

    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen p-8">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Update Event</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4">
                {/* Dynamically create input fields for eventData */}
                {Object.keys(eventData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label htmlFor={key} className="dark:text-white capitalize">{key.replace('_', ' ')}</label>
                        <input
                            id={key}
                            type={key === 'date' ? 'date' : 'text'}
                            name={key}
                            value={eventData[key]}
                            onChange={handleChange}
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
                            className="p-2 border rounded-md border-gray-300 mb-2 bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required={key !== 'event_id'}
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Update Event
                </button>
            </form>
        </div>
    );
}

export default UpdateEvent;