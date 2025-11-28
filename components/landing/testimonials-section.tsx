"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/professional-woman-portrait.png",
    content:
      "NexusAI has completely transformed our data pipeline. What used to take days now happens in real-time. The ROI has been incredible.",
  },
  {
    name: "Marcus Johnson",
    role: "Founder at DataDriven",
    avatar: "/professional-man-portrait.png",
    content:
      "The best AI platform we've ever used. The team support is exceptional, and the product just keeps getting better with every update.",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering at Scale",
    avatar: "/professional-woman-executive.png",
    content:
      "We evaluated 15 different solutions before choosing NexusAI. It's not even close - the accuracy and speed are unmatched in the industry.",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Loved by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join thousands of companies already transforming their business with NexusAI.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-foreground/90 leading-relaxed flex-1 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
