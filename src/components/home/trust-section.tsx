"use client"

import { motion } from "framer-motion"
import { Award, ClipboardCheck, HeartPulse, Wrench } from "lucide-react"

const stats = [
  { label: "Years in technical support", value: "15+", icon: Award },
  { label: "Hospital and institutional projects", value: "300+", icon: HeartPulse },
  { label: "Active support and service contracts", value: "50+", icon: Wrench },
  { label: "Focus on compliance and readiness", value: "100%", icon: ClipboardCheck },
]

const trustPoints = [
  "Specialized focus on gamma camera, PET/CT, shielding, and nuclear medicine infrastructure.",
  "Engineering support aligned with hospital operations, procurement, installation, and handover.",
  "Long-term maintenance coverage for institutions that need predictable uptime and response.",
]

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute left-1/2 top-24 h-72 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
            Why Trust Us
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
            Technical depth for hospitals that need dependable execution.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We support complex clinical environments where equipment uptime, shielding standards,
            and implementation discipline matter more than flashy promises.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.07, duration: 0.45, ease: "easeOut" }}
              className="rounded-[2rem] border border-border bg-card/65 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-[2.5rem] border border-border bg-card/55 p-8 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">
              Operational Confidence
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-4xl">
              A partner hospitals can work with before, during, and after installation.
            </h3>
          </div>

          <div className="grid gap-4">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.08 + idx * 0.06, duration: 0.45, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm leading-relaxed text-muted-foreground"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
