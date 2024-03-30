import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import image1 from '../assets/calendarImages/CalendarPic1.jpg';
import image2 from '../assets/calendarImages/CalendarPic2.jpg';
import image3 from '../assets/calendarImages/CalendarPic3.jpg';
import image4 from '../assets/calendarImages/CalendarPic4.jpg';

/**
 * Calendar page.
 * 
 * This page contains a calendar allowing users to navigate 
 * through months, click on dates linking to their associated
 * cervical cancer screening events. It also displays images with statements 
 * related to check-ups for user engagement and enhancement of user experience.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

{/* Array representing the days of the week */ }
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

{/* Variable to store formattedDate retrieved from localStorage */ }
let formattedDate = localStorage.getItem('formattedDate') || '';

/**
 * Calendar component.
 * 
 * 'OnDateClick' is the function to handle date click.
 */
const Cal = ({ onDateClick }) => {

    {/* State to manage the current date */ }
    const [date, setDate] = useState(new Date());

    {/* Constant to get the number of days in a month */ }
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    {/* Constant to get the the first day of the month */ }
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    {/* Constant to generate the calendar */ }
    const generateCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);
        const calendar = [];

        {/* Fill in the days before the first day of the month */ }
        for (let i = 0; i < firstDayOfMonth - 1; i++) {
            calendar.push(null);
        }

        {/* Fill in the days of the month */ }
        for (let i = 1; i <= daysInMonth; i++) {
            calendar.push(i);
        }

        return calendar;
    };

    {/* Constant to handle clicking on the previous month button */ }
    const handlePrevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(newDate);
    };

    {/* Constant to handle clicking on the next month button */ }
    const handleNextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
        setDate(newDate);
    };

    /**
     * 'handleDateClick' constant.
     * 
     * This constant function manages the behavior when a date in the calendar is clicked.
     * It updates the 'formattedDate' variable, which holds the formatted date string,
     * and then exports it to 'Events.jsx' as a parameter, enabling the calendar's functionality.
     */
    const handleDateClick = (day) => {
        const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
        formattedDate = formattedDate + `${clickedDate.getDate()}${clickedDate.toLocaleString('default', { month: 'long' })}${clickedDate.getFullYear()}`;
        {/* Store formattedDate in localStorage */ }
        localStorage.setItem('formattedDate', formattedDate);
        {/* Pass formatted date to parent component */ }
        onDateClick(formattedDate);
        return formattedDate;
    }

    {/* formattedDate has to be equal again with '' */ }
    formattedDate = '';

    {/* Constant to return the current date */ }
    const isToday = (day) => {
        const today = new Date();
        return (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            day === today.getDate()
        );
    };

    return (
        <div className="flex flex-col">
            {/* Calendar Styles */}
            <div className="bg-purple-200 dark:bg-gray-800">
                <div className="mx-5 my-5">
                    {/* Month Navigation */}
                    <div className="bg-pink-300 p-4 flex justify-center items-center my-2 border-2 border border-black dark:bg-gray-700 dark:border-white">
                        <button className="mr-2" onClick={handlePrevMonth}>
                            &lt;
                        </button>
                        <h2 className="text-lg font-bold mx-2">
                            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </h2>
                        <button className="ml-2" onClick={handleNextMonth}>
                            &gt;
                        </button>
                    </div>
                    {/* Days of the Week */}
                    <div className="bg-pink-300 grid grid-cols-7 gap-2 dark:bg-gray-500">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="text-center font-bold">
                                {day}
                            </div>
                        ))}
                    </div>
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2 mt-2 dark:bg-gray-800">
                        {generateCalendar().map((day, index) => (
                            <div
                                key={index}
                                className={`text-center p-3 transition duration-300 ease-in-out transform dark:bg-gray-700 ${day !== null
                                    ? `cursor-pointer border ${isToday(day)
                                        ? 'border-2 bg-pink-300 text-black border-black font-bold dark:bg-gray-300 dark:border-gray-200'
                                        : 'border-2 bg-pink-100 border-black hover:bg-pink-200 dark:border-white dark:hover:bg-gray-500'
                                    } ${day !== null ? 'hover:scale-110' : ''}`
                                    : 'bg-pink-300 dark:bg-gray-700'}`}
                                onClick={() => day !== null && handleDateClick(day)}
                            >
                                {/* Link to the calendar-events */}
                                {day !== null ? (
                                    <Link to={"/calendar-events/"}>
                                        <div>{day}</div>
                                    </Link>
                                ) : (
                                    <div>{day}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Images that contain a statement each to enhance user experience */}
                <div className="pt-10 mx-5 my-1 flex flex-row relative">
                    {/* Image 1 */}
                    <div style={{ position: 'relative', flex: '1', marginRight: '20px' }}>
                        <img src={image1} alt="CalendarPic1" style={{ width: '100%' }} />
                        <div className="absolute bottom-0 left-0 right-0 font-semibold bg-pink-400 text-black p-2 text-sm flex justify-center items-center dark:bg-gray-700 dark:text-white">
                            Regular check-ups can save lives
                        </div>
                    </div>
                    {/* Image 2 */}
                    <div style={{ position: 'relative', flex: '1', marginRight: '20px' }}>
                        <img src={image2} alt="CalendarPic2" style={{ width: '100%' }} />
                        <div className="absolute bottom-0 left-0 right-0 font-semibold bg-pink-400 text-black p-2 text-sm flex justify-center items-center dark:bg-gray-700 dark:text-white">
                            Prevention is key, get screened for cervical cancer
                        </div>
                    </div>
                    {/* Image 3 */}
                    <div style={{ position: 'relative', flex: '1', marginRight: '20px' }}>
                        <img src={image3} alt="CalendarPic3" style={{ width: '100%' }} />
                        <div className="absolute bottom-0 left-0 right-0 font-semibold bg-pink-400 text-black p-2 text-sm flex justify-center items-center dark:bg-gray-700 dark:text-white">
                            Take control, schedule your cervical cancer check-up
                        </div>
                    </div>
                    {/* Image 4 */}
                    <div style={{ position: 'relative', flex: '1' }}>
                        <img src={image4} alt="CalendarPic4" style={{ width: '100%' }} />
                        <div className="absolute bottom-0 left-0 right-0 font-semibold bg-pink-400 text-black p-2 text-sm flex justify-center items-center dark:bg-gray-700 dark:text-white">
                            Make regular screenings your priority
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Calendar component.
 */
function Calendar() {
    const handleDateClick = () => { };

    return (
        <div className="bg-purple-200 dark:bg-gray-800">
            <div className="Calendar">
                <Cal onDateClick={handleDateClick} />
                {/* Footer of the page */}
                <footer className="mt-8">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export { Calendar as default, formattedDate };
