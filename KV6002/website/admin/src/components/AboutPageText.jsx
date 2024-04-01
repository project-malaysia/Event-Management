import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component to display text in the about page.
 * 
 * @author Petros Tambouttsiaris W21004471
 */

function AboutPageText() {
    const [text, setText] = useState([]);

    useEffect(() => {
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/homepage/")
            .then((response) => response.json())
            .then((json) => {
                setText(json.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    const listOfText = text.map((value, index) => {
        return (
            <div key={index} className="mb-6 p-8">

                <div className="mainText">
                    {value.text.includes('\\n') || value.text.includes('@@')
                        ? value.text
                            .replace(/\\n/g, '\n')
                            .replace(/@@/g, '"')
                            .split('\n')
                            .map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    <br />
                                </React.Fragment>
                            ))
                        : <p>{value.text}</p>
                    }
                </div>
                <div className="text-center mt-5">
                    <Link to="/homepage/update-homepage/" className="text-blue-500">
                        <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                            Update Text
                        </button>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className="mainTextSection">
            <div>{listOfText}</div>
        </div>
    );
}

export default AboutPageText;
