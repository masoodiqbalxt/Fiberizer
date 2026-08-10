"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Services } from "@/components/home/services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Cinematic Header */}
      <section className="pt-40 pb-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[60%] h-[30%] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none animate-pulse opacity-50" />
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[150px] rounded-[100%] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8"
            >
              Engineering Portfolio
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-[8rem] font-black tracking-[-0.04em] leading-[0.85] mb-12"
            >
              Surgical <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-foreground">Deployments.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed"
            >
              We execute the physical and technical integration of ultra-sensitive diagnostic machinery. 
              Our SLA guarantees zero-downtime operations for the nation's leading medical facilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reusing the beautiful Bento Grid */}
      <Services />

      <Footer />
    </main>
  )
}
