"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GeoHero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-[var(--geo-light)]">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large coral circle */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-[var(--geo-coral)]"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Teal triangle */}
        <motion.div
          className="absolute top-1/3 -left-10 w-0 h-0 border-l-[100px] md:border-l-[200px] border-l-transparent border-r-[100px] md:border-r-[200px] border-r-transparent border-b-[173px] md:border-b-[346px] border-b-[var(--geo-teal)]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Yellow rectangle */}
        <motion.div
          className="absolute bottom-20 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-[var(--geo-yellow)] rotate-12"
          initial={{ y: 100, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Navy small shapes */}
        <motion.div
          className="absolute top-40 right-1/3 w-16 h-16 bg-[var(--geo-navy)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full border-4 border-[var(--geo-navy)]"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-2 bg-[var(--geo-yellow)] border-4 border-[var(--geo-navy)] font-bold text-[var(--geo-navy)] text-sm uppercase tracking-wider">
                Creative Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--geo-navy)] leading-none tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build
              <span className="block text-[var(--geo-coral)]">Something</span>
              <span className="relative inline-block">
                Bold
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.path
                    d="M0 10 Q50 0 100 10 Q150 20 200 10"
                    stroke="var(--geo-teal)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[var(--geo-navy)]/80 max-w-lg font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The creative platform that helps you bring wild ideas to life. No boring templates. Just pure creativity
              unleashed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[var(--geo-coral)] text-white font-bold text-lg px-8 py-6 border-4 border-[var(--geo-navy)] geo-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                  Start Creating
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-[var(--geo-light)] font-bold text-lg px-8 py-6 border-4 border-[var(--geo-navy)] geo-shadow-teal hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
                >
                  <Play className="mr-2" fill="var(--geo-navy)" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "50K+", label: "Creators" },
                { value: "1M+", label: "Projects" },
                { value: "99%", label: "Happy" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--geo-navy)]">{stat.value}</div>
                  <div className="text-sm font-bold text-[var(--geo-navy)]/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Asymmetric Card Stack */}
          <motion.div
            className="relative h-[400px] md:h-[500px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background card */}
            <motion.div
              className="absolute top-10 right-0 w-72 h-80 bg-[var(--geo-teal)] border-4 border-[var(--geo-navy)]"
              animate={{ rotate: [6, 8, 6] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Middle card */}
            <motion.div
              className="absolute top-5 right-10 w-72 h-80 bg-[var(--geo-yellow)] border-4 border-[var(--geo-navy)]"
              animate={{ rotate: [-3, -1, -3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Front card with content */}
            <motion.div
              className="absolute top-0 right-20 w-72 h-80 bg-white border-4 border-[var(--geo-navy)] p-6 geo-shadow"
              whileHover={{ rotate: 0, scale: 1.02 }}
              animate={{ rotate: -6 }}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[var(--geo-coral)] mb-4" />
                  <h3 className="font-bold text-xl text-[var(--geo-navy)]">Project Alpha</h3>
                  <p className="text-[var(--geo-navy)]/60 mt-2">Creative dashboard for modern teams</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[var(--geo-yellow)] text-sm font-bold text-[var(--geo-navy)]">
                    Design
                  </span>
                  <span className="px-3 py-1 bg-[var(--geo-teal)] text-sm font-bold text-white">Dev</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <polygon fill="var(--geo-navy)" points="0,120 1200,120 1200,60 600,120 0,60" />
        </svg>
      </div>
    </section>
  )
}
