import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, MessageSquare, Trophy, Calendar, Search, Plus, MessageCircle, Share2, Zap } from "lucide-react";

export default function Community() {
  const groups = [
    { name: "Cikarang Futsal Lovers", members: "1.2k", activity: "Sangat Aktif", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=200" },
    { name: "Badminton Bekasi Community", members: "850", activity: "Aktif", image: "https://images.unsplash.com/photo-1626225967045-9c76db7b3ed4?auto=format&fit=crop&q=80&w=200" },
    { name: "Bekasi Basket Squad", members: "610", activity: "Populer", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=200" },
    { name: "Cikarang Tennis Club", members: "150", activity: "Baru", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
      <div className="bg-primary pb-20 pt-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 -mt-10 flex-grow pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-2">Komunitas</h1>
            <p className="text-white/70 font-bold">Cari teman main dan bangun tim kamu!</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-black italic uppercase h-14 px-8 rounded-xl shadow-xl flex gap-3">
                <Plus className="w-5 h-5" /> Buat Komunitas Baru
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-3xl p-8">
              <DialogHeader><DialogTitle className="text-2xl font-black uppercase italic tracking-tighter">Form Komunitas Baru</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase text-slate-400">Nama Komunitas</label>
                   <Input placeholder="Contoh: Futsal Jababeka FC" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase text-slate-400">Olahraga</label>
                   <Input placeholder="Futsal / Badminton / Basket" className="h-12 rounded-xl" />
                </div>
                <Button className="w-full h-12 rounded-xl font-bold bg-primary text-white mt-4">Buat Sekarang</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <Card className="rounded-3xl border-none shadow-xl bg-white p-8">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 text-primary border-b pb-4">Diskusi & Mabar</h3>
              <div className="space-y-6">
                {[
                  { user: "Ahmad Fauzi", group: "Cikarang Futsal Lovers", time: "10m ago", text: "Kurang 2 orang lagi buat mabar jam 7 malam ini di LaPed Arena! Join gas?", comments: 24 },
                  { user: "Siska Putri", group: "Badminton Bekasi", time: "1h ago", text: "Ada yang tau lapangan badminton yang kosong sabtu pagi daerah Tambun?", comments: 5 }
                ].map((post, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">{post.user[0]}</div>
                      <div>
                        <p className="font-bold text-primary text-sm uppercase">{post.user}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{post.time} • {post.group}</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-slate-700 leading-tight mb-4 italic">"{post.text}"</p>
                    <div className="flex gap-4 text-[10px] font-black uppercase text-primary">
                       <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {post.comments} DISKUSI</span>
                       <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-secondary" /> IKUT MABAR</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4">
            <Card className="rounded-3xl border-none shadow-xl bg-white p-6">
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6 text-primary">Rekomendasi Grup</h3>
              <div className="space-y-4">
                {groups.map((group, i) => (
                  <div key={i} className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                    <img src={group.image} className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-slate-700 group-hover:text-primary text-sm uppercase">{group.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{group.members} ATLET</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
