import React from 'react';

/**
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function EventDetails(props) {
    return (
        <div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">Date:</h2>
                <p>{props.date}</p>
            </div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">City:</h2>
                <p>{props.city}</p>
            </div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">Village:</h2>
                <p>{props.village}</p>
            </div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">Time:</h2>
                <p>{props.time}</p>
            </div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">Address:</h2>
                <p>{props.address}</p>
            </div>
            <div className="flex items-center">
                <h2 className="text-lg font-bold my-1 mr-2">Precise Location:</h2>
                <a
                    href={props.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 dark:text-blue-400 dark:hover:text-blue-500"
                >
                    View The Precise Location Of The Screening On Google Maps
                </a>
            </div>
            <h2 className="text-lg font-bold my-1">Additional Details:</h2>
            <p>{props.additional_details}</p>
        </div>
    );
}

export default EventDetails;
