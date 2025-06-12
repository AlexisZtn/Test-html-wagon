"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, FileText, Bot, Sparkles } from "lucide-react"

export function AdditionalOptionsSection() {
  console.log("AdditionalOptionsSection component rendered")

  const options = [
    {
      icon: Package,
      title: "Kit de vente IA",
      description: "Package complet pour présenter vos services",
      items: [
        "Vidéo de présentation personnalisée",
        "Slide deck professionnel",
        "Landing page Notion brandée",
        "Scripts de présentation"
      ],
      color: "from-brand-indigo to-brand-violet",
      popular: true
    },
    {
      icon: FileText,
      title: "Scripts de prospection LinkedIn",
      description: "Messages optimisés IA pour votre développement commercial",
      items: [
        "Templates de messages personnalisés",
        "Séquences d'approche multi-touch",
        "Analyse de performance",
        "Formation aux bonnes pratiques"
      ],
      color: "from-brand-violet to-brand-cyan",
      popular: false
    },
    {
      icon: Bot,
      title: "Templates d'automatisation",
      description: "Workflows prêts à l'emploi pour Make et N8N",
      items: [
        "Automatisations CRM",
        "Gestion emails intelligente",
        "Reporting automatisé",
        "Intégrations multi-outils"
      ],
      color: "from-brand-cyan to-brand-indigo",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-brand-indigo border-brand-indigo/20 bg-white/50">
            ✨ OPTIONS COMPLÉMENTAIRES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Boostez votre impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions additionnelles pour maximiser votre transformation IA
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden ${
                option.popular ? 'ring-2 ring-brand-indigo/20' : ''
              }`}>
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-ai text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Populaire
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${option.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-brand-gray mb-2">
                    {option.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-4">Inclus dans cette option :</h4>
                    <ul className="space-y-3">
                      {option.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${option.color} rounded-full mr-3 mt-2 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    className={`w-full transition-all duration-300 ${
                      option.popular
                        ? 'bg-gradient-ai text-white hover:shadow-brand-indigo/50'
                        : 'variant-outline hover:bg-brand-indigo hover:text-white'
                    }`}
                    onClick={() => {
                      console.log(`Additional option clicked: ${option.title}`)
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {option.popular ? 'Demander ce pack' : 'En savoir plus'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-3xl font-display font-bold text-brand-gray">
                Besoin d'une solution 100% sur-mesure ?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nos experts conçoivent des solutions IA parfaitement adaptées à vos enjeux spécifiques.
              </p>
              <Button
                size="lg"
                className="bg-gradient-ai text-white hover:shadow-brand-indigo/50 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  console.log("Custom solution CTA clicked")
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Créons votre solution ensemble
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}