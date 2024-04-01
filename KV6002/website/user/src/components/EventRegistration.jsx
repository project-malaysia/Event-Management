import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const EventRegistration = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [attendeeCount, setAttendeeCount] = useState(0);
    const eventId = 1; // Assuming you're working with a single event

    useEffect(() => {
        // Initially load attendee count for the event
        updateAttendeeCount();
    }, []);

    const updateAttendeeCount = () => {
        fetch(`https://w20013313.nuwebspace.co.uk/GroupProject/getAttendeeCount.php?eventId=${eventId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setAttendeeCount(data.attendeeCount);
                } else {
                    console.error(`Failed to fetch attendee count for event ${eventId}:`, data.error);
                }
            })
            .catch((error) => {
                console.error(`Error fetching attendee count for event ${eventId}:`, error);
            });
    };

    const handleRegister = () => {
        const userName = prompt("Please enter your initials or name:", "");
        if (userName) {
            fetch('https://w20013313.nuwebspace.co.uk/GroupProject/connection.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `userName=${encodeURIComponent(userName)}&eventId=${eventId}`,
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert(`Thank you for registering, ${userName}, for the event!`);
                        updateAttendeeCount();
                        setIsRegistered(true); // Mark as registered
                    } else {
                        alert('Registration failed. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again.');
                });
        } else {
            alert("You didn't enter a name.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-purple-200 dark:bg-gray-800">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Event Registration</h1>
                <button
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${isRegistered ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    onClick={handleRegister}
                    disabled={isRegistered}
                >
                    <strong>Attend Event</strong>
                </button>
                <div className="text-xl font-bold mt-4 text-gray-900 dark:text-white">Attendees: {attendeeCount}</div>
            </div>
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default EventRegistration;
