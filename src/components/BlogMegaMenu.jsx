import React from 'react';

const BlogMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`absolute top-[75px] left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            style={{ minHeight: '70vh' }} // Constrain height to 60vh (just bigger than half)
        >
            {/* Reduced padding to py-12 back to match others, and added h-full/overflow-y-hidden */}
            <div className="w-full max-w-[1480px] mx-auto px-12 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Link Columns */}
                    <div className="col-span-4 grid grid-cols-2 gap-8">
                        {/* Discover Column */}
                        <div className="flex flex-col gap-6 tracking-[0.025em]">
                            <h3 className="text-[11px] tracking-[0.2em] font-medium text-gray-500 uppercase">Discover</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">Theme Features</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">Our story</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">Commitments</a>
                                </li>
                            </ul>
                        </div>

                        {/* More Column */}
                        <div className="flex flex-col gap-6 tracking-[0.025em]">
                            <h3 className="text-[11px] tracking-[0.2em] font-medium text-gray-500 uppercase">More</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">Materials and Care</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[11px] text-gray-500 hover:text-gray-500 transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Promo Section - Using aspect-[3/2] to keep height in check */}
                    <div className="col-span-8 grid grid-cols-2 gap-10">
                        {/* Story Promo */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/2] overflow-hidden mb-4">
                                <img
                                    src="//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-story.jpg?v=1681204836&width=650"
                                    alt="Our Story"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-center flex flex-col gap-1">
                                <h4 className="text-[12px] tracking-[0.1em] uppercase font-normal text-gray-900">The story</h4>
                                <p className="text-[10px] tracking-[0.1em] uppercase text-gray-500 font-light">of léo et violette</p>
                            </div>
                        </div>
                        {/* Commitments Promo */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/2] overflow-hidden mb-4">
                                <img
                                    src="//prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-commitments.jpg?v=1681204872&width=650"
                                    alt="Our Commitments"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-center flex flex-col gap-1">
                                <h4 className="text-[12px] tracking-[0.1em] uppercase font-normal text-gray-900">our Commitments</h4>
                                <p className="text-[10px] tracking-[0.1em] uppercase text-gray-500 font-light">From design to distribution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMegaMenu;
