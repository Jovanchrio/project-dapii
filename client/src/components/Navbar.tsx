import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MOCK_USER } from "@/lib/mockData";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Cari Lapangan", href: "/explore" },
    { name: "Komunitas", href: "/community" },
    { name: "Mitra", href: "/partner" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        ${mounted ? "animate-navbar" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-laped.png"
              alt="LaPed"
              className="w-11 h-11 animate-spin-slow"
            />
            <span className="text-xl font-extrabold text-slate-900">
              LaPed
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition-colors
                ${
                  location === link.href
                    ? "text-blue-600"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600"
                    : "text-slate-900 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            {/* NOTIFICATION */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <p className="font-bold mb-2">Notifikasi</p>
                <p className="text-sm text-muted-foreground">
                  Tidak ada notifikasi baru
                </p>
              </PopoverContent>
            </Popover>

            {/* PROFILE */}
            <Popover>
              <PopoverTrigger asChild>
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_USER.name}`}
                  className="w-9 h-9 rounded-full cursor-pointer border"
                />
              </PopoverTrigger>
              <PopoverContent className="w-44">
                <p className="font-bold text-sm">{MOCK_USER.name}</p>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 mt-2"
                  onClick={() => setLocation("/login")}
                >
                  Keluar
                </Button>
              </PopoverContent>
            </Popover>
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-3 font-semibold"
                  >
                    {link.name}
                  </Link>
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* FLOATING CS */}
      <a
        href="https://t.me/LaPedCS_bot"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white
        p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
