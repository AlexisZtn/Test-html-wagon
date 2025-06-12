"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Calendar, Sparkles, Zap, Target, ArrowRight } from "lucide-react"

export function Hero() {
  console.log("Hero component rendered")
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const typingTexts = [
    "Boostez vos équipes.",
    "Déléguez l'IA.",
    "Gagnez du temps."
  ]

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentText.length) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex(currentCharIndex - 1)
      } else if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentCharIndex, isDeleting, currentTextIndex, typingTexts])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-brand-indigo/20 to-brand-violet/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-brand-violet/20 to-brand-cyan/20 rounded-full blur-lg"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-brand-cyan/10 to-brand-indigo/10 rounded-full blur-2xl"
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 container mx-auto px-6 py-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-ai rounded-full flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="ml-3 text-xl font-display font-semibold tracking-tight">IA Studio</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm text-gray-300">
            <button 
              onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Pourquoi
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Tarifs
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-sm border-gray-700 bg-transparent hover:bg-white/5 text-white border"
            onClick={() => {
              console.log("Nav sign in clicked")
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Se connecter
          </Button>
        </div>
      </motion.nav>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-8 px-6 py-3 text-blue-400 border-blue-400/30 bg-blue-400/5 backdrop-blur-sm text-base">
            <Sparkles className="w-5 h-5 mr-2" />
            OFFRE PREMIUM — IA FORMATION & PRODUCTION SUR-MESURE
          </Badge>
        </motion.div>

        {/* Dynamic Typing Title */}
        <div className="text-6xl md:text-7xl lg:text-8xl font-display font-semibold mb-8 leading-tight tracking-tight">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="min-h-[1.2em]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              {typingTexts[currentTextIndex].substring(0, currentCharIndex)}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-blue-400"
            >
              |
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white mt-4"
          >
            Une offre hybride pensée pour les entreprises
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Transformez vos équipes avec l'IA. Production experte, formation personnalisée, 
          résultats garantis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
        >
          <Button
            size="lg"
            className="bg-white text-black font-semibold text-lg px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            onClick={() => {
              console.log("Hero main CTA clicked")
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Démarrer maintenant
          </Button>
          
          <button
            className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group text-lg"
            onClick={() => {
              console.log("Hero learn more clicked")
              document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Découvrir l'offre
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
        >
          {[
            { icon: Target, number: "+100", label: "IA testées", desc: "& maîtrisées" },
            { icon: Zap, number: "3", label: "équipes formées", desc: "Crédit Agricole" },
            { icon: Sparkles, number: "+5K", label: "abonnés", desc: "Instagram & LinkedIn" },
            { icon: Calendar, number: "24h", label: "délai de réponse", desc: "Garanti" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + (0.1 * index) }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-purple-400 transition-colors duration-300" />
              <div className="text-3xl font-semibold mb-1 tracking-tight text-white">
                {stat.number}
              </div>
              <div className="text-gray-400 text-base font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-32 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-center mb-16 text-white">
            Ce qui nous distingue
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Formation Express",
                desc: "Vos équipes opérationnelles en moins de 3 semaines",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                icon: "🎯",
                title: "Production Sur-Mesure",
                desc: "Livrables IA brandés et prêts à l'emploi sous 48h",
                gradient: "from-purple-500/20 to-cyan-500/20"
              },
              {
                icon: "🚀",
                title: "ROI Immédiat",
                desc: "Résultats mesurables dès la première semaine",
                gradient: "from-cyan-500/20 to-blue-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + (0.1 * index) }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}