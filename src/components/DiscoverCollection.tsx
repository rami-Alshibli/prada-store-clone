import React, { useState } from 'react';

const DiscoverCollection: React.FC = () => {
    // حالة لتتبع أي زر تم الضغط عليه (افتراضياً 'women')
    const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

    // مصفوفة المنتجات النسائية (التي تظهر بالصورة)
    const womenCollection = [
        { id: 1, name: "Prada Buckle cotton and leather bag", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" },
        { id: 2, name: "Cotton bouclé crop top", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
        { id: 3, name: "Raffia hat", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
        { id: 4, name: "Leather sandals with floral ornament", image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop" }
    ];

    // مصفوفة المنتجات الرجالية
    const menCollection = [
        { id: 5, name: "Re-Nylon backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
        { id: 6, name: "Printed cotton shirt", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" },
        { id: 7, name: "Denim bucket hat", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
        { id: 8, name: "Brushed leather loafers", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop" }
    ];

    // تحديد المصفوفة النشطة بناءً على حالة الزر
    const activeData = activeTab === 'women' ? womenCollection : menCollection;

    return (
        <section className="bg-white py-16 flex flex-col items-center w-full">

            {/* النص الوصفي (نسخة طبق الأصل من الصورة) */}
            <p className="text-center text-sm md:text-base font-bold max-w-2xl px-6 mb-6 leading-relaxed font-primary">
                Lightness and pure textures shape the essence of summer in the new Prada collection, with an online exclusive edit.
            </p>

            {/* أزرار التبديل (Tabs) */}
            <div className="flex gap-6 mb-10 font-primary">
                <button
                    onClick={() => setActiveTab('women')}
                    className={`text-sm font-bold pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                        activeTab === 'women' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                    }`}
                    aria-pressed={activeTab === 'women'}
                >
                    Women
                </button>
                <button
                    onClick={() => setActiveTab('men')}
                    className={`text-sm font-bold pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                        activeTab === 'men' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                    }`}
                    aria-pressed={activeTab === 'men'}
                >
                    Men
                </button>
            </div>

            {/* شبكة الصور (بدون مسافات بينها كما في تصميم برادا) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {activeData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col group cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:-outline-offset-4"
                        tabIndex={0}
                    >
                        {/* صورة المنتج */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />
                        </div>
                        {/* اسم المنتج */}
                        <div className="p-4 flex items-center justify-center min-h-[80px]">
                            <h3 className="text-xs font-bold text-center font-primary leading-tight">
                                {item.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default DiscoverCollection;