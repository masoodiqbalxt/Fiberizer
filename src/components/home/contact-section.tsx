"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact-section" className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Contact Us
              </span>
            </motion.div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
              Tell us what your hospital or department needs next.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you are planning a new installation, reviewing shielding requirements, or
              looking for ongoing technical support, we can help you map the next step clearly.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Location
                </div>
                <p className="mt-3 text-lg font-bold tracking-tight text-foreground">
                  Lahore, Pakistan
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  Phone
                </div>
                <p className="mt-3 text-lg font-bold tracking-tight text-foreground">
                  0300 8804228
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  Best Use
                </div>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  Share your institution, project stage, and equipment requirement so we can route
                  your request quickly.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-[2.5rem] border border-border bg-card/70 p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl lg:p-10"
          >
            <div className="mb-8 border-b border-border pb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">
                Request Consultation
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Fill out the form below and include the equipment type, hospital name, or project
                scope so we can respond with the right technical team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Full Name
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="h-14 rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Email Address
                  <input
                    required
                    type="email"
                    placeholder="name@hospital.com"
                    className="h-14 rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-foreground">
                Hospital / Institution
                <input
                  required
                  type="text"
                  placeholder="Hospital or organization name"
                  className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-foreground">
                Requirement Brief
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about the equipment, service need, project stage, or timeline."
                  className="resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>

              <button
                type="submit"
                disabled={submitted}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-black uppercase tracking-[0.2em] text-background transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                <span>{submitted ? "Request Sent" : "Contact Us"}</span>
                {submitted ? (
                  <Check className="ml-3 h-4 w-4" />
                ) : (
                  <Send className="ml-3 h-4 w-4" />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
