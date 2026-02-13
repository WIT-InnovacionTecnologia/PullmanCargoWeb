"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Package, Truck, Users, Globe, Info, Ruler, TriangleAlert, MapPin, Box, Scale, DollarSign, Zap, CheckCircle2 } from "lucide-react"

export function QuoterSection() {
    const [result, setResult] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState("personas")

    const handleQuote = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setResult(Math.floor(Math.random() * 50000) + 15000) // Mock logic
            setLoading(false)
        }, 1500)
    }

    return (
        <section id="cotizador" className="w-full py-24 bg-white border-t border-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="fade-in" className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        Cotiza tu <span className="text-[#003fa2]">Envío</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Obtén una estimación inmediata para tus necesidades de transporte.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: FORM */}
                    <ScrollReveal animation="slide-in-left" className="h-full">
                        <div className="bg-white border-2 border-gray-100 p-8 shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#003fa2]" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-black uppercase text-gray-900 mb-2">Calculadora de Tarifas</h3>
                                <p className="text-sm text-gray-400 font-medium">Completa los datos para cotizar.</p>
                            </div>

                            <Tabs defaultValue="personas" className="w-full mb-8" onValueChange={setActiveTab}>
                                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100/50 rounded-xl mb-8">
                                    {["Personas", "Emprendedores", "Empresas"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab.toLowerCase())}
                                            className={`py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === tab.toLowerCase()
                                                ? "bg-[#003fa2] text-white shadow-md transform scale-105"
                                                : "text-gray-500 hover:text-[#003fa2] hover:bg-white/50"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </Tabs>

                            <form className="space-y-6">
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
                                    <Label className="text-sm font-bold uppercase text-gray-500">Dimensiones del paquete</Label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="relative">
                                            <Box className="absolute left-3 top-3.5 h-3.5 w-3.5 text-gray-400" />
                                            <Input placeholder="Largo (cm)" type="number" className="pl-8 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] text-sm" />
                                        </div>
                                        <div className="relative">
                                            <Box className="absolute left-3 top-3.5 h-3.5 w-3.5 text-gray-400" />
                                            <Input placeholder="Ancho (cm)" type="number" className="pl-8 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] text-sm" />
                                        </div>
                                        <div className="relative">
                                            <Box className="absolute left-3 top-3.5 h-3.5 w-3.5 text-gray-400" />
                                            <Input placeholder="Alto (cm)" type="number" className="pl-8 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] text-sm" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="weight" className="text-sm font-bold uppercase text-gray-500">Peso (Kg)</Label>
                                        <div className="relative">
                                            <Scale className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                                            <Input id="weight" placeholder="0.0" type="number" className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] font-semibold" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="value" className="text-sm font-bold uppercase text-gray-500">Valor Declarado</Label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                                            <Input id="value" placeholder="10000" type="number" className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-none focus:border-[#003fa2] font-semibold" />
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full h-14 bg-[#003fa2] hover:bg-black text-white font-black uppercase tracking-widest text-lg rounded-none transition-all shadow-xl hover:shadow-2xl mt-4">
                                    Cotizar Ahora
                                </Button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* RIGHT COLUMN: RESULT/INFO */}
                    <ScrollReveal animation="slide-in-right" delay={200} className="h-full flex flex-col justify-center space-y-8 py-8">
                        <div className="relative">
                            <div className="absolute -left-8 top-0 w-1 h-20 bg-[#003fa2]" />
                            <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">
                                ¿Por qué cotizar con <br /> <span className="text-[#003fa2]">Pullman Cargo?</span>
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Garantizamos la mejor relación precio-calidad del mercado, con tiempos de respuesta récord y seguridad total en cada kilómetro.
                            </p>
                        </div>

                        <div className="bg-gray-900 text-white p-8 rounded-none relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-[#003fa2] rounded-none">
                                        <Zap className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase">Tiempo Estimado</p>
                                        <p className="text-2xl font-black">24 - 48 Horas</p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/10 h-px mb-6" />
                                <ul className="space-y-3">
                                    {["Cobertura Nacional", "Seguimiento GPS", "Seguro de Carga Incluido"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#003fa2]" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
