import { Facebook, Instagram, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-lg size-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-semibold">Shindukchari Eco Resort</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              With a new concept of space and freedom, we have redefined the idea of luxury, taking it to the highest
              level, by creating the most stunning luxury resort in Italy.
            </p>
          </div>

          {/* Office Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                Khagrachari, Bangladesh
                <br />
                Guimara, Shindukchari
                <br />
                KHG 4400
              </p>
              <a href="mailto:sinresort@info.com" className="block hover:text-white transition-colors">
                sinresort@info.com
              </a>
              <a href="tel:+008 01817643422" className="block hover:text-white transition-colors">
                +008 01817643422
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links</h4>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                Investment
              </a>
            </nav>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
                aria-label="X"
              >
                <X size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400">Sindukchari Eco Resort&copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
