import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

/**
 * Component that deletes an event from the API.
 * 
 * @author Petros Tamboutsiaris W21004471
 */
function DeleteEvent() {

    const { event_id } = useParams();

    // Function to delete the card
    function deleteEvent() {

        // Delete the event from the API
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/event/delete?event_id=" + event_id, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be fetched');
                }
                alert('The event has been deleted. Please go back to the calendar.');
            })
            .catch((error) => {
                console.error('Error reason:', error);
            });
    }

    // If the user clicks 'yes', it will enter the 'deleteEvent' function
    function handleConfirmation(value) {
        if (value === 'yes') {
            deleteEvent();
        }
    }

    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex justify-center items-center" style={{ minHeight: 'calc(99vh - 4rem)' }}>
            <div className="max-w-md mx-auto p-6 bg-pink-200 border-2 border border-gray-900 dark:bg-gray-700 rounded-md dark:border-white">
                <p className="mb-2 text-center font-bold">Are you sure you want to delete this event?</p>
                <div className="flex justify-center items-center mt-4 space-x-4">
                    <button
                        onClick={() => handleConfirmation('yes')}
                        className="px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none"
                    >
                        Yes
                    </button>
                    <Link to="/calendar-events/">
                        <button
                            className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none"
                        >
                            No
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteEvent;
