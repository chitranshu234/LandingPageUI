"use client"

import { motion } from "framer-motion"
import { Zap, Palette, Layers, Sparkles, Target, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build at the speed of thought. No waiting, no loading, just pure creation.",
    color: "coral",
    bgColor: "var(--geo-coral)",
  },
  {
    icon: Palette,
    title: "Bold Design",
    description: "Stand out from the crowd with unique, eye-catching designs that pop.",
    color: "teal",
    bgColor: "var(--geo-teal)",
  },
  {
    icon: Layers,
    title: "Stack It Up",
    description: "Layer your ideas, combine elements, create something never seen before.",
    color: "yellow",
    bgColor: "var(--geo-yellow)",
  },
  {
    icon: Sparkles,
    title: "Magic Tools",
    description: "AI-powered features that feel like magic. Draw, write, generate.",
    color: "coral",
    bgColor: "var(--geo-coral)",
  },
  {
    icon: Target,
    title: "Hit The Mark",
    description: "Precision controls for pixel-perfect results every single time.",
    color: "teal",
    bgColor: "var(--geo-teal)",
  },
  {
    icon: Rocket,
    title: "Launch Ready",
    description: "From idea to live in minutes. Export, share, and publish instantly.",
    color: "yellow",
    bgColor: "var(--geo-yellow)",
  },
]

export function GeoFeatures() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-[var(--geo-navy)] overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-4 border-[var(--geo-coral)] rotate-45"
        animate={{ rotate: [45, 55, 45] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[var(--geo-teal)] opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-[var(--geo-yellow)]"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-[var(--geo-yellow)] border-4 border-[var(--geo-light)] font-bold text-[var(--geo-navy)] text-sm uppercase tracking-wider mb-6"
            whileHover={{ rotate: -3 }}
          >
            Features
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--geo-light)] mb-6">
            Tools That
            <span className="text-[var(--geo-coral)]"> Inspire</span>
          </h2>
          <p className="text-xl text-[var(--geo-light)]/70 max-w-2xl mx-auto">
            Everything you need to turn crazy ideas into reality. No limits, no rules.
          </p>
        </motion.div>

        {/* Feature Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`relative ${i === 1 ? "md:translate-y-8" : ""} ${i === 4 ? "md:translate-y-4" : ""}`}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="bg-[var(--geo-light)] border-4 border-[var(--geo-light)] p-8 h-full"
                style={{ boxShadow: `8px 8px 0px ${feature.bgColor}` }}
                whileHover={{
                  x: 8,
                  y: 8,
                  boxShadow: `0px 0px 0px ${feature.bgColor}`,
                  rotate: i % 2 === 0 ? 2 : -2,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="w-16 h-16 flex items-center justify-center mb-6 border-4 border-[var(--geo-navy)]"
                  style={{ backgroundColor: feature.bgColor }}
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring" }}
                >
                  <feature.icon
                    size={32}
                    className={feature.color === "yellow" ? "text-[var(--geo-navy)]" : "text-white"}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-[var(--geo-navy)] mb-3">{feature.title}</h3>
                <p className="text-[var(--geo-navy)]/70 text-lg">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
