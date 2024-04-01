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

function EventForm({ addEvent, updateEvent, currentEvent }) {
    const [event, setEvent] = useState(currentEvent || { title: '', description: '', date: '', time: '', location: '', capacity: 0 });

    const handleChange = e => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (event.id) {
            updateEvent(event);
        } else {
            addEvent(event);
        }
        setEvent({ title: '', description: '', date: '', time: '', location: '', capacity: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={event.title} onChange={handleChange} placeholder="Title" required />
            <input name="description" value={event.description} onChange={handleChange} placeholder="Description" required />
            <input type="date" name="date" value={event.date} onChange={handleChange} required />
            <input type="time" name="time" value={event.time} onChange={handleChange} required />
            <input name="location" value={event.location} onChange={handleChange} placeholder="Location" required />
            <input type="number" name="capacity" value={event.capacity} onChange={handleChange} placeholder="Capacity" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default EventForm;