import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, User, Bell, Settings, LogOut, Info, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MOCK_USER } from "@/lib/mockData";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Booking Anda di Jababeka dikonfirmasi!", time: "2m ago", read: false, type: "ticket" },
    { id: 2, text: "Promo mabar weekend ini!", time: "1h ago", read: false, type: "info" },
    { id: 3, text: "Poin Anda bertambah 50!", time: "5h ago", read: true, type: "info" },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Cari Lapangan", href: "/explore" },
    { name: "Komunitas", href: "/community" },
    { name: "Mitra", href: "/partner" },
  ];

  const handleLogout = () => {
    setLocation("/login");
  };

  const handleNotificationClick = (notif: any) => {
    if (notif.type === "ticket") {
      setLocation("/profile");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/"
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#007BFF', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#800080', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4B0082', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              <path d="M50,45 C35,45 25,35 25,20 C25,35 35,50 50,50 L50,45 Z" fill="url(#grad-yellow)" transform="rotate(-45 50 50)" />
              <path d="M50,50 C30,50 15,35 15,15 C40,15 50,30 50,50 Z" fill="url(#grad-yellow)" />
              
              <path d="M50,50 C70,50 85,35 85,15 C85,40 70,50 50,50 Z" fill="url(#grad-blue)" transform="rotate(0 50 50)" />
              <path d="M50,50 C50,30 65,15 85,15 C65,40 50,50 50,50 Z" fill="url(#grad-blue)" />

              <path d="M50,50 C50,70 65,85 85,85 C60,85 50,70 50,50 Z" fill="url(#grad-purple)" />
              <path d="M50,50 C35,50 25,65 25,85 C25,70 40,50 50,50 Z" fill="url(#grad-purple)" transform="rotate(-45 50 50)" />
              
              <circle cx="50" cy="25" r="5" fill="#FF4500" />
              <circle cx="50" cy="75" r="5" fill="#4B0082" />
              
              <path d="M50,30 C65,30 75,40 75,55 C75,70 60,80 45,80 C30,80 20,65 20,50 C20,35 35,25 50,25" fill="none" stroke="url(#grad-orange)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            </svg>
          </div>
          <div className="flex items-center gap-0.5 leading-none">
             <span className="font-bold text-2xl tracking-tighter logo-text-blue">LaP</span>
             <span className="font-bold text-2xl tracking-tighter logo-text-red">e</span>
             <span className="font-bold text-2xl tracking-tighter logo-text-blue">d</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold tracking-tight hover:text-secondary transition-colors cursor-pointer ${
                location === link.href
                  ? "text-secondary underline underline-offset-4"
                  : isScrolled || location !== "/"
                  ? "text-primary"
                  : "text-white hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className={`relative ${isScrolled || location !== "/" ? "text-primary" : "text-white hover:bg-white/20"}`}>
                <Bell className="w-5 h-5" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 shadow-2xl border-slate-100" align="end">
              <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                <h4 className="font-bold">Notifikasi</h4>
                <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => setNotifications(n => n.map(x => ({...x, read: true})))}>
                  Tandai dibaca
                </Button>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.map(n => (
                  <div 
                    key={n.id} 
                    className={`p-4 border-b last:border-0 hover:bg-slate-50 cursor-pointer flex gap-3 transition-colors ${!n.read ? "bg-slate-50/50" : ""}`}
                    onClick={() => handleNotificationClick(n)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.type === 'ticket' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {n.type === 'ticket' ? <Ticket className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{n.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-primary/20 overflow-hidden group-hover:border-secondary transition-all">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_USER.name}`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end">
              <div className="p-3 border-b mb-2 bg-slate-50 rounded-lg">
                <p className="font-bold text-sm">{MOCK_USER.name}</p>
                <p className="text-xs text-muted-foreground">{MOCK_USER.points} Poin Lapangan</p>
              </div>
              <Link href="/profile">
                <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm">
                  <User className="w-4 h-4" /> Profil Saya
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm">
                  <Ticket className="w-4 h-4" /> Tiket Saya
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm">
                <Settings className="w-4 h-4" /> Pengaturan
              </Button>
              <div className="h-px bg-slate-100 my-1"></div>
              <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                <LogOut className="w-4 h-4" /> Keluar
              </Button>
            </PopoverContent>
          </Popover>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled || location !== "/" ? "text-primary" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <div className="p-6 bg-primary text-white">
                <div className="flex items-center gap-4 mb-6">
                   <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_USER.name}`} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="font-bold">{MOCK_USER.name}</p>
                    <p className="text-xs text-white/70">{MOCK_USER.points} Poin</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-bold text-slate-700 p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-4"></div>
                <Link href="/profile"><Button variant="ghost" className="w-full justify-start gap-3 h-12 text-slate-700"><User className="w-5 h-5" /> Profil Saya</Button></Link>
                <Link href="/profile"><Button variant="ghost" className="w-full justify-start gap-3 h-12 text-slate-700"><Ticket className="w-5 h-5" /> Tiket Saya</Button></Link>
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-slate-700"><Settings className="w-5 h-5" /> Pengaturan</Button>
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-red-500 hover:bg-red-50 mt-4" onClick={handleLogout}><LogOut className="w-5 h-5" /> Keluar</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
