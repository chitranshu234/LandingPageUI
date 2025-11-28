"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export function SynthwaveNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#00f0ff]/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.05 }}>
            <div className="relative">
              <Zap className="w-8 h-8 text-[#00f0ff] animate-neon-pulse" />
              <div className="absolute inset-0 blur-md bg-[#00f0ff]/50 -z-10" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white text-glow-cyan tracking-wider">SYNTHEX</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-white/80 hover:text-[#00f0ff] transition-colors duration-300 text-sm tracking-widest uppercase group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00f0ff]" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative bg-transparent border-2 border-[#ff00aa] text-[#ff00aa] hover:bg-[#ff00aa]/10 hover:text-white px-6 py-2 tracking-widest uppercase text-sm overflow-hidden group">
                <span className="relative z-10">Launch App</span>
                <div className="absolute inset-0 bg-[#ff00aa]/20 blur-xl group-hover:bg-[#ff00aa]/40 transition-all duration-300" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-[#00f0ff]/20"
            >
              <div className="flex flex-col py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#00f0ff] px-4 py-2 tracking-widest uppercase text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button className="w-full border-2 border-[#ff00aa] text-[#ff00aa] bg-transparent hover:bg-[#ff00aa]/10">
                    Launch App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
