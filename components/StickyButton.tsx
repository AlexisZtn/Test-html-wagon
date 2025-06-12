"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function StickyButton() {
  console.log("StickyButton component rendered")

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="bg-gradient-ai text-white shadow-2xl hover:shadow-brand-indigo/50 animate-pulse-glow rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
        onClick={() => {
          console.log("Sticky button clicked - scrolling to contact")
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <Calendar className="w-5 h-5 mr-2" />
        Je prends RDV
      </Button>
    </motion.div>
  )
}