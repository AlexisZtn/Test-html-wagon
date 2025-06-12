"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, RefreshCw, ArrowRight } from "lucide-react"

export function WhySection() {
  console.log("WhySection component rendered")

  const problems = [
    {
      icon: AlertTriangle,
      title: "Ne savent pas comment les utiliser concrètement",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "N'ont pas le temps de se former à 10 plateformes",
      color: "text-orange-500"
    },
    {
      icon: RefreshCw,
      title: "Font tout à la main par habitude",
      color: "text-yellow-500"
    }
  ]

  return (
    <section id="why" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Pourquoi cette offre ?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Les outils IA sont là.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Problems Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-semibold mb-8 text-white">
              Mais vos équipes :
            </h3>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-full bg-red-50 ${problem.color}`}>
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-300 font-medium leading-relaxed">
                      {problem.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-brand-indigo/20 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ai rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-semibold mb-4 text-white">
                    Ce qu'on propose ?
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-brand-indigo/10 to-brand-violet/10 rounded-full px-6 py-3 mb-4">
                      <span className="gradient-text text-2xl font-bold">COMBO UNIQUE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-brand-indigo/5 rounded-xl">
                      <div className="text-3xl font-bold gradient-text mb-2">Formation</div>
                      <div className="text-sm text-muted-foreground">Expertise terrain</div>
                    </div>
                    <div className="text-center p-4 bg-brand-violet/5 rounded-xl">
                      <div className="text-3xl font-bold gradient-text mb-2">Production</div>
                      <div className="text-sm text-muted-foreground">À la demande</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-xl text-white font-medium">
                      Livré <span className="gradient-text font-bold">vite</span>, 
                      <span className="gradient-text font-bold"> bien</span>, 
                      <span className="gradient-text font-bold"> sans friction</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}