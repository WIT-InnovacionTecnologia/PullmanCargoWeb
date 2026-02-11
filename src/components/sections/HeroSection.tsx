"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
    return (
        <section id="inicio" className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Background Pullman Bus Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200"
                    alt="Background Pullman Bus"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto pt-20">
                <div className="max-w-4xl space-y-8">
                    <ScrollReveal animation="slide-in-left" className="space-y-6">
                        <div className="inline-block bg-[#003fa2] px-6 py-2 text-sm font-bold text-white uppercase tracking-[0.2em] transform -skew-x-12">
                            <span className="skew-x-12">Logística & Transporte</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                            Tu Carga <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003fa2] to-blue-400">Segura</span> <br />
                            A Tiempo
                        </h1>
                        <p className="max-w-xl text-gray-300 md:text-xl font-medium leading-relaxed border-l-4 border-[#003fa2] pl-6">
                            Expertos en transporte terrestre y soluciones logísticas integrales.
                            Conectamos Chile con la flota más moderna del país.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="h-16 px-8 bg-[#003fa2] hover:bg-white hover:text-[#003fa2] text-white font-black text-lg uppercase tracking-widest rounded-none transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                                <Link href="#cotizador">Cotizar Ahora</Link>
                            </Button>
                            <Button asChild size="lg" className="h-16 px-8 bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-bold text-lg uppercase tracking-widest rounded-none transition-all duration-300">
                                <Link href="#servicios">Nuestros Servicios</Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-[#003fa2] rounded-full" />
                </div>
            </div>
        </section>
    )
}
