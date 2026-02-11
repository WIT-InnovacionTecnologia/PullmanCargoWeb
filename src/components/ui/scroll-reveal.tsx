"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    animation?: "fade-in" | "slide-in-bottom" | "slide-in-left" | "slide-in-right" | "zoom-in"
    delay?: number
    duration?: number
    threshold?: number
}

export function ScrollReveal({
    children,
    className,
    animation = "fade-in",
    delay = 0,
    duration = 1000,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully in view
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold])

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-in":
                return "animate-in fade-in"
            case "slide-in-bottom":
                return "animate-in fade-in slide-in-from-bottom-4"
            case "slide-in-left":
                return "animate-in fade-in slide-in-from-left-4"
            case "slide-in-right":
                return "animate-in fade-in slide-in-from-right-4"
            case "zoom-in":
                return "animate-in fade-in zoom-in-95"
            default:
                return "animate-in fade-in"
        }
    }

    return (
        <div
            ref={ref}
            className={cn(
                isVisible ? getAnimationClass() : "opacity-0",
                className
            )}
            style={isVisible ? {
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
                animationFillMode: "forwards",
                animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform, opacity",
            } : {
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    )
}
