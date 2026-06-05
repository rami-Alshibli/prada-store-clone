import React, { useEffect } from 'react';
import { X, Mail, Phone, MessageSquare } from 'lucide-react';

interface ContactDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {

    // إغلاق النافذة عند الضغط على زر Escape في لوحة المفاتيح
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* الخلفية المظللة */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-label="Close contact overlay"
            ></div>

            {/* الحاوية الجانبية */}
            <div className="relative w-full max-w-[450px] bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base animate-slide-in-right overflow-y-auto">

                {/* زر الإغلاق X */}
                <div className="p-6 flex justify-end">
                    <button onClick={onClose} className="hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4">
                        <X size={24} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="px-8 md:px-12 pb-12 flex-1">
                    <h2 className="text-2xl font-bold mb-8">Client Service</h2>

                    <div className="flex flex-col gap-4 mb-12">
                        {/* 1. واتساب */}
                        <button className="flex justify-between items-center w-full p-5 border border-gray-300 hover:border-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                            <span className="text-sm font-bold">WhatsApp</span>
                            {/* استخدمنا SVG مباشر لأيقونة واتساب لتكون مطابقة */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        </button>

                        {/* 2. الإيميل */}
                        <button className="flex justify-between items-center w-full p-5 border border-gray-300 hover:border-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                            <span className="text-sm font-bold">Send us an e-mail</span>
                            <Mail size={20} strokeWidth={1.5} />
                        </button>

                        {/* 3. الهاتف (حالة Offline) */}
                        <div className="flex justify-between items-center w-full p-5 border border-gray-200 text-gray-400 cursor-not-allowed">
                            <span className="text-sm font-bold">Call us +31 20 808 5516 (Offline)</span>
                            <Phone size={20} strokeWidth={1.5} />
                        </div>

                        {/* 4. المحادثة المباشرة (حالة Offline) */}
                        <div className="flex justify-between items-center w-full p-5 border border-gray-200 text-gray-400 cursor-not-allowed">
                            <span className="text-sm font-bold">Live Chat (Offline)</span>
                            <MessageSquare size={20} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* النص السفلي للمعلومات */}
                    <p className="text-[12px] leading-relaxed text-gray-500 text-center">
                        You can contact our Client Service by phone at <a href="tel:+31208085516" className="underline underline-offset-2 hover:text-black transition-colors">+31 20 808 5516</a> (from Monday to Saturday from 9 am to 8 pm and on Sunday from 9 am to 6 pm, Central Europe Time), by e-mail at <a href="mailto:client.service.eu@prada.com" className="underline underline-offset-2 hover:text-black transition-colors">client.service.eu@prada.com</a>, or through any of our available contact channels.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactDrawer;