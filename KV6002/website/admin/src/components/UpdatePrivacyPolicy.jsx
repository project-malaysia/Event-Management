import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function UpdatePrivacyPolicy() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [data, setData] = useState(null);

    const [mainText, setMainText] = useState("");

    useEffect(() => {
        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/privacy-policy/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be fetched');
                }
                return response.json();
            })
            .then((json) => {
                if (json.data.length > 0) {
                    setData(json.data[0]);
                    setMainText(json.data[0].text);
                } else {
                    throw new Error("Data ID not found");
                }
            })
            .catch(error => {
                console.error('Error reason:', error);
                setError(true);
            })
    }, []);

    function updateText() {
        const formData = new FormData();
        formData.append('text', mainText);

        fetch("https://w21004471.nuwebspace.co.uk/kv6002/api/privacy-policy/add", {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be updated');
                }
                alert('Privacy Policy page has been updated successfully. Please go back to see the updated text.');
            })
            .catch((error) => {
                console.error('Error reason:', error);
            });
    }

    function handleUpdate() {
        if (mainText === "") {
            setShowConfirmation(false);
            alert("Please fill out the required field.");
            return;
        } else {
            setShowConfirmation(true);
        }
    }

    function handleConfirmation(value) {
        setShowConfirmation(false);
        if (value === 'yes') {
            updateText();
        }
    }

    function replaceSymbol(e) {
        const inputValue = e.target.value;
        const replacedValue = inputValue.replace(/\n/g, '\\n');
        setMainText(replacedValue);
    }

    if (data) {
        if (showConfirmation) {
            return (
                <div className="bg-purple-200 dark:bg-gray-800 flex justify-center items-center" style={{ minHeight: 'calc(99vh - 4rem)' }}>
                    <div className="max-w-md mx-auto p-6 bg-pink-200 border-2 border border-gray-900 dark:bg-gray-700 rounded-md dark:border-white">
                        <p className="mb-2 text-center font-bold">Are you sure you want to update Privacy Policy?</p>
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
                <div className="bg-purple-200 dark:bg-gray-800" style={{ minHeight: 'calc(99vh - 4rem)' }}>
                    <div style={{ marginTop: 0, paddingTop: 30 }}>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Update the text on the <span className="text-pink-600 dark:text-pink-400">Privacy Policy</span></h1>
                        </div>
                        <div className="max-w-3xl mx-auto mt-4 p-4">
                            <div className="block font-bold">
                                Text content *
                            </div>
                            <textarea
                                name="textContent"
                                rows="15"
                                value={mainText}
                                placeholder={mainText.length === 0 ? "Insert your text here" : ""}
                                onChange={replaceSymbol}
                                className="bg-pink-200 mt-1 p-2 block w-full border-2 border border-gray-900 rounded-md dark:text-white dark:bg-gray-700 dark:border-white"
                            />
                            <div >
                                <div className="flex justify-center mt-4">
                                    <Link to="/privacy-policy" className="px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800 mr-2">
                                        Back
                                    </Link>
                                    <button
                                        onClick={handleUpdate}
                                        className="px-4 py-2 bg-purple-600 font-bold text-white rounded-md hover:bg-purple-800 focus:outline-none"
                                    >
                                        Update Text
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="mt-8">
                        <Footer />
                    </footer>
                </div>
            );
        }
    }
}

export default UpdatePrivacyPolicy;
