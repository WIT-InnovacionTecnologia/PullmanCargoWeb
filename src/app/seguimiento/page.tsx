"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { TrackingSteps } from "@/components/tracking/TrackingSteps"
import { CheckCircle2, Package, Truck, Warehouse, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

function TrackingContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const odt = searchParams.get("odt")

    // Mock Data Logic
    const isDemoODT = odt === "55500028022" || odt === "123456789" // Adding default ID for easy testing too

    // Default steps (Generic/Mock for any other ID)
    let steps = [
        {
            id: 1,
            title: "Ingresado",
            description: "Tu envío ha sido recibido.",
            date: "Hoy, 09:30 AM",
            location: "Sucursal Santiago Centro",
            icon: Package,
            status: "completed" as const
        },
        {
            id: 2,
            title: "En Centro de Distribución",
            description: "Procesando en bodega central.",
            date: "Hoy, 14:15 PM",
            location: "Hub Logístico Pudahuel",
            icon: Warehouse,
            status: "active" as const
        },
        {
            id: 3,
            title: "En Ruta",
            description: "Tu pedido va en camino a destino.",
            date: "Pendiente",
            location: "-",
            icon: Truck,
            status: "pending" as const
        },
        {
            id: 4,
            title: "Entregado",
            description: "Envío recibido por destinatario.",
            date: "Pendiente",
            location: "-",
            icon: CheckCircle2,
            status: "pending" as const
        }
    ]

    // Specific Mock Data for Demo ODT
    if (isDemoODT) {
        steps = [
            {
                id: 1,
                title: "Ingresado",
                description: "Envío recibido en sucursal.",
                date: "12 Feb, 10:00 AM",
                location: "Agencia Antofagasta",
                icon: Package,
                status: "completed"
            },
            {
                id: 2,
                title: "En Centro de Distribución",
                description: "Clasificado y despachado.",
                date: "12 Feb, 18:30 PM",
                location: "Hub Norte",
                icon: Warehouse,
                status: "completed"
            },
            {
                id: 3,
                title: "En Ruta",
                description: "En tránsito hacia Santiago.",
                date: "13 Feb, 08:15 AM",
                location: "Ruta 5 - Km 400",
                icon: Truck,
                status: "active"
            },
            {
                id: 4,
                title: "Entregado",
                description: "Entrega estimada mañana.",
                date: "14 Feb (Est)",
                location: "Domicilio Cliente",
                icon: CheckCircle2,
                status: "pending"
            }
        ]
    }

    if (!odt) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
                <Search className="w-16 h-16 text-gray-200" />
                <h2 className="text-2xl font-bold text-gray-900">No se ha especificado un número de seguimiento</h2>
                <Button onClick={() => router.push("/")} className="bg-[#003fa2] hover:bg-black text-white">
                    Volver al Inicio
                </Button>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header Card */}
            <div className="bg-white shadow-xl rounded-none overflow-hidden mb-8 border-t-4 border-[#003fa2]">
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-black uppercase text-gray-900 tracking-tight">
                            Estado del Envío
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">
                            ODT #{odt}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isDemoODT
                                ? "bg-blue-100 text-[#003fa2]"
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                            {isDemoODT ? "En Tránsito" : "Consultando"}
                        </span>
                    </div>
                </div>

                <div className="p-8">
                    <TrackingSteps steps={steps} />
                </div>

                <div className="bg-gray-50 p-6 flex justify-between items-center">
                    <Button variant="ghost" onClick={() => router.push("/")} className="text-gray-500 hover:text-[#003fa2]">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver
                    </Button>
                    <Button onClick={() => router.push("/")} className="bg-[#003fa2] hover:bg-black text-white font-bold uppercase tracking-wider text-xs px-6">
                        Nueva Consulta
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default function TrackingPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-32 px-4">
            <Suspense>
                <TrackingContent />
            </Suspense>
        </div>
    )
}
