"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clapperboard, Package } from "lucide-react"

export function PillarsSection() {
  console.log("PillarsSection component rendered")

  const pillars = [
    {
      icon: GraduationCap,
      title: "FORMER VOS ÉQUIPES",
      subtitle: "Rendre vos collaborateurs opérationnels sur les bons outils",
      color: "from-brand-indigo to-brand-violet",
      modules: [
        "🧠 Prompting expert : GPT, Claude, copilots, agents autonomes",
        "🎬 Créer une vidéo pro IA : Synthesia, Heygen (avatar, voix, branding)",
        "🖥️ Slides instantanées : Gamma + scripts IA",
        "🤖 Créer un agent IA : Manus / Skywork pour FAQ, RH, support, onboarding...",
        "🔁 Automatiser un process : email, doc, FAQ, reporting",
        "💼 Productivité AI-first : workflow IA dans Notion, Teams, Slack, Gmail, etc."
      ],
      deliverables: [
        "1 kit complet IA à votre charte",
        "Fiches synthèses + quiz + badges internes",
        "Sessions ludiques et contextualisées"
      ]
    },
    {
      icon: Clapperboard,
      title: "PRODUIRE POUR VOUS",
      subtitle: "Externaliser votre création IA sans recruter",
      color: "from-brand-violet to-brand-cyan",
      modules: [
        "🎬 Vidéos Synthesia 100% brandées",
        "🤖 Agents IA internes (Manus / Notion / Claude)",
        "📊 Slides Gamma à partir de scripts ou CR",
        "📝 Posts LinkedIn, newsletters, quiz IA générés",
        "📄 PDF + rapports dynamiques",
        "🌐 Pages web Notion / Tally / Typedream / Framer"
      ],
      deliverables: [
        "En marque blanche",
        "Duplicables et rapides",
        "Prêt à l'emploi"
      ]
    },
    {
      icon: Package,
      title: "OFFRES SUR-MESURE",
      subtitle: "Des packs standards ou entièrement personnalisés",
      color: "from-brand-cyan to-brand-indigo",
      modules: [
        "📦 Pack 100% production",
        "🎓 Pack 100% formation", 
        "🤝 Pack mix",
        "🚀 Offre starter pour B2C"
      ],
      deliverables: [
        "Tout fait à votre place",
        "Ou en co-création",
        "Process simple et clair"
      ]
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
            💡 NOS 3 PILIERS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">D'INTERVENTION</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
                <CardHeader className="text-center pb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${pillar.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-brand-gray mb-2">
                    {pillar.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-4">Modules disponibles :</h4>
                    <ul className="space-y-3">
                      {pillar.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="text-sm text-muted-foreground leading-relaxed">
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-4 bg-gradient-to-r ${pillar.color} bg-opacity-5 rounded-xl`}>
                    <h4 className="font-semibold text-brand-gray mb-3">📦 Livrables inclus :</h4>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-brand-indigo to-brand-violet rounded-full mr-3 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}