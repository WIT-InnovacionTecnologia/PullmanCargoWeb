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
            description: "Envío rápido de documentos y paquetes pequeños con entrega en menos de 24 horas a las principales ciudades.",
            benefit: "Mejora los tiempos de respuesta de tu negocio con logística ágil.",
            icon: <Zap className="h-10 w-10 text-secondary" />,
            image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=800",
            delay: 100
        },
        {
            title: "Carga Consolidada (LTL)",
            description: "Transporte eficiente para medianas cargas compartiendo espacio en camión, reduciendo costos operativos.",
            benefit: "Optimiza tu presupuesto pagando solo por el espacio que utilizas.",
            icon: <Truck className="h-10 w-10 text-secondary" />,
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800",
            delay: 200
        },
        {
            title: "Logística E-commerce",
            description: "Soluciones de última milla integradas para tiendas online con reportes de entrega en tiempo real.",
            benefit: "Aumenta la satisfacción de tus clientes con entregas puntuales y seguras.",
            icon: <Package className="h-10 w-10 text-secondary" />,
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800",
            delay: 300
        },
        {
            title: "Carga Internacional",
            description: "Gestión aduanera y transporte multimodal para importaciones y exportaciones a todo el mundo.",
            benefit: "Expande tus fronteras con el respaldo de nuestra red de agentes globales.",
            icon: <Globe className="h-10 w-10 text-secondary" />,
            image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800",
            delay: 400
        }
    ]

    return (
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="slide-in-left" className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-primary">
                            Nuestros Servicios Logísticos
                        </h2>
                        <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Soluciones integrales diseñadas para optimizar tu cadena de suministro,
                            mejorar la eficiencia y garantizar la seguridad de tu carga.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} animation="slide-in-right" delay={service.delay} className="h-full">
                            <Card className="h-full shadow-none hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col border border-[#003fa2] overflow-hidden group">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 z-10">
                                        <div className="bg-white/90 p-2 rounded-lg backdrop-blur-sm">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                                    <CardDescription className="text-gray-600 mt-2">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto pt-0">
                                    <div className="pt-4 border-t border-gray-50 flex items-start gap-2">
                                        <ShieldCheck className="h-4 w-4 text-[#003fa2] mt-0.5 flex-shrink-0" />
                                        <p className="text-xs font-semibold text-secondary italic">
                                            {service.benefit}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
