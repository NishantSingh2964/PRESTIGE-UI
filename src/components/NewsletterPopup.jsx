import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        // Automatically open after a short delay for smooth entrance
        const renderTimer = setTimeout(() => setIsRendered(true), 100);
        const openTimer = setTimeout(() => setIsOpen(true), 1000);

        return () => {
            clearTimeout(renderTimer);
            clearTimeout(openTimer);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Optional: completely unmount after transition
        setTimeout(() => setIsRendered(false), 500);
    };

    if (!isRendered) return null;

    return (
        <div
            className={`fixed bottom-0 right-0 md:bottom-8 md:right-8 z-50 w-full md:w-[380px] bg-[#1c1c1c] text-white px-8 md:px-8 py-8 md:py-8 shadow-2xl transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
                }`}
        >
            <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors group p-2"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" focusable="false" fill="none" width="18" height="18" className="transform group-hover:rotate-90 transition-transform duration-300" viewBox="0 0 16 16">
                    <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth="1"></path>
                </svg>
            </button>

            <div className="flex flex-col gap-6 md:gap-4 mt-1">
                <div className="flex flex-col gap-4 text-center md:px-2">
                    <h2 className="text-[20px] md:text-[18px] font-normal tracking-[0.3em] leading-[1.4] text-white/70 uppercase font-sans font-extralight">
                        Signup for our<br />newsletter
                    </h2>
                    <p className="text-[15px] font-light text-white/90 leading-relaxed">
                        Describe what your customers will receive when subscribing to your newsletter.
                    </p>
                </div>

                <form
                    className="flex flex-col gap-4 mt-1"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleClose();
                    }}
                >
                    <div className="relative">
                        <input
                            type="email"
                            id="newsletter-email"
                            className="w-full bg-transparent border border-[#333] text-white px-5 py-[14px] text-[15px] outline-none focus:border-white transition-colors placeholder:text-[#888] font-light"
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full bg-transparent text-white border border-white uppercase tracking-[0.15em] text-[13px] font-semibold py-[14px] overflow-hidden mt-1"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-out origin-right scale-x-100 group-hover:scale-x-0"></div>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-black">Subscribe</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterPopup;
