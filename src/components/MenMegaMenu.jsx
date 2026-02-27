import React from 'react';

const MenMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
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
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black/80 uppercase">Bags</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Business bags</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Weekend bag</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Small leather goods */}
                    <div className="space-y-6 tracking-[0.025em]">
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black/80 uppercase">Small leather goods</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Wallet</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Card holder</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Popular Colors */}
                    <div className="space-y-6 tracking-[0.025em]">
                        <h3 className="text-[11px] tracking-[0.2em] font-extralight text-black/80 uppercase">Popular colors</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Black</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Navy</a></li>
                            <li><a href="#" className="text-[11px] text-gray-500 hover:text-grey-500 transition-colors">Khaki</a></li>
                        </ul>
                    </div>
                </div>

                {/* Promo Sections */}
                <div className="flex gap-6 w-[40%]">
                    <div className="flex-1 group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                            <img
                                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-nouveau-cartable.jpg?v=1681204218&width=650"
                                alt="Le Nouveau Cartable Promo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 text-center space-y-1">
                            <p className="text-[10px] tracking-[0.2em] font-medium text-black uppercase">LE NOUVEAU CARTABLE</p>
                            <p className="text-[11px] text-gray-400 italic">5 colors, from $420</p>
                        </div>
                    </div>

                    <div className="flex-1 group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                            <img
                                src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/mega-menu-image-porte-cartes.jpg?v=1681204230&width=650"
                                alt="Le Porte-Cartes Promo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 text-center space-y-1">
                            <p className="text-[10px] tracking-[0.2em] font-medium text-black uppercase">LE PORTE-CARTES</p>
                            <p className="text-[11px] text-gray-400 italic">accessories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenMegaMenu;
