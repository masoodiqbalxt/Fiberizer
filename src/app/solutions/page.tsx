"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Zap, Activity, Grid } from "lucide-react"

const solutions = [
  {
    title: "Turnkey Hospital Integration",
    desc: "End-to-end architectural and technical integration of Nuclear Medicine wings into existing healthcare facilities. We handle structural compliance, lead shielding, and machine placement simultaneously.",
    icon: Shield,
  },
  {
    title: "Total Power Continuity",
    desc: "Zero-downtime medical server backup architectures. If the grid fails mid-scan, our uninterrupted isolated power matrices ensure data retention and hardware safety.",
    icon: Zap,
  },
  {
    title: "Diagnostic Workflow Logistics",
    desc: "Optimized pipelines connecting the Gamma Camera networks directly to the radiologist's terminal. We cut down transmission latency and perfect the image protocol stack.",
    icon: Activity,
  },
  {
    title: "Regulatory Compliance",
    desc: "Full-stack radiation leak audits, strict adherence to national atomic energy regulations, and dosimetry mapping for complete staff and patient safety.",
    icon: Grid,
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Cinematic Header */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[60%] h-[30%] bg-purple-500/10 blur-[150px] rounded-[100%] pointer-events-none animate-pulse opacity-50" />
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-[100%] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Frameworks</span>
             </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-[8rem] font-black tracking-[-0.04em] leading-[0.85] mb-12"
            >
              Systemic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Integration.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed"
            >
              Beyond hardware. We design the digital and physical superstructures that allow high-volume diagnostic environments to function at 99.9% uptime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Massive Masonry Solutions Grid */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative p-12 md:p-16 rounded-[3rem] bg-card border border-border overflow-hidden hover:border-purple-500/30 transition-all shadow-xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full group-hover:bg-purple-500/20 group-hover:scale-150 transition-transform duration-1000" />
                
                <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-10 group-hover:-translate-y-2 transition-transform shadow-lg">
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none mb-6 relative z-10">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-lg relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
