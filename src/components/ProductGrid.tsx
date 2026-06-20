import React from 'react';

/**
 * تعريف الواجهة (Interface) لبيانات المنتج. يضمن هذا التزامنا بالأنواع في TypeScript.
 */
interface Product {
    title: string;
    imageSrc: string; // يجب استبدالها بمسارات صور حقيقية
    alt: string;
}

/**
 * بيانات المنتجات الأربعة المعروضة في الصفحة (يجب تعديل المسارات والصور)
 */
const productsData: Product[] = [
    {
        title: "Prada Cookie box and leather bag",
        imageSrc: "/placeholder-bag.jpg", // <--- استبدل بالصورة الحقيقية
        alt: "A model holding a beige leather handbag"
    },
    {
        title: "Cotton bouclé crop top",
        imageSrc: "/placeholder-top.jpg", // <--- استبدل بالصورة الحقيقية
        alt: "Model wearing a pink cotton boucle crop top"
    },
    {
        title: "Raffia hat",
        imageSrc: "/placeholder-hat.jpg", // <--- استبدل بالصورة الحقيقية
        alt: "A model wearing a straw raffia sun hat"
    },
    {
        title: "Leather sandals with floral ornament",
        imageSrc: "/placeholder-sandals.jpg", // <--- استبدل بالصورة الحقيقية
        alt: "Model wearing light colored leather sandals"
    },
];

/**
 * المكون المسؤول عن عرض بطاقة منتج واحدة.
 */
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="group relative cursor-pointer transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
            {/* الصورة مع تأثير التكبير عند التحويم */}
            <div
                className="overflow-hidden aspect-[3/4] bg-gray-100" // نسبة عرض إلى ارتفاع 3:4 للمظهر البصري الجذاب
                style={{ backgroundImage: `url(${product.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <img
                    src={product.imageSrc}
                    alt={product.alt}
                    className="w-full h-full transition duration-500 group-hover:scale-105" // تأثير التكبير عند التحويم
                    // ملاحظة: في تطبيق حقيقي، يجب استخدام <Image /> من Next.js بدلاً من وسم <img> العادي لتحسين الأداء
                />
            </div>

            {/* عنوان المنتج (Text) */}
            <div className="mt-6 text-center pt-4">
                <p className="text-lg font-medium uppercase tracking-widest transition duration-300 group-hover:text-gray-800 hover:opacity-90">
                    {product.title}
                </p>
            </div>
        </div>
    );
};


/**
 * المكون الرئيسي لعرض شبكة المنتجات الأربعة (The Product Grid).
 */
const ProductGrid: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-screen-xl px-6 md:px-12 lg:px-16">

                {/* العنوان الترويجي العلوي */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm uppercase tracking-widest font-normal text-gray-500 mb-2">
                        Lightness and pure textures shape the essence of Prada collection, with an other new arrival.
                    </h2>
                </div>

                {/* Grid Layout: 4 أعمدة متجاوبة */}
                <div className="grid grid-cols-1 gap-x-8 md:grid-cols-4">
                    {productsData.map((product, index) => (
                        // تمرير بيانات كل منتج إلى مكون ProductCard
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductGrid;
