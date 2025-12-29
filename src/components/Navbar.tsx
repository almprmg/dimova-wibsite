import { useState, useEffect } from "react";
import { Phone, MessageCircle, MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "@/i18n/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("navbar.services") },
    { href: "#projects", label: t("navbar.projects") },
    { href: "#why-dimova", label: t("navbar.why") },
    { href: "#process", label: t("navbar.process") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+966500000000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span className="font-montserrat">+966 50 000 0000</span>
            </a>
            <a 
              href="https://wa.me/966500000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MessageCircle size={14} />
              <span>{t("cta.whatsapp")}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin size={14} />
            <span>{t("navbar.location")}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-dimova"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-montserrat">D</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">{t("brand.name")}</h1>
                <p className="text-xs text-muted-foreground font-montserrat">Contracting & Fit-Out</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-secondary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-accent">
                {t("cta.quote")}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" className="btn-accent text-center mt-2">
                  اطلب عرض سعر
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
