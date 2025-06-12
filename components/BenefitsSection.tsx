"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, TrendingUp, Clock, Shield, Heart } from "lucide-react"

export function BenefitsSection() {
  console.log("BenefitsSection component rendered")

  const benefits = [
    {
      icon: Users,
      title: "Vos équipes formées et autonomes",
      description: "Transformation durable de vos collaborateurs en experts IA",
      color: "from-brand-indigo to-brand-violet"
    },
    {
      icon: Zap,
      title: "Du contenu IA pro, rapide, scalable",
      description: "Production de qualité studio sans les contraintes techniques",
      color: "from-brand-violet to-brand-cyan"
    },
    {
      icon: Heart,
      title: "Un duo jeune, tech-savvy, business-friendly",
      description: "Expertise technique avec une approche humaine et pédagogique",
      color: "from-brand-cyan to-brand-indigo"
    },
    {
      icon: Shield,
      title: "Des process durables et duplicables",
      description: "Solutions pensées pour grandir avec votre entreprise",
      color: "from-brand-indigo to-brand-violet"
    },
    {
      icon: TrendingUp,
      title: "Une image moderne + ROI immédiat",
      description: "Positionnement avant-gardiste avec des résultats mesurables",
      color: "from-brand-violet to-brand-cyan"
    },
    {
      icon: Clock,
      title: "Gain de temps considérable",
      description: "Automatisation intelligente qui libère du temps pour l'essentiel",
      color: "from-brand-cyan to-brand-indigo"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white to-brand-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-brand-indigo border-brand-indigo/20 bg-white/50">
            ✅ BÉNÉFICES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Ce que vous gagnez</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des résultats concrets et mesurables pour votre organisation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group-hover:scale-105">
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-brand-gray leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  <div className={`h-1 w-20 bg-gradient-to-r ${benefit.color} rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="glass-card border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-bold text-brand-gray mb-4">
                  🛠️ Process simple
                </h3>
                <p className="text-muted-foreground">
                  Une méthodologie éprouvée en 5 étapes clés
                </p>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Audit express", desc: "Analyse de vos besoins" },
                  { step: "2", title: "Définition du scope", desc: "Cadrage précis" },
                  { step: "3", title: "Livraison / Formation", desc: "Execution experte" },
                  { step: "4", title: "Transfert de compétences", desc: "Autonomisation" },
                  { step: "5", title: "Abonnement mensuel", desc: "Support continu" }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-brand-gray mb-2 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}