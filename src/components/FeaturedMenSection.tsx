import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMenSection: React.FC = () => {
    return (
        // استخدمنا نفس التنسيق ولكن لاحظ ترتيب العناصر داخل الـ section
        <section className="w-full flex flex-col md:flex-row bg-[#fcfcfc] font-primary">

            {/* 1. النصف الأيسر: الفيديو (كان في القسم السابق على اليمين) */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden bg-black">
                {/* فيديو لعارض أزياء بنظارات شمسية ليطابق الستايل الرجالي */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90"
                >
                    <source
                        src="https://v1.padlet.pics/1/video?url=https%3A%2F%2Fvideos.pexels.com%2Fvideo-files%2F8538891%2F8538891-uhd_2160_4096_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
            </div>

            {/* 2. النصف الأيمن: الصورة الصغيرة والنصوص */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-20 px-6 min-h-[60vh] md:min-h-screen">
                <div className="w-full max-w-[320px] flex flex-col items-center">
                    {/* صورة النظارات الرجالية */}
                    <img
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
                        alt="Men's Sunglasses"
                        className="w-full h-auto object-cover mb-8"
                    />

                    {/* النصوص مطابقة تماماً لصورة برادا اللي أرسلتها */}
                    <div className="text-center flex flex-col items-center gap-2">
                        <h2 className="text-sm font-bold text-surface-base">
                            Men's Sunglasses
                        </h2>
                        <p className="text-[10px] uppercase tracking-widest text-surface-base font-bold">
                            New Geometric Shapes
                        </p>
                        <Link
                            to="/products"
                            className="text-[10px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-[2px] mt-2 hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-8"
                        >
                            DISCOVER
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeaturedMenSection;