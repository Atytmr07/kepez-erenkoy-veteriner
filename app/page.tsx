"use client";

import { siteConfig, heroContent, trustContent, servicesContent, mottoContent } from "@/data/config";
import { HeartHandshake, ShieldPlus, Stethoscope, Clock, Heart, PawPrint, MessageCircle, MapPin, Map, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// For custom icons based on strings
const IconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-8 h-8 text-rose-500" />,
    ShieldPlus: <ShieldPlus className="w-8 h-8 text-rose-500" />,
    Stethoscope: <Stethoscope className="w-8 h-8 text-rose-500" />,
    Clock: <Clock className="w-8 h-8 text-rose-500" />
};

export default function Home() {
    return (
        <main className="min-h-screen text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden pb-20 md:pb-0">
            {/* JSON-LD Local Business Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VeterinaryCare",
                        "name": "Kepez Erenköy Veteriner Kliniği",
                        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop",
                        "@id": "",
                        "url": "https://kepezerenkoyveteriner.com",
                        "telephone": siteConfig.phoneRaw,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Erenköy, Antalya D B Blv. No:317/A",
                            "addressLocality": "Kepez",
                            "addressRegion": "Antalya",
                            "postalCode": "07080",
                            "addressCountry": "TR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 36.9381555,
                            "longitude": 30.6865675
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": "1250"
                        }
                    })
                }}
            />

            {/* 1. HEADER (Fixed, Glassmorphic) */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/70 border-b border-white/50 shadow-sm">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <PawPrint className="w-8 h-8 text-stone-800" />
                            <Heart className="w-4 h-4 text-rose-500 absolute -top-1 -right-1 fill-rose-500" />
                        </div>
                        <span className="font-bold text-lg md:text-xl tracking-tight text-stone-900">Kepez Erenköy Veteriner Kliniği</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 font-medium text-stone-600">
                        <a href="#hizmetler" className="hover:text-rose-500 transition-colors">Hizmetlerimiz</a>
                        <a href="#yorumlar" className="hover:text-rose-500 transition-colors">Yorumlar</a>
                        <a href="#iletisim" className="hover:text-rose-500 transition-colors">İletişim</a>
                        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-700 px-4 py-2 rounded-full transition-colors font-bold">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                    </div>
                </div>
            </header>

            {/* 2. HERO SECTION (Solid Modern Split Layout) */}
            <section className="relative w-full pt-32 lg:pt-40 pb-20 px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
                {/* Background ambient mesh */}
                <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-rose-100 rounded-full blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[100px] opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left Column: Typography, CTAs & Inline Trust Info */}
                    <div className="space-y-10 text-center lg:text-left relative z-10 max-w-2xl mx-auto lg:mx-0">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full text-rose-600 font-bold tracking-wide text-sm border border-rose-100 mb-2">
                                <PawPrint className="w-4 h-4" /> Her Zaman Yanınızdayız
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
                                <span className="block text-rose-600 mb-2">{heroContent.hook.split("İçin")[0]}İçin</span>
                                <span className="block">{heroContent.hook.split("İçin")[1]}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium">
                                {heroContent.solution}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href={`tel:${siteConfig.phoneRaw}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                {heroContent.ctaText}
                            </a>
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-stone-50 text-stone-700 text-lg font-bold rounded-2xl shadow-md border border-stone-200 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                WhatsApp
                            </a>
                        </div>

                        {/* Static Trust Indicators (Replaces Floating Badges) */}
                        <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-stone-900 text-sm">7/24 Açık</div>
                                    <div className="text-xs text-stone-500 font-medium">Uzman Hekim</div>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-10 bg-stone-200"></div>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center border-2 border-white z-20">
                                        <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center border-2 border-white z-10">
                                        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-stone-900 text-sm">1000+ Mutlu Pati</div>
                                    <div className="text-xs text-stone-500 font-medium flex items-center gap-1">
                                        Tam Not <span className="text-amber-400 text-[10px]">★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Solid/Bento Style Imagery */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="relative aspect-[4/5] lg:aspect-square w-full">
                            {/* Main Image Container */}
                            <div className="absolute inset-0 right-8 bottom-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-stone-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Antalya Kepez Veteriner Kliniği - Mutlu Köpek Muayenesi"
                                    fill
                                    priority
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Secondary Inset Image (Bento style overlap) */}
                            <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-[#fafaf9] bg-stone-100 transform translate-y-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop"
                                    alt="Erenköy 7/24 Nöbetçi Veteriner Kedi Bakımı"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200/60 to-transparent blur-xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 MISSION / MOTTO SECTION (100x Upgrade) */}
            <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(#fecdd3_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] p-4 lg:p-6 shadow-2xl border border-white/80">
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-stone-50 border border-stone-100 flex flex-col lg:flex-row shadow-inner">

                            {/* Left Side: Imagery */}
                            <div className="w-full lg:w-5/12 relative aspect-square lg:aspect-auto min-h-[400px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1470&auto=format&fit=crop"
                                    alt="Kepez Veteriner Kliniği Doktor ve Mutlu Köpek"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                                {/* Floating Trust Badge */}
                                <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                                        <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-stone-900 leading-tight">Can Dostlarınız</div>
                                        <div className="text-sm text-stone-500 font-medium">Güvende ve Mutlu</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Content & Typography */}
                            <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white/50">
                                {/* Decorative Quote Mark */}
                                <div className="absolute top-8 right-12 text-[120px] font-serif text-rose-100 leading-none select-none opacity-50 rotate-12">"</div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="relative z-10"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 font-bold tracking-wide text-sm border border-emerald-100 mb-8 shadow-sm">
                                        <ShieldPlus className="w-4 h-4" /> Güvenilir Hizmet
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-6">
                                        Her Canlı <span className="text-rose-500">Ailemizin Bir Parçası</span>
                                    </h2>

                                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-10">
                                        Antalya Kepez'de, evcil dostunuzla ilgili her şey için sevgiyle hizmet vermekten gurur duyuyoruz. Şefkatli ve güler yüzlü ekibimizle daima yanınızdayız.
                                    </p>

                                    {/* Scannable Grid instead of wall of text */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-4 bg-white/60 p-3 rounded-2xl border border-white/50 shadow-sm">
                                            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
                                                <HeartHandshake className="w-6 h-6 text-rose-500" />
                                            </div>
                                            <span className="font-bold text-stone-800">Samimi Yaklaşım</span>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/60 p-3 rounded-2xl border border-white/50 shadow-sm">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                                                <ShieldPlus className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <span className="font-bold text-stone-800">Yüksek Standartlar</span>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/60 p-3 rounded-2xl border border-white/50 shadow-sm">
                                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                                                <MessageCircle className="w-6 h-6 text-amber-500" />
                                            </div>
                                            <span className="font-bold text-stone-800">Destekleyici Hizmet</span>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/60 p-3 rounded-2xl border border-white/50 shadow-sm">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                                <PawPrint className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <span className="font-bold text-stone-800">Güler Yüzlü Ekip</span>
                                        </div>
                                    </div>

                                    {/* Small Divider */}
                                    <div className="mt-10 flex items-center gap-4 text-stone-300">
                                        <div className="h-0.5 w-16 bg-rose-200 rounded-full"></div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES SECTION */}
            <section id="hizmetler" className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-rose-600 font-bold tracking-wide text-sm border border-white mb-4 shadow-sm">
                            <PawPrint className="w-4 h-4" /> Neler Yapıyoruz?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                            Kliniğimizdeki Hizmetler
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesContent.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-xl shadow-stone-200/20 hover:shadow-2xl hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center gap-4"
                            >
                                <div className="p-4 bg-rose-50 rounded-2xl group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                                    {IconMap[service.icon]}
                                </div>
                                <h3 className="font-bold text-lg text-stone-800">{service.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.5. CLINIC GALLERY SECTION */}
            <section className="py-24 px-6 bg-stone-50/50">
                <div className="max-w-6xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                            Kliniğimizden Kareler
                        </h2>
                        <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                            Modern ekipmanlarımız ve sevgi dolu ortamımızla dostlarınız güvende.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((num, idx) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.15, duration: 0.5 }}
                                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group"
                            >
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <Image
                                    src={`/images/foto${num}.webp`}
                                    alt={`Kepez Erenköy Veteriner Kliniği - ${num}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TESTIMONIALS SECTION */}
            <section id="yorumlar" className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-stone-900"
                    >
                        {trustContent.headline}
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {trustContent.reviews.map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white/70 backdrop-blur-lg border border-white p-8 rounded-[2rem] shadow-xl shadow-rose-900/5 text-left relative hover:-translate-y-1 transition-transform"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIdx) => (
                                        <svg key={starIdx} className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg md:text-xl font-medium text-stone-700 leading-relaxed mb-8">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xl ring-4 ring-white">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-stone-900">{review.author}</div>
                                        <div className="text-sm text-stone-500">Klinik Ziyaretçisi</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CONTACT & LOCATION SECTION */}
            <section id="iletisim" className="py-24 px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="bg-white/80 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white shadow-2xl shadow-stone-200/40">
                        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                            {/* Contact Info Card */}
                            <div className="lg:col-span-2 space-y-8 p-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                                        Bize Ulaşın
                                    </h2>
                                    <p className="text-stone-600 text-lg">7/24 kapımız dostlarımıza açık.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-rose-100 rounded-2xl text-rose-600 shrink-0 mt-1">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">Adres</h4>
                                            <p className="text-stone-600 leading-relaxed">{siteConfig.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-rose-100 rounded-2xl text-rose-600 shrink-0 mt-1">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">Telefon</h4>
                                            <p className="text-stone-600 leading-relaxed">{siteConfig.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col gap-3">
                                    <a
                                        href={siteConfig.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-2xl transition-colors"
                                    >
                                        <Map className="w-5 h-5" /> Haritada Görüntüle
                                    </a>
                                    <a
                                        href={siteConfig.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold rounded-2xl transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" /> WhatsApp'tan Yazın
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps Iframe */}
                            <div className="lg:col-span-3 w-full h-[400px] lg:h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-inner bg-stone-100 ring-4 ring-white">
                                <iframe
                                    src={siteConfig.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full object-cover grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 6. FOOTER */}
            <footer className="w-full bg-white/50 backdrop-blur-md pt-16 pb-8 px-6 text-center border-t border-white shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <PawPrint className="w-10 h-10 text-stone-300" />
                        </div>
                        <h3 className="font-bold text-stone-900 text-xl">Kepez Erenköy Veteriner Kliniği</h3>
                        <p className="text-stone-500 max-w-sm">Minik dostlarınız için 7 gün 24 saat sevgi ve özenle hizmetinizdeyiz.</p>
                    </div>

                    <div className="pt-8 border-t border-stone-200/50 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-stone-400 font-medium">
                        <p>© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </footer>

            {/* 7. FLOATING WHATSAPP BUTTON */}
            <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:-translate-y-2 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 flex items-center justify-center group"
                aria-label="WhatsApp İletişim"
            >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-bold py-2 px-4 rounded-2xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden md:block border border-stone-100">
                    Size nasıl yardımcı olabiliriz? 🐾
                </span>
            </a>

        </main>
    );
}
