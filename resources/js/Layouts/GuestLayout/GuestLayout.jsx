import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import './style.scss';
export default function Guest({ children }) {
    return (
        <div className="Login-container">
            <div className="content-login">
                {children}
            </div>
        </div>
    );
}
// min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100
// w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg