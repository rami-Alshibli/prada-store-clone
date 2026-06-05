import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BagsCollection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

    // روابط صور مؤقتة (استخدمنا نفس فكرة القسم الثاني)
    const womenBags = [
        { id: 1, name: "Prada Summer Bags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" },
        { id: 2, name: "Prada Re-Edition", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop" },
        { id: 3, name: "Prada Galleria", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" },
        { id: 4, name: "Prada Cleo", image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop" }
    ];

    const menBags = [
        { id: 5, name: "Prada Backpacks", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
        { id: 6, name: "Prada Brique", image: "https://images.unsplash.com/photo-1628149462148-31628b0304a9?q=80&w=800&auto=format&fit=crop" },
        { id: 7, name: "Prada Symbole", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" },
        { id: 8, name: "Prada Tote Bags", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop" }
    ];

    const activeData = activeTab === 'women' ? womenBags : menBags;

    return (
        <section className="bg-white py-16 flex flex-col items-center w-full font-primary">

            {/* الترويسة والنصوص العلوية */}
            <div className="flex flex-col items-center px-6 mb-12 w-full max-w-4xl text-center">
                <h2 className="text-md font-bold mb-4 text-surface-base">Bags Collections</h2>
                <p className="text-[12px] text-surface-base max-w-2xl mb-8 leading-relaxed">
                    From the bags that shaped Prada's iconic vision to the newest designs, past and present come together in functional elegance with a deeply modern spirit.
                </p>

                {/* أزرار التبديل (Tabs) */}
                <div className="flex gap-6">
                    <button
                        onClick={() => setActiveTab('women')}
                        className={`text-xs font-bold pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                            activeTab === 'women' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                        }`}
                        aria-pressed={activeTab === 'women'}
                    >
                        Women
                    </button>
                    <button
                        onClick={() => setActiveTab('men')}
                        className={`text-xs font-bold pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                            activeTab === 'men' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                        }`}
                        aria-pressed={activeTab === 'men'}
                    >
                        Men
                    </button>
                </div>
            </div>

            {/* شبكة المنتجات متطابقة تماماً مع DiscoverCollection */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {activeData.map((item) => (
                    <Link
                        to="/products"
                        key={item.id}
                        className="flex flex-col group cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:-outline-offset-4"
                    >
                        {/* الحاوية بنسبة 3/4 مع object-cover للقص المنتظم */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />
                        </div>
                        {/* حاوية النص بارتفاع ثابت */}
                        <div className="bg-white p-4 flex items-center justify-center min-h-[80px]">
                            <h3 className="text-[10px] md:text-xs font-bold text-center text-surface-base leading-tight">
                                {item.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default BagsCollection;