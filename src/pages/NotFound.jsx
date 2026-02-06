import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-page section-padding" style={{
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-dark-green)' }}>404</h1>
            <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
