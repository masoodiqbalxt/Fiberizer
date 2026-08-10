"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function GlobalLoader() {
  const [isLoading, setIsLoading] = React.useState(true)
  const pathname = usePathname()

  React.useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 1400)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/10 backdrop-blur-2xl"
        >
          <div
            className="absolute h-72 w-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(24,103,193,0.15) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{
              scale: [0.96, 1.04, 0.99, 1.02, 1],
              opacity: 1,
            }}
            exit={{ scale: 1.06, opacity: 0 }}
            transition={{
              duration: 1.6,
              ease: "easeOut",
              times: [0, 0.26, 0.5, 0.76, 1],
            }}
            className="flex items-center justify-center"
            style={{ width: 180, height: 189 }}
          >
            <img
              src="/logo.svg"
              alt="Imagineering Logo"
              className="h-full w-full object-contain"
              style={{ clipPath: "inset(2.25% 0 0 0)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
