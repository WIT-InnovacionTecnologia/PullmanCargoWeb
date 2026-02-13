import { AgenciesGridSection } from "@/components/sections/AgenciesGridSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function SucursalesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-16">
            <div className="bg-[#003fa2] py-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Sucursales</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">Red de cobertura nacional. Estamos cerca de ti.</p>
                </div>
            </div>
            <AgenciesGridSection />
            <ContactSection />
        </div>
    )
}
