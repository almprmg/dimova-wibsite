import { motion } from "framer-motion";
import { 
  FileText, 
  ClipboardCheck, 
  Eye, 
  Bell,
  Award
} from "lucide-react";

const reasons = [
  {
    icon: FileText,
    title: "جدول كميات واضح",
    titleEn: "Clear BOQ & Scope",
    description: "نقدم جداول كميات تفصيلية وواضحة تضمن الشفافية الكاملة في التكاليف والنطاق.",
  },
  {
    icon: ClipboardCheck,
    title: "قائمة فحص الجودة",
    titleEn: "Quality Control Checklist",
    description: "نتبع قوائم فحص صارمة لضمان جودة كل مرحلة من مراحل التنفيذ.",
  },
  {
    icon: Eye,
    title: "إشراف ميداني",
    titleEn: "On-site Supervision",
    description: "فريق إشراف متخصص يتواجد في الموقع لضمان التنفيذ الأمثل.",
  },
  {
    icon: Bell,
    title: "تحديثات أسبوعية",
    titleEn: "Progress Updates",
    description: "تقارير دورية ومستمرة عن سير العمل مع صور التقدم الأسبوعي.",
  },
  {
    icon: Award,
    title: "معايير التسليم",
    titleEn: "Handover Standards",
    description: "نلتزم بأعلى معايير التسليم مع ضمان شامل على جميع الأعمال.",
  },
];

const WhyDimova = () => {
  return (
    <section id="why-dimova" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا ديموفا؟</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            نحن لا نبني فقط، بل نضمن جودة تدوم
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm font-montserrat text-accent mb-3">
                {reason.titleEn}
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDimova;
