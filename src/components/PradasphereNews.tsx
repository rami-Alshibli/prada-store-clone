import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PradasphereNews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsItems = [
        {
            id: 1,
            tag: "EVENTS",
            title: "Prada Mode New York",
            overlayText: "PRADA MODE\nCHANNEL",
            isLive: true,
            image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 2,
            tag: "CAMPAIGNS",
            title: "Linea Rossa Fall/Winter",
            overlayText: "LINEA ROSSA\nCAMPAIGN",
            isLive: false,
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 3,
            tag: "PROJECTS",
            title: "Re-Nylon Sustainability",
            overlayText: "RE-NYLON\nINITIATIVE",
            isLive: false,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < newsItems.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <section className="bg-surface-base text-white py-20 w-full overflow-hidden font-primary relative border-t border-gray-900">

            {/* تكبير عنوان القسم */}
            <h2 className="text-center text-base md:text-lg font-bold mb-16 tracking-widest text-white uppercase">
                Pradasphere News
            </h2>

            <div className="relative w-full h-[50vh] md:h-[75vh] flex items-center justify-center">

                {newsItems.map((item, index) => {
                    const offset = index - currentIndex;

                    return (
                        <div
                            key={item.id}
                            className="absolute w-[85vw] md:w-[65vw] h-full transition-transform duration-700 ease-in-out flex flex-col items-center"
                            style={{
                                transform: `translateX(calc(${offset * 105}%))`,
                                opacity: Math.abs(offset) > 1 ? 0 : 1,
                                pointerEvents: offset === 0 ? 'auto' : 'none'
                            }}
                        >
                            <Link to="/products" className="w-full h-[75%] relative bg-gray-900 block group cursor-pointer overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-80"
                                />

                                {/* تكبير النص الضخم (من 3xl إلى 4xl ومن 5xl إلى 6xl) */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <h3 className="text-white text-4xl md:text-6xl font-bold text-center leading-tight tracking-[0.1em] font-primary" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                                        {item.overlayText.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}<br/>
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                </div>

                                {item.isLive && (
                                    <div className="absolute bottom-6 right-8 flex items-center gap-2 pointer-events-none">
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="text-white font-bold text-sm tracking-widest">LIVE</span>
                                    </div>
                                )}
                            </Link>

                            <div
                                className={`text-center mt-8 transition-opacity duration-700 ${
                                    offset === 0 ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                {/* تكبير النصوص السفلية */}
                                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white">
                                    {item.tag}
                                </p>
                                <p className="text-sm font-bold text-white">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}

                {/* زر السابق: تم ضبط الموقع بدقة (left-[5%] للموبايل و left-[16%] للكمبيوتر) ليكون بالفراغ */}
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-[5%] md:left-[16%] top-[37.5%] transform -translate-y-1/2 text-white hover:opacity-60 transition-opacity z-20 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                        aria-label="Previous news item"
                    >
                        <ChevronLeft size={28} strokeWidth={1} />
                    </button>
                )}

                {/* زر التالي: تم ضبط الموقع بدقة (right-[5%] للموبايل و right-[16%] للكمبيوتر) ليكون بالفراغ */}
                {currentIndex < newsItems.length - 1 && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-[5%] md:right-[16%] top-[37.5%] transform -translate-y-1/2 text-white hover:opacity-60 transition-opacity z-20 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                        aria-label="Next news item"
                    >
                        <ChevronRight size={28} strokeWidth={1} />
                    </button>
                )}
            </div>
        </section>
    );
};

export default PradasphereNews;