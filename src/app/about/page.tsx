"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Target, Award, Mail, Linkedin } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const stats = [
  { label: "Years Engineering", val: "15+" },
  { label: "Medical Contracts", val: "50+" },
  { label: "Institutional Partners", val: "20+" },
  { label: "Lead Experts", val: "12+" },
]

const team = [
  {
    name: "Zulfiqar Walidad",
    role: "Executive Director",
    desc: "A visionary technical leader with deep expertise in Nuclear Medicine infrastructure and clinical engineering across Pakistan.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Muhammad Tahir Naushahi",
    role: "Co-Executive Director",
    desc: "Strategically driving technical excellence and nationwide support operations for high-stakes medical diagnostic systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Cinematic Header */}
      <section className="pt-40 pb-24 relative overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[60%] h-[30%] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none animate-pulse opacity-50" />
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[150px] rounded-[100%] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Corporate Overview</span>
             </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-[8rem] font-black tracking-[-0.04em] leading-[0.85] mb-12"
            >
              Building The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Foundation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed"
            >
              Imagineering Technologies is Pakistan's premier clinical engineering firm. We are the architects behind the installation, calibration, and safety of the nation's most critical diagnostic imaging systems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Floating Stats */}
      <section className="py-20 bg-background relative z-10 -mt-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-xl flex flex-col justify-center items-start group hover:border-primary/20 transition-all"
              >
                <p className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-4">{stat.val}</p>
                <div className="w-8 h-1 bg-border group-hover:bg-primary transition-colors mb-4" />
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground/60 leading-normal">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento Layout */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[3rem] bg-card border border-border flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all"
            >
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:scale-150 transition-all duration-1000" />
              <div className="w-20 h-20 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-12 shadow-lg relative z-10">
                <Target className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl font-black tracking-tight mb-8">Our Vision.</h2>
                <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-medium max-w-md">
                  To expand our engineering capabilities across Pakistan, establishing global standards in every regional diagnostic center. Once the local foundation is absolute, we project our expertise internationally.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-16 rounded-[3rem] bg-card border border-border flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:scale-150 transition-all duration-1000" />
              <div className="w-20 h-20 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-12 shadow-lg relative z-10">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl font-black tracking-tight mb-8">Operational Mission.</h2>
                <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-medium max-w-md">
                  We don't just install hardware; we construct sustainable radiation environments. Compliance protocols, lead mapping, and zero-downtime mechanical maintenance are the pillars of our output.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Architect Deck */}
      <section className="py-32 border-t border-border bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/20 bg-background mb-8"
              >
                <Award className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">The Board</span>
             </motion.div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">The Architects of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Success.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 lg:p-12 rounded-[3.5rem] bg-card border border-border shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                  <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-border group-hover:ring-primary/40 flex-shrink-0 shadow-lg">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="text-center lg:text-left flex-1">
                    <h3 className="text-3xl font-black tracking-tight text-foreground mb-2">{person.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">{person.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">{person.desc}</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <button className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-muted/50 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
