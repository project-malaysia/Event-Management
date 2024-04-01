import React, { useState, useEffect } from 'react';

function PrivacyPolicyText() {
    const [text, setText] = useState([]);

    useEffect(() => {
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/privacy-policy/")
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
            </div>
        );
    });

    return (
        <div className="mainTextSection">
            <div>{listOfText}</div>
        </div>
    );
}

export default PrivacyPolicyText;
