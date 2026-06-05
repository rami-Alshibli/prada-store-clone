import React from 'react';
// الاستيراد الصارم والصحيح للأنواع والدوال
import { useCart, type Product } from '../context/CartContext';

const productsData: Product[] = [
    { id: 1, name: "Re-Nylon shoulder bag", price: "€ 1.450", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Leather loafers", price: "€ 890", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Symbole sunglasses", price: "€ 380", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Prada Cleo leather bag", price: "€ 2.200", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, name: "Re-Nylon bucket hat", price: "€ 450", image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, name: "Saffiano leather wallet", price: "€ 650", image: "https://images.unsplash.com/photo-1628149462148-31628b0304a9?q=80&w=1000&auto=format&fit=crop" }
];

const Products: React.FC = () => {
    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-white font-primary text-surface-base">
            <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-black">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
                    alt="Women's Collection"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center pt-16">
                    <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-[0.15em] font-serif">
                        Women's Collection
                    </h1>
                </div>
            </section>

            <section className="px-6 md:px-12 py-20">
                <div className="mb-12 flex justify-between items-end border-b border-border-strong pb-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                        {productsData.length} Products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                    {productsData.map((product) => (
                        <div key={product.id} className="group flex flex-col cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:outline-offset-8">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                            </div>

                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h2 className="text-md font-bold mb-2 group-hover:underline underline-offset-4">{product.name}</h2>
                                    <p className="text-sm text-gray-600">{product.price}</p>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                    className="text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black p-1"
                                    aria-label={`Add ${product.name} to bag`}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// السطر السحري الذي كان ناقصاً ويسبب الشاشة البيضاء:
export default Products;