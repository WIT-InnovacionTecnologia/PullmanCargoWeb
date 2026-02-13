"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { CheckCircle2, MapPin, ArrowRight, Table2 } from "lucide-react"

export function QuoterSection() {
    const rates = [
        { dest: "Valparaíso / Viña", price: "4.990", time: "24 hrs" },
        { dest: "La Serena / Coquimbo", price: "8.990", time: "24 - 48 hrs" },
        { dest: "Concepción / Talcahuano", price: "9.990", time: "24 - 48 hrs" },
        { dest: "Antofagasta", price: "14.990", time: "48 - 72 hrs" },
        { dest: "Puerto Montt", price: "12.990", time: "48 - 72 hrs" },
        { dest: "Arica", price: "18.990", time: "72+ hrs" },
    ]

    return (
        <section id="cotizador" className="w-full py-24 bg-white border-t border-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollReveal animation="fade-in" className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        Tarifas <span className="text-[#003fa2]">Referenciales</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Precios base para encomiendas estándar (hasta 5kg). Para carga mayor, contáctanos.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: RATES TABLE */}
                    <ScrollReveal animation="slide-in-left" className="h-full">
                        <div className="bg-white border-2 border-gray-100 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#003fa2]" />

                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-[#003fa2] rounded-none rotate-3">
                                        <Table2 className="h-6 w-6 text-white -rotate-3" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-gray-900">Origen: Santiago</h3>
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
                                    * Valores referenciales sujetos a cambio. No incluyen IVA.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* RIGHT COLUMN: CONTACT / INFO */}
                    <ScrollReveal animation="slide-in-right" delay={200} className="h-full flex flex-col justify-center space-y-8 py-8">
                        <div className="relative">
                            <div className="absolute -left-8 top-0 w-1 h-20 bg-[#003fa2]" />
                            <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">
                                ¿Necesitas un <br /> <span className="text-[#003fa2]">Servicio a Medida?</span>
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Para cargas consolidadas, mudanzas o distribución masiva empresas, solicita una evaluación personalizada.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 border border-gray-100">
                            <form className="space-y-4">
                                <Input placeholder="Nombre de la Empresa / Persona" className="bg-white" />
                                <Input placeholder="Teléfono de Contacto" className="bg-white" />
                                <Input placeholder="Correo Electrónico" className="bg-white" />
                                <Button className="w-full h-14 bg-[#003fa2] hover:bg-black text-white font-black uppercase tracking-widest text-lg rounded-none transition-all shadow-lg hover:shadow-xl">
                                    Solicitar Ejecutivo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {["Convenio Empresas", "Facturación Mensual", "Ejecutivo Asignado"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-gray-100 text-[#003fa2] text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> {tag}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
