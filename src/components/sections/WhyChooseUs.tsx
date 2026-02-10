import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Shield, Clock, Award, Headphones } from "lucide-react"

export function WhyChooseUs() {
    const benefits = [
        {
            title: "Seguridad Garantizada",
            description: "Protocolos estrictos de manejo de carga y seguros comprometidos para tu tranquilidad.",
            icon: <Shield className="h-12 w-12 text-white" />,
            delay: 100
        },
        {
            title: "Rapidez y Eficiencia",
            description: "Nuestra red logística está diseñada para minimizar tiempos de tránsito en cada ruta.",
            icon: <Clock className="h-12 w-12 text-white" />,
            delay: 200
        },
        {
            title: "Trayectoria de Confianza",
            description: "Más de 75 años liderando el transporte terrestre en Chile con excelencia operativa.",
            icon: <Award className="h-12 w-12 text-white" />,
            delay: 300
        },
        {
            title: "Soporte Especializado",
            description: "Atención personalizada para resolver tus dudas y gestionar tus envíos 24/7.",
            icon: <Headphones className="h-12 w-12 text-white" />,
            delay: 400
        }
    ]

    return (
        <section id="nosotros" className="w-full py-20 bg-primary text-white overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <ScrollReveal animation="slide-in-left" className="lg:w-1/3 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-white">
                            ¿Por qué elegir <br />
                            <span>Pullman Cargo</span>?
                        </h2>
                        <p className="text-white/80 text-lg">
                            No solo transportamos carga; movemos el motor de tu negocio con
                            excelencia, seguridad y el respaldo de la flota más moderna de Chile.
                        </p>
                    </ScrollReveal>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <ScrollReveal
                                key={index}
                                animation="fade-in"
                                delay={benefit.delay}
                                className="flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                            >
                                <div className="flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
