import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
// 1. استيراد المكون الجديد
import ContactDrawer from './ContactDrawer';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // 2. حالة جديدة للتحكم بفتح وإغلاق نافذة خدمة العملاء
    const [isContactOpen, setIsContactOpen] = useState(false);

    const { openCart } = useCart();

    const menuLinks = [
        'Gifts', 'New Arrivals', 'Women', 'Men', 'Bags',
        'Prada Linea Rossa', 'Perfumes and Beauty',
        'Home and Lifestyle', 'Fine Jewelry',
        'Chawan Cabinet by Theaster Gates', 'Pradasphere'
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                setIsSearchOpen(false);
            }
        };

        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen, isSearchOpen]);

    const textColorClass = isHovered ? "text-surface-base" : "text-white";

    return (
        <>
            <nav
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`absolute top-0 left-0 w-full z-40 py-10 px-6 md:px-12 flex justify-between items-center transition-colors duration-300 ${
                    isHovered ? "bg-white border-b border-border-strong" : "bg-transparent"
                } ${textColorClass}`}
            >
                <div className="flex gap-8 items-center">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className={`flex items-center gap-2 font-primary text-md hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}
                    >
                        <Menu size={20} strokeWidth={1.5} />
                        <span className="hidden md:inline">Menu</span>
                    </button>
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className={`flex items-center gap-2 font-primary text-md hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}
                    >
                        <Search size={20} strokeWidth={1.5} />
                        <span className="hidden md:inline">Search</span>
                    </button>
                </div>

                <div className={`absolute left-1/2 transform -translate-x-1/2 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`} tabIndex={0}>
                    <h1 className="text-3xl font-bold tracking-widest uppercase font-serif">PRADA</h1>
                </div>

                <div className="flex gap-10 items-center">
                    {/* 3. تفعيل زر Contact Us لفتح النافذة */}
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className={`hidden md:inline font-primary text-md hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}
                    >
                        Contact us
                    </button>
                    <button aria-label="Favorites" className={`hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}>
                        <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button aria-label="User Account" className={`hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}>
                        <User size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={openCart}
                        aria-label="Shopping Bag"
                        className={`hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 transition-opacity ${isHovered ? 'focus-visible:outline-black' : 'focus-visible:outline-white'}`}
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            {/* القائمة الجانبية المنسدلة (Menu) */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white text-surface-base z-50 overflow-y-auto">
                    <div className="p-6 md:px-12 flex gap-8 items-center pt-10">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 font-primary text-md hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
                        >
                            <X size={24} strokeWidth={1.5} />
                            <span>Close</span>
                        </button>
                        <button
                            onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
                            className="flex items-center gap-3 font-primary text-md hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
                        >
                            <Search size={24} strokeWidth={1.5} />
                            <span>Search</span>
                        </button>
                    </div>

                    <ul className="mt-8 px-6 md:px-12 flex flex-col gap-6 pb-20">
                        {menuLinks.map((link, index) => (
                            <li key={index}>
                                <a href="#" className="text-xl md:text-2xl font-primary hover:underline underline-offset-8 decoration-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* نافذة البحث المنسدلة */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-white text-surface-base z-50 overflow-y-auto">
                    <div className="p-6 md:px-12 flex justify-between items-center border-b border-border-strong pb-4 pt-10">
                        <h2 className="text-xl font-primary font-bold">Search on prada.com</h2>
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="text-sm font-bold underline underline-offset-4 uppercase tracking-widest hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
                        >
                            CLOSE
                        </button>
                    </div>

                    <div className="p-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6">COLLECTIONS</h3>
                            <ul className="flex flex-col gap-4">
                                {["Women's Bags", "Women's Shoes", "Men's Shoes", "Men's Ready to Wear"].map((item, idx) => (
                                    <li key={idx}><a href="#" className="text-md font-primary hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6">HIGHLIGHTS</h3>
                            <ul className="flex flex-col gap-4">
                                {["Prada Court Sneakers Men", "Days of Summer Women", "Days of Summer Men", "Summer Accessories Women"].map((item, idx) => (
                                    <li key={idx}><a href="#" className="text-md font-primary hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* 4. عرض مكون ContactDrawer وتمرير الحالة إليه */}
            <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Navbar;