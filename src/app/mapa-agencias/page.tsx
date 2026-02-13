"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MapaAgenciasPage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="absolute top-4 left-4 z-20">
                <Button asChild variant="secondary" className="bg-white/90 backdrop-blur shadow-lg hover:bg-white text-[#003fa2] font-bold">
                    <Link href="/sucursales">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Listado
                    </Link>
                </Button>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13317.027008316744!2d-70.65063469999999!3d-33.4372295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spullman%20cargo!5e0!3m2!1ses!2scl!4v1707834567890!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}
