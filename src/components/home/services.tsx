"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, ArrowUpRight, Microscope, Shield, Wrench } from "lucide-react"

const services = [
  {
    title: "Installation and Commissioning",
    description:
      "Site readiness, equipment placement, calibration, and technical handover for gamma camera and nuclear medicine systems.",
    icon: Activity,
  },
  {
    title: "Radiation Shielding",
    description:
      "Lead lining, shielding review, and implementation support for regulated clinical environments.",
    icon: Shield,
  },
  {
    title: "Maintenance and AMC",
    description:
      "Preventive service, troubleshooting, and long-term support contracts built around uptime targets.",
    icon: Wrench,
  },
  {
    title: "Clinical Infrastructure Consulting",
    description:
      "Planning support for departments, imaging rooms, workflows, and supporting medical IT needs.",
    icon: Microscope,
  },
]

export function Services() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-background py-28">
      <div className="absolute right-0 top-0 h-[38rem] w-[42%] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                What We Offer
              </span>
            </motion.div>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
              Services built around deployment, protection, and uptime.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each service is designed to help hospitals plan, install, protect, and maintain
              high-value nuclear medicine equipment with fewer operational risks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground"
              >
                View Services
              </Link>
              <Link
                href="#contact-section"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.07, duration: 0.45, ease: "easeOut" }}
              className="group rounded-[2.25rem] border border-border bg-card/70 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-black tracking-tight text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
