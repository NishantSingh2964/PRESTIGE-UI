import React, { useState, useEffect } from 'react';
import WomenMegaMenu from './WomenMegaMenu';
import MenMegaMenu from './MenMegaMenu';
import BlogMegaMenu from './BlogMegaMenu'; // Imported BlogMegaMenu instead of AboutMegaMenu

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);
    const [isMenMenuOpen, setIsMenMenuOpen] = useState(false);
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false); // Renamed state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [currency, setCurrency] = useState('USD $');
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    const [selectedCurrency, setSelectedCurrency] = useState({
        code: 'USD $',
        country: 'United States',
        flag: 'https://flagcdn.com/w20/us.png'
    });

    const currencies = [
        { name: 'Canada (CAD $)', code: 'CAD $', country: 'Canada', flag: 'https://flagcdn.com/w20/ca.png' },
        { name: 'France (EUR €)', code: 'EUR €', country: 'France', flag: 'https://flagcdn.com/w20/fr.png' },
        { name: 'Germany (EUR €)', code: 'EUR €', country: 'Germany', flag: 'https://flagcdn.com/w20/de.png' },
        { name: 'Hong Kong SAR (HKD $)', code: 'HKD $', country: 'Hong Kong', flag: 'https://flagcdn.com/w20/hk.png' },
        { name: 'Italy (EUR €)', code: 'EUR €', country: 'Italy', flag: 'https://flagcdn.com/w20/it.png' },
        { name: 'Japan (JPY ¥)', code: 'JPY ¥', country: 'Japan', flag: 'https://flagcdn.com/w20/jp.png' },
        { name: 'South Korea (KRW ₩)', code: 'KRW ₩', country: 'South Korea', flag: 'https://flagcdn.com/w20/kr.png' },
        { name: 'Spain (EUR €)', code: 'EUR €', country: 'Spain', flag: 'https://flagcdn.com/w20/es.png' },
        { name: 'United Kingdom (GBP £)', code: 'GBP £', country: 'United Kingdom', flag: 'https://flagcdn.com/w20/gb.png' },
        { name: 'United States (USD $)', code: 'USD $', country: 'United States', flag: 'https://flagcdn.com/w20/us.png' },
    ];

    const [bannerHeight, setBannerHeight] = useState(68);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const updateHeight = () => {
            setBannerHeight(window.innerWidth < 768 ? 44 : 68);
        };
        updateHeight();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const isLight = !isScrolled && !isHovered && !isWomenMenuOpen && !isMenMenuOpen && !isBlogMenuOpen && !isMobileMenuOpen;

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const closeAllMegaMenus = () => {
        setIsWomenMenuOpen(false);
        setIsMenMenuOpen(false);
        setIsBlogMenuOpen(false);
    };

    return (
        <header className="relative">
            <nav
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    closeAllMegaMenus();
                }}
                className={`fixed left-0 w-full h-[75px] z-50 transition-all duration-300 flex items-center px-6 md:px-12 ${isLight ? 'bg-transparent text-white border-transparent' : 'bg-white text-black border-b border-gray-100 shadow-sm'
                    }`}
                style={{ top: isScrolled ? '0' : `${bannerHeight}px` }}
            >
                {/* Left Column: Navigation Links */}
                <div className="flex-1 flex items-center h-full">
                    {/* Hamburger Menu (Mobile) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 -ml-2"
                    >
                        <svg className={`w-6 h-6 ${isLight ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <div className="hidden md:flex items-center gap-8 h-full">
                        <div
                            className="h-full flex items-center cursor-pointer"
                            onMouseEnter={() => {
                                closeAllMegaMenus();
                                setIsWomenMenuOpen(true);
                            }}
                        >
                            <a href="#" className="text-[11px] tracking-[0.25em] uppercase font-light">Women</a>
                        </div>
                        <div
                            className="h-full flex items-center cursor-pointer"
                            onMouseEnter={() => {
                                closeAllMegaMenus();
                                setIsMenMenuOpen(true);
                            }}
                        >
                            <a href="#" className="text-[11px] tracking-[0.25em] uppercase font-light">Men</a>
                        </div>
                        <a href="#" className="text-[11px] tracking-[0.25em] uppercase font-light">Blog</a>
                        <div
                            className="h-full flex items-center cursor-pointer"
                            onMouseEnter={() => {
                                closeAllMegaMenus();
                                setIsBlogMenuOpen(true); // Hover on Blog now opens the menu
                            }}
                        >
                            <a href="#" className="text-[11px] tracking-[0.25em] uppercase font-light">About</a>
                        </div>
                    </div>
                </div>

                {/* Center Column: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <a href="/">
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/logo.png?v=1680783645&width=260"
                            alt="Prestige Logo"
                            className={`h-[18px] md:h-[22px] w-auto transition-all duration-300 ${isLight ? 'brightness-0 invert' : ''
                                }`}
                        />
                    </a>
                </div>

                {/* Right Column: Icons and Currency */}
                <div className="flex-1 flex items-center justify-end gap-5">
                    {/* Currency Selector */}
                    <div className="relative hidden md:block">
                        <div
                            className="flex items-center gap-2 text-[10px] tracking-[0.15em] font-medium cursor-pointer py-2"
                            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                        >
                            <img src={selectedCurrency.flag} alt="" className="w-5 h-auto" />
                            <span className="uppercase">{selectedCurrency.code}</span>
                            <svg className={`w-3 h-3 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {isCurrencyOpen && (
                            <div className="absolute right-0 top-[35px] bg-white border border-gray-100 shadow-xl py-4 z-50 min-w-[200px]">
                                <div className="max-h-[300px] overflow-y-auto">
                                    {currencies.map((curr) => (
                                        <div
                                            key={curr.name}
                                            className="px-6 py-2 hover:bg-gray-50 text-[10px] transition-colors uppercase font-medium text-gray-900 cursor-pointer flex items-center gap-3"
                                            onClick={() => {
                                                setSelectedCurrency(curr);
                                                setIsCurrencyOpen(false);
                                            }}
                                        >
                                            <img src={curr.flag} alt="" className="w-5 h-auto" />
                                            {curr.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="p-1">
                            <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                        <a href="#" className="p-1">
                            <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                        <a href="#" className="p-1">
                            <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mega Menus */}
            <div
                className="fixed left-0 w-full z-[49]"
                style={{ top: isScrolled ? '0' : `${bannerHeight}px` }}
            >
                <WomenMegaMenu
                    isOpen={isWomenMenuOpen}
                    onMouseEnter={() => setIsWomenMenuOpen(true)}
                    onMouseLeave={closeAllMegaMenus}
                />
                <MenMegaMenu
                    isOpen={isMenMenuOpen}
                    onMouseEnter={() => setIsMenMenuOpen(true)}
                    onMouseLeave={closeAllMegaMenus}
                />
                <BlogMegaMenu
                    isOpen={isBlogMenuOpen}
                    onMouseEnter={() => setIsBlogMenuOpen(true)}
                    onMouseLeave={closeAllMegaMenus}
                />
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
                <div className={`absolute top-0 left-0 w-[320px] h-full bg-white shadow-2xl transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6 flex items-center justify-between border-b border-gray-50">
                        <h2 className="text-[14px] tracking-[0.2em] font-light">MENU</h2>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="divide-y divide-gray-50 text-gray-900">
                            {/* Women Section */}
                            <div>
                                <button
                                    onClick={() => toggleAccordion('women')}
                                    className="w-full flex items-center justify-between px-6 py-5 group text-[14px] tracking-[0.1em] font-light"
                                >
                                    <span>WOMEN</span>
                                    <div className="relative w-3 h-3">
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300" />
                                        <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-gray-300 transition-transform duration-300 ${activeAccordion === 'women' ? 'rotate-90' : 'rotate-0'}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 px-6 ${activeAccordion === 'women' ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                                    <ul className="flex flex-col gap-4 text-gray-500 text-[13px] font-light">
                                        <li><a href="#" className="hover:text-black transition-colors block">Bags</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block">Popular Models</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block pt-2 font-normal text-black underline underline-offset-4">Shop all Women</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Men Section */}
                            <div>
                                <button
                                    onClick={() => toggleAccordion('men')}
                                    className="w-full flex items-center justify-between px-6 py-5 group text-[14px] tracking-[0.1em] font-light"
                                >
                                    <span>MEN</span>
                                    <div className="relative w-3 h-3">
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300" />
                                        <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-gray-300 transition-transform duration-300 ${activeAccordion === 'men' ? 'rotate-90' : 'rotate-0'}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 px-6 ${activeAccordion === 'men' ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                                    <ul className="flex flex-col gap-4 text-gray-500 text-[13px] font-light">
                                        <li><a href="#" className="hover:text-black transition-colors block">Bags</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block">Small leather goods</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block pt-2 font-normal text-black underline underline-offset-4">Shop all Men</a></li>
                                    </ul>
                                </div>
                            </div>

                            <a href="#" className="block px-6 py-5 text-[14px] tracking-[0.1em] font-light">ABOUT</a>

                            {/* Blog Section (Accordion now) */}
                            <div>
                                <button
                                    onClick={() => toggleAccordion('blog')}
                                    className="w-full flex items-center justify-between px-6 py-5 group text-[14px] tracking-[0.1em] font-light"
                                >
                                    <span>BLOG</span>
                                    <div className="relative w-3 h-3">
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300" />
                                        <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-gray-300 transition-transform duration-300 ${activeAccordion === 'blog' ? 'rotate-90' : 'rotate-0'}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 px-6 ${activeAccordion === 'blog' ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                                    <ul className="flex flex-col gap-4 text-gray-500 text-[13px] font-light">
                                        <li><a href="#" className="hover:text-black transition-colors block">Our Story</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block">Commitments</a></li>
                                        <li><a href="#" className="hover:text-black transition-colors block pt-2 font-normal text-black underline underline-offset-4">All Posts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;