import React, { useState } from 'react';


/**
* 
*
*  
*  
*
*  @author Nabil Rahman w21021015
*
*/

function AddEvent() {
    const [eventData, setEventData] = useState({
        // Initialize event data structure, e.g.,
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
        await addNewEvent(eventData);
        // Reset form after submission for better UX
        setEventData({
            date: '',
            city: '',
            village: '',
            time: '',
            address: '',
            location: '',
            additional_details: '',
        });
        // Call function to add the event
        await addNewEvent(eventData);

    };

    // Function to add a new event
    const addNewEvent = async (newEventData) => {
        try {
            const response = await fetch('https://w21021015.nuwebspace.co.uk/teamProject/AddEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEventData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Event added successfully:", data);
                alert('Event added successfully!');

            } else {
                console.error("Failed to add event");
                alert('Failed to add event.');
                // Handle errors, e.g., show an error message to the user
            }
        } catch (error) {
            console.error("Error adding event:", error);
            alert('Error adding event.');
            // Handle errors, e.g., show an error message to the user
        }
    };


    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen p-8">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Event</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4">
                {Object.keys(eventData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label htmlFor={key} className="dark:text-white capitalize">{key}</label>
                        <input
                            id={key}
                            type="text"
                            name={key}
                            value={eventData[key]}
                            onChange={handleChange}
                            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                            className="p-2 border rounded-md border-gray-300 mb-2 bg-pink-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Event
                </button>
            </form>
        </div>
    );
}

export default AddEvent;