"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Calendar, Mail, Phone, MessageCircle, Send, Instagram, Linkedin } from "lucide-react"

export function ContactSection() {
  console.log("ContactSection component rendered")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Merci pour votre message ! Nous vous recontacterons sous 24h.")
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@votre-ia-studio.com",
      action: "mailto:hello@votre-ia-studio.com",
      color: "from-brand-indigo to-brand-violet"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 42 26 66 52",
      action: "tel:+33642266652",
      color: "from-brand-violet to-brand-cyan"
    },
    {
      icon: Calendar,
      title: "Rendez-vous",
      value: "Planifier un appel",
      action: "#",
      color: "from-brand-cyan to-brand-indigo"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-brand-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-brand-indigo border-brand-indigo/20 bg-white/50">
            📞 CONTACT
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Prenons rendez-vous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Échangeons sur vos besoins IA et construisons ensemble votre solution sur-mesure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-brand-gray mb-6">
                Plusieurs façons de nous joindre
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                          onClick={() => {
                            console.log(`Contact method clicked: ${method.title}`)
                            if (method.action.startsWith('mailto:') || method.action.startsWith('tel:')) {
                              window.location.href = method.action
                            }
                          }}>
                      <CardContent className="p-6 flex items-center space-x-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-gray text-lg mb-1">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {method.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-display font-semibold text-brand-gray mb-4">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-brand-indigo transition-all duration-300"
                  onClick={() => {
                    console.log("Instagram link clicked")
                    window.open('https://instagram.com', '_blank')
                  }}
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:text-brand-indigo transition-colors duration-300" />
                  @IAFastTrack
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-brand-indigo transition-all duration-300"
                  onClick={() => {
                    console.log("LinkedIn link clicked")
                    window.open('https://www.linkedin.com/in/cl%C3%A9ment-predo-426133196/', '_blank')
                  }}
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:text-brand-indigo transition-colors duration-300" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold text-brand-gray text-center">
                  <MessageCircle className="w-8 h-8 inline mr-3 text-brand-indigo" />
                  Écrivez-nous
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-brand-gray font-medium">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-brand-indigo/20 focus:border-brand-indigo transition-colors duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-brand-gray font-medium">
                        Email professionnel *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-brand-indigo/20 focus:border-brand-indigo transition-colors duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brand-gray font-medium">
                      Entreprise
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="border-brand-indigo/20 focus:border-brand-indigo transition-colors duration-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-gray font-medium">
                      Votre projet IA *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-brand-indigo/20 focus:border-brand-indigo transition-colors duration-300 resize-none"
                      placeholder="Décrivez-nous votre besoin, vos objectifs, votre contexte..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-ai text-white hover:shadow-brand-indigo/50 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Réponse garantie sous 24h • Audit gratuit pour tout projet qualifié
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}