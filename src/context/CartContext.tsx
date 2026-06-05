import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{
            isCartOpen,
            openCart: () => setIsCartOpen(true),
            closeCart: () => setIsCartOpen(false),
            cartItems,
            addToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

// تم وضع التعليق هنا تحديداً لإسكات تحذير ESLint بشكل صحيح
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};