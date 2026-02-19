import React from 'react';

const Category = () => {
    const categories = [
        {
            title: "Women",
            link: "/collections/women-1",
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_women_collection.jpg?v=1676477256&width=1600",
            gridClass: "md:col-span-8 md:row-span-2",
            textClass: "text-[32px] md:text-[30px]",
            mobileAspect: "aspect-square",
        },
        {
            title: "Men",
            link: "/collections/men-1",
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_men_collection.jpg?v=1676472896&width=1600",
            gridClass: "md:col-span-4 md:row-span-1",
            textClass: "text-[24px] md:text-[24px]",
            mobileAspect: "aspect-[2/1]",
        },
        {
            title: "Accessories",
            link: "/collections/small-leather-goods",
            image: "https://prestige-theme-allure.myshopify.com/cdn/shop/files/Media_grid_-_accessories.jpg?v=1676473163&width=1600",
            gridClass: "md:col-span-4 md:row-span-1",
            textClass: "text-[24px] md:text-[24px]",
            mobileAspect: "aspect-[2/1]",
        },
    ];

    return (
        <section className="py-2 bg-[#EFEFEF] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6">
                    {categories.map((cat, index) => (
                        <a
                            key={index}
                            href={cat.link}
                            className={`relative group overflow-hidden block ${cat.gridClass} ${cat.mobileAspect} md:aspect-auto h-full min-h-[180px] md:min-h-[320px]`}
                        >
                            {/* Image Container */}
                            <div className="w-full h-full">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-500">
                                <h2 className={`${cat.textClass} text-white font-light uppercase tracking-[0.2em] pointer-events-none text-[28px]`}>
                                    {cat.title}
                                </h2>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;