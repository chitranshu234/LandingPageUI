"use client"

import { motion } from "framer-motion"
import { Zap, Twitter, Github, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Guides", "Support"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function SynthwaveFooter() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#ff00aa]/20 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <motion.a href="#" className="flex items-center gap-2 mb-4 group" whileHover={{ scale: 1.05 }}>
              <div className="relative">
                <Zap className="w-8 h-8 text-[#00f0ff]" />
                <div className="absolute inset-0 blur-md bg-[#00f0ff]/50 -z-10" />
              </div>
              <span className="text-2xl font-bold text-white text-glow-cyan tracking-wider">SYNTHEX</span>
            </motion.a>
            <p className="text-white/50 mb-6 max-w-xs">
              Building the future of digital innovation, one pixel at a time.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-[#00f0ff]/30 flex items-center justify-center text-white/60 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h4
                className="font-bold tracking-widest mb-4 text-sm"
                style={{
                  color: ["#00f0ff", "#ff00aa", "#ff6b00", "#00f0ff"][index],
                }}
              >
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a3e] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} SYNTHEX. All rights reserved.</p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            Crafted in the <span className="text-[#ff00aa]">digital frontier</span>
            <span className="inline-block w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
