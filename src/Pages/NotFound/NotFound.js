import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/">
                <button className="btn-danger">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;