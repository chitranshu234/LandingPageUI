"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Shield, Zap, Globe, Layers, Sparkles } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI-POWERED",
    description: "Advanced machine learning algorithms that adapt to your needs in real-time.",
    color: "#00f0ff",
  },
  {
    icon: Shield,
    title: "CYBER SECURE",
    description: "Military-grade encryption protecting your data across all dimensions.",
    color: "#ff00aa",
  },
  {
    icon: Zap,
    title: "LIGHTNING FAST",
    description: "Quantum-speed processing that makes waiting a thing of the past.",
    color: "#ff6b00",
  },
  {
    icon: Globe,
    title: "GLOBAL REACH",
    description: "Connected to servers worldwide for seamless international access.",
    color: "#00f0ff",
  },
  {
    icon: Layers,
    title: "MODULAR DESIGN",
    description: "Customize and expand with plug-and-play modules for any use case.",
    color: "#ff00aa",
  },
  {
    icon: Sparkles,
    title: "AUTO SCALING",
    description: "Intelligent resource allocation that grows with your demands.",
    color: "#ff6b00",
  },
]

export function SynthwaveFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative py-20 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#00f0ff 1px, transparent 1px),
              linear-gradient(90deg, #00f0ff 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">CORE </span>
            <span className="text-[#ff00aa] text-glow-magenta">FEATURES</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Cutting-edge technology designed for the digital frontier
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative h-full p-6 sm:p-8 bg-[#12121a] border rounded-lg group overflow-hidden"
                style={{ borderColor: `${feature.color}33` }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.color}15, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      boxShadow: `0 0 30px ${feature.color}30`,
                    }}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: feature.color }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-wider" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>

                {/* Bottom Border Glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                    boxShadow: `0 0 20px ${feature.color}`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
