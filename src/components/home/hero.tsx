"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronRight, ShieldCheck, Activity, BrainCircuit } from "lucide-react"

const quickFacts = [
  "Gamma camera installation and calibration",
  "Radiation shielding and compliance support",
  "Service coverage for hospitals across Pakistan",
]

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0.2])
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [12, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.96, 1])
  const yDashboard = useTransform(scrollYProgress, [0, 1], [70, -10])

  const smoothRotateX = useSpring(rotateX, { damping: 26, stiffness: 100 })
  const smoothScale = useSpring(scale, { damping: 26, stiffness: 100 })

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[125vh] overflow-hidden bg-background selection:bg-primary/30"
    >
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_62%)] pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="z-20 grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">
                Nuclear Medicine Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: "easeOut" }}
              className="text-5xl font-black leading-[0.9] tracking-[-0.05em] text-foreground md:text-7xl xl:text-[6.5rem]"
            >
              Technical support for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                nuclear medicine systems
              </span>{" "}
              that hospitals can rely on.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Imagineering Technologies delivers installation, shielding, maintenance, and
              infrastructure support for gamma camera and nuclear medicine departments across
              Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#contact-section"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-[0_0_40px_-12px_rgba(37,99,235,0.55)] transition-transform hover:scale-[1.02]"
              >
                Request Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-card/70 px-8 text-sm font-bold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40 hover:text-primary"
              >
                View Services
              </Link>
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-transparent px-8 text-sm font-bold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                See Products
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
              className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3"
            >
              {quickFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-2xl border border-border bg-card/55 px-4 py-4 backdrop-blur-xl"
                >
                  {fact}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
            style={{
              rotateX: smoothRotateX,
              scale: smoothScale,
              y: yDashboard,
            }}
            className="relative mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card/70 shadow-[0_20px_80px_rgba(15,23,42,0.18)] backdrop-blur-3xl"
          >
            <div className="flex h-14 items-center gap-2 border-b border-border bg-foreground/5 px-6">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <div className="ml-auto text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                Service Overview
              </div>
            </div>

            <div className="grid gap-1 bg-muted/30 p-1 md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative overflow-hidden rounded-[2rem] bg-card">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical imaging workstation"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 max-w-md">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                    Clinical Operations Support
                  </p>
                  <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                    Installation, commissioning, and technical continuity for imaging departments.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/85">
                    We coordinate engineering, shielding, equipment readiness, and long-term service
                    planning around hospital workflows.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-1 flex-col justify-between rounded-[2rem] bg-card/90 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-black tracking-tight text-foreground">
                      24/7
                    </p>
                    <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Service response planning
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-[2rem] bg-card/90 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xl font-black tracking-tight text-foreground">
                      Shielding and compliance coordination
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Built for regulated hospital environments and technical handover requirements.
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-card/90 p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">
                    Workflow Focus
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Technical decisions that support uptime, patient throughput, and safe operation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
