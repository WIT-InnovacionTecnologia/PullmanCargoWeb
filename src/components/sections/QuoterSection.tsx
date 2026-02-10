"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Package, Truck, Users, Globe, Info, Ruler, TriangleAlert } from "lucide-react"

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
        <section id="cotizador" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="fade-in" duration={800} className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* LEFT COLUMN: FORM */}
                        <Card className="shadow-none hover:shadow-xl transition-shadow duration-300 border border-primary bg-gradient-to-br from-white to-gray-50 flex flex-col h-full">
                            <CardHeader className="pb-4">
                                <div className="text-2xl font-bold text-secondary flex items-center gap-2">
                                    <Package className="h-6 w-6 text-primary" />
                                    Cotiza tu envío
                                </div>
                                <p className="text-sm text-gray-600">
                                    Selecciona origen/destino e ingresa medidas exactas, peso y valor declarado para obtener tu cotización.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6 flex-1">
                                <Tabs defaultValue="personas" className="w-full mb-6" onValueChange={setActiveTab}>
                                    <TabsList className="grid w-full grid-cols-4 h-auto p-0 bg-transparent gap-2">
                                        {["Personas", "Emprendedores", "Empresas", "Internacional"].map((tab) => (
                                            <TabsTrigger
                                                key={tab}
                                                value={tab.toLowerCase()}
                                                className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none text-gray-500 hover:text-primary transition-colors p-0 font-medium text-xs md:text-sm"
                                            >
                                                {tab}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>

                                <form onSubmit={handleQuote} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="origin" className="text-sm font-medium text-gray-700">Origen</Label>
                                            <Select>
                                                <SelectTrigger id="origin" className="bg-white border-gray-300 focus:ring-primary focus:border-primary">
                                                    <SelectValue placeholder="Seleccione origen" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="santiago">Santiago</SelectItem>
                                                    <SelectItem value="valparaiso">Valparaíso</SelectItem>
                                                    <SelectItem value="concepcion">Concepción</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="destination" className="text-sm font-medium text-gray-700">Destino</Label>
                                            <Select>
                                                <SelectTrigger id="destination" className="bg-white border-gray-300 focus:ring-primary focus:border-primary">
                                                    <SelectValue placeholder="Seleccione destino" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="antofagasta">Antofagasta</SelectItem>
                                                    <SelectItem value="puertomontt">Puerto Montt</SelectItem>
                                                    <SelectItem value="arica">Arica</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="largo" className="text-sm font-medium text-gray-700">Largo</Label>
                                            <div className="relative">
                                                <Input id="largo" type="number" placeholder="0" className="pr-8 border-gray-300 focus-visible:ring-primary" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 px-1 rounded">cm</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="ancho" className="text-sm font-medium text-gray-700">Ancho</Label>
                                            <div className="relative">
                                                <Input id="ancho" type="number" placeholder="0" className="pr-8 border-gray-300 focus-visible:ring-primary" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 px-1 rounded">cm</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="alto" className="text-sm font-medium text-gray-700">Alto</Label>
                                            <div className="relative">
                                                <Input id="alto" type="number" placeholder="0" className="pr-8 border-gray-300 focus-visible:ring-primary" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 px-1 rounded">cm</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="peso" className="text-sm font-medium text-gray-700">Peso</Label>
                                            <div className="relative">
                                                <Input id="peso" type="number" placeholder="0" className="pr-8 border-gray-300 focus-visible:ring-primary" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 px-1 rounded">kg</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="valor" className="text-sm font-medium text-gray-700">Valor declarado</Label>
                                            <div className="relative">
                                                <Input id="valor" type="number" placeholder="0" className="pr-8 border-gray-300 focus-visible:ring-primary" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 px-1 rounded">$</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <Info className="h-4 w-4 text-[#003fa2] mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-blue-800">
                                            <strong>100 cm = 1 metro</strong> — Ingresa medidas correctas para una cotización precisa.
                                        </p>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button type="submit" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300" disabled={loading}>
                                            {loading ? "Calculando..." : "Cotizar"}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* RIGHT COLUMN: DIMENSIONS & TIPS */}
                        <Card className="shadow-none hover:shadow-xl transition-shadow duration-300 border border-primary bg-gradient-to-br from-gray-50 to-white flex flex-col h-full">
                            <CardHeader className="pb-4">
                                <div className="text-2xl font-bold text-secondary flex items-center gap-2">
                                    <Ruler className="h-6 w-6 text-primary" />
                                    Dimensiones de tu envío
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6 flex-1">
                                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <Info className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-secondary font-medium mb-1">¿Cómo medir correctamente?</p>
                                        <p className="text-sm text-gray-700">
                                            El precio del envío dependerá de las medidas, el peso y el valor declarado ingresado, los cuales serán validados al momento de la recepción.
                                        </p>
                                    </div>
                                </div>

                                {/* SVG ILLUSTRATION FROM REFERENCE */}
                                <div className="bg-white p-6 md:p-8 rounded-xl border border-primary/30 shadow-sm flex items-center justify-center">
                                    <div className="relative w-64 h-44 sm:w-80 sm:h-52 md:w-[22rem] md:h-55">
                                        <svg viewBox="-10 0 205 160" className="w-full h-full" role="img" aria-labelledby="box3dTitle box3dDesc">
                                            <title id="box3dTitle">Dimensiones de una caja</title>
                                            <desc id="box3dDesc">Ilustración isométrica de una caja.</desc>
                                            <defs>
                                                <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                                                    <polygon points="0 0, 8 4, 0 8" className="fill-primary text-primary"></polygon>
                                                </marker>
                                                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.20"></feDropShadow>
                                                </filter>
                                            </defs>
                                            <g filter="url(#shadow)" className="stroke-[#003fa2]" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
                                                <path d="M28 48 L138 48 L158 28 L48 28 Z" fill="#f8fafc"></path>
                                                <path d="M28 48 L28 120 L138 120 L138 48 Z" fill="#ffffff"></path>
                                                <path d="M138 48 L158 28 L158 100 L138 120 Z" fill="#e5e7eb"></path>
                                            </g>
                                            <g vectorEffect="non-scaling-stroke">
                                                <line x1="33" y1="130" x2="133" y2="130" className="stroke-[#003fa2]" strokeWidth="2.25" markerStart="url(#arrow)" markerEnd="url(#arrow)"></line>
                                                <g transform="translate(83,144)">
                                                    <rect x="-28" y="-10" width="56" height="18" rx="4" fill="#ffffff"></rect>
                                                    <text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="500" className="fill-primary">Largo</text>
                                                </g>
                                            </g>
                                            <g vectorEffect="non-scaling-stroke">
                                                <line x1="18" y1="53" x2="18" y2="115" className="stroke-[#003fa2]" strokeWidth="2.25" markerStart="url(#arrow)" markerEnd="url(#arrow)"></line>
                                                <g transform="translate(6,84) rotate(-90)">
                                                    <rect x="-24" y="-10" width="48" height="18" rx="4" fill="#ffffff00"></rect>
                                                    <text x="3" y="3" textAnchor="middle" fontSize="11" fontWeight="500" className="fill-[#003fa2]">Alto</text>
                                                </g>
                                            </g>
                                            <g vectorEffect="non-scaling-stroke">
                                                <line x1="142" y1="42" x2="165" y2="21" className="stroke-[#003fa2]" strokeWidth="2.25" markerStart="url(#arrow)" markerEnd="url(#arrow)"></line>
                                                <g transform="translate(176,32)">
                                                    <rect x="-30" y="-10" width="60" height="18" rx="4" fill="#ffffff00"></rect>
                                                    <text x="8" y="3" textAnchor="middle" fontSize="11" fontWeight="500" className="fill-[#003fa2]">Ancho</text>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-800">Consejos para una cotización exacta:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {[
                                            "Mide el paquete ya embalado y listo para enviar",
                                            "Incluye cualquier protección adicional en las medidas",
                                            "El valor declarado debe corresponder al contenido real",
                                            "Redondea hacia arriba si tienes dudas en las medidas"
                                        ].map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {result !== null && (
                        <Card className="mt-8 shadow-none hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary animate-in fade-in slide-in-from-bottom">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Costo Estimado</p>
                                    <div className="text-3xl font-bold text-secondary">${result.toLocaleString('es-CL')}</div>
                                    <p className="text-xs text-gray-400 mt-1">* Tarifa referencial calculada para {activeTab}</p>
                                </div>
                                <Button className="bg-[#003fa2] hover:bg-[#002d75] text-white font-bold">
                                    Solicitar Retiro
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                </ScrollReveal>
            </div>
        </section>
    )
}
