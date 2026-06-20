import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.tsx';
import { X, Trash2 } from 'lucide-react';

const CartDrawer: React.FC = () => {
    const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeCart();
        };

        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCartOpen, closeCart]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const priceNum = parseFloat(item.price.replace('€ ', '').replace('.', ''));
            return total + (priceNum * item.quantity);
        }, 0).toLocaleString('de-DE');
    };

    return (
        /* الحاوية الرئيسية الشفافة: نتحكم بظهورها واختفائها عبر الـ opacity و pointer-events لضمان السلاسة */
        <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

            {/* الخلفية المظللة (Backdrop) مع تأثير تلاشي ناعم جداً عند الإغلاق والفتح */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500"
                onClick={closeCart}
            ></div>

            {/* لوحة السلة الجانبية (Drawer Panel) تنزلق من اليمين (translate-x-0) وتعود لليمين (translate-x-full) بنعومة فائقة */}
            <div className={`relative w-full max-w-[450px] bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base transition-transform duration-500 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* رأس نافذة السلة */}
                <div className="p-6 md:p-8 flex justify-between items-center border-b border-gray-100 pt-10">
                    <h2 className="text-xl font-bold uppercase tracking-wider">Shopping Bag</h2>
                    <button
                        onClick={closeCart}
                        className="hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black transition-opacity"
                        aria-label="Close bag"
                    >
                        <X size={24} strokeWidth={1.5} />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    /* واجهة السلة الفارغة */
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-400">
                        <p className="text-sm font-medium mb-4">Your Shopping Bag is empty.</p>
                        <button
                            onClick={closeCart}
                            className="text-xs font-bold uppercase tracking-widest text-black underline underline-offset-4 hover:opacity-70 transition-opacity"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    /* قائمة المنتجات المتواجدة داخل السلة */
                    <>
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6 items-center">
                                    <div className="w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h3 className="text-sm font-bold leading-tight">{item.name}</h3>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        <p className="text-sm font-bold mt-1">{item.price}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black w-fit mt-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                                        >
                                            <Trash2 size={14} strokeWidth={1.5} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* قسم الحساب النهائي (Checkout) */}
                        <div className="p-6 md:p-8 border-t border-border-strong bg-gray-50">
                            <div className="flex justify-between items-center mb-6 text-md font-bold">
                                <span>Estimated Total</span>
                                <span>€ {calculateTotal()}</span>
                            </div>
                            <button className="w-full bg-surface-base text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default CartDrawer;