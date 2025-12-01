import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MOCK_USER } from "@/lib/mockData";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Cari Lapangan", href: "/explore" },
    { name: "Komunitas", href: "/community" },
    { name: "Mitra", href: "/partner" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/"
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary text-white font-heading font-bold text-lg px-3 py-1 rounded-lg group-hover:scale-105 transition-transform">
            LaPed Zone
          </div>
          <span className={`font-heading font-bold text-base tracking-wide ${isScrolled || location !== "/" ? "text-foreground" : "text-white"} transition-colors`}>
            ID
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors cursor-pointer ${
                location === link.href
                  ? "text-primary font-bold"
                  : isScrolled || location !== "/"
                  ? "text-foreground/80"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-2 ${isScrolled || location !== "/" ? "text-foreground" : "text-white"}`}>
            <span className="text-sm font-medium">{MOCK_USER.points} Poin</span>
            <TrophyIcon className="w-4 h-4 text-yellow-400" />
          </div>
          <Button variant="ghost" size="icon" className={isScrolled || location !== "/" ? "text-foreground" : "text-white hover:bg-white/20"}>
            <Bell className="w-5 h-5" />
          </Button>
          <Link href="/profile" className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 overflow-hidden">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_USER.name}`} 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled || location !== "/" ? "text-foreground" : "text-white hover:bg-white/20"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-border my-2"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_USER.name}`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{MOCK_USER.name}</p>
                    <p className="text-xs text-muted-foreground">{MOCK_USER.points} Poin</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
