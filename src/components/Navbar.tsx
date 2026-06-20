import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
import ContactDrawer from './ContactDrawer';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    // حالة جديدة لمعرفة ما إذا كان المستخدم قد قام بالتمرير للأسفل
    const [isScrolled, setIsScrolled] = useState(false);

    const { openCart } = useCart();

    const menuLinks = [
        'Gifts', 'New Arrivals', 'Women', 'Men', 'Bags',
        'Prada Linea Rossa', 'Perfumes and Beauty',
        'Home and Lifestyle', 'Fine Jewelry',
        'Pradasphere'
    ];

    // 1. مراقبة حركة السكرول (Scroll) في الموقع
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // إدارة الـ Scroll عند فتح النوافذ الجانبية
    useEffect(() => {
        const anyOpen = isMenuOpen || isSearchOpen || isContactOpen || isFavoritesOpen || isAccountOpen;
        if (anyOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMenuOpen, isSearchOpen, isContactOpen, isFavoritesOpen, isAccountOpen]);

    // تحديد لون النص: يصبح أسود إذا عملنا سكرول أو إذا حركنا الماوس فوق الناف بار
    const isNavbarWhite = isScrolled || isHovered;
    const textColorClass = isNavbarWhite ? "text-surface-base" : "text-white";

    return (
        <>
            {/*
               تعديل الكلاسات:
               - تحويل من absolute إلى fixed لضمان بقائه ثابتاً في كل الموقع.
               - إضافة شروط الخلفية: bg-white إذا تحقق السكرول أو الهوفر، وإلا bg-transparent.
               - تصغير الـ padding عمودياً (py-5) عند النزول ليعطي مظهراً أنيقاً ومضغوطاً متل برادا.
            */}
            {/*
               تم تعديل الـ padding أثناء السكرول من py-5 إلى py-7
               ليصبح الشريط أعرض وأكثر راحة للعين ومطابقاً لطلبك
            */}
            <nav
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed top-0 left-0 w-full z-40 px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
                    isScrolled ? "py-7 shadow-sm border-b border-gray-100" : "py-8 md:py-10"
                } ${
                    isNavbarWhite ? "bg-white" : "bg-transparent"
                } ${textColorClass}`}
            >
                <div className="flex gap-4 md:gap-8 items-center">
                    <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2 font-primary text-md hover:opacity-70">
                        <Menu size={20} strokeWidth={1.5} />
                        <span className="hidden md:inline">Menu</span>
                    </button>
                    <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-2 font-primary text-md hover:opacity-70">
                        <Search size={20} strokeWidth={1.5} />
                        <span className="hidden md:inline">Search</span>
                    </button>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase font-serif">PRADA</h1>
                </div>

                <div className="flex gap-4 md:gap-10 items-center">
                    <button onClick={() => setIsContactOpen(true)} className="hidden md:inline font-primary text-md hover:opacity-70">
                        Contact us
                    </button>
                    <button onClick={() => setIsFavoritesOpen(true)} aria-label="Favorites" className="hover:opacity-70">
                        <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button onClick={() => setIsAccountOpen(true)} aria-label="User Account" className="hidden sm:block hover:opacity-70">
                        <User size={20} strokeWidth={1.5} />
                    </button>
                    <button onClick={openCart} aria-label="Shopping Bag" className="hover:opacity-70">
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            {/* 1. قائمة الـ Menu */}
            <div className={`fixed inset-0 z-50 flex transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500" onClick={() => setIsMenuOpen(false)}></div>
                <div className={`relative w-full max-w-[400px] bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6 md:px-8 flex gap-8 items-center pt-10 border-b border-gray-100">
                        <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 font-primary text-md hover:opacity-60">
                            <X size={22} strokeWidth={1.5} />
                            <span className="text-xs font-bold uppercase tracking-widest">Close</span>
                        </button>
                    </div>
                    <ul className="mt-6 px-6 md:px-8 flex flex-col gap-5 pb-20 overflow-y-auto">
                        {menuLinks.map((link, index) => (
                            <li key={index} style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms' }} className={`transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                <a href="#" className="text-lg font-primary font-medium hover:underline underline-offset-4">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 2. نافذة الـ Search */}
            <div className={`fixed inset-0 z-50 flex flex-col justify-start transition-opacity duration-500 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500" onClick={() => setIsSearchOpen(false)}></div>
                <div className={`relative w-full h-[55vh] bg-white shadow-2xl flex flex-col font-primary text-surface-base transition-transform duration-500 ease-out ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="p-6 md:px-12 flex justify-between items-center border-b border-border-strong pt-10">
                        <div className="flex items-center gap-4 w-1/2">
                            <Search size={20} className="text-gray-400" />
                            <input type="text" placeholder="Search on prada.com..." className="w-full text-lg focus:outline-none placeholder-gray-400" />
                        </div>
                        <button onClick={() => setIsSearchOpen(false)} className="text-xs font-bold underline underline-offset-4 uppercase tracking-widest hover:opacity-60">CLOSE</button>
                    </div>
                    <div className="p-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Suggested Collections</h3>
                            <ul className="flex flex-col gap-3">
                                {["Women's Bags", "Women's Shoes", "Men's Shoes"].map((item, idx) => (
                                    <li key={idx}><a href="#" className="text-sm font-bold hover:underline underline-offset-4">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Trending Now</h3>
                            <ul className="flex flex-col gap-3">
                                {["Prada Court Sneakers", "Days of Summer Collection"].map((item, idx) => (
                                    <li key={idx}><a href="#" className="text-sm font-bold hover:underline underline-offset-4">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. نافذة الـ Favorites */}
            <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ${isFavoritesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500" onClick={() => setIsFavoritesOpen(false)}></div>
                <div className={`relative w-full max-w-[450px] bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base p-8 md:p-12 transition-transform duration-500 ease-out ${isFavoritesOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-xl font-bold uppercase tracking-wider">Wishlist</h2>
                        <button onClick={() => setIsFavoritesOpen(false)} className="hover:opacity-60"><X size={24} strokeWidth={1.5} /></button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400">
                        <Heart size={40} strokeWidth={1} className="mb-4" />
                        <p className="text-sm">Your wishlist is empty.</p>
                    </div>
                </div>
            </div>

            {/* 4. نافذة الـ Account */}
            <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ${isAccountOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500" onClick={() => setIsAccountOpen(false)}></div>
                <div className={`relative w-full max-w-[450px] bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base p-8 md:p-12 transition-transform duration-500 ease-out ${isAccountOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-xl font-bold uppercase tracking-wider">My Account</h2>
                        <button onClick={() => setIsAccountOpen(false)} className="hover:opacity-60"><X size={24} strokeWidth={1.5} /></button>
                    </div>
                    <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
                        <div className="border-b border-gray-300 pb-2">
                            <input type="email" placeholder="Email Address *" className="w-full text-sm focus:outline-none" required />
                        </div>
                        <div className="border-b border-gray-300 pb-2">
                            <input type="password" placeholder="Password *" className="w-full text-sm focus:outline-none" required />
                        </div>
                        <button type="submit" className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 mt-4 hover:opacity-80 transition-opacity">Login</button>
                    </form>
                </div>
            </div>

            <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Navbar;