import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AgenciesGridSection() {
    const agencies = [
        {
            city: "Santiago (Matriz)",
            address: "San Borja 1234, Estación Central",
            phone: "+56 2 2222 2222",
            hours: "Lun-Vie: 08:30 - 18:30",
            region: "Metropolitana",
            mapLink: "https://www.google.com/maps/search/?api=1&query=San+Borja+1234+Estacion+Central"
        },
        {
            city: "Antofagasta",
            address: "Pedro Aguirre Cerda 1234",
            phone: "+56 55 2222 222",
            hours: "Lun-Vie: 09:00 - 18:00",
            region: "Norte",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Pedro+Aguirre+Cerda+1234+Antofagasta"
        },
        {
            city: "La Serena",
            address: "Av. Balmaceda 4321",
            phone: "+56 51 2222 222",
            hours: "Lun-Vie: 09:00 - 18:00",
            region: "Norte",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Av+Balmaceda+4321+La+Serena"
        },
        {
            city: "Viña del Mar",
            address: "Av. Libertad 987",
            phone: "+56 32 2222 222",
            hours: "Lun-Vie: 09:00 - 18:30",
            region: "Centro",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Av+Libertad+987+Vina+del+Mar"
        },
        {
            city: "Concepción",
            address: "Autopista Concepción-Talcahuano 8000",
            phone: "+56 41 2222 222",
            hours: "Lun-Vie: 09:00 - 18:00",
            region: "Sur",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Autopista+Concepcion+Talcahuano+8000"
        },
        {
            city: "Puerto Montt",
            address: "Ruta 5 Sur Km 1000",
            phone: "+56 65 2222 222",
            hours: "Lun-Vie: 09:00 - 18:00",
            region: "Sur",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Ruta+5+Sur+Km+1000+Puerto+Montt"
        }
    ]

    return (
        <section className="w-full py-24 bg-gray-50 text-gray-900 overflow-hidden relative">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <ScrollReveal animation="fade-in" className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        Nuestras <span className="text-[#003fa2]">Sucursales</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Encuentra la agencia más cercana y gestiona tus envíos con facilidad.
                    </p>
                </ScrollReveal>

                {/* Agencies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agencies.map((agency, index) => (
                        <ScrollReveal key={index} animation="slide-in-bottom" delay={index * 100}>
                            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group h-full flex flex-col">
                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 rounded-full group-hover:bg-[#003fa2] transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-[#003fa2] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {agency.region}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase text-gray-900 mb-2 group-hover:text-[#003fa2] transition-colors">{agency.city}</h3>
                                    <p className="text-gray-500 text-sm mb-4 font-medium flex-1">{agency.address}</p>

                                    <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                            {agency.phone}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                            {agency.hours}
                                        </div>
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full bg-white text-[#003fa2] border-2 border-[#003fa2] hover:bg-[#003fa2] hover:text-white font-bold uppercase transition-all"
                                    >
                                        <a href={agency.mapLink} target="_blank" rel="noopener noreferrer">
                                            Ver en Mapa <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
