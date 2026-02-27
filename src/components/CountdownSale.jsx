import React, { useState, useEffect } from 'react';

const RollingDigit = ({ digit }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(9 - parseInt(digit));
    const [prevDigit, setPrevDigit] = useState(digit);

    const digitStrip = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9];

    useEffect(() => {
        if (digit !== prevDigit) {
            const newDigit = parseInt(digit);
            const oldDigit = parseInt(prevDigit);

            // If it's a normal countdown (e.g., 9 -> 8)
            if (newDigit < oldDigit) {
                setDisplayIndex(9 - newDigit);
            }
            // If it's a wrap-around (e.g., 0 -> 9)
            else if (newDigit > oldDigit) {
                // Animate to the last '9' in our strip (index 10)
                setDisplayIndex(10);

                // Then snap back to the first '9' (index 0) without animation
                setTimeout(() => {
                    setIsAnimating(false);
                    setDisplayIndex(0);
                    // Force a tiny reflow/delay before re-enabling animation if needed
                    // but since the next change will usually be a decrease, we're fine
                }, 600);
                setIsAnimating(true);
            }

            setPrevDigit(digit);
            setIsAnimating(true);

            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    return (
        <div className="relative h-[1.2em] w-[0.6em] md:w-[0.7em] overflow-hidden">
            <div
                className={`flex flex-col items-center transition-transform duration-600 ease-in-out`}
                style={{
                    transform: `translateY(-${(displayIndex / 11) * 100}%)`,
                    transition: isAnimating ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
            >
                {digitStrip.map((d, i) => (
                    <div key={i} className="h-[1.2em] flex items-center justify-center flex-shrink-0">
                        {d}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CountdownUnit = ({ value, label }) => {
    const digits = String(value).padStart(2, '0').split('');

    return (
        <div className="flex flex-col items-center">
            <div className="text-white text-lg md:text-2xl lg:text-3xl font-light text-center">
                <div className="flex justify-center gap-0.5">
                    {digits.map((d, i) => (
                        <RollingDigit key={i} digit={d} />
                    ))}
                </div>
            </div>
            <span className="text-white text-[7px] md:text-[10px] uppercase tracking-[0.2em] font-medium mt-3">
                {label}
            </span>
        </div>
    );
};

const CountdownSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Set target date (you can modify this)
    const targetDate = new Date('2026-05-31T00:00:00').getTime();

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <picture>
                    {/* Mobile Image */}
                    <source
                        media="(max-width: 699px)"
                        srcSet="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Mobile.jpg?v=1679410187&width=1000"
                    />
                    {/* Desktop Image */}
                    <img
                        src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Countdown_-_Desktop.jpg?v=1679410124&width=3200"
                        alt="Super Sale"
                        className="w-full h-full object-cover"
                    />
                </picture>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-16 gap-12 md:gap-12">
                {/* Left: Promotional Content */}
                <div className="text-white max-w-xl flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <p className="text-[9px] md:text-[9px] uppercase tracking-[0.1em] font-light text-white/90">
                        Limited time only
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-4xl uppercase tracking-[0.2em] font-light leading-tight">
                        Super Sale Up to 40% off
                    </h2>
                    <p className="text-xs md:text-sm leading-normal tracking-wider font-light text-white/90">
                        Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                    </p>
                    <div>
                        <a
                            href="/collections/sale"
                            className="inline-block btn-hover-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium"
                        >
                            Shop now
                        </a>
                    </div>
                </div>

                {/* Right: Countdown Timer */}
                <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                    <CountdownUnit value={timeLeft.days} label="Days" />
                    <div className="text-white text-lg md:text-2xl font-light">:</div>
                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                    <div className="text-white text-lg md:text-2xl font-light">:</div>
                    <CountdownUnit value={timeLeft.minutes} label="Min" />
                    <div className="text-white text-lg md:text-2xl font-light">:</div>
                    <CountdownUnit value={timeLeft.seconds} label="Sec" />
                </div>
            </div>
        </section>
    );
};

export default CountdownSale;
