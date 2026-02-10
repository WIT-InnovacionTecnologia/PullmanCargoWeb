import Link from "next/link"
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer id="contacto" className="bg-[#003fa2] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
                                <img
                                    src="/brand/LOGO CARGO.png"
                                    alt="Pullman Cargo"
                                    className="h-12 w-auto object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-white/80 leading-relaxed max-w-md">
                            Más de 75 años conectando personas y destinos con excelencia.
                            Tu socio confiable en servicios de logística y transporte de carga premium.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/80">
                                <Mail className="w-5 h-5 text-[#ffffff]" />
                                <span>contacto@pullmancargo.cl</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/80">
                                <MapPin className="w-5 h-5 text-[#ffffff]" />
                                <span>San Borja 235, Estación Central - Santiago</span>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-[#003fa2] flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-[#003fa2] flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-[#003fa2] flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[#ffffff]">Servicios</h3>
                        <ul className="space-y-3">
                            <li><Link href="#servicios" className="text-white/80 hover:text-[#ffffff] transition-colors">Transporte de Carga</Link></li>
                            <li><Link href="#servicios" className="text-white/80 hover:text-[#ffffff] transition-colors">Logística E-commerce</Link></li>
                            <li><Link href="#servicios" className="text-white/80 hover:text-[#ffffff] transition-colors">Distribución Nacional</Link></li>
                            <li><Link href="#servicios" className="text-white/80 hover:text-[#ffffff] transition-colors">Carga Internacional</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[#ffffff]">Empresa</h3>
                        <ul className="space-y-3">
                            <li><Link href="#nosotros" className="text-white/80 hover:text-[#ffffff] transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="#flota" className="text-white/80 hover:text-[#ffffff] transition-colors">Nuestra Flota</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-[#ffffff] transition-colors">Certificaciones</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-[#ffffff] transition-colors">Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[#ffffff]">Soporte</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-white/80 hover:text-[#ffffff] transition-colors">Centro de Ayuda</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-[#ffffff] transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-[#ffffff] transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#faq" className="text-white/80 hover:text-[#ffffff] transition-colors">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                        <p>© {new Date().getFullYear()} Pullman Cargo. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
                            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
