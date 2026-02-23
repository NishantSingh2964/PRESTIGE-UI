import React, { useState } from 'react';

const Footer = () => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        code: 'GBP £',
        country: 'United Kingdom',
        flag: 'https://flagcdn.com/w20/gb.png'
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

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-[#1c1c1c]/5 relative overflow-visible">
            {/* Click-away Overlay */}
            {isCurrencyOpen && (
                <div
                    className="fixed inset-0 z-[60]"
                    onClick={() => setIsCurrencyOpen(false)}
                />
            )}

            <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mb-8">

                    {/* Newsletter Block */}
                    <div className="flex flex-col gap-6 text-left items-start flex-1 max-w-[300px]">
                        <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]">
                            Newsletter
                        </h4>
                        <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex flex-col gap-4 w-full items-start">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full border border-[#1c1c1c]/10 px-4 py-3.5 text-[13px] font-light outline-none focus:border-[#1c1c1c]/30 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="btn-hover-dark py-4 px-10 text-[11px] uppercase tracking-[0.2em] font-medium w-full md:w-fit"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Social Media Row - Moved inside Newsletter Block */}
                        <div className="flex gap-7 items-center justify-start mt-4">
                            <a href="#" className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" /></svg>
                            </a>
                            <a href="#" className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M16.94 4h2.715l-5.93 6.777L20.7 20h-5.462l-4.278-5.593L6.065 20H3.35l6.342-7.25L3 4h5.6l3.868 5.113L16.94 4Zm-.952 14.375h1.504L7.784 5.54H6.17l9.818 12.836Z" /></svg>
                            </a>
                            <a href="#" className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" /></svg>
                            </a>
                            <a href="#" className="text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.518 6.726c.143-.815.14-1.654-.356-2.288-.693-.89-2.167-.922-3.178-.765-.821.127-3.6 1.371-4.547 4.35 1.676-.13 2.554.122 2.393 1.994-.068.783-.457 1.642-.893 2.464-.502.948-1.445 2.81-2.68 1.468-1.114-1.208-1.03-3.518-1.285-5.056-.142-.864-.292-1.94-.57-2.827-.24-.763-.791-1.684-1.465-1.883-.724-.216-1.618.12-2.143.435C5.12 5.615 3.847 7.034 2.4 8.204v.11c.287.278.364.734.786.796.996.149 1.945-.942 2.607.193.403.693.529 1.453.787 2.2.344.996.61 2.08.892 3.224.477 1.939 1.064 4.836 2.715 5.545.843.363 2.11-.122 2.75-.508 1.738-1.043 3.091-2.555 4.25-4.094 2.649-3.64 4.11-7.765 4.331-8.944Z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-[2] justify-between gap-12 lg:gap-10 ml-0 md:ml-28">
                        {/* Shop Links Block */}
                        <div className="flex flex-col gap-6 text-left">
                            <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]">
                                Shop
                            </h4>
                            <ul className="flex flex-col gap-3 font-light text-[13px] md:text-[14px] text-[#1c1c1c]/60">
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Women</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Men</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Small Leather Goods</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Collaboration</a></li>
                            </ul>
                        </div>

                        {/* Information Links Block */}
                        <div className="flex flex-col gap-6 text-left">
                            <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]">
                                Information
                            </h4>
                            <ul className="flex flex-col gap-3 font-light text-[13px] md:text-[14px] text-[#1c1c1c]/60">
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Theme Features</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">About us</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Contact us</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-[#1c1c1c] transition-colors">Maintenance Tips</a></li>
                            </ul>
                        </div>

                        {/* About the Shop Block */}
                        <div className="flex flex-col gap-6 text-left max-w-[320px]">
                            <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]">
                                About the shop
                            </h4>
                            <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed">
                                The story of Leo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years.
                            </p>
                            <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed">
                                Thanks to <a href="https://www.leoetviolette.com/" target="_blank" className="underline underline-offset-4 decoration-[#1c1c1c]/20 hover:decoration-[#1c1c1c]/50 transition-all font-normal">Léo et Violette</a> for allowing us to use their products in this demo store.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Content - Realigned */}
                <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                    {/* Localization Selector (Left) */}
                    <div className="relative z-[70] flex-1">
                        <div
                            className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-light text-[#1c1c1c]/60 cursor-pointer hover:text-[#1c1c1c] transition-colors py-2"
                            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                        >
                            <img
                                src={selectedCurrency.flag}
                                alt={`${selectedCurrency.country} Flag`}
                                className="w-5 h-auto opacity-90"
                            />
                            <span>{selectedCurrency.country} ({selectedCurrency.code})</span>
                            <svg className={`w-3 h-3 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Upward Dropdown */}
                        {isCurrencyOpen && (
                            <div className="absolute left-0 bottom-full mb-2 bg-white border border-gray-100 shadow-2xl py-4 min-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="max-h-[350px] overflow-y-auto px-2">
                                    {currencies.map((curr) => (
                                        <div
                                            key={curr.name}
                                            className="px-4 py-3 hover:bg-gray-50 text-[11px] tracking-wider transition-colors uppercase font-medium text-gray-900 cursor-pointer flex items-center gap-4 group"
                                            onClick={() => {
                                                setSelectedCurrency(curr);
                                                setIsCurrencyOpen(false);
                                            }}
                                        >
                                            <div className="w-6 flex justify-center">
                                                <img src={curr.flag} alt="" className="w-5 h-auto group-hover:scale-110 transition-transform" />
                                            </div>
                                            <span className="flex-1">{curr.name}</span>
                                            {selectedCurrency.code === curr.code && selectedCurrency.country === curr.country && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Copyright Text (Center) */}
                    <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-light text-[#1c1c1c]/40 flex-1 text-center hidden md:block">
                        © 2026 - Prestige - Allure Powered by Shopify
                    </div>

                    {/* Payment methods icons (Right) */}
                    <div className="flex items-center justify-end gap-2 md:gap-4 opacity-80 hover:opacity-100 transition-opacity flex-1">
                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
                        <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"></stop><stop offset=".533" stop-color="#F68D20"></stop><stop offset=".62" stop-color="#F58720"></stop><stop offset=".723" stop-color="#F48120"></stop><stop offset="1" stop-color="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"></stop><stop offset=".703" stop-color="#D4602C"></stop><stop offset=".982" stop-color="#D05B2E"></stop></linearGradient></defs></svg>
                    </div>

                    {/* Mobile Copyright Text - visible only on mobile */}
                    <div className="text-[10px] uppercase tracking-[0.15em] font-light text-[#1c1c1c]/40 text-center w-full md:hidden pt-4">
                        © 2026 - Prestige - Allure Powered by Shopify
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
