"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Package, Truck, Users, MapPin, Box, Scale, DollarSign, Zap, CheckCircle2, Table2, ArrowRight } from "lucide-react"

export function QuoterSection() {
    const [result, setResult] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState("personas")

    const handleQuote = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call for Demo
        setTimeout(() => {
            setResult(Math.floor(Math.random() * 20000) + 5000)
            setLoading(false)
        }, 1500)
    }

    const rates = [
        { dest: "Valparaíso / Viña", price: "4.990", time: "24 hrs" },
        { dest: "La Serena / Coquimbo", price: "8.990", time: "24 - 48 hrs" },
        { dest: "Concepción / Talcahuano", price: "9.990", time: "24 - 48 hrs" },
        { dest: "Antofagasta", price: "14.990", time: "48 - 72 hrs" },
        { dest: "Puerto Montt", price: "12.990", time: "48 - 72 hrs" },
    ]

    return (
        <section id="cotizador" className="w-full py-24 bg-white border-t border-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="fade-in" className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        Cotiza tu <span className="text-[#003fa2]">Envío</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Elige tu perfil y obtén la mejor opción para tu carga.
                    </p>
                </ScrollReveal>

                <Tabs defaultValue="personas" className="w-full" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2 h-14 bg-gray-100 p-1 rounded-full">
                            <TabsTrigger
                                value="personas"
                                className="rounded-full text-base font-bold uppercase data-[state=active]:bg-[#003fa2] data-[state=active]:text-white transition-all"
                            >
                                Personas
                            </TabsTrigger>
                            <TabsTrigger
                                value="empresas"
                                className="rounded-full text-base font-bold uppercase data-[state=active]:bg-[#003fa2] data-[state=active]:text-white transition-all"
                            >
                                Empresas
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* PERSONAS TAB - CALCULATOR */}
                    <TabsContent value="personas">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <ScrollReveal animation="slide-in-left" className="h-full">
                                <div className="bg-white border-2 border-gray-100 p-8 shadow-2xl relative">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-[#003fa2]" />
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-black uppercase text-gray-900 mb-2">Calculadora Express</h3>
                                        <p className="text-sm text-gray-400 font-medium">Cotización inmediata para paquetería.</p>
                                    </div>
                                    <form onSubmit={handleQuote} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="origin" className="text-sm font-bold uppercase text-gray-500">Origen</Label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                                                    <Input id="origin" placeholder="Ciudad de origen" className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] font-semibold" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="destination" className="text-sm font-bold uppercase text-gray-500">Destino</Label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                                                    <Input id="destination" placeholder="Ciudad de destino" className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] font-semibold" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold uppercase text-gray-500">Dimensiones (cm)</Label>
                                            <div className="grid grid-cols-3 gap-2">
                                                <Input placeholder="Largo" type="number" className="h-12 bg-gray-50" />
                                                <Input placeholder="Ancho" type="number" className="h-12 bg-gray-50" />
                                                <Input placeholder="Alto" type="number" className="h-12 bg-gray-50" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="weight" className="text-sm font-bold uppercase text-gray-500">Peso (Kg)</Label>
                                            <div className="relative">
                                                <Scale className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                                                <Input id="weight" placeholder="0.0" type="number" className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] font-semibold" />
                                            </div>
                                        </div>
                                        <Button disabled={loading} className="w-full h-14 bg-[#003fa2] hover:bg-black text-white font-black uppercase tracking-widest text-lg rounded-none transition-all shadow-xl hover:shadow-2xl mt-4">
                                            {loading ? "Calculando..." : "Cotizar Ahora"}
                                        </Button>
                                    </form>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="slide-in-right" delay={200} className="h-full flex flex-col justify-center space-y-8 py-8">
                                {result ? (
                                    <div className="bg-gray-900 p-8 relative overflow-hidden animate-in fade-in zoom-in duration-500">
                                        <div className="relative z-10 text-center space-y-4">
                                            <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">Valor Estimado</p>
                                            <h3 className="text-6xl font-black text-white">${result.toLocaleString("es-CL")}</h3>
                                            <p className="text-blue-400 font-medium">IVA Incluido</p>
                                            <div className="pt-6 border-t border-gray-800">
                                                <Button className="w-full bg-white text-black hover:bg-[#003fa2] hover:text-white font-bold uppercase">Contratar Servicio</Button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">
                                            ¿Por qué cotizar con <br /> <span className="text-[#003fa2]">Pullman Cargo?</span>
                                        </h3>
                                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                            Simula tu envío en tiempo real. Precios transparentes y la red de cobertura más grande de Chile.
                                        </p>
                                        <ul className="space-y-3">
                                            {["Seguimiento 24/7", "Cobertura Arica a Punta Arenas", "Precios Competitivos"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                                                    <CheckCircle2 className="h-5 w-5 text-[#003fa2]" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </ScrollReveal>
                        </div>
                    </TabsContent>

                    {/* EMPRESAS TAB - STATIC RATES */}
                    <TabsContent value="empresas">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <ScrollReveal animation="slide-in-left" className="h-full">
                                <div className="bg-white border-2 border-gray-100 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-[#003fa2]" />
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="p-3 bg-[#003fa2] rounded-none rotate-3">
                                                <Table2 className="h-6 w-6 text-white -rotate-3" />
                                            </div>
                                            <h3 className="text-2xl font-black uppercase text-gray-900">Tarifas Corporativas (Ref)</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {rates.map((rate, index) => (
                                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 transition-colors border-l-4 border-transparent hover:border-[#003fa2] group/item">
                                                    <div className="flex items-center gap-3">
                                                        <MapPin className="w-4 h-4 text-gray-400 group-hover/item:text-[#003fa2] transition-colors" />
                                                        <span className="font-bold text-gray-700 uppercase">{rate.dest}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-black text-xl text-[#003fa2]">${rate.price}</div>
                                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">{rate.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-6 text-xs text-gray-400 font-medium text-center">
                                            * Tarifas base para volumen estándar.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="slide-in-right" delay={200} className="h-full flex flex-col justify-center space-y-8 py-8">
                                <div className="relative">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">
                                        Soluciones <br /> <span className="text-[#003fa2]">Corporativas</span>
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed">
                                        Para operaciones de alto volumen, ofrecemos convenios, cuenta corriente y ejecutivos dedicados.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-8 border border-gray-100">
                                    <form className="space-y-4">
                                        <Input placeholder="Razón Social" className="bg-white" />
                                        <Input placeholder="Email Corporativo" className="bg-white" />
                                        <Button className="w-full h-14 bg-[#003fa2] hover:bg-black text-white font-black uppercase tracking-widest text-lg rounded-none transition-all shadow-lg hover:shadow-xl">
                                            Contactar Ejecutivo <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
