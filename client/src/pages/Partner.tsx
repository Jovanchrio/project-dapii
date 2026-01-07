import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, ShieldCheck, ArrowRight, Smartphone, QrCode } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Partner() {
  const features = [
    { id: "auto", title: "MANAJEMEN OTOMATIS", desc: "Sistem booking 24 jam tanpa perlu admin manual. No more double booking.", icon: Zap, color: "bg-blue-500/10 text-blue-500", details: "Fitur ini memungkinkan pelanggan melakukan booking langsung dari aplikasi LaPed. Jadwal akan terupdate secara real-time dan pemilik tidak perlu lagi mencatat manual di buku." },
    { id: "analytics", title: "ANALITIK BISNIS", desc: "Pantau jam ramai dan pendapatan harian lewat dashboard interaktif.", icon: BarChart3, color: "bg-green-500/10 text-green-500", details: "Dapatkan laporan harian, mingguan, hingga bulanan mengenai performa GOR Anda. Lihat jam-jam sibuk untuk menyesuaikan strategi harga." },
    { id: "payment", title: "PEMBAYARAN DIGITAL", desc: "Dana masuk otomatis ke rekening Anda via QRIS & VA. Aman terintegrasi.", icon: QrCode, color: "bg-primary/10 text-primary", details: "Dukung berbagai metode pembayaran mulai dari QRIS, E-Wallet (GoPay, DANA, OVO), hingga Virtual Account berbagai bank ternama." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
      <div className="bg-primary pb-32 pt-16">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 -mt-24 flex-grow pb-24">
        <div className="max-w-4xl mx-auto text-center mb-20 text-white">
          <Badge className="bg-secondary text-white border-none mb-6 px-6 py-1 text-[10px] font-black uppercase tracking-widest italic shadow-lg">LaPed Business Solution</Badge>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
            <span className="text-secondary">DOMINASI PASAR</span> <br />
            <span className="text-secondary">OLAHRAGA LOKAL</span>
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-medium italic">
            Sistem manajemen venue tercanggih untuk pemilik GOR di Cikarang & Bekasi. 
            Digitalisasi jadwal, tingkatkan okupansi, dan maksimalkan cuan.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-black italic uppercase tracking-tighter bg-secondary hover:bg-secondary/90 shadow-2xl rounded-xl">DAFTAR MITRA SEKARANG</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((f, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Card className="rounded-3xl border-none shadow-xl bg-white p-10 hover:shadow-2xl transition-all group cursor-pointer">
                   <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <f.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4 text-primary">{f.title}</h3>
                   <p className="text-sm font-medium text-slate-500 leading-relaxed">{f.desc}</p>
                   <div className="mt-6 flex items-center text-[10px] font-bold text-primary gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      PELAJARI LEBIH LANJUT <ArrowRight className="w-3 h-3" />
                   </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="rounded-3xl p-8">
                 <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                       <div className={`p-2 rounded-lg ${f.color}`}><f.icon className="w-6 h-6" /></div>
                       {f.title}
                    </DialogTitle>
                 </DialogHeader>
                 <div className="py-6 space-y-4">
                    <p className="text-slate-600 font-medium leading-relaxed">{f.details}</p>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <p className="text-xs font-bold text-primary uppercase mb-2">Benefit Utama:</p>
                       <ul className="text-sm text-slate-500 space-y-1 font-medium">
                          <li>• Setup Cepat & Mudah</li>
                          <li>• Dukungan Teknis 24/7</li>
                          <li>• Pelatihan Admin Venue</li>
                       </ul>
                    </div>
                    <Button className="w-full h-12 rounded-xl font-bold bg-primary text-white">Ajukan Aktivasi Fitur</Button>
                 </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-primary">MANFAAT JADI MITRA LAPED</h2>
                 <div className="space-y-6">
                    {[
                      { icon: Smartphone, title: "Kontrol dari HP", desc: "Update harga dan jadwal lapangan kapanpun dari aplikasi." },
                      { icon: ShieldCheck, title: "Keamanan Dana", desc: "Sistem rekonsiliasi otomatis setiap hari ke rekening Anda." },
                      { icon: Zap, title: "Promosi Otomatis", desc: "Venue Anda dipromosikan ke 50.000+ user aktif di LaPed." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                         <div>
                            <h4 className="font-bold text-slate-700 uppercase italic text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                 <div className="flex justify-between items-center mb-6">
                    <p className="font-bold uppercase italic text-sm text-white">DASHBOARD OWNER</p>
                    <Badge className="bg-green-500">LIVE</Badge>
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded w-1/3"></div>
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                       <p className="text-4xl font-black italic text-primary">+45%</p>
                    </div>
                    <p className="text-[10px] text-center font-bold text-white uppercase">PENINGKATAN OKUPANSI BULAN INI</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
