"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Facebook, Instagram, Linkedin } from "lucide-react"
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
              src="/brand/LOGO2 CARGO.png"
              alt="Pullman Cargo"
              className="h-8 md:h-10 w-auto object-contain"
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
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003fa2] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-[#003fa2] hover:bg-[#002d75] text-white font-bold rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
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
                <Button variant="ghost" size="icon" className="text-[#003fa2] hover:bg-blue-50/50">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-white/20 bg-white/90 backdrop-blur-xl p-0 shadow-2xl">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#003fa2]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col h-full relative z-10">
                  {/* Menu Header */}
                  <div className="p-6 pt-12 flex justify-center border-b border-gray-100/50">
                    <Link href="/" className="group transition-transform duration-300 hover:scale-105">
                      <img
                        src="/brand/LOGO2 CARGO.png"
                        alt="Pullman Cargo"
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* Menu Links */}
                  <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
                    {navLinks.map((link, index) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between text-2xl font-bold text-gray-800 hover:text-[#003fa2] transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003fa2] group-hover:w-full transition-all duration-300"></span>
                          </span>
                          {/* Arrow or Chevron could go here */}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Call to Actions */}
                  <div className="px-8 pb-4 space-y-3">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-[#003fa2] hover:bg-[#002d75] text-white font-bold h-12 text-lg shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1">
                        <Link href="#cotizador">Cotizar Ahora</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button asChild variant="outline" className="w-full border-[#003fa2] text-[#003fa2] hover:bg-blue-50 h-12 text-lg font-semibold border-2">
                        <Link href="/login">Ingresar</Link>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Menu Footer */}
                  <div className="p-8 bg-gray-50/50 border-t border-gray-100/50 space-y-6">
                    {/* Social Icons */}
                    <div className="flex justify-center gap-6">
                      {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                        <Link key={i} href="#" className="p-2 rounded-full bg-white text-gray-500 hover:text-[#003fa2] hover:bg-white shadow-sm hover:shadow-md transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                    {/* Contact Info */}
                    <div className="text-center space-y-1 text-sm text-gray-500">
                      <p>contacto@pullmancargo.cl</p>
                      <p>600 300 3000</p>
                    </div>
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
