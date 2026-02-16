import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-[#1c1c1c]/5">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px]">
                {/* Main Footer Content */}
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-32 mb-12 md:mb-16">

                    {/* Newsletter Block */}
                    <div className="flex flex-col gap-6 text-left items-start">
                        <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]/80">
                            Newsletter
                        </h4>
                        <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed max-w-[300px] md:max-w-none">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex flex-col gap-4 mt-2 w-full max-w-[300px] md:max-w-none items-start">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full border border-[#1c1c1c]/10 px-4 py-3 text-[13px] font-light outline-none focus:border-[#1c1c1c]/30 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#1c1c1c] text-white py-4 px-8 text-[12px] uppercase tracking-[0.2em] font-light hover:bg-black transition-all w-fit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-12 sm:gap-20 md:contents'>
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
                        <div className="flex flex-col gap-6 text-left">
                            <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#1c1c1c]">
                                About the shop
                            </h4>
                            <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed">
                                The story of Leo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years.
                            </p>
                            <p className="text-[13px] md:text-[14px] font-light text-[#1c1c1c]/60 leading-relaxed">
                                Thanks to <a href="https://www.leoetviolette.com/" target="_blank" className="underline underline-offset-4 decoration-[#1c1c1c]/20 hover:decoration-[#1c1c1c]/50 transition-all">Léo et Violette</a> for allowing us to use their products in this demo store.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Row */}
                <div className="flex gap-8 items-center justify-start animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z" /></svg>
                    </a>
                    <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.94 4h2.715l-5.93 6.777L20.7 20h-5.462l-4.278-5.593L6.065 20H3.35l6.342-7.25L3 4h5.6l3.868 5.113L16.94 4Zm-.952 14.375h1.504L7.784 5.54H6.17l9.818 12.836Z" /></svg>
                    </a>
                    <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z" /></svg>
                    </a>
                    <a href="#" className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.518 6.726c.143-.815.14-1.654-.356-2.288-.693-.89-2.167-.922-3.178-.765-.821.127-3.6 1.371-4.547 4.35 1.676-.13 2.554.122 2.393 1.994-.068.783-.457 1.642-.893 2.464-.502.948-1.445 2.81-2.68 1.468-1.114-1.208-1.03-3.518-1.285-5.056-.142-.864-.292-1.94-.57-2.827-.24-.763-.791-1.684-1.465-1.883-.724-.216-1.618.12-2.143.435C5.12 5.615 3.847 7.034 2.4 8.204v.11c.287.278.364.734.786.796.996.149 1.945-.942 2.607.193.403.693.529 1.453.787 2.2.344.996.61 2.08.892 3.224.477 1.939 1.064 4.836 2.715 5.545.843.363 2.11-.122 2.75-.508 1.738-1.043 3.091-2.555 4.25-4.094 2.649-3.64 4.11-7.765 4.331-8.944Z" /></svg>
                    </a>
                </div>

                {/* Bottom Bar Content */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left md:text-left">
                    {/* Localization Selector */}
                    <div className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-medium text-[#1c1c1c]/60 cursor-pointer hover:text-[#1c1c1c] transition-colors">
                        <img
                            src="//cdn.shopify.com/static/images/flags/gb.svg?format=jpg&width=32"
                            alt="UK Flag"
                            className="w-4 h-auto opacity-80"
                        />
                        <span>United Kingdom (GBP £)</span>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 10 10"><path d="m1 3 4 4 4-4" strokeLinecap="square" /></svg>
                    </div>

                    {/* Copyright Text */}
                    <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-light text-[#1c1c1c]/40">
                        © 2026 - Prestige - Allure Powered by Shopify
                    </div>

                    {/* Payment methods icons */}
                    <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                        <svg width="32" height="20" viewBox="0 0 38 24"><rect width="38" height="24" rx="2" fill="#f6f6f6" /><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.2-.9-.2-.9-.1-.2h-2.4c-.1 0-.2.2-.2.2l-.3.9h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2.2.2.2l1.4 6.5c.1.4.2.7.2 1.1v.2zm-13.4-.3l.4-1.8h.2c.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2H17.8zm-3.5.3h.2l.5-2.2c.5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2h-1.7M5 8.2h.3h3.4c.5 0 .9.3 1 .8l.9 4.4v.2h.1l2.1-5.1h.1h2.1v.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5h1.2z" fill="#142688" /></svg>
                        <svg width="32" height="20" viewBox="0 0 38 24"><rect width="38" height="24" rx="2" fill="#f6f6f6" /><circle fill="#EB001B" cx="15" cy="12" r="7" /><circle fill="#F79E1B" cx="23" cy="12" r="7" /><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" /></svg>
                        <svg width="32" height="20" viewBox="0 0 38 24"><rect width="38" height="24" rx="2" fill="#f6f6f6" /><path fill="#006FCF" d="M3 2h32c.5 0 1 .4 1 1v18c0 .5-.4 1-1 1H3c-.5 0-1-.4-1-1V3c0-.5.4-1 1-1z" /><path fill="#FFF" d="M22 19v-8l15 0v2l-1.7 1.8 1.7 2.2V19h-2.7l-1.4-1.6L31 19h-9z" /><path fill="#012169" d="M23 18v-6h5.5v1.5H25v1h3.6v1.5H25v1h3.7v1.5H23z" /></svg>
                        <svg width="32" height="20" viewBox="0 0 38 24"><rect width="38" height="24" rx="2" fill="#f6f6f6" /><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1h-.6l-.6 5.5-.3 6.3h2.7l.4-3.4 1.8-2.2 4.7-2.1z" /><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18l-.6 3.9-.2 1h1.8c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z" /></svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
