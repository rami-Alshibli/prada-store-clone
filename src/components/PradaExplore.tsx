import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';

const PradaExplore: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        // تغيير الخلفية من أسود إلى رمادي فاتح (لون تحميل أنيق)
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden font-primary bg-[#f4f4f4]">

            {/* فيديو الخلفية */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                {/* رابط فيديو أزياء سريع وموثوق */}
                <source src="https://res.cloudinary.com/demo/video/upload/q_auto,f_auto,w_1920/fashion.mp4" type="video/mp4" />
            </video>

            {/* طبقة تظليل خفيفة لضمان وضوح النصوص البيضاء */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

            {/* النصوص والأزرار */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full px-6 flex flex-col items-center text-center text-white z-10">
                <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">Prada Explore</h2>
                <p className="text-[11px] md:text-xs max-w-[500px] mb-8 leading-relaxed font-bold">
                    Bold elegance and utility in a versatile bag, with 3D pockets and interiors designed for every personal journey.
                </p>

                <div className="flex gap-8">
                    <Link
                        to="/products"
                        className="text-[10px] font-bold uppercase tracking-widest border-b-[1.5px] border-white pb-[2px] hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
                    >
                        FOR HER
                    </Link>
                    <Link
                        to="/products"
                        className="text-[10px] font-bold uppercase tracking-widest border-b-[1.5px] border-white pb-[2px] hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
                    >
                        FOR HIM
                    </Link>
                </div>
            </div>

            {/* زر الإيقاف/التشغيل */}
            <button
                onClick={togglePlay}
                className="absolute bottom-8 right-8 text-white hover:opacity-60 transition-opacity z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white p-2"
                aria-label={isPlaying ? "Pause video" : "Play video"}
            >
                {isPlaying ? <Pause size={14} strokeWidth={2} /> : <Play size={14} strokeWidth={2} />}
            </button>

        </section>
    );
};

export default PradaExplore;