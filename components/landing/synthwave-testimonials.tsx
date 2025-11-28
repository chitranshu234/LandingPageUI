"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "ALEX CHEN",
    role: "CEO, TechCorp",
    content: "SYNTHEX transformed our entire operation. The future is here, and it's absolutely incredible.",
    avatar: "/cyberpunk-avatar-man-neon.jpg",
    color: "#00f0ff",
  },
  {
    name: "SARAH NOVA",
    role: "CTO, DataFlow",
    content: "The AI capabilities are unlike anything I've seen. It's like having a digital oracle at your fingertips.",
    avatar: "/cyberpunk-avatar-woman-neon-purple.jpg",
    color: "#ff00aa",
  },
  {
    name: "MARCUS STEEL",
    role: "Founder, NightCode",
    content: "Speed, security, and style. SYNTHEX delivers on all fronts. Our productivity skyrocketed.",
    avatar: "/cyberpunk-avatar-man-glasses-neon.jpg",
    color: "#ff6b00",
  },
]

export function SynthwaveTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#ff00aa]/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#00f0ff]/10 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">USER </span>
            <span className="text-[#00f0ff] text-glow-cyan">TRANSMISSIONS</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Signals from our users across the digital frontier
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-full p-6 sm:p-8 bg-[#12121a] border rounded-lg"
                style={{ borderColor: `${testimonial.color}40` }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 mb-6 opacity-50" style={{ color: testimonial.color }} />

                {/* Content */}
                <p className="text-white/80 text-lg mb-8 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative w-14 h-14 rounded-full overflow-hidden"
                    style={{
                      boxShadow: `0 0 20px ${testimonial.color}50`,
                    }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: testimonial.color }}
                    />
                  </div>
                  <div>
                    <div className="font-bold tracking-wider" style={{ color: testimonial.color }}>
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm tracking-wide">{testimonial.role}</div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg"
                  style={{ borderColor: testimonial.color }}
                />
                <div
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg"
                  style={{ borderColor: testimonial.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
