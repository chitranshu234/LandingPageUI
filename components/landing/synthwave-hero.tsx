"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SynthwaveHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Perspective Grid Floor */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%]"
          style={{
            background: `
              linear-gradient(to top, #0a0a0f 0%, transparent 100%),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 49px,
                #ff00aa33 49px,
                #ff00aa33 51px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 49px,
                #ff00aa33 49px,
                #ff00aa33 51px
              )
            `,
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* Synthwave Sun */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(180deg, #ff6b00 0%, #ff00aa 50%, #0a0a0f 100%)`,
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(180deg, #ffee00 0%, #ff6b00 30%, #ff00aa 60%, transparent 100%)`,
            }}
          />
          {/* Sun lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-[6px] bg-[#0a0a0f]"
              style={{
                top: `${55 + i * 6}%`,
                opacity: 1 - i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 scanlines" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Glitch Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00f0ff]/50 rounded-full bg-[#00f0ff]/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
            </span>
            <span className="text-[#00f0ff] text-sm tracking-widest uppercase">Now in Beta</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white">THE FUTURE IS</span>
            <br />
            <span className="text-[#00f0ff] text-glow-cyan animate-flicker">NOW</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the next generation of digital innovation.
            <span className="text-[#ff00aa]"> Powered by AI.</span>
            <span className="text-[#00f0ff]"> Built for tomorrow.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative bg-[#00f0ff] text-[#0a0a0f] hover:bg-[#00f0ff]/90 px-8 py-6 text-lg tracking-widest uppercase font-bold group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#00f0ff] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#ff00aa] text-[#ff00aa] bg-transparent hover:bg-[#ff00aa]/10 px-8 py-6 text-lg tracking-widest uppercase font-bold group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "150+", label: "Countries" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00f0ff] text-glow-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  )
}
