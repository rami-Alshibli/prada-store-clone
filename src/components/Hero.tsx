import React, { useState } from 'react';
import { ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const slides = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        // التغيير هنا: h-[88vh] بدلاً من h-screen
        <section className="relative w-full h-[88vh] overflow-hidden">

            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`Prada Campaign ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                    }`}
                />
            ))}

            <div className="absolute inset-0 bg-black/10 z-10"></div>

            {/* التغيير هنا: bottom-12 لتقريب المحتوى من الحافة السفلية المقطوشة */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-20 w-full text-center">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                    The Digital Edit
                </p>
                <h2 className="text-4xl md:text-[44px] font-bold mb-6 tracking-wide">
                    Days of Summer
                </h2>
                <Link
                    to="/products"
                    className="text-sm font-bold uppercase tracking-widest border-b-[1.5px] border-white pb-1 mb-8 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-opacity"
                >
                    For Her
                </Link>

                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-1.5 h-1.5 bg-white' : 'w-1.5 h-1.5 border-[1.5px] border-white'
                            }`}
                        />
                    ))}
                    <button onClick={nextSlide} aria-label="Next slide" className="hover:opacity-70 transition-opacity focus-visible:outline-white ml-2">
                        <ChevronRight size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>

            <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="absolute bottom-12 right-8 text-white hover:opacity-70 transition-opacity z-20 hidden md:block focus-visible:outline-white"
            >
                {isPlaying ? <Pause size={18} strokeWidth={2} /> : <Play size={18} strokeWidth={2} />}
            </button>
        </section>
    );
};

export default Hero;