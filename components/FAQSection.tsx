"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  console.log("FAQSection component rendered")

  const faqs = [
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "Les premiers résultats sont visibles dès la première semaine. Pour une formation d'équipe, comptez 2-3 semaines pour une autonomie complète. Pour la production IA, les livrables sont prêts sous 48-72h selon la complexité."
    },
    {
      question: "Faut-il des compétences techniques préalables ?",
      answer: "Aucune compétence technique n'est requise ! Nos formations sont conçues pour être accessibles à tous, du débutant à l'utilisateur avancé. Nous nous adaptons au niveau de chaque participant."
    },
    {
      question: "Comment garantissez-vous la qualité des livrables ?",
      answer: "Chaque livrable passe par un processus de validation en 3 étapes : création, révision qualité, et validation client. Nous offrons aussi 2 rounds de modifications inclus pour chaque production."
    },
    {
      question: "Pouvez-vous vous adapter à notre secteur d'activité ?",
      answer: "Absolument ! Nous personnalisons chaque formation et production selon votre secteur, vos outils existants et vos cas d'usage spécifiques. Notre approche modulaire s'adapte à tous les métiers."
    },
    {
      question: "Quelle différence avec d'autres prestataires IA ?",
      answer: "Notre force : l'approche hybride formation + production. Nous ne vendons pas que de la formation théorique, mais du concret immédiatement utilisable. De plus, nous restons en support post-livraison."
    },
    {
      question: "Comment se déroule l'accompagnement post-formation ?",
      answer: "Nous proposons un support Slack/Teams dédié, des sessions de suivi mensuel, et un accès à notre base de connaissances mise à jour. L'objectif : que vous restiez autonomes et à jour."
    },
    {
      question: "Travaillez-vous avec des TPE/PME ou seulement des grandes entreprises ?",
      answer: "Nous travaillons avec des structures de toutes tailles ! Des TPE de 5 personnes aux grands groupes de 10 000+ collaborateurs. Nos offres modulaires s'adaptent à tous les budgets."
    },
    {
      question: "Que se passe-t-il si les outils IA évoluent rapidement ?",
      answer: "C'est inclus dans notre accompagnement ! Nous mettons à jour nos formations et alertons nos clients des évolutions importantes. La veille technologique fait partie de notre service."
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
            ❓ FAQ
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Questions fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toutes les réponses à vos questions sur notre approche et nos services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card border-0 shadow-2xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-brand-indigo/10 rounded-xl px-6 data-[state=open]:bg-gradient-to-r data-[state=open]:from-brand-indigo/5 data-[state=open]:to-brand-violet/5 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-brand-gray hover:text-brand-indigo transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Une question spécifique ?
          </p>
          <Card className="glass-card border-0 shadow-xl max-w-md mx-auto cursor-pointer hover:shadow-2xl transition-all duration-300 group"
                onClick={() => {
                  console.log("FAQ contact card clicked")
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-brand-gray mb-2">Contactez-nous directement</h3>
              <p className="text-sm text-muted-foreground">Réponse sous 24h garantie</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}