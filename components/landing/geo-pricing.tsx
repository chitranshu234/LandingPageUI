"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For hobbyists and side projects",
    color: "teal",
    features: ["5 Projects", "Basic Templates", "Community Support", "1GB Storage"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators and small teams",
    color: "coral",
    features: [
      "Unlimited Projects",
      "Premium Templates",
      "Priority Support",
      "50GB Storage",
      "Custom Exports",
      "Collaboration Tools",
    ],
    popular: true,
  },
  {
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "For agencies and large teams",
    color: "yellow",
    features: [
      "Everything in Pro",
      "White Label",
      "Dedicated Support",
      "Unlimited Storage",
      "API Access",
      "Custom Integrations",
    ],
    popular: false,
  },
]

export function GeoPricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[var(--geo-navy)] overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 border-8 border-[var(--geo-coral)] rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--geo-yellow)] opacity-20"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
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
            className="inline-block px-4 py-2 bg-[var(--geo-coral)] border-4 border-[var(--geo-light)] font-bold text-white text-sm uppercase tracking-wider mb-6"
            whileHover={{ rotate: -3 }}
          >
            Pricing
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--geo-light)] mb-6">
            Simple &<span className="text-[var(--geo-yellow)]"> Bold</span> Pricing
          </h2>
          <p className="text-xl text-[var(--geo-light)]/70 max-w-2xl mx-auto">
            No hidden fees. No surprises. Pick a plan and start creating today.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => {
            const colorMap = {
              coral: "var(--geo-coral)",
              teal: "var(--geo-teal)",
              yellow: "var(--geo-yellow)",
            }
            const bgColor = colorMap[plan.color as keyof typeof colorMap]

            return (
              <motion.div
                key={plan.name}
                className={`relative ${plan.popular ? "md:-translate-y-8" : ""}`}
                initial={{ opacity: 0, y: 50, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
                whileInView={{ opacity: 1, y: plan.popular ? -32 : 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-[var(--geo-yellow)] border-4 border-[var(--geo-navy)] font-bold text-[var(--geo-navy)]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Star size={16} fill="var(--geo-navy)" />
                    Most Popular
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  className="bg-[var(--geo-light)] border-4 border-[var(--geo-light)] p-8"
                  style={{ boxShadow: `8px 8px 0px ${bgColor}` }}
                  whileHover={{
                    x: 8,
                    y: 8,
                    boxShadow: `0px 0px 0px ${bgColor}`,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[var(--geo-navy)] mb-2">{plan.name}</h3>
                    <p className="text-[var(--geo-navy)]/60">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-[var(--geo-navy)]">{plan.price}</span>
                      <span className="text-[var(--geo-navy)]/60 font-medium">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-[var(--geo-navy)]"
                          style={{ backgroundColor: bgColor }}
                        >
                          <Check
                            size={14}
                            className={plan.color === "yellow" ? "text-[var(--geo-navy)]" : "text-white"}
                          />
                        </div>
                        <span className="text-[var(--geo-navy)]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05, rotate: plan.popular ? -2 : 2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="w-full font-bold text-lg py-6 border-4 border-[var(--geo-navy)]"
                      style={{
                        backgroundColor: bgColor,
                        color: plan.color === "yellow" ? "var(--geo-navy)" : "white",
                        boxShadow: "4px 4px 0px var(--geo-navy)",
                      }}
                    >
                      {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
