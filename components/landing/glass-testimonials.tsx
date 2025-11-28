"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead at Stripe",
    image: "/testimonial-sarah.jpg",
    content:
      "Prism has completely transformed how our team collaborates. We've cut our development time in half and the quality of our output has never been better.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CTO at Linear",
    image: "/testimonial-marcus.jpg",
    content:
      "The intuitive interface and powerful features make Prism an essential part of our stack. It's like having a superpower for product development.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director at Figma",
    image: "/testimonial-emily.jpg",
    content:
      "I've tried dozens of tools, but nothing comes close to Prism. The attention to detail and user experience is simply unmatched in the industry.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function GlassTestimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-2 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-3 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what industry leaders are saying about their experience with Prism.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass-card-strong rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
