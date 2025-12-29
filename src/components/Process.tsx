import { motion } from "framer-motion";
import { 
  MapPin, 
  FileText, 
  ClipboardList, 
  Shield,
  Key
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "زيارة الموقع",
    titleEn: "Site Visit",
    description: "نبدأ بزيارة الموقع لفهم احتياجاتك ومتطلبات المشروع.",
  },
  {
    number: "02",
    icon: FileText,
    title: "النطاق والتسعير",
    titleEn: "Scope & BOQ",
    description: "نعد جدول كميات تفصيلي مع تحديد واضح لنطاق العمل.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "خطة التنفيذ",
    titleEn: "Execution Plan",
    description: "نضع جدولاً زمنياً محكماً مع تحديد مراحل التنفيذ.",
  },
  {
    number: "04",
    icon: Shield,
    title: "الجودة والإشراف",
    titleEn: "QA & Supervision",
    description: "متابعة يومية وفحص جودة صارم لكل مرحلة.",
  },
  {
    number: "05",
    icon: Key,
    title: "التسليم النهائي",
    titleEn: "Handover",
    description: "تسليم المشروع جاهزاً مع كافة الوثائق والضمانات.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">منهجية العمل</h2>
          <p className="section-subtitle">
            خمس خطوات واضحة تضمن تنفيذ مشروعك بأعلى جودة وفي الوقت المحدد
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 right-8 lg:right-1/2 lg:-translate-x-1/2 w-0.5 bg-border hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step Number Circle */}
              <div className="absolute right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-card border-4 border-accent flex items-center justify-center shadow-dimova">
                  <span className="text-xl font-bold text-accent font-montserrat">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 mr-24 lg:mr-0 ${
                  index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                }`}
              >
                <div className="card-service">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm font-montserrat text-accent">
                        {step.titleEn}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
