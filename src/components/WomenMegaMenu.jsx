import React from 'react';

const WomenMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`absolute top-[75px] left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-12 py-12 flex gap-12">
                {/* Links Columns */}
                <div className="flex-1 grid grid-cols-3 gap-8">
                    {/* Column 1: Bags */}
                    <div className="space-y-6 tracking-[0.025em]">
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black uppercase">Bags</h3>
                        <ul className="space-y-2 font-light">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Shoulder bags</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Mini bags</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Business bags</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Small leather goods</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">All products</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Popular Models */}
                    <div className="space-y-6 tracking-[0.025em]">
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black uppercase">Popular models</h3>
                        <ul className="space-y-2 font-light">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Le Mini Dalia</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Le Nova</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Le Dino</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Le Gina</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Popular Colors */}
                    <div className="space-y-6 tracking-[0.025em]">
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black uppercase">Popular colors</h3>
                        <ul className="space-y-2 font-light">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Black</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Camel</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Almond Green</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-black transition-colors">Ivory</a></li>
                        </ul>
                    </div>
                </div>

                {/* Promo Sections */}
                <div className="flex gap-6 w-[40%]">
                    <div className="flex-1 group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                            <img
                                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-le-dalia.jpg?v=1681202495&width=650"
                                alt="Dalia Promo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 text-center space-y-1">
                            <p className="text-[10px] tracking-[0.2em] font-extralight text-black uppercase">LÉO & VIOLETTE X WENDY SWAN</p>
                            <p className="text-[11px] text-gray-400 italic">the dalia</p>
                        </div>
                    </div>

                    <div className="flex-1 group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                            <img
                                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-color.jpg?v=1681202556&width=650"
                                alt="Values Promo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 text-center space-y-1">
                            <p className="text-[10px] tracking-[0.2em] font-medium text-black uppercase">THE SYMBOL OF OUR VALUES</p>
                            <p className="text-[11px] text-gray-400 italic">almond green</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenMegaMenu;
