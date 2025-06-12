"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react"

export function Footer() {
  console.log("Footer component rendered")

  const socialLinks = [
    {
      icon: Instagram,
      label: "@IAFastTrack",
      href: "https://instagram.com",
      color: "hover:text-pink-500"
    },
    {
      icon: Linkedin,
      label: "Clément Predo",
      href: "https://www.linkedin.com/in/cl%C3%A9ment-predo-426133196/",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      label: "Alexis Zeitoun",
      href: "https://www.linkedin.com/in/alexiszeitoun/",
      color: "hover:text-blue-600"
    }
  ]

  const quickContact = [
    {
      icon: Mail,
      label: "hello@votre-ia-studio.com",
      href: "mailto:hello@votre-ia-studio.com"
    },
    {
      icon: Phone,
      label: "+33 6 42 26 66 52",
      href: "tel:+33642266652"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-brand-gray to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">
                  <span className="gradient-text">IA Formation & Production</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Votre partenaire de confiance pour transformer vos équipes et accélérer votre production IA.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-brand-indigo" />
                  <span className="text-gray-300">France • Remote First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-brand-violet" />
                  <span className="text-gray-300">Disponible 7j/7 pour nos clients</span>
                </div>
              </div>

              {/* Expertise Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["ESSEC", "Télécom Paris", "Crédit Agricole", "+100 IA testées"].map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-display font-semibold mb-6 text-white">
              Contact rapide
            </h4>
            <div className="space-y-4">
              {quickContact.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  onClick={() => console.log(`Footer contact clicked: ${contact.label}`)}
                >
                  <contact.icon className="w-5 h-5 text-brand-indigo group-hover:scale-110 transition-transform duration-300" />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-display font-semibold mb-6 text-white">
              Nous suivre
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 text-gray-300 transition-colors duration-300 group ${social.color}`}
                  onClick={() => console.log(`Social link clicked: ${social.label}`)}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-ai border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Prêt à transformer votre entreprise avec l'IA ?
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Démarrons ensemble votre projet dès aujourd'hui
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-indigo hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  console.log("Footer CTA clicked")
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Planifier un rendez-vous
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 IA Formation & Production. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                className="hover:text-white transition-colors duration-300"
                onClick={() => console.log("Privacy policy clicked")}
              >
                Politique de confidentialité
              </button>
              <button 
                className="hover:text-white transition-colors duration-300"
                onClick={() => console.log("Terms clicked")}
              >
                Conditions générales
              </button>
              <button 
                className="hover:text-white transition-colors duration-300"
                onClick={() => console.log("Legal mentions clicked")}
              >
                Mentions légales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}