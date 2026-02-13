"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"
import { CheckCircle2, Package, Truck, Warehouse, MapPin, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface TrackingSheetProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    odt: string | null
}

export function TrackingSheet({ isOpen, onOpenChange, odt }: TrackingSheetProps) {
    // Mock steps - in a real app this would come from an API based on the ODT
    const steps = [
        {
            id: 1,
            title: "Ingresado",
            description: "Tu envío ha sido recibido.",
            date: "Hoy, 09:30 AM",
            location: "Sucursal Santiago Centro",
            icon: Package,
            status: "completed"
        },
        {
            id: 2,
            title: "En Centro de Distribución",
            description: "Procesando en bodega central.",
            date: "Hoy, 14:15 PM",
            location: "Hub Logístico Pudahuel",
            icon: Warehouse,
            status: "completed"
        },
        {
            id: 3,
            title: "En Ruta",
            description: "Tu pedido va en camino a destino.",
            date: "Hoy, 18:45 PM",
            location: "Ruta 5 Norte",
            icon: Truck,
            status: "active" // Current active step
        },
        {
            id: 4,
            title: "Entregado",
            description: "Envío recibido por destinatario.",
            date: "Mañana (Estimado)",
            location: "Domicilio del Cliente",
            icon: CheckCircle2,
            status: "pending"
        }
    ]

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-full sm:max-w-md border-l-4 border-[#003fa2] p-0 bg-gray-50">
                <div className="h-full flex flex-col">
                    {/* Header Section */}
                    <div className="bg-[#003fa2] p-6 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <SheetHeader className="relative z-10">
                            <SheetTitle className="text-2xl font-black uppercase text-white tracking-wider">
                                Estado del Envío
                            </SheetTitle>
                            <SheetDescription className="text-white/80 font-medium">
                                ODT #{odt || "--------"}
                            </SheetDescription>
                        </SheetHeader>
                    </div>

                    {/* Timeline Section */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-4 bottom-4 w-1 bg-gray-200"></div>

                            {steps.map((step, index) => {
                                const isCompleted = step.status === "completed"
                                const isActive = step.status === "active"
                                const isPending = step.status === "pending"

                                return (
                                    <ScrollReveal
                                        key={step.id}
                                        animation="slide-in-right"
                                        delay={index * 150}
                                        className={`relative flex gap-6 ${isPending ? 'opacity-60 grayscale' : ''}`}
                                    >
                                        {/* Icon Bubble */}
                                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 shadow-lg ${isActive
                                                ? 'bg-[#003fa2] border-[#003fa2] text-white scale-110'
                                                : isCompleted
                                                    ? 'bg-white border-[#003fa2] text-[#003fa2]'
                                                    : 'bg-gray-100 border-gray-300 text-gray-400'
                                            }`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 pt-1 pb-6 border-b border-gray-100 ${index === steps.length - 1 ? 'border-none' : ''}`}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className={`text-sm font-bold uppercase ${isActive ? 'text-[#003fa2]' : 'text-gray-900'}`}>
                                                    {step.title}
                                                </h4>
                                                <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                                                    {step.date.split(',')[0]}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-2 leading-snug">
                                                {step.description}
                                            </p>

                                            {(isActive || isCompleted) && (
                                                <div className="flex flex-col gap-1 text-xs text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{step.date.split(',')[1] || step.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{step.location}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 bg-white border-t border-gray-200">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold uppercase tracking-widest transition-all"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
