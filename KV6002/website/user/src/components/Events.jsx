import React, { useState, useEffect } from 'react';
import EventsDetails from '../components/EventsDetails';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import image from '../assets/mainImage/mainimage.jpg';
import imagenocontent from '../assets/noContentImage/nocontentimage.png';
import icon1 from '../assets/icons/searchicon.jpg';
import icon2 from '../assets/icons/filtericon.jpg';
import { Link } from 'react-router-dom';
import { formattedDate } from '../pages/Calendar';

function Events() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [searchContent, setSearchContent] = useState('');
    const [contentStatus, setContentStatus] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {

        setPage(1);
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/events?date_id=" + formattedDate)
            .then((response) => response.json())
            .then((json) => {
                setContent(json.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, [formattedDate]);

    const highlightMatch = (text, searchTerm) => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const index = lowerCaseText.indexOf(lowerCaseSearchTerm);

        if (index === -1) {
            return text;
        }

        const beforeMatch = text.substring(0, index);
        const match = text.substring(index, index + searchTerm.length);
        const afterMatch = text.substring(index + searchTerm.length);

        return (
            <>
                {beforeMatch}
                <span className="bg-yellow-300 dark:bg-yellow-600">{match}</span>
                {afterMatch}
            </>
        );
    };

    const searchResearchContent = (item) => (
        item.date?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.city?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.village?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.time?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.address?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.location?.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.additional_details?.toLowerCase().includes(searchContent.toLowerCase())
    );

    const filterContent = (item) => {
        const matchesContentStatus = contentStatus === 'all' || (typeof item.city === 'string' && item.city.toLowerCase() === contentStatus.toLowerCase());
        return matchesContentStatus;
    };

    const filteredContent = content && content.length > 0 ? content.filter(filterContent).filter(searchResearchContent) : [];

    const onChangeSearch = (event) => {
        setSearchContent(event.target.value);
        setPage(1); // Reset page to 1 when search term changes
    }

    const onChangeContentStatus = (event) => {
        setPage(1);
        setContentStatus(event.target.value);
    }

    const startKey = (page - 1) * 4;
    const endKey = startKey + 4;

    let contentMessage = '';

    if ((contentStatus === 'all' || contentStatus === 'kuala lumpur' || contentStatus === 'johor bahru' || contentStatus === 'malacca city' || contentStatus === 'kuching' || contentStatus === 'ipoh' || contentStatus === 'george town') && (searchContent.length === 0)) {
        contentMessage = 'There are no available cervical cancer screening events for this day or city yet, or the day has already passed. Please return to the calendar.';
    } else {
        contentMessage = 'There are no available cervical cancer screening events matching your search or city filtering criteria.';
    }


    const showNext = () => {
        setPage(page + 1);
    };

    const showPrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleBackClick = () => {
        setSelectedEvent(null);
    };

    const listOfContent = filteredContent.length === 0 ? (
        <div className="flex flex-col items-center mt-16">
            <div className="bg-pink-300 dark:bg-gray-600 p-4 rounded-lg mb-4">
                <p className="text-gray-900 dark:text-white text-center">{contentMessage}</p>
            </div>
            <img src={imagenocontent} alt="Sorry" className="w-40 h-40" />
        </div>
    ) : (
        filteredContent.slice(startKey, endKey).map((item, index) => {
            return (
                <section key={index} onClick={() => handleEventClick(item)}>
                    <div className="p-5 my-8 rounded bg-pink-300 text-black border-2 border border-gray-900 dark:bg-gray-600 dark:border-white dark:text-white transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                        <EventsDetails
                            date={highlightMatch(item.date, searchContent)}
                            city={highlightMatch(item.city, searchContent)}
                            village={highlightMatch(item.village, searchContent)}
                            time={highlightMatch(item.time, searchContent)}
                            address={highlightMatch(item.address, searchContent)}
                            location={item.location}
                            additional_details={highlightMatch(item.additional_details, searchContent)}
                        />
                    </div>
                </section>
            );
        })
    );

    const paginationComponent = filteredContent.length > 0 && (
        <Pagination
            page={page}
            totalPages={Math.ceil(filteredContent.length / 4)}
            showNext={showNext}
            showPrevious={showPrevious}
        />
    );

    const eventModal = selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleBackClick}>
            <div className="bg-pink-300 border border-black p-8 rounded-lg max-w-2xl w-full dark:bg-gray-700 dark:border-white">
                <EventsDetails
                    date={highlightMatch(selectedEvent.date, searchContent)}
                    city={highlightMatch(selectedEvent.city, searchContent)}
                    village={highlightMatch(selectedEvent.village, searchContent)}
                    time={highlightMatch(selectedEvent.time, searchContent)}
                    address={highlightMatch(selectedEvent.address, searchContent)}
                    location={selectedEvent.location}
                    additional_details={highlightMatch(selectedEvent.additional_details, searchContent)}
                />
                {/*I added the button that links to Rhys Roberts' work */}
                <div className="flex justify-center">
                    <Link to="/attendance" className="font-bold mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                        I will attend
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-purple-200 dark:bg-gray-800 flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="flex justify-center flex-col">
                    <div className="relative">
                        <img src={image} alt="About" className="w-auto max-h-60" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-4xl italic bg-purple-600 py-4 dark:bg-gray-900">
                            <div className="px-4">
                                The Cervical Cancer Screening Events for the Selected Day
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-5 mr-5">
                            <label className="block mb-2 text-gray-900 dark:text-white flex items-center relative">
                                {/* Search Icon */}
                                <img src={icon1} alt="Search" className="absolute left-1 top-1/2 transform -translate-y-1/2 w-9 h-9" />
                                <input
                                    type="text"
                                    id="searchContent"
                                    name="searchContent"
                                    value={searchContent}
                                    onChange={onChangeSearch}
                                    placeholder="Search..."
                                    className="border-2 border border-black rounded pl-12 p-2 w-full sm:w-60 bg-pink-200 dark:bg-gray-700 dark:border-white dark:text-white"
                                />
                            </label>
                        </div>
                        <div className="mt-5">
                            <label className="block mb-2 text-gray-900 dark:text-white flex items-center relative">
                                {/* Filter Icon */}
                                <img src={icon2} alt="Filter" className="absolute left-1 top-1/2 transform -translate-y-1/2 w-9 h-9" />
                                <select
                                    id="contentStatus"
                                    name="contentStatus"
                                    className="border rounded border-2 border-black pl-12 p-2 w-full sm:w-60 bg-pink-200 dark:bg-gray-700 dark:border-white dark:text-white"
                                    onChange={onChangeContentStatus}
                                    value={contentStatus}
                                >
                                    <option value="all">All Cities</option>
                                    <option value="kuala lumpur">Kuala Lumpur</option>
                                    <option value="johor bahru">Johor Bahru</option>
                                    <option value="malacca city">Malacca City</option>
                                    <option value="kuching">Kuching</option>
                                    <option value="ipoh">Ipoh</option>
                                    <option value="george town">George Town</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-60">
                    {filteredContent.length > 0 && (
                        <h2 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">
                            Total Screening Events: {filteredContent.length}
                        </h2>
                    )}
                    {listOfContent}
                </div>
                {paginationComponent}
                {eventModal}
            </div>
            <footer className="mt-8">
                <Footer />
            </footer>
        </div>
    );
}

export default Events;