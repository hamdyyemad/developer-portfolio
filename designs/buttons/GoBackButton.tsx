"use client";
import { useRouter } from 'next/navigation';

export function GoBackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        // Get the URL of the page that referred the user to the current page
        const referrer = document.referrer;

        // Get the current domain/host (e.g., 'example.com')
        const currentHost = window.location.host;

        // If there's a referrer and it's from the same host as the current page
        if (referrer && new URL(referrer).host === currentHost) {
            // Navigate back in browser history
            window.history.back();
        } else {
            // If the referrer is not from the same site (or doesn't exist), route to homepage
            router.push('/');
        }
    };

    return (
        <button
            onClick={handleGoBack}
            className="inline-flex items-center px-8 py-4 bg-[#232323] text-white font-semibold rounded-lg hover:bg-[#333] transition-colors border border-[#333]"
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
        </button>
    );
}
