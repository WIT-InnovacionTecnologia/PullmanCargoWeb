"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
    return (
        <section id="flota" className="relative w-full py-16 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-primary">
            {/* Background Pullman Bus Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pullman_Bus_en_Ram%C3%B3n_de_la_Cerda%2C_Limache_20230525.jpg"
                    alt="Background Pullman Bus"
                    fill
                    priority
                    className="object-cover opacity-40 brightness-50"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                    <ScrollReveal animation="slide-in-left" className="flex flex-col justify-center space-y-4">
                        <div className="space-y-4">
                            <h1 className="text-2xl min-[400px]:text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none text-white break-words hyphens-auto">
                                Cotiza tu carga <span className="text-white">fácilmente</span>
                            </h1>
                            <p className="max-w-[600px] text-blue-50 md:text-2xl leading-relaxed">
                                Solución integral para el transporte de carga. Obtén tarifas al instante, gestiona tus envíos y realiza el seguimiento en tiempo real.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                            <Button asChild size="lg" className="bg-white text-[#003fa2] hover:bg-gray-100 shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg px-8">
                                <Link href="#cotizador">Comenzar cotización</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-transparent text-white hover:bg-white hover:text-[#003fa2] transition-all duration-300 font-bold px-8 shadow-lg border-2 border-white">
                                <Link href="#servicios">Nuestros Servicios</Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-in-right" delay={200} className="hidden md:flex items-center justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white/20 backdrop-blur-md">
                            <Image
                                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200"
                                alt="Pullman Cargo Fleet"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay tag */}
                            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10">
                                <Truck className="h-5 w-5 text-[#003fa2]" />
                                <span className="text-sm font-bold text-[#003fa2]">Flota Nacional 24/7</span>
                            </div>

                            {/* Decorative gradients */}
                            <div className="absolute -top-12 -right-12 h-40 w-40 bg-white/20 rounded-full blur-3xl opacity-50" />
                            <div className="absolute -bottom-12 -left-12 h-40 w-40 bg-white/10 rounded-full blur-3xl opacity-50" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
