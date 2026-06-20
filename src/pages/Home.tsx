import React from 'react';
import Hero from '../components/Hero';
import DiscoverCollection from '../components/DiscoverCollection';
import FeaturedSection from '../components/FeaturedSection';
import SummerStyle from '../components/SummerStyle';
// استيراد القسم الرجالي الجديد
import FeaturedMenSection from '../components/FeaturedMenSection';
import PradaExplore from '../components/PradaExplore.tsx';
import BagsCollection from '../components/BagsCollection';
import PradasphereNews from '../components/PradasphereNews';
import Footer from '../components/Footer';


const Home: React.FC = () => {
    return (
        <main className="bg-white">
            {/* 1. قسم البانر الرئيسي */}
            <Hero />

            {/* 2. قسم تشكيلات الأزياء */}
            <DiscoverCollection />

            {/* 3. قسم النظارات النسائية (الصورة يسار، الفيديو يمين) */}
            <FeaturedSection />

            {/* 4. قسم فئات المنتجات */}
            <SummerStyle />

            {/* 5. قسم النظارات الرجالية (الفيديو يسار، الصورة يمين) */}
            <FeaturedMenSection />

            <PradaExplore />

            <BagsCollection />

            <PradasphereNews />

            <Footer />


        </main>
    );
};

export default Home;