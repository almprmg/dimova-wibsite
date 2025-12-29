type Lang = "ar" | "en";

const translations = {
  ar: {
    brand: {
      name: "ديموفا",
      tagline: "صُممت لتدوم. أُنجزت لتُثير الإعجاب.",
    },
    hero: {
      title: "ديموفا للمقاولات والتشطيبات",
      subtitle:
        "تنفيذ تشطيبات داخلية باحترافية، التزام بالمواعيد، وإشراف ميداني لضمان الجودة.",
    },
    cta: {
      quote: "اطلب عرض سعر",
      whatsapp: "واتساب",
    },
    features: {
      onTime: "الالتزام بالمواعيد",
      supervision: "إشراف ميداني",
      quality: "جودة وتشطيب دقيق",
    },
    scroll: {
      more: "اكتشف المزيد",
    },
    navbar: {
      services: "الخدمات",
      projects: "المشاريع",
      why: "لماذا ديموفا",
      process: "منهجية العمل",
      contact: "تواصل",
      location: "الرياض، المملكة العربية السعودية",
    },
  },
  en: {
    brand: {
      name: "Dimova",
      tagline: "Built to Last. Finished to Impress.",
    },
    hero: {
      title: "Dimova Contracting & Fit-Out",
      subtitle:
        "Professional interior finishings, on time, with field supervision for assured quality.",
    },
    cta: {
      quote: "Request a Quote",
      whatsapp: "WhatsApp",
    },
    features: {
      onTime: "On-time delivery",
      supervision: "Field supervision",
      quality: "High-quality finishing",
    },
    scroll: {
      more: "Explore more",
    },
    navbar: {
      services: "Services",
      projects: "Projects",
      why: "Why Dimova",
      process: "Process",
      contact: "Contact",
      location: "Riyadh, Saudi Arabia",
    },
  },
} as const;

const resolveKey = (obj: Record<string, unknown>, key: string) => {
  const parts = key.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur && typeof cur === "object" && part in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
};

export const getLang = (): Lang => {
  const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
  if (saved === "ar" || saved === "en") return saved as Lang;
  const detected =
    typeof navigator !== "undefined"
      ? (navigator.language || "").slice(0, 2)
      : "ar";
  return detected === "ar" ? "ar" : "en";
};

export const setLang = (lang: Lang) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("lang", lang);
  }
};

export const t = (key: string, langOverride?: Lang): string => {
  const lang = langOverride ?? getLang();
  return resolveKey(translations[lang], key);
};

export type { Lang };
export { translations };
