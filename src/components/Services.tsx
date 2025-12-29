import { motion } from "framer-motion";
import { 
  Paintbrush, 
  Building2, 
  Layers, 
  Home,
  Wrench,
  Key
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "التشطيبات الداخلية",
    titleEn: "Interior Fit-Out",
    description: "تنفيذ شامل للتشطيبات الداخلية للمباني التجارية والسكنية بأعلى معايير الجودة.",
  },
  {
    icon: Paintbrush,
    title: "أعمال الدهانات والتشطيب",
    titleEn: "Finishing Works",
    description: "دهانات احترافية وتشطيبات نهائية دقيقة تضفي لمسة جمالية على مشروعك.",
  },
  {
    icon: Layers,
    title: "أعمال الجبس والأسقف",
    titleEn: "Gypsum & Ceiling",
    description: "تصميم وتنفيذ أسقف جبسية عصرية مع إضاءة مخفية وديكورات مميزة.",
  },
  {
    icon: Home,
    title: "الأرضيات والسيراميك",
    titleEn: "Flooring & Tiles",
    description: "تركيب أرضيات بأنواعها المختلفة من الرخام والسيراميك والباركيه.",
  },
  {
    icon: Wrench,
    title: "أعمال الميكانيكا والكهرباء",
    titleEn: "MEP Coordination",
    description: "تنسيق وتنفيذ أعمال التكييف والسباكة والكهرباء بتناغم تام.",
  },
  {
    icon: Key,
    title: "التسليم الشامل",
    titleEn: "Turnkey Handover",
    description: "تسليم مشروعك جاهزاً للاستخدام مع كافة التفاصيل والتشطيبات.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-subtitle">
            نقدم مجموعة شاملة من خدمات المقاولات والتشطيبات لتلبية جميع احتياجاتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-service group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-montserrat text-accent mb-3">
                {service.titleEn}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            اطلب استشارة مجانية
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
