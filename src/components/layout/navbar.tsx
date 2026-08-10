"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Sun, Moon, Activity, Shield, Wrench, Microscope, Zap, Laptop, ChevronDown, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const menuData = {
  Services: [
    { name: "Gamma Camera Installation", desc: "Expert setup and precise calibration of imaging systems.", icon: Activity },
    { name: "Radiation Shielding", desc: "Advanced lead-lining and safety certification protocols.", icon: Shield },
    { name: "AMC & Maintenance", desc: "Annual contracts for 24/7 reliability and parts isolation.", icon: Wrench },
    { name: "Technical Consulting", desc: "Strategic infrastructure planning for diagnostic centers.", icon: Microscope },
  ],
  Products: [
    { name: "Gamma Camera Systems", desc: "Latest dual-head and SPECT diagnostic hardware.", icon: Zap },
    { name: "Protection Gear", desc: "Certified leads, aprons, and real-time dosimetry.", icon: Shield },
    { name: "Computer Hardware", desc: "Optimized acquisition systems and backup servers.", icon: Laptop },
    { name: "Clinical Consumables", desc: "High-purity reagents and medical-grade peripherals.", icon: Microscope },
  ],
  Solutions: [
    { name: "Hospital Infrastructure", desc: "Full-stack turnkey clinical engineering solutions.", icon: Shield },
    { name: "Backup Continuity", desc: "Zero-downtime power and data synchronization.", icon: Zap },
    { name: "Diagnostic Workflow", desc: "Optimized patient-to-image pipeline engineering.", icon: Activity },
    { name: "Safety Compliance", desc: "End-to-end regulatory and radiation safety audits.", icon: Shield },
  ],
}

const navItems = [
  { name: "Services", hasMenu: true, href: "/services" },
  { name: "Products", hasMenu: true, href: "/products" },
  { name: "Solutions", hasMenu: true, href: "/solutions" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null)
  
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled ? "py-4 bg-background/60 backdrop-blur-3xl border-b border-primary/10 shadow-2xl" : "py-8"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
            <img src="/logo.svg" alt="Imagineering Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-foreground uppercase leading-none">
              Imagineering
            </span>
            <span className="text-[8px] font-black tracking-[0.4em] text-primary uppercase mt-1">Technologies</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative py-2" onMouseEnter={() => item.hasMenu ? setActiveMenu(item.name) : setActiveMenu(null)}>
              {item.hasMenu ? (
                <Link
                  href={item.href || "#"}
                  className={cn(
                    "px-6 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full flex items-center space-x-2",
                    activeMenu === item.name ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  <span>{item.name}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeMenu === item.name && "rotate-180")} />
                </Link>
              ) : (
                <Link 
                  href={item.href || "#"} 
                  className="px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all rounded-full block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="w-px h-6 bg-border/50 mx-4" />
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all text-foreground mr-2 active:scale-95 border border-transparent hover:border-primary/20 shadow-inner"
          >
            {mounted && (
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === "dark" ? 0 : 180,
                  scale: 1
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-yellow-500" />}
              </motion.div>
            )}
          </button>

          <Button 
            variant="premium" 
            onClick={scrollToContact}
            className="rounded-full px-8 h-12 text-[10px] font-black uppercase tracking-widest shadow-3xl medical-glow border border-primary/30 group"
          >
            <Rocket className="mr-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Technical Portal
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-foreground rounded-full hover:bg-muted/50"
          >
            {mounted && (theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-yellow-500" />)}
          </button>
          <button
            className="p-2 text-foreground rounded-full hover:bg-muted/50 transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-7xl mt-4 bg-background/95 backdrop-blur-3xl border border-border/10 rounded-[3rem] shadow-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden z-50"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 -z-10" />
             {(menuData[activeMenu as keyof typeof menuData] || []).map((item, idx) => (
                <Link key={idx} href="#" className="group p-8 rounded-[2rem] hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 group-hover:medical-glow group-hover:border-primary/30 transition-all shadow-xl">
                    <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-base font-black tracking-tight mb-3 group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed group-hover:text-muted-foreground transition-colors">{item.desc}</p>
                </Link>
             ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[88px] bg-background/95 backdrop-blur-3xl md:hidden z-40 p-8 flex flex-col space-y-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-border/10 pb-4">
                  {item.hasMenu ? (
                    <div className="space-y-4">
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-3xl font-black tracking-tight text-foreground"
                      >
                        {item.name}
                        <ChevronDown className={cn("w-6 h-6 transition-transform", mobileExpanded === item.name && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileExpanded === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="grid grid-cols-1 gap-4 pt-2"
                          >
                            {(menuData[item.name as keyof typeof menuData] || []).map((subItem, idx) => (
                              <Link 
                                key={idx} 
                                href="#" 
                                className="flex items-center space-x-4 p-4 rounded-2xl bg-muted/30 border border-border/5"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <subItem.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <p className="font-bold text-sm">{subItem.name}</p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="text-3xl font-black tracking-tight text-foreground block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Button 
              variant="premium" 
              onClick={scrollToContact}
              className="w-full rounded-[1.5rem] h-20 text-sm font-black uppercase tracking-widest shadow-3xl medical-glow border border-primary/30"
            >
              <Rocket className="mr-3 w-5 h-5" />
              Technical Portal
            </Button>
            
            <div className="mt-auto pt-8 border-t border-border/10 flex flex-col space-y-4 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Imagineering Technologies Pakistan</p>
              <div className="flex justify-center space-x-6 text-muted-foreground/40">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] italic underline underline-offset-4">Nationwide Support</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
