"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, GraduationCap, Sparkles } from "lucide-react"

export function PricingSection() {
  console.log("PricingSection component rendered")

  const formationOffers = [
    {
      title: "Session de formation",
      duration: "1h30",
      price: "450 €",
      popular: false,
      features: [
        "Formation personnalisée à votre métier",
        "Support inclus pendant 1 mois",
        "Fiches synthèses PDF",
        "Quiz interactifs & badges",
        "Kit complet IA à votre charte"
      ]
    },
    {
      title: "Audit IA Express",
      duration: "1 semaine",
      price: "1 200 €",
      popular: true,
      features: [
        "Analyse complète de vos besoins",
        "Recommandations personnalisées",
        "Roadmap détaillée sur 6 mois",
        "Présentation executive",
        "Sessions de suivi incluses"
      ]
    },
    {
      title: "Pack Formation Continue",
      duration: "3 mois",
      price: "Sur demande",
      popular: false,
      features: [
        "Formation de vos équipes complète",
        "Support prioritaire illimité",
        "Hotline IA dédiée",
        "Évolutions & mises à jour",
        "Certification interne"
      ]
    }
  ]

  const productionOffers = [
    {
      title: "Vidéo professionnelle",
      duration: "1-3 min",
      price: "290 €",
      popular: true,
      features: [
        "Avatar personnalisé branded",
        "Voix off native qualité studio",
        "Sous-titres automatiques",
        "Livraison sous 48h",
        "3 révisions incluses"
      ]
    },
    {
      title: "Présentation dynamique",
      duration: "15-30 slides",
      price: "180 €",
      popular: false,
      features: [
        "Design professionnel sur-mesure",
        "Templates réutilisables",
        "Animations & transitions",
        "Export multi-formats",
        "Scripts de présentation"
      ]
    },
    {
      title: "Agent IA conversationnel",
      duration: "Setup complet",
      price: "400 €",
      popular: false,
      features: [
        "FAQ automatisée intelligente",
        "Assistant RH intégré",
        "Module d'onboarding",
        "Interface personnalisée",
        "Maintenance 1 mois offerte"
      ]
    },
    {
      title: "Pack Production Mensuel",
      duration: "Abonnement",
      price: "Sur demande",
      popular: true,
      features: [
        "Production illimitée",
        "Priorité sur tous projets",
        "Délais ultra-rapides",
        "Support dédié 24/7",
        "Évolutions continues"
      ]
    }
  ]

  const renderOfferCard = (offer: any, index: number, delay: number = 0) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay + (0.1 * index) }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={`bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-brand-indigo/20 transition-all duration-500 group h-full relative overflow-hidden ${
        offer.popular ? 'ring-2 ring-blue-400/30' : ''
      }`}>
        {offer.popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
            <Star className="w-4 h-4 inline mr-1" />
            Populaire
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-display font-bold text-white mb-2">
            {offer.title}
          </CardTitle>
          <p className="text-gray-400 text-sm">
            {offer.duration}
          </p>
          <div className="mt-4">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              {offer.price}
            </div>
            {offer.price !== "Sur demande" && (
              <p className="text-gray-400 text-sm">à partir de</p>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {offer.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button
            className={`w-full mt-6 transition-all duration-300 ${
              offer.popular
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/30 hover:scale-105'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
            onClick={() => {
              console.log(`CTA clicked for offer: ${offer.title}`)
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {offer.popular ? (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Commander
              </>
            ) : (
              'Demander un devis'
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-6 py-3 text-blue-400 border-blue-400/30 bg-blue-400/5 backdrop-blur-sm text-base">
            💰 TARIFS INDICATIFS (HT)
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Nos offres</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions sur-mesure pour former vos équipes et produire vos contenus IA
          </p>
        </motion.div>

        {/* Section Formation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 w-16 h-16 flex items-center justify-center rounded-xl mr-4">
              <GraduationCap className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-3xl font-display font-semibold text-white">Formation & Audit</h3>
              <p className="text-gray-400">Formez vos équipes aux outils IA</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {formationOffers.map((offer, index) => renderOfferCard(offer, index, 0.3))}
          </div>
        </motion.div>

        {/* Section Production */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 w-16 h-16 flex items-center justify-center rounded-xl mr-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-3xl font-display font-semibold text-white">Production IA</h3>
              <p className="text-gray-400">Livrables prêts à l'emploi</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productionOffers.map((offer, index) => renderOfferCard(offer, index, 0.6))}
          </div>
        </motion.div>

        {/* Options complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-8">
                🔧 Options & Services Complémentaires
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <div className="font-semibold text-white mb-2">Maintenance Continue</div>
                  <div className="text-sm text-gray-400">Support technique & évolutions</div>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20">
                  <div className="font-semibold text-white mb-2">Hotline IA Dédiée</div>
                  <div className="text-sm text-gray-400">Assistance prioritaire 24/7</div>
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <div className="font-semibold text-white mb-2">Formation Évolutive</div>
                  <div className="text-sm text-gray-400">Mises à jour et nouveautés</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}