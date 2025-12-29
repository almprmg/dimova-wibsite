import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "فيلا سكنية فاخرة",
    type: "سكني",
    location: "الرياض",
    scope: "تشطيب كامل",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "مكاتب إدارية",
    type: "تجاري",
    location: "جدة",
    scope: "فيت أوت داخلي",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "شقة عصرية",
    type: "سكني",
    location: "الدمام",
    scope: "تشطيب وديكور",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "محل تجاري",
    type: "تجاري",
    location: "الرياض",
    scope: "تجهيز كامل",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "مطعم راقي",
    type: "ضيافة",
    location: "جدة",
    scope: "تصميم وتنفيذ",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "فيلا حديثة",
    type: "سكني",
    location: "الخبر",
    scope: "تشطيب فاخر",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">مشاريعنا</h2>
          <p className="section-subtitle">
            نماذج من أعمالنا المنفذة التي تعكس التزامنا بالجودة والاحترافية
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-card shadow-dimova">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                      <span>{project.scope}</span>
                    </div>
                  </div>
                </div>

                {/* Static Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-foreground">
                    {project.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
          >
            عرض جميع المشاريع
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
