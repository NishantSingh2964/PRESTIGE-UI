import React, { useState } from 'react';

const Bestseller = () => {
    const [activeTab, setActiveTab] = useState('Women');

    const products = {
        Women: [
            {
                id: 1,
                title: 'Le Mini Dalia Black Liégé',
                price: '$350.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-01.webp?v=1677224916&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Mini-Dalia-Lisse-Noir-04.webp?v=1677224925&width=1000',
                badge: null
            },
            {
                id: 2,
                title: 'Le Gina Petrol Liégé',
                price: '$380.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.jpg?v=1676886232&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Gina-Liege-Petrole-04_6fc019d3-38a9-4a96-be87-9a51a5e9a83a.jpg?v=1677243433&width=1000',
                badge: 'NEW'
            },
            {
                id: 3,
                title: 'Le Sac Elegant Brown Patent Leather',
                price: '$380.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.jpg?v=1676886288&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Elegant-Cuir-Miroir-Chocolat-02_cc09ca74-457f-42e0-a1d8-7a1cf8cd90b7.jpg?v=1677139259&width=1000',
                badge: 'NEW'
            },
            {
                id: 4,
                title: 'Le Grand Nova Ivory Liégé',
                price: '$450.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.jpg?v=1676886728&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Grand-Nova-Lisse-Ivoire-02_348ac141-50cb-4494-983f-723ee1be4298.jpg?v=1677153834&width=1000',
                badge: 'BEST SELLER'
            }
        ],
        Men: [
            {
                id: 5,
                title: 'Le Slim Briefcase Black Pebbled Leather',
                price: '$420.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Noir-01_2d183d7c-8a43-43b0-8b41-44a7a3282228.jpg?v=1676887507&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Petit-Graine-Noir-03_13d4489b-d9e4-4f78-bb2b-896865bf3ee5.jpg?v=1677260830&width=1000',
                badge: 'NEW'
            },
            {
                id: 6,
                title: 'Le Portfolio Navy',
                price: '$320.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Cartable-Cuir-Graine-Bleu-01_2741b91d-7bc9-411b-9ba8-913fcacd16fc.jpg?v=1676887521&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Cartable-Cuir-Graine-Bleu-02-2_d7f8dbf3-eece-4986-9869-c68066176590.jpg?v=1681404611&width=1000',
                badge: null
            },
            {
                id: 7,
                title: 'Le Nouveau Cartable Buffalo Khaki',
                price: '$420.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Nouveau-Cartable-Buffle-Kaki-01_101ea695-e525-4937-990b-eb63b931b68a.jpg?v=1676887385&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Le-Nouveau-Cartable-Buffle-Kaki-02_da5457cf-ab7f-47e2-bea7-f249b4e64dd4.jpg?v=1677260284&width=1000',
                badge: null
            },
            {
                id: 8,
                title: 'Le Compact Weekender Black Pebbled Leather',
                price: '$470.00',
                image: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.jpg?v=1676887357&width=1000',
                secondaryImage: 'https://prestige-theme-allure.myshopify.com/cdn/shop/products/Weekender-Graine-Noir-03_c4c1cb18-c139-4fab-b283-1c00b22babfc.jpg?v=1677259382&width=1000',
                badge: 'BEST SELLER'
            }
        ]
    };

    return (
        <section className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="w-full max-w-[1440px] mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col items-center gap-6 md:gap-5 mb-12 md:mb-20">
                    <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light text-gray-800">Our best sellers</p>
                    <div className="flex gap-12 md:gap-9">
                        {['Women', 'Men'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[18px] md:text-[28px] tracking-[0.2em] uppercase font-light transition-all duration-300 relative pb-1 ${activeTab === tab ? 'text-gray-800' : 'text-gray-800 hover:text-gray-800'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid / Scrollable Container */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-12 lg:gap-x-24 gap-y-12 md:gap-y-12 snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0">
                    {products[activeTab].map((product) => (
                        <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 group cursor-pointer snap-start">
                            {/* Badge Above Image */}
                            <div className="h-4 mb-1">
                                {product.badge && (
                                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-medium text-gray-500">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden mb-4 md:mb-6">
                                {/* Primary Image */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                                />
                                {/* Secondary Image (Hover) */}
                                <img
                                    src={product.secondaryImage}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                                />

                                {/* Quick Add Button */}
                                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 btn-hover-white bg-white">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>

                            {/* Info */}
                            <div className="text-center flex flex-col gap-2 md:gap-3 px-4">
                                <h3 className="text-[11px] md:text-[12px] tracking-[0.15em] uppercase font-normal text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2 leading-relaxed">
                                    {product.title}
                                </h3>
                                <p className="text-[11px] md:text-[12px] tracking-[0.05em] text-gray-500 font-light">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="mt-16 md:mt-8 flex justify-center">
                    <a
                        href="#"
                        className="py-3 btn-hover-dark bg-black text-white text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-light min-w-[220px] md:min-w-[220px] text-center"
                    >
                        All {activeTab.toLowerCase()}'s bags
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bestseller;