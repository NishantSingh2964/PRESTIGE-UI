import React, { useRef, useState, useEffect } from 'react'

const WeekendCollection = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const products = [
        {
            id: 1,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=800",
            hoverImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-02_a0706e23-388d-4072-ab04-c15e247e3323.jpg?v=1677259432&width=800",
            title: "Le Compact Weekender Buffalo Black",
            price: "$470.00",
            badge: ""
        },
        {
            id: 2,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=800",
            hoverImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-03_c4c1cb18-c139-4fab-b283-1c00b22babfc.jpg?v=1677259382&width=800",
            title: "Le Compact Weekender Black Pebbled Leather",
            price: "$470.00",
            badge: "Best seller"
        },
        {
            id: 3,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=800",
            hoverImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-03_eb9dd61f-40f8-4d5c-a216-f6f52aef816e.jpg?v=1677259405&width=800",
            title: "Le Compact Weekender Blue Pebbled Leather",
            price: "$470.00",
            badge: ""
        },
        {
            id: 4,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=800",
            hoverImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-02_cb83be45-fb02-4399-8460-4f583902e185.jpg?v=1677259450&width=800",
            title: "Le Compact Weekender Buffalo Brown",
            price: "$470.00",
            badge: ""
        },
        {
            id: 5,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Kaki-01_077122a9-b1f4-4b03-afd8-c48e60222dfa.jpg?v=1676887299&width=800",
            hoverImage: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Kaki-02_5a50aea7-ac4c-45d4-95c3-dfd377f39890.jpg?v=1677259465&width=800",
            title: "Le Compact Weekender Buffalo Khaki",
            price: "$470.00",
            badge: ""
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth; // Scroll by one screen width
            const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: target,
                behavior: 'smooth'
            });
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const current = scrollRef.current;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }
        return () => {
            if (current) {
                current.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    return (
        <section className="bg-[#EFEFEF] text-[#1c1c1c] w-full pb-20 md:pb-28">
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-5 pb-16 md:pb-24 px-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#1c1c1c]/60">
                        Le weekend bag
                    </p>
                    <h2 className="text-[26px] md:text-[34px] uppercase tracking-[0.22em] font-light text-[#1c1c1c] leading-tight">
                        Ideal for a weekend outing
                    </h2>
                </div>

                {/* PRODUCT CONTAINER WRAPPER FOR ARROWS */}
                <div className="relative group/scroll">

                    {/* Left Arrow */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="hidden md:flex absolute left-4 top-[40%] items-center justify-center w-12 h-12 bg-white/80 hover:bg-white text-[#1c1c1c] rounded-full shadow-lg z-20 opacity-0 group-hover/scroll:opacity-100 transition-all duration-300"
                            aria-label="Scroll Left"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Right Arrow */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="hidden md:flex absolute right-4 top-[40%] items-center justify-center w-12 h-12 bg-white/80 hover:bg-white text-[#1c1c1c] rounded-full shadow-lg z-20 opacity-0 group-hover/scroll:opacity-100 transition-all duration-300"
                            aria-label="Scroll Right"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* PRODUCT CONTAINER */}
                    <div
                        ref={scrollRef}
                        className="
                            flex overflow-x-auto
                            gap-x-4 md:gap-x-6 lg:gap-x-8
                            snap-x snap-mandatory 
                            scrollbar-hide 
                            px-4 md:px-6 lg:px-8
                        "
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="
                                    min-w-[280px] w-[80vw]
                                    md:min-w-[calc((100%-3*1.5rem)/4)] md:max-w-[calc((100%-3*1.5rem)/4)]
                                    lg:min-w-[calc((100%-3*2rem)/4)] lg:max-w-[calc((100%-3*2rem)/4)]
                                    flex-shrink-0
                                    flex flex-col items-center text-center
                                    snap-start
                                    group
                                "
                            >

                                {/* Badge (Desktop centered above image) - Fixed height for perfect image alignment */}
                                <div className="hidden md:flex items-center justify-center h-[14px] mb-8">
                                    {product.badge ? (
                                        <span className="text-[11px] uppercase tracking-[0.3em] text-[#1c1c1c]/60">
                                            {product.badge}
                                        </span>
                                    ) : null}
                                </div>

                                {/* Image */}
                                <div className="relative w-full max-w-[380px] md:max-w-none aspect-[1/0.9] overflow-hidden mb-8 md:mb-10">

                                    {/* Mobile Badge (top right only on small screens) */}
                                    {product.badge && (
                                        <div className="absolute top-0 right-0 p-3 md:hidden z-10">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1c1c1c]/60">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Primary Image */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                                    />

                                    {/* Hover Image */}
                                    <img
                                        src={product.hoverImage}
                                        alt={`${product.title} - Back`}
                                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                                    />

                                    {/* Quick Add */}
                                    <div className="absolute bottom-0 right-0 p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm flex items-center justify-center btn-hover-white">
                                            <svg
                                                className="w-4 h-4 transform rotate-90 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex flex-col gap-2 items-center px-4">
                                    <h3 className="text-[12px] uppercase tracking-[0.18em] font-light leading-relaxed text-[#1c1c1c] max-w-[260px]">
                                        {product.title}
                                    </h3>
                                    <p className="text-[12px] font-light text-[#1c1c1c]/50 tracking-[0.15em]">
                                        {product.price}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WeekendCollection;
