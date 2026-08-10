import * as React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Mail, ArrowUpRight, MapPin, Phone } from "lucide-react"

const footerSections = [
  {
    title: "Engineering",
    links: [
      { name: "Nuclear Medicine", href: "/services" },
      { name: "CT Diagnostics", href: "/services" },
      { name: "Radiation Safety", href: "/products" },
      { name: "Maintenance", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Expertise", href: "/about" },
      { name: "Success", href: "/clients" },
      { name: "Catalog", href: "/products" },
      { name: "Careers", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-background pt-32 pb-12 overflow-hidden border-t border-border">
      {/* Background Subtle Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center space-x-4 w-fit group">
              <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all group-hover:rotate-[15deg] group-hover:scale-110">
                <img src="/logo.svg" alt="Imagineering Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-foreground uppercase leading-none">Imagineering</span>
            </Link>
            <p className="text-muted-foreground text-sm xl:text-base max-w-sm leading-relaxed font-medium">
              Leading the technological advancement of Nuclear Medicine and diagnostic imaging in Pakistan. Precision engineering for the future of healthcare.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <Linkedin className="w-3 h-3" /> 
                </div>
                <span>LinkedIn</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-cyan-400 transition-colors group">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all">
                  <Twitter className="w-3 h-3" /> 
                </div>
                <span>Twitter</span>
              </Link>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-3">
             <div className="flex flex-col space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Contact</h4>
                <div className="space-y-6">
                    <div className="flex flex-col space-y-2 group cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Headquarters</span>
                      </div>
                      <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors max-w-[200px] leading-relaxed">Block B, Pak-Arab Housing Scheme, Lahore, 54600</span>
                    </div>
                    
                    <div className="flex flex-col space-y-2 group cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Phone Line</span>
                      </div>
                      <span className="font-bold text-foreground text-sm group-hover:text-cyan-400 transition-colors">0300 8804228</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-all flex items-center group/link">
                        {link.name}
                        <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Massive Watermark */}
        <div className="w-full text-center overflow-hidden mb-12">
           <h2 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-foreground/5 dark:text-white/5 select-none text-center">
             IMAGINEERING
           </h2>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] flex items-center">
            &copy; {new Date().getFullYear()} Imagineering Pakistan. <span className="hidden sm:inline ml-2 text-foreground/30">All Systems Operational.</span>
          </p>
          <div className="flex items-center space-x-8 text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground/50">
            <Link href="#" className="hover:text-foreground transition-colors">Safety</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Quality</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
