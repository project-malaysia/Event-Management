import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ul>
                <li>
                    <Link to='/Administrator'>Administrator</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminLinks;