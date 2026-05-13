import { ArrowLeft } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Page Not Found | Dr. Sumegh S. Tharewal';
    }, []);

    return (
        <div className="page-wrap flex-1 flex flex-col items-center justify-center min-h-[70vh]">
            <div className="container max-w-lg text-center space-y-6">
                <span className="section-kicker mx-auto">Error 404</span>
                <h1 className="page-title text-6xl">Page not found</h1>
                <p className="page-lead mx-auto">
                    The requested page could not be located. It may have been moved or the URL might be incorrect.
                </p>
                <Link to="/" className="btn-primary mx-auto mt-4 w-fit">
                    <ArrowLeft size={18} weight="bold" /> Return to home
                </Link>
            </div>
        </div>
    );
}
