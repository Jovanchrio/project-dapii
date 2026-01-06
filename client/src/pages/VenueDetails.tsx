import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_VENUES, MOCK_USER } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { MapPin, Star, Clock, CheckCircle2, MessageSquare, Send, CreditCard, Landmark, QrCode, Ticket, Smartphone, Banknote } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function VenueDetails() {
  const [, params] = useRoute("/venue/:id");
  const [, setLocation] = useLocation();
  const venueId = params?.id;
  const venue = MOCK_VENUES.find(v => v.id === venueId);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("08:00");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [paymentSubMethod, setPaymentSubMethod] = useState<string | null>(null);
  
  const [comments, setComments] = useState([
    { id: 1, user: "Davi Kurniawan", text: "Lapangan mantap, rumputnya masih empuk banget!", rating: 5, date: "3 hari lalu" },
    { id: 2, user: "Ghina Nabila", text: "Parkirnya luas, kantinnya enak-enak snacknya.", rating: 4, date: "1 minggu lalu" }
  ]);
  const [newComment, setNewComment] = useState("");

  if (!venue) return null;

  const handleBooking = () => {
    setIsBookingOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-sans">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-secondary text-white font-bold">{venue.type}</Badge>
                <div className="flex items-center text-yellow-500 font-bold">
                  <Star className="w-4 h-4 fill-current mr-1" /> {venue.rating}
                </div>
              </div>
              <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">{venue.name}</h1>
              <p className="flex items-center text-muted-foreground font-medium">
                <MapPin className="w-4 h-4 mr-2 text-primary" /> {venue.address}
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl">
              <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 italic uppercase">Informasi Lapangan</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{venue.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {venue.facilities.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm font-bold bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 italic uppercase flex items-center gap-2">
                <MessageSquare className="w-6 h-6" /> Ulasan Pengguna
              </h2>
              
              <div className="space-y-6 mb-10">
                {comments.map(c => (
                  <div key={c.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <p className="font-bold text-primary">{c.user}</p>
                      <span className="text-xs text-muted-foreground font-medium">{c.date}</span>
                    </div>
                    <p className="text-slate-600 text-sm font-medium">{c.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Input placeholder="Tulis komentar..." className="rounded-xl h-12" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                <Button className="h-12 w-12 rounded-xl" onClick={() => {
                  if (newComment.trim()) {
                    setComments([{ id: Date.now(), user: MOCK_USER.name, text: newComment, rating: 5, date: "Baru saja" }, ...comments]);
                    setNewComment("");
                  }
                }}><Send className="w-5 h-5" /></Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl sticky top-32">
               <div className="flex items-baseline gap-2 mb-8">
                 <span className="text-4xl font-black italic tracking-tighter">Rp {venue.pricePerHour.toLocaleString()}</span>
                 <span className="text-white/60 font-bold text-sm">/jam</span>
               </div>
               <div className="space-y-4">
                  <Button className="w-full h-16 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-black text-xl italic uppercase shadow-lg" onClick={() => setIsBookingOpen(true)}>Booking Sekarang</Button>
                  <Button variant="outline" className="w-full h-16 rounded-xl bg-white/10 border-white/20 text-white font-black text-xl italic uppercase hover:bg-white/20" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${venue.coordinates.lat},${venue.coordinates.lng}`, '_blank')}>Lihat Lokasi</Button>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-3xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black italic uppercase tracking-tighter">Detail Pembayaran</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div className="space-y-6">
               <div>
                 <label className="text-xs font-bold uppercase text-muted-foreground block mb-3">Pilih Tanggal & Jam</label>
                 <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-2xl p-2 bg-slate-50 mb-4" />
                 <div className="grid grid-cols-3 gap-2">
                   {["08:00", "09:00", "10:00", "15:00", "19:00", "20:00"].map(t => (
                     <Button key={t} variant={selectedTime === t ? "default" : "outline"} className="rounded-xl font-bold" onClick={() => setSelectedTime(t)}>{t}</Button>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="space-y-6">
              <label className="text-xs font-bold uppercase text-muted-foreground block">Metode Pembayaran</label>
              
              <div className="space-y-4">
                <div className="border rounded-2xl p-4 bg-slate-50">
                   <p className="text-[10px] font-black uppercase text-primary mb-3">Virtual Account (Bank)</p>
                   <div className="grid grid-cols-2 gap-2">
                     {["BCA", "Mandiri", "BNI", "BRI", "Permata"].map(bank => (
                       <Button key={bank} variant={paymentSubMethod === bank ? "secondary" : "outline"} className="rounded-lg h-10 text-xs font-bold" onClick={() => {setPaymentMethod("va"); setPaymentSubMethod(bank)}}>{bank}</Button>
                     ))}
                   </div>
                </div>

                <div className="border rounded-2xl p-4 bg-slate-50">
                   <p className="text-[10px] font-black uppercase text-primary mb-3">E-Wallet</p>
                   <div className="grid grid-cols-3 gap-2">
                     {["GoPay", "OVO", "DANA"].map(wallet => (
                       <Button key={wallet} variant={paymentSubMethod === wallet ? "secondary" : "outline"} className="rounded-lg h-10 text-xs font-bold" onClick={() => {setPaymentMethod("ewallet"); setPaymentSubMethod(wallet)}}>{wallet}</Button>
                     ))}
                   </div>
                </div>

                <Button variant={paymentMethod === "qris" ? "secondary" : "outline"} className="w-full rounded-2xl h-14 font-bold flex gap-3" onClick={() => {setPaymentMethod("qris"); setPaymentSubMethod("QRIS")}}>
                   <QrCode className="w-5 h-5" /> Bayar pakai QRIS
                </Button>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex-row gap-4 border-t pt-8 items-center">
            <div className="flex-1">
              <span className="text-xs font-bold text-muted-foreground uppercase">Total Bayar</span>
              <p className="text-2xl font-black italic tracking-tighter text-primary">Rp {venue.pricePerHour.toLocaleString()}</p>
            </div>
            <Button className="h-14 px-10 rounded-xl font-black uppercase italic tracking-tighter text-lg" disabled={!paymentMethod} onClick={handleBooking}>Konfirmasi Pembayaran</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-0 overflow-hidden">
          <div className="bg-primary p-10 text-white text-center">
             <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
             <h2 className="text-3xl font-black italic uppercase tracking-tighter">Pembayaran Berhasil!</h2>
          </div>
          <div className="p-8">
            <div className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 text-center">
              <p className="text-xs font-bold text-muted-foreground uppercase mb-1">KODE BOOKING</p>
              <p className="text-2xl font-black text-primary mb-4">LAPED-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
              <QrCode className="w-32 h-32 mx-auto mb-4 text-primary" />
              <div className="text-sm font-bold text-slate-700">
                <p>{venue.name}</p>
                <p>{date ? format(date, "d MMMM yyyy") : ""} | {selectedTime} WIB</p>
              </div>
            </div>
            <Button className="w-full h-14 rounded-xl mt-8 font-bold" onClick={() => setLocation("/")}>Kembali Beranda</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
