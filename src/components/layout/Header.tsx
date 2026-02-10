"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#flota", label: "Flota" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"}`}>
      {/* Top Bar (Optional, can be added if needed, kept simple for now as per clean design) */}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <img
              src="/brand/LOGO CARGO.png"
              alt="Pullman Cargo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#003fa2] font-medium transition-colors duration-200 relative group text-sm uppercase tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5500] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              <Link href="/#cotizador">
                Cotizar Ahora
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#003fa2] text-[#003fa2] hover:bg-[#003fa2] hover:text-white rounded-full font-medium transition-all duration-300">
              <Link href="/login">
                Ingresar
              </Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#003fa2]">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-10">
                  <Link href="/" className="group transition-transform duration-300 hover:scale-105">
                    <img
                      src="/brand/LOGO CARGO.png"
                      alt="Pullman Cargo"
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xl font-medium text-gray-600 hover:text-[#003fa2] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 mt-4">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold h-12 text-lg">
                        <Link href="#cotizador">Cotizar Ahora</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button asChild variant="outline" className="w-full border-[#003fa2] text-[#003fa2] hover:bg-[#003fa2] hover:text-white h-12 text-lg">
                        <Link href="/login">Ingresar</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
