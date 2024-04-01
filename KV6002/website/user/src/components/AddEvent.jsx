import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function AddEvent() {
    // Declare state variable to track whether to show confirmation message
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Declare the consts
    const [event_id, setEventId] = useState("");
    const [date_id, setDateId] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [village, setVillage] = useState("");
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [additionaldetails, setAdditionalDetails] = useState("");

    // Function to add a new event
    function addEvent() {
        // Create a new FormData object
        const formData = new FormData();

        // Add data to the formData object using the append method
        formData.append('event_id', event_id);
        formData.append('date_id', date_id);
        formData.append('date', date);
        formData.append('city', city);
        formData.append('village', village);
        formData.append('time', time);
        formData.append('address', address);
        formData.append('location', location);
        formData.append('additional_details', additionaldetails);

        // Add the event to the API
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/event/add", {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be added');
                }
                alert('The event has been added successfully. Please go back to the calendar to see, update, or delete the event that you have just crested.');
            })
            .catch((error) => {
                console.error('Error reason:', error);
            });
    }

    // Function to check if there are empty fields
    function handleAdd() {
        if (event_id === "" || date_id === "" || date === "" || city === "" || village === "" || time === "" ||
            address === "" || location === "" || additionaldetails === "") {
            setShowConfirmation(false);
            alert("Please fill out all required fields.");
            return;
        } else {
            setShowConfirmation(true);
        }
    }

    // If the user clicks 'yes', it will enter the 'addEvent' function
    function handleConfirmation(value) {
        setShowConfirmation(false);
        if (value === 'yes') {
            addEvent();
        }
    }

    if (showConfirmation) {
        return (
            <div className="bg-purple-200 dark:bg-gray-800 flex justify-center items-center" style={{ minHeight: 'calc(99vh - 4rem)' }}>
                <div className="max-w-md mx-auto p-6 bg-pink-200 border-2 border border-gray-900 dark:bg-gray-700 rounded-md dark:border-white">
                    <p className="mb-2 text-center font-bold">Are you sure you want to add this Event?</p>
                    <div className="flex justify-center items-center mt-4 space-x-4">
                        <button
                            onClick={() => handleConfirmation('yes')}
                            className="px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => handleConfirmation('no')}
                            className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bg-purple-200 dark:bg-gray-800 min-h-screen">
                <div className="text-center pt-10">
                    <h1 className="text-3xl font-bold mb-4">Insert a new <span className="text-pink-600 dark:text-pink-400">Event</span></h1>
                </div>
                <div className="max-w-3xl mx-auto p-4">
                    <label className="block mb-4">
                        <div className="font-bold py-1">Event ID *</div>
                        <input type="text" placeholder="Please insert a valid numeric event id"
                            id="event_id"
                            onChange={(e) => setEventId(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Date ID *</div>
                        <input type="text" placeholder="Please insert a valid date_id, e.g.,'1April2024' (date|month|year)"
                            id="date_id"
                            onChange={(e) => setDateId(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Date *</div>
                        <input type="text" placeholder="Please insert the date of the event"
                            id="date"
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">City *</div>
                        <input type="text" placeholder="Please insert the city of the event"
                            id="city"
                            onChange={(e) => setCity(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Village *</div>
                        <input type="text" placeholder="Please insert the village of the event"
                            id="village"
                            onChange={(e) => setVillage(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Time *</div>
                        <input type="text" placeholder="Please insert the time of the event"
                            id="time"
                            onChange={(e) => setTime(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Address *</div>
                        <input type="text" placeholder="Please insert the address of the event"
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Precise Location *</div>
                        <input type="text" placeholder="Please insert the precise location of the event from Google Maps"
                            id="location"
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <label className="block mb-4">
                        <div className="font-bold py-1">Additional Details *</div>
                        <input type="text" placeholder="Please insert any additional details of the event"
                            id="additional-details"
                            onChange={(e) => setAdditionalDetails(e.target.value)}
                            className="bg-pink-200 border-2 border border-gray-900 rounded-md p-2 w-full dark:text-white dark:bg-gray-700 dark:border-white"
                            autoComplete="off"
                        />
                    </label>
                    <div className="flex justify-center">
                        <Link to="/calendar-events" className="px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800 mr-2">
                            Back
                        </Link>
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800"
                        >
                            Add Event
                        </button>
                    </div>
                </div>
                <footer className="mt-8">
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default AddEvent;
