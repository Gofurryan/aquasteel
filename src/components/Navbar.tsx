"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Droplets } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { title: "Home", href: "/#home" },
  { title: "Story", href: "/#story" },
  { title: "Features", href: "/#features" },
  { title: "Gallery", href: "/#gallery" },
  { title: "Order", href: "/#order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "calc(100% - 64px)" : "100%",
          top: scrolled ? 24 : 0,
          borderRadius: scrolled ? 9999 : 0,
          backgroundColor: scrolled ? "rgba(15,15,15,0.4)" : "rgba(0,0,0,0)",
          borderColor: scrolled ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0)",
          paddingTop: scrolled ? 12 : 24,
          paddingBottom: scrolled ? 12 : 24,
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className={clsx(
          "fixed left-0 right-0 z-50 mx-auto flex items-center justify-between px-6 md:px-12 backdrop-blur-xl backdrop-saturate-150 border transition-shadow",
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.6)]" : ""
        )}
      >
        <a href="/#home" className="flex items-center z-50 cursor-pointer">
          <motion.span
            className="font-outfit text-2xl font-bold tracking-tighter text-white"
            animate={{
              textShadow: [
                "0px 0px 10px rgba(255,255,255,0.3)",
                "0px 0px 20px rgba(255,255,255,0.8)",
                "0px 0px 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ textShadow: "0px 0px 35px rgba(255,255,255,1)" }}
          >
            aquasteel.
          </motion.span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <div key={link.title} className="overflow-hidden">
                  <motion.li
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.1 + i * 0.1,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-outfit text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white/50 hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 relative group inline-block"
                    >
                      {link.title}
                      <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left [box-shadow:0_0_10px_rgba(255,255,255,1)]" />
                    </a>
                  </motion.li>
                </div>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex gap-8 text-white/50 font-outfit uppercase tracking-widest text-sm"
            >
              <a href="/about" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                About Us
              </a>
              <a href="/faq" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                FAQ
              </a>
              <a href="/#order" className="hover:text-white hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
