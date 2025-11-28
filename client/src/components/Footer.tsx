import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="bg-primary text-white font-heading font-bold text-xl px-3 py-1 rounded-lg">
                LaPed
              </div>
              <span className="font-heading font-bold text-xl">.id</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              LapanganPedia adalah ensiklopedia lapangan olahraga #1 di Indonesia. 
              Temukan dan sewa venue olahraga impianmu dengan mudah, cepat, dan transparan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Perusahaan</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">Tentang Kami</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors cursor-pointer">Karir</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/partner" className="hover:text-primary transition-colors cursor-pointer">Jadi Mitra Venue</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Dukungan</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/help" className="hover:text-primary transition-colors cursor-pointer">Pusat Bantuan</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors cursor-pointer">Syarat & Ketentuan</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors cursor-pointer">Kebijakan Privasi</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jl. MH. Thamrin, Lippo Cikarang, Bekasi 17530</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@laped.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; 2025 LaPed Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
