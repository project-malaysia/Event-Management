import React from 'react';

/**
 * Pagination component.
 * 
 * The Pagination component is responsible for rendering pagination controls
 * that allow users to navigate through a list of events. It provides buttons 
 * for moving to the previous and next pages of content, and it disables these 
 * buttons when the user is at the first or last page, respectively.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function Pagination({ page, totalPages, showPrevious, showNext }) {
    const isAtFirstPage = page === 1;
    const isAtLastPage = page >= totalPages;

    /**
     * Constant to generate button styles based on whether the button is disabled.
     * 'isDisabled' parameter indicates whether the button is disabled. 
     */
    const buttonStyle = (isDisabled) => (
        `px-4 py-2 rounded mr-2 ${isDisabled
            ? 'bg-purple-300 dark:bg-gray-600 cursor-not-allowed'
            : 'bg-purple-600 text-white hover:bg-purple-800'
        }`
    );

    return (
        <div className="mt-4 flex justify-center">
            <button
                onClick={showPrevious}
                disabled={isAtFirstPage}
                className={`${buttonStyle(isAtFirstPage)} mr-2`}
                style={{ width: '100px' }}
            >
                <span className="font-semibold">PREVIOUS</span>
            </button>
            <button
                onClick={showNext}
                disabled={isAtLastPage}
                className={buttonStyle(isAtLastPage)}
                style={{ width: '100px' }}
            >
                <span className="font-semibold">NEXT</span>
            </button>
        </div>
    );
}

export default Pagination;
