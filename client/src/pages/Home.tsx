import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { MOCK_VENUES, CATEGORIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar as CalendarIcon, ChevronRight, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImg from "@assets/generated_images/hero_background_of_diverse_people_playing_sports_like_futsal_and_badminton_energetically.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation(`/explore?q=${searchQuery}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Sports Action" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-medium text-sm tracking-wide uppercase">LaPed Zone ID - Ensiklopedia Lapangan</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6">
              Temukan Venue <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                Olahragamu
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 max-w-xl leading-relaxed font-light">
              Booking lapangan futsal, badminton, basket, dan lainnya dengan mudah. 
              Harga transparan, jadwal real-time, tanpa ribet.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200 py-2 md:py-0">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <Input 
                  type="text" 
                  placeholder="Cari lapangan futsal, basket..." 
                  className="border-none shadow-none focus-visible:ring-0 px-0 h-10 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center px-4 py-2 md:py-0">
                <MapPin className="w-5 h-5 text-muted-foreground mr-3" />
                <Input 
                  type="text" 
                  placeholder="Lokasi (e.g. Cikarang Utara)" 
                  className="border-none shadow-none focus-visible:ring-0 px-0 h-10 text-base"
                />
              </div>
              <Button 
                size="lg" 
                className="rounded-xl h-12 px-8 font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                onClick={handleSearch}
              >
                Cari
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 flex items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-lg">500+</span>
                  <span className="text-xs uppercase tracking-wider">Venue</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-lg">4.8/5</span>
                  <span className="text-xs uppercase tracking-wider">Rating</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-lg">24/7</span>
                  <span className="text-xs uppercase tracking-wider">Booking</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Kategori Olahraga</h2>
              <p className="text-muted-foreground">Pilih jenis olahraga favoritmu</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setLocation(`/explore?type=${cat.name}`)}
              >
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">{cat.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Venue Terpopuler</h2>
              <p className="text-muted-foreground">Lapangan pilihan dengan rating tertinggi bulan ini</p>
            </div>
            <Button variant="outline" className="hidden md:flex group" onClick={() => setLocation("/explore")}>
              Lihat Semua <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_VENUES.slice(0, 3).map((venue, idx) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <VenueCard venue={venue} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="w-full" onClick={() => setLocation("/explore")}>
              Lihat Semua
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Daftar Member & Kumpulkan Poin!</h2>
                <p className="text-white/90 text-lg mb-6">
                  Dapatkan poin setiap kali booking lapangan. Tukarkan poin dengan diskon menarik atau jam main gratis.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary" className="font-bold shadow-lg hover:shadow-xl transition-all">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                  <div className="text-center text-white">
                    <span className="block text-3xl font-bold">2x</span>
                    <span className="text-xs uppercase font-bold tracking-widest">Poin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
