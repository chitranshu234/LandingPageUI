"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    company: "Studio Flux",
    quote: "This platform completely changed how we approach design. Bold, brave, and absolutely brilliant!",
    color: "coral",
    image: "/testimonial-alex.jpg",
  },
  {
    name: "Sam Chen",
    role: "Founder",
    company: "LaunchPad",
    quote: "Finally, a tool that matches my energy. Fast, fun, and incredibly powerful. 10/10 would recommend!",
    color: "teal",
    image: "/testimonial-sam.jpg",
  },
  {
    name: "Jordan Blake",
    role: "Lead Designer",
    company: "Pixel Perfect",
    quote: "The geometric approach is genius. Our clients can't stop talking about the unique designs we create.",
    color: "yellow",
    image: "/testimonial-jordan.jpg",
  },
]

export function GeoTestimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[var(--geo-light)] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--geo-coral)] opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--geo-teal)] opacity-20 translate-y-1/2 -translate-x-1/2 rotate-45" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-[var(--geo-teal)] border-4 border-[var(--geo-navy)] font-bold text-white text-sm uppercase tracking-wider mb-6"
            whileHover={{ rotate: 3 }}
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--geo-navy)] mb-6">
            What Creators
            <span className="text-[var(--geo-teal)]"> Say</span>
          </h2>
          <p className="text-xl text-[var(--geo-navy)]/70 max-w-2xl mx-auto">
            Real feedback from real creators who dared to be different.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => {
            const colorMap = {
              coral: "var(--geo-coral)",
              teal: "var(--geo-teal)",
              yellow: "var(--geo-yellow)",
            }
            const bgColor = colorMap[testimonial.color as keyof typeof colorMap]

            return (
              <motion.div
                key={testimonial.name}
                className={`relative ${i === 1 ? "md:-translate-y-8" : ""}`}
                initial={{ opacity: 0, y: 50, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
                whileInView={{ opacity: 1, y: i === 1 ? -32 : 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Card */}
                <motion.div
                  className="bg-white border-4 border-[var(--geo-navy)] p-8"
                  style={{ boxShadow: `8px 8px 0px ${bgColor}` }}
                  whileHover={{
                    x: 8,
                    y: 8,
                    boxShadow: `0px 0px 0px ${bgColor}`,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center border-4 border-[var(--geo-navy)] mb-6"
                    style={{ backgroundColor: bgColor }}
                    whileHover={{ rotate: 15 }}
                  >
                    <Quote
                      size={24}
                      className={testimonial.color === "yellow" ? "text-[var(--geo-navy)]" : "text-white"}
                    />
                  </motion.div>

                  {/* Quote Text */}
                  <p className="text-lg text-[var(--geo-navy)] font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="relative w-14 h-14 border-4 border-[var(--geo-navy)] overflow-hidden"
                      style={{ backgroundColor: bgColor }}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--geo-navy)]">{testimonial.name}</h4>
                      <p className="text-sm text-[var(--geo-navy)]/60">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
