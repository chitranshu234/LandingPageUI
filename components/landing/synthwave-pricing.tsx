"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "BASIC",
    price: "$29",
    description: "Perfect for individuals starting their journey",
    features: ["5 Projects", "10GB Storage", "Basic AI Assistant", "Email Support", "API Access"],
    color: "#00f0ff",
    popular: false,
  },
  {
    name: "PRO",
    price: "$79",
    description: "For professionals who demand more power",
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Advanced AI Suite",
      "Priority Support",
      "Full API Access",
      "Custom Integrations",
      "Analytics Dashboard",
    ],
    color: "#ff00aa",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "$199",
    description: "Maximum power for large organizations",
    features: [
      "Everything in Pro",
      "Unlimited Storage",
      "Dedicated AI Instance",
      "24/7 Phone Support",
      "Custom Development",
      "SLA Guarantee",
      "On-premise Option",
    ],
    color: "#ff6b00",
    popular: false,
  },
]

export function SynthwavePricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative py-20 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#ff00aa 1px, transparent 1px),
              linear-gradient(90deg, #ff00aa 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
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
            <span className="text-white">SELECT YOUR </span>
            <span className="text-[#ff6b00] text-glow-orange">PROTOCOL</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Choose the power level that matches your ambition
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold tracking-widest z-10"
                  style={{
                    backgroundColor: plan.color,
                    color: "#0a0a0f",
                    boxShadow: `0 0 30px ${plan.color}80`,
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-full p-6 sm:p-8 bg-[#12121a] border-2 rounded-lg overflow-hidden"
                style={{
                  borderColor: plan.popular ? plan.color : `${plan.color}40`,
                  boxShadow: plan.popular ? `0 0 40px ${plan.color}30` : "none",
                }}
              >
                {/* Glow Background for Popular */}
                {plan.popular && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${plan.color}, transparent 70%)`,
                    }}
                  />
                )}

                {/* Plan Name */}
                <div className="text-2xl font-bold tracking-widest mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/50 ml-2">/month</span>
                </div>

                {/* Description */}
                <p className="text-white/60 mb-8">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: plan.color }} />
                      <span className="text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="w-full py-6 text-lg font-bold tracking-widest uppercase relative overflow-hidden group"
                    style={{
                      backgroundColor: plan.popular ? plan.color : "transparent",
                      color: plan.popular ? "#0a0a0f" : plan.color,
                      border: `2px solid ${plan.color}`,
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.popular && <Zap className="w-5 h-5" />}
                      Get Started
                    </span>
                    {plan.popular && (
                      <div className="absolute inset-0 blur-xl opacity-50" style={{ backgroundColor: plan.color }} />
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
