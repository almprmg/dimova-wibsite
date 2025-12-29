import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/icon.png" alt="Dimova Icon" className="w-12 h-12 rounded-lg object-contain" />
              <div>
                <h3 className="font-bold text-lg">ديموفا</h3>
                <p className="text-sm text-primary-foreground/70 font-montserrat">Contracting & Fit-Out</p>
              </div>
            </div>
         
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              تنفيذ تشطيبات داخلية باحترافية، التزام بالمواعيد، وإشراف ميداني لضمان الجودة. 
              نبني لتدوم، ونُنهي لتُبهر.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "خدماتنا" },
                { href: "#projects", label: "مشاريعنا" },
                { href: "#why-dimova", label: "لماذا ديموفا" },
                { href: "#process", label: "منهجية العمل" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "التشطيبات الداخلية",
                "أعمال الدهانات",
                "الجبس والأسقف",
                "الأرضيات",
                "التسليم الشامل",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} ديموفا للمقاولات والتشطيبات. جميع الحقوق محفوظة.
            </p>
            <button
              onClick={scrollToTop}
              className="p-3 bg-accent rounded-full hover:bg-accent/90 transition-colors"
              aria-label="العودة للأعلى"
            >
              <ArrowUp size={20} className="text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
