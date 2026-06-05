import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSection: React.FC = () => {
    return (
        <section className="w-full flex flex-col md:flex-row bg-[#fcfcfc] font-primary">

            {/* النصف الأيسر: الصورة الصغيرة والنصوص */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-20 px-6 min-h-[60vh] md:min-h-screen">
                <div className="w-full max-w-[320px] flex flex-col items-center">
                    {/* الصورة الفاخرة على اليسار */}
                    <img
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
                        alt="Women's Sunglasses"
                        className="w-full h-auto object-cover mb-8"
                    />

                    {/* النصوص والزر النشط */}
                    <div className="text-center flex flex-col items-center gap-2">
                        <h2 className="text-sm font-bold text-surface-base">
                            Women's Sunglasses
                        </h2>
                        <p className="text-[10px] uppercase tracking-widest text-surface-base font-bold">
                            Bold Reflections
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

            {/* النصف الأيمن: الفيديو المفعل الآن */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden bg-gray-900">

                {/* وسم الفيديو الاحترافي:
                    - autoPlay: ليعمل تلقائياً عند فتح الصفحة
                    - loop: ليعيد تشغيل نفسه اللانهائي
                    - muted: صامت (شرط أساسي في المتصفحات لكي يعمل الـ autoPlay تلقائياً)
                    - playsInline: لكي يعمل الفيديو داخل المتصفح على هواتف الآيفون والأندرويد دون فتح مشغل خارجي
                */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                >
                    {/* رابط فيديو حقيقي عالي الجودة لعارضة أزياء بنظارات شمسية */}
                    <source
                        src="https://v1.padlet.pics/1/video?url=https%3A%2F%2Fvideos.pexels.com%2Fvideo-files%2F4921262%2F4921262-hd_1080_1920_30fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* طبقة تظليل سوداء خفيفة جداً فوق الفيديو لإعطائه طابعاً سينمائياً */}
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

            </div>

        </section>
    );
};

export default FeaturedSection;