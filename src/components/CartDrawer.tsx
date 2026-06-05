import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.tsx';
// استيراد أيقونة الإغلاق وحذف المنتج
import { X, Trash2 } from 'lucide-react';

const CartDrawer: React.FC = () => {
    // جلب كل دوال ومتغيرات السلة من الكونتيكست
    const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeCart();
        };

        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCartOpen, closeCart]);

    // دالة لحساب السعر الإجمالي (تبسيط السعر من النص وحسابه)
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const priceNum = parseFloat(item.price.replace('€ ', '').replace('.', ''));
            return total + (priceNum * item.quantity);
        }, 0).toLocaleString('de-DE');
    };

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={closeCart} aria-label="Close cart overlay"></div>

            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col font-primary text-surface-base animate-slide-in-right">

                <div className="p-6 flex justify-between items-center border-b border-border-strong">
                    <h2 className="text-xl font-bold tracking-widest uppercase font-serif">Shopping Bag ({cartItems.length})</h2>
                    <button onClick={closeCart} className="hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4">
                        <X size={24} strokeWidth={1.5} />
                    </button>
                </div>

                {/* إذا كانت السلة فارغة */}
                {cartItems.length === 0 ? (
                    <div className="p-6 flex-1 flex flex-col justify-center items-center text-center">
                        <p className="text-md mb-8 text-gray-500">Your shopping bag is currently empty.</p>
                        <button onClick={closeCart} className="bg-surface-base text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    /* إذا كان هناك منتجات في السلة */
                    <>
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6 border-b border-border-strong pb-6">
                                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover bg-gray-100" />
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-md font-bold mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-600 mb-2">Qty: {item.quantity}</p>
                                            <p className="text-sm font-bold">{item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
                                        >
                                            <Trash2 size={16} strokeWidth={1.5} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* قسم الحساب النهائي (Checkout) */}
                        <div className="p-6 border-t border-border-strong bg-gray-50">
                            <div className="flex justify-between items-center mb-6 text-lg font-bold">
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