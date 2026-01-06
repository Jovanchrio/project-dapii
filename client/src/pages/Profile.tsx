import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_USER, MOCK_VENUES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Trophy, Calendar, Clock, MapPin, LogOut, Settings, User, Camera, Bell, Shield, Wallet, Ticket, Moon, Sun } from "lucide-react";
import { format } from "date-fns";
import { useLocation } from "wouter";

export default function Profile() {
  const [, setLocation] = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({
    name: MOCK_USER.name,
    email: MOCK_USER.email,
    phone: "0812-3456-7890",
    city: "Cikarang"
  });

  const getVenueData = (id: string) => MOCK_VENUES.find(v => v.id === id);

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-950 flex flex-col font-sans ${darkMode ? 'dark' : ''}`}>
      <div className="bg-primary pb-24 pt-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 -mt-16 flex-grow pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <Card className="rounded-3xl border-none shadow-xl overflow-hidden bg-white">
              <div className="h-24 bg-secondary"></div>
              <div className="px-8 -mt-12 pb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg overflow-hidden border-2 border-white">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`} className="w-full h-full rounded-xl bg-slate-50" />
                  </div>
                </div>
                <h2 className="font-bold text-2xl uppercase italic tracking-tighter text-primary">{userData.name}</h2>
                <p className="text-muted-foreground font-medium text-sm mb-6">{userData.email}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase">POIN</p>
                     <p className="text-lg font-black text-primary">{MOCK_USER.points}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase">TIKET</p>
                     <p className="text-lg font-black text-secondary">{MOCK_USER.bookings.length}</p>
                  </div>
                </div>

                <div className="space-y-1">
                   <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-xl text-slate-700 font-bold"><Bell className="w-5 h-5 text-primary" /> Notifikasi <Badge className="ml-auto bg-secondary">3</Badge></Button>
                   <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-xl text-slate-700 font-bold"><Ticket className="w-5 h-5 text-primary" /> Tiket Saya</Button>
                   <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-xl text-red-500 hover:text-red-600 font-bold" onClick={() => setLocation("/login")}><LogOut className="w-5 h-5" /> Keluar</Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="rounded-3xl border-none shadow-xl bg-white min-h-[600px]">
              <Tabs defaultValue="profile" className="w-full">
                <div className="px-8 pt-6 border-b">
                  <TabsList className="bg-transparent h-auto p-0 gap-6">
                    <TabsTrigger value="profile" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-3 px-0 font-bold uppercase tracking-tighter text-muted-foreground data-[state=active]:text-primary">Profil</TabsTrigger>
                    <TabsTrigger value="bookings" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-3 px-0 font-bold uppercase tracking-tighter text-muted-foreground data-[state=active]:text-primary">Tiket Saya</TabsTrigger>
                    <TabsTrigger value="settings" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-3 px-0 font-bold uppercase tracking-tighter text-muted-foreground data-[state=active]:text-primary">Pengaturan</TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-8">
                  <TabsContent value="profile" className="mt-0">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter">Informasi Akun</h3>
                      {!isEditing ? (
                        <Button onClick={() => setIsEditing(true)} size="sm" className="rounded-xl font-bold">Edit Profil</Button>
                      ) : (
                        <div className="flex gap-2">
                           <Button variant="outline" size="sm" onClick={() => setIsEditing(false)} className="rounded-xl font-bold">Batal</Button>
                           <Button size="sm" onClick={() => setIsEditing(false)} className="rounded-xl font-bold bg-secondary">Simpan</Button>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-400 uppercase">Nama Lengkap</Label>
                          {isEditing ? <Input value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} className="h-12 rounded-xl font-bold" /> : <p className="font-bold text-lg p-4 bg-slate-50 rounded-xl">{userData.name}</p>}
                       </div>
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-400 uppercase">Email</Label>
                          {isEditing ? <Input value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} className="h-12 rounded-xl font-bold" /> : <p className="font-bold text-lg p-4 bg-slate-50 rounded-xl">{userData.email}</p>}
                       </div>
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-400 uppercase">Nomor Telepon</Label>
                          {isEditing ? <Input value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})} className="h-12 rounded-xl font-bold" /> : <p className="font-bold text-lg p-4 bg-slate-50 rounded-xl">{userData.phone}</p>}
                       </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="bookings" className="mt-0 space-y-4">
                     <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-6">Jadwal & Tiket Aktif</h3>
                     {MOCK_USER.bookings.map(b => (
                       <div key={b.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 group">
                          <img src={getVenueData(b.venueId)?.image} className="w-16 h-16 rounded-xl object-cover" />
                          <div className="flex-grow">
                             <h4 className="font-bold text-primary">{getVenueData(b.venueId)?.name}</h4>
                             <p className="text-xs text-muted-foreground font-bold">{format(b.date, "d MMM yyyy")} | {b.time}</p>
                          </div>
                          <Button size="sm" className="rounded-xl font-bold uppercase italic tracking-tighter">LIHAT QR</Button>
                       </div>
                     ))}
                  </TabsContent>

                  <TabsContent value="settings" className="mt-0 space-y-6">
                     <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-6">Preferensi Aplikasi</h3>
                     <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
                           <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${darkMode ? 'bg-primary/20 text-primary' : 'bg-slate-200 text-slate-500'}`}><Moon className="w-5 h-5" /></div>
                              <div>
                                 <p className="font-bold">Mode Gelap</p>
                                 <p className="text-xs text-muted-foreground">Aktifkan untuk kenyamanan mata malam hari.</p>
                              </div>
                           </div>
                           <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                        </div>
                        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
                           <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/20 text-primary"><Bell className="w-5 h-5" /></div>
                              <p className="font-bold">Notifikasi Push</p>
                           </div>
                           <Switch defaultChecked />
                        </div>
                     </div>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
