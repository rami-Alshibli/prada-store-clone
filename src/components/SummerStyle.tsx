import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SummerStyle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

    // مصفوفة فئات المنتجات النسائية
    const womenCategories = [
        { id: 1, title: "Women's Bags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" },
        { id: 2, title: "Women's Ready to Wear", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" },
        { id: 3, title: "Women's Shoes", image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop" },
        { id: 4, title: "Women's Accessories", image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop" }
    ];

    // مصفوفة فئات المنتجات الرجالية
    const menCategories = [
        { id: 5, title: "Men's Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
        { id: 6, title: "Men's Ready to Wear", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" },
        { id: 7, title: "Men's Shoes", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop" },
        { id: 8, title: "Men's Accessories", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" }
    ];

    const activeData = activeTab === 'women' ? womenCategories : menCategories;

    return (
        <section className="bg-white py-20 flex flex-col items-center w-full font-primary">

            {/* النص العلوي */}
            <p className="text-center text-[11px] md:text-xs font-bold max-w-2xl px-6 mb-6 leading-loose uppercase tracking-widest text-surface-base">
                Essential volumes, natural materials and functional details define the new season,
                reinterpreting the codes of summer style.
            </p>

            {/* أزرار التبديل (Tabs) */}
            <div className="flex gap-6 mb-12">
                <button
                    onClick={() => setActiveTab('women')}
                    className={`text-xs font-bold uppercase tracking-widest pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                        activeTab === 'women' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                    }`}
                >
                    Women
                </button>
                <button
                    onClick={() => setActiveTab('men')}
                    className={`text-xs font-bold uppercase tracking-widest pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                        activeTab === 'men' ? 'border-b-[1.5px] border-black text-black' : 'text-gray-500 hover:text-black'
                    }`}
                >
                    Men
                </button>
            </div>

            {/* شبكة الصور (مع فواصل بيضاء رقيقة لمحاكاة تصميم برادا) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white border-t border-b border-gray-100">
                {activeData.map((item) => (
                    <Link
                        to="/products"
                        key={item.id}
                        className="flex flex-col group cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:-outline-offset-4 bg-white"
                    >
                        {/* حاوية الصورة بخلفية رمادية فاتحة جداً (Product Shot Style) */}
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] flex items-center justify-center p-8">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        {/* اسم الفئة في الأسفل بخلفية بيضاء */}
                        <div className="p-4 flex items-center justify-center bg-white min-h-[60px]">
                            <h3 className="text-[10px] font-bold text-center uppercase tracking-widest text-surface-base group-hover:underline underline-offset-4">
                                {item.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default SummerStyle;