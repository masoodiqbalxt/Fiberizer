"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Box, Microscope, Shield, Zap } from "lucide-react"

const products = [
  {
    title: "Gamma Camera Systems",
    desc: "Configured imaging systems supported with installation planning, calibration, and commissioning guidance.",
    tag: "Imaging Equipment",
    icon: Zap,
    image:
      "https://plus.unsplash.com/premium_photo-1751969547606-12b6632d4df8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=60&w=3000",
  },
  {
    title: "Radiation Protection Materials",
    desc: "Lead-lined shielding solutions and safety components suited to nuclear medicine facilities.",
    tag: "Protection",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Medical IT and Workstations",
    desc: "Acquisition systems, archival support, and technical infrastructure for imaging workflows.",
    tag: "IT Systems",
    icon: Box,
    image:
      "https://plus.unsplash.com/premium_photo-1751969547693-4e6fbd8cb8f0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=60&w=3000",
  },
  {
    title: "Clinical Consumables",
    desc: "Diagnostic reagents and supporting items required for consistent day-to-day clinical operation.",
    tag: "Consumables",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1800&auto=format&fit=crop",
  },
]

export function ProductShowcase() {
  return (
    <section className="relative bg-background py-28">
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
                Products
              </span>
            </motion.div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
              Equipment and supporting systems for complete department readiness.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We supply products that fit into the same implementation and support model as our
              service work, so hospitals can source with more confidence and less coordination risk.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground"
            >
              See Products
            </Link>
            <Link
              href="#contact-section"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Request Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.07, duration: 0.45, ease: "easeOut" }}
              className="overflow-hidden rounded-[2.5rem] border border-border bg-card/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-4 py-2 backdrop-blur-md">
                  <product.icon className="h-4 w-4 text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white">
                    {product.tag}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                  {product.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
