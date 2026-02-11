"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShieldCheck, Zap, Globe, Truck, Package, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"

export function ServicesSection() {
    const services = [
        {
            title: "Encargos Exprés",
            description: "Envío rápido de documentos y paquetes con entrega prioritaria.",
            benefit: "Mejora los tiempos de respuesta.",
            icon: <Zap className="h-8 w-8 text-current" />,
            delay: 100
        },
        {
            title: "Carga LTL",
            description: "Transporte eficiente consolidado para optimizar costos.",
            benefit: "Paga solo por el espacio que usas.",
            icon: <Truck className="h-8 w-8 text-current" />,
            delay: 200
        },
        {
            title: "E-commerce",
            description: "Logística de última milla para tu tienda online.",
            benefit: "Entregas puntuales y seguras.",
            icon: <Package className="h-8 w-8 text-current" />,
            delay: 300
        },
        {
            title: "Internacional",
            description: "Gestión aduanera y transporte sin fronteras.",
            benefit: "Conectamos tu negocio con el mundo.",
            icon: <Globe className="h-8 w-8 text-current" />,
            delay: 400
        }
    ]

    return (
        <section id="servicios" className="w-full py-24 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="fade-in" className="text-center mb-16 space-y-4">
                    <div className="inline-block bg-black px-4 py-1 text-xs font-bold text-white uppercase tracking-widest mb-4">
                        Nuestros Servicios
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#003fa2] uppercase">
                        Soluciones <span className="text-black">Logísticas</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#003fa2] mx-auto mt-6" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} animation="slide-in-bottom" delay={service.delay} className="h-full">
                            <div className="group relative h-full bg-white p-8 shadow-lg hover:bg-[#003fa2] transition-colors duration-500 overflow-hidden">
                                {/* Decorative Number */}
                                <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex p-4 bg-gray-50 group-hover:bg-white/10 rounded-none transition-colors">
                                        {/* Icon wrapper to handle color change via CSS classes is tricky with React Node, 
                                            but we can use text-color utility on parent 'group' */}
                                        <div className="text-[#003fa2] group-hover:text-white transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-black uppercase text-black group-hover:text-white mb-4 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 group-hover:text-blue-100 mb-6 flex-1 transition-colors leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold uppercase tracking-wider text-[#003fa2] group-hover:text-white mt-auto">
                                        <div className="w-8 h-0.5 bg-[#003fa2] group-hover:bg-white mr-3 transition-colors" />
                                        Leer Más
                                    </div>
                                </div>

                                {/* Bottom Bar */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#003fa2] group-hover:bg-white transition-colors" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
