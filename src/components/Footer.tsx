import React from 'react';
import { Link } from 'react-router-dom';
// تركنا الأيقونات الأساسية فقط وحذفنا أسماء السوشيال ميديا
import { ArrowRight, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white font-primary text-surface-base border-t border-border-strong">

            <div className="px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                {/* العمود الأول: النشرة البريدية */}
                <div className="flex flex-col lg:pr-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Subscribe to our newsletter</h3>
                    <form className="relative border-b border-black mb-6" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Insert your e-mail address *"
                            className="w-full pb-3 bg-transparent text-sm focus:outline-none placeholder-surface-base pr-8"
                            required
                        />
                        <button type="submit" className="absolute right-0 top-0 hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                            <ArrowRight size={20} strokeWidth={1.5} />
                        </button>
                    </form>
                    <p className="text-[10px] leading-relaxed mb-8">
                        By clicking on "Subscribe", you confirm that you have read and understood our <Link to="#" className="font-bold underline underline-offset-2">Privacy Policy</Link> and that you want to receive the newsletter and other marketing communication as set out therein.
                    </p>

                    {/* أيقونات التواصل الاجتماعي مبرمجة كـ SVG مباشر لتجنب مشاكل المكتبات */}
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Facebook" className="hover:opacity-60 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:opacity-60 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:opacity-60 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.1 8.4 2 10.5 2 12s.1 3.6.5 4.9c.4 1.4 1.7 2.5 3.1 2.9 2.5.6 10.5.6 13 0 1.4-.4 2.7-1.5 3.1-2.9.4-1.3.5-3.4.5-4.9s-.1-3.6-.5-4.9c-.4-1.4-1.7-2.5-3.1-2.9-2.5-.6-10.5-.6-13 0-1.4.4-2.7 1.5-3.1 2.9z"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        </a>
                    </div>
                </div>

                {/* العمود الثاني: اتصل بنا */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Contact Us</h3>
                    <ul className="flex flex-col gap-4 text-[13px]">
                        <li><a href="#" className="hover:underline underline-offset-4">Call us +31 20 808 5516</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Write us on WhatsApp</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Contacts</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">FAQ</a></li>
                    </ul>
                </div>

                {/* العمود الثالث: الخدمات */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Services</h3>
                    <ul className="flex flex-col gap-4 text-[13px]">
                        <li><a href="#" className="hover:underline underline-offset-4">Online and in-store services</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Track your order</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Returns</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Shipping and delivery</a></li>
                    </ul>
                </div>

                {/* العمود الرابع: الشركة */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Company</h3>
                    <ul className="flex flex-col gap-4 text-[13px]">
                        <li><a href="#" className="hover:underline underline-offset-4">Fondazione Prada</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Prada Group</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Luna Rossa</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Sustainability</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Work with us</a></li>
                    </ul>
                </div>

                {/* العمود الخامس: الشروط والأحكام */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Legal Terms and Conditions</h3>
                    <ul className="flex flex-col gap-4 text-[13px]">
                        <li><a href="#" className="hover:underline underline-offset-4">Legal Notice</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Cookie Policy</a></li>
                        <li><button className="hover:underline underline-offset-4">Cookie setting</button></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Terms of sale</a></li>
                        <li><a href="#" className="hover:underline underline-offset-4">Sitemap</a></li>
                    </ul>
                </div>

            </div>

            {/* القسم السفلي */}
            <div className="w-full flex flex-col lg:flex-row border-t border-border-strong">

                <div className="flex-1 py-6 px-6 md:px-12 flex items-center">
                    <p className="text-[11px] font-bold tracking-widest uppercase">
                        ©PRADA 2007 - 2026 | VAT NO. NL808761729B01
                    </p>
                </div>

                <button className="py-6 px-10 border-t lg:border-t-0 lg:border-l border-border-strong flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black inset-0">
                    <MapPin size={18} strokeWidth={1.5} />
                    <span className="text-[11px] font-bold tracking-widest uppercase">Store Locator</span>
                </button>

                <button className="py-6 px-10 border-t lg:border-t-0 lg:border-l border-border-strong flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black inset-0">
                    <Globe size={18} strokeWidth={1.5} />
                    <span className="text-[11px] font-bold tracking-widest uppercase">Shipping to: Netherlands/English</span>
                </button>

            </div>
        </footer>
    );
};

export default Footer;