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
                    className="object-cover opacity-30 brightness-[0.4]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003fa2] via-[#003fa2]/90 to-transparent" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                    <ScrollReveal animation="slide-in-left" className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-100 backdrop-blur-sm border border-white/20 mb-2">
                                🚀 Logística de clase mundial
                            </div>
                            <h1 className="text-3xl min-[400px]:text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none text-white break-words hyphens-auto">
                                Cotiza tu carga <br /><span className="text-blue-200">fácil y rápido</span>
                            </h1>
                            <p className="max-w-[600px] text-blue-50 md:text-xl leading-relaxed opacity-90">
                                Solución integral para el transporte de carga. Obtén tarifas al instante, gestiona tus envíos y realiza seguimiento en tiempo real.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                            <Button asChild size="lg" className="bg-white text-[#003fa2] hover:bg-blue-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg px-8 h-14 rounded-full">
                                <Link href="#cotizador">Comenzar cotización</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all duration-300 font-bold px-8 h-14 rounded-full border border-white/30 hover:border-white/50">
                                <Link href="#servicios">Nuestros Servicios</Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-in-right" delay={200} className="hidden md:flex items-center justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white/10 backdrop-blur-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200"
                                alt="Pullman Cargo Fleet"
                                fill
                                priority
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay tag */}
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 z-10 animate-in fade-in slide-in-from-left duration-1000 delay-500 fill-mode-both">
                                <div className="p-2 bg-[#003fa2]/10 rounded-full">
                                    <Truck className="h-5 w-5 text-[#003fa2]" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cobertura</p>
                                    <p className="text-sm font-bold text-[#003fa2]">Todo Chile 24/7</p>
                                </div>
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
