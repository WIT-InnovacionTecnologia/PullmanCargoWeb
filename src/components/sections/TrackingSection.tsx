import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Search, Info } from "lucide-react"

export function TrackingSection() {
    return (
        <section id="tracking" className="w-full py-16 bg-primary text-primary-foreground border-t border-white/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal animation="slide-in-left" className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                            <Info className="w-3 h-3" /> Próximamente
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-white">
                            Control total de <br /> tus envíos
                        </h2>
                        <p className="max-w-[500px] text-white/80 text-lg leading-relaxed">
                            Nuestra plataforma de tracking te permitirá monitorear la ubicación exacta
                            de tu carga en tiempo real, brindándote la tranquilidad y el control
                            que tu operación logística requiere.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-in-right" className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="space-y-6 text-center lg:text-left">
                            <h3 className="text-xl font-bold text-white">Rastreador de Guía</h3>
                            <p className="text-sm text-white/70">
                                Ingresa el número de guía que aparece en tu comprobante de envío.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    className="h-12 bg-white text-black border-0 focus-visible:ring-white"
                                    placeholder="Ej: 123456789"
                                    type="text"
                                />
                                <Button className="h-12 bg-white hover:bg-gray-100 text-[#003fa2] font-bold px-8 shadow-lg shadow-black/20">
                                    <Search className="w-4 h-4 mr-2" /> Buscar
                                </Button>
                            </form>
                            <p className="text-xs text-white/50 italic">
                                * Funcionalidad en fase de integración API.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
