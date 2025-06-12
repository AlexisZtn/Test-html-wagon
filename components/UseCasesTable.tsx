"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function UseCasesTable() {
  console.log("UseCasesTable component rendered")
  
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const useCases = [
    {
      question: "Comment transformer une réunion en supports prêts à l'emploi ?",
      objective: "Générer des slides, des comptes-rendus, des vidéos ou des emails automatiquement à partir d'un texte",
      tools: "Gamma, Notion AI, Synthesia",
      details: "Formation complète sur l'automatisation post-réunion avec des templates personnalisés et des workflows optimisés."
    },
    {
      question: "Comment créer des vidéos pédagogiques ou d'onboarding sans mobiliser un studio ?",
      objective: "Créer des vidéos à la charte, avec avatar, voix off, sous-titres et décor",
      tools: "Synthesia",
      details: "Maîtrise complète de Synthesia pour créer des vidéos professionnelles avec votre branding et vos avatars personnalisés."
    },
    {
      question: "Comment automatiser les tâches à faible valeur (FAQ, contenu, mails) ?",
      objective: "Implémenter l'IA dans vos process : création de templates, automatisations support / contenu / RH",
      tools: "Make, N8N",
      details: "Mise en place d'automatisations intelligentes qui gèrent vos tâches répétitives tout en gardant la qualité."
    },
    {
      question: "Comment intégrer l'IA dans un flux de travail interne sans changer tous les outils ?",
      objective: "Relier les outils IA aux outils internes (Teams, SharePoint, Notion, Google Suite…)",
      tools: "Connecteurs no-code + méthode \"micro-usage\"",
      details: "Intégration douce et progressive de l'IA dans vos outils existants sans disruption de vos équipes."
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
            🎯 CAS MÉTIERS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Questions fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous transformons vos défis quotidiens en solutions IA concrètes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-brand-indigo/5 to-brand-violet/5 rounded-xl">
            <div className="font-semibold text-brand-gray">Question métier</div>
            <div className="font-semibold text-brand-gray">Objectif pédagogique</div>
            <div className="font-semibold text-brand-gray">Outil / Livrable</div>
            <div className="font-semibold text-brand-gray">Action</div>
          </div>

          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-4 gap-4 p-6 items-center">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-brand-gray leading-tight">
                          {useCase.question}
                        </h3>
                      </div>
                      
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        {useCase.objective}
                      </div>
                      
                      <div>
                        <Badge variant="secondary" className="bg-gradient-to-r from-brand-indigo/10 to-brand-violet/10 text-brand-indigo border-0">
                          {useCase.tools}
                        </Badge>
                      </div>
                      
                      <div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            console.log(`Expanding use case ${index}`)
                            setExpandedRow(expandedRow === index ? null : index)
                          }}
                          className="w-full group-hover:border-brand-indigo transition-colors duration-300"
                        >
                          {expandedRow === index ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-2" />
                              Réduire
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-2" />
                              Détails
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden p-6 space-y-4">
                      <h3 className="font-semibold text-brand-gray leading-tight text-lg">
                        {useCase.question}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {useCase.objective}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-gradient-to-r from-brand-indigo/10 to-brand-violet/10 text-brand-indigo border-0">
                          {useCase.tools}
                        </Badge>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            console.log(`Expanding use case ${index} on mobile`)
                            setExpandedRow(expandedRow === index ? null : index)
                          }}
                          className="group-hover:border-brand-indigo transition-colors duration-300"
                        >
                          {expandedRow === index ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-2" />
                              Réduire
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-2" />
                              Détails
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    {expandedRow === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t bg-gradient-to-r from-brand-indigo/5 to-brand-violet/5 p-6"
                      >
                        <p className="text-muted-foreground leading-relaxed">
                          {useCase.details}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}