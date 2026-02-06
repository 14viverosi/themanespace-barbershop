import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading)',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'var(--color-primary-bg)'
                }}>
                    <h1>Something went wrong.</h1>
                    <p style={{ fontFamily: 'var(--font-body)', marginBottom: '1rem' }}>
                        We're having trouble loading this section. Please try refreshing the page.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
