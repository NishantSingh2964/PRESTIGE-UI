import React from 'react'

const WeekendCollection = () => {
    const products = [
        {
            id: 1,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.jpg?v=1676887330&width=800",
            title: "Le Compact Weekender Buffalo Black",
            price: "$470.00",
            badge: ""
        },
        {
            id: 2,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=800",
            title: "Le Compact Weekender Black Pebbled Leather",
            price: "$470.00",
            badge: "Best seller"
        },
        {
            id: 3,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Bleu-01_3ce2f9ae-8483-4136-9cf1-1c5bcb832718.jpg?v=1676887344&width=800",
            title: "Le Compact Weekender Blue Pebbled Leather",
            price: "$470.00",
            badge: ""
        },
        {
            id: 4,
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.jpg?v=1676887315&width=800",
            title: "Le Compact Weekender Buffalo Brown",
            price: "$470.00",
            badge: ""
        }
    ];

    return (
        <section className="bg-[#EFEFEF] text-[#1c1c1c] w-full pb-16 md:pb-24">
            <div className="w-full">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 pb-12 md:pb-16 px-6">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]/60">
                        Le weekend bag
                    </p>
                    <h2 className="text-[22px] md:text-[28px] uppercase tracking-[0.18em] font-normal text-[#1c1c1c] max-w-[80%] md:max-w-none leading-tight">
                        Ideal for a weekend outing
                    </h2>
                </div>

                {/* Product Grid / Scrollable Container - Refined for "small image" aesthetic with reduced starting margin */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 md:gap-x-5 snap-x snap-mandatory scrollbar-hide px-6 md:px-4 lg:px-8 pb-4">
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[140px] w-[45vw] md:min-w-0 flex-shrink-0 group cursor-pointer flex flex-col items-center text-center snap-start">

                            {/* Image Container */}
                            <div className="relative w-full aspect-[1/0.95] overflow-hidden mb-5 md:mb-6">
                                {/* Badge - Top Right as per screenshot */}
                                {product.badge && (
                                    <div className="absolute top-0 right-0 z-10 p-4">
                                        <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#1c1c1c]/60">
                                            {product.badge}
                                        </span>
                                    </div>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Quick Add Button - Square "+" white button bottom right */}
                                <div className="absolute bottom-0 right-0 p-4">
                                    <button className="w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col gap-1.5 items-center px-4">
                                <h3 className="text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-normal leading-relaxed text-[#1c1c1c]">
                                    {product.title}
                                </h3>
                                <p className="text-[11px] md:text-[12px] font-normal text-[#1c1c1c]/50 tracking-[0.1em]">
                                    {product.price}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WeekendCollection
