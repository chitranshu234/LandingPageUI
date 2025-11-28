"use client"

import { motion } from "framer-motion"
import { Twitter, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Templates", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Tutorials", "Community", "Support"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
}

const socialLinks = [
  { icon: Twitter, href: "#", color: "var(--geo-coral)" },
  { icon: Github, href: "#", color: "var(--geo-navy)" },
  { icon: Linkedin, href: "#", color: "var(--geo-teal)" },
  { icon: Instagram, href: "#", color: "var(--geo-yellow)" },
]

export function GeoFooter() {
  return (
    <footer className="relative bg-[var(--geo-light)] overflow-hidden">
      {/* CTA Banner */}
      <div className="relative bg-[var(--geo-coral)] border-y-4 border-[var(--geo-navy)] py-16 md:py-24">
        <motion.div
          className="absolute top-4 left-10 w-20 h-20 bg-[var(--geo-yellow)] rotate-12"
          animate={{ rotate: [12, 20, 12] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-4 right-10 w-16 h-16 border-4 border-[var(--geo-navy)] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Get Bold?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join thousands of creators who chose to stand out. Start for free today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--geo-navy)] text-white font-bold text-lg border-4 border-white geo-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
            >
              Start Creating Now
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <motion.a href="#" className="flex items-center gap-2 mb-6" whileHover={{ scale: 1.05 }}>
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--geo-coral)] rotate-45" />
                <div className="absolute top-1 left-1 w-10 h-10 bg-[var(--geo-teal)] rotate-45 -z-10" />
              </div>
              <span className="font-bold text-2xl text-[var(--geo-navy)] tracking-tight">BOLDLY</span>
            </motion.a>
            <p className="text-[var(--geo-navy)]/70 mb-6 max-w-xs">
              The creative platform for bold thinkers and brave creators.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center border-4 border-[var(--geo-navy)]"
                  style={{ backgroundColor: social.color }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-bold text-[var(--geo-navy)] mb-4 uppercase text-sm tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-[var(--geo-navy)]/70 hover:text-[var(--geo-coral)] transition-colors font-medium"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-[var(--geo-navy)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--geo-navy)]/60 font-medium">© 2025 Boldly Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-[var(--geo-navy)]/60 font-medium">Made with</span>
            {/* <motion.div
              className="w-6 h-6 bg-[var(--geo-coral)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            /> */}
            <span className="text-[var(--geo-navy)]/60 font-medium">by Chitranshu Pandey, for creators</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
