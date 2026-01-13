import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Calculator,
  PenTool,
  Award,
  Trophy,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const BusinessCardModal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 border border-stone-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-all"
        >
          <X size={16} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-1">
            Maulik Shukla
          </h2>
          <p className="text-sm text-stone-500">{cardData?.title}</p>
          {cardData?.license && (
            <p className="text-xs text-stone-400 mt-1">{cardData.license}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-all">
            <Phone size={18} className="text-stone-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-stone-900">Direct</div>
              <a
                href={`tel:${cardData?.phone}`}
                className="text-stone-600 hover:text-stone-900 no-underline"
              >
                {cardData?.phone}
              </a>
            </div>
          </div>

          {cardData?.corporatePhone && (
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-all">
              <Phone
                size={18}
                className="text-stone-600 mt-0.5 flex-shrink-0"
              />
              <div className="text-sm">
                <div className="font-semibold text-stone-900">Corporate</div>
                <a
                  href={`tel:${cardData.corporatePhone}`}
                  className="text-stone-600 hover:text-stone-900 no-underline"
                >
                  {cardData.corporatePhone}
                </a>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-all">
            <Mail size={18} className="text-stone-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-stone-900">Email</div>
              <a
                href={`mailto:${cardData?.email}`}
                className="text-stone-600 hover:text-stone-900 no-underline break-all"
              >
                {cardData?.email}
              </a>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              cardData?.address || ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-all no-underline cursor-pointer"
          >
            <MapPin size={18} className="text-stone-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-stone-900">Address</div>
              <p className="text-stone-600">{cardData?.address}</p>
            </div>
          </a>

          {cardData?.website && (
            <a
              href={cardData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-all no-underline"
            >
              Visit Website
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const UniversalContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 border border-stone-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-all"
        >
          <X size={16} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">
            Let's Connect
          </h2>
          <p className="text-sm text-stone-500">
            Ready to discuss your needs? Reach out today.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="tel:(408) 394-6289"
            className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-900 hover:text-white transition-all group no-underline"
          >
            <div className="w-12 h-12 rounded-full bg-stone-900 group-hover:bg-white flex items-center justify-center flex-shrink-0">
              <Phone
                size={20}
                className="text-white group-hover:text-stone-900"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-stone-400 group-hover:text-stone-300 uppercase tracking-wider">
                Call Direct
              </div>
              <div className="text-lg font-bold text-stone-900 group-hover:text-white">
                (408) 394-6289
              </div>
            </div>
          </a>

          <a
            href="mailto:MaulikShukla@yahoo.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-900 hover:text-white transition-all group no-underline"
          >
            <div className="w-12 h-12 rounded-full bg-stone-900 group-hover:bg-white flex items-center justify-center flex-shrink-0">
              <Mail
                size={20}
                className="text-white group-hover:text-stone-900"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-stone-400 group-hover:text-stone-300 uppercase tracking-wider">
                Email Me
              </div>
              <div className="text-sm font-bold text-stone-900 group-hover:text-white break-all">
                MaulikShukla@yahoo.com
              </div>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=San+Francisco+Bay+Area"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-900 hover:text-white transition-all group no-underline cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-stone-900 group-hover:bg-white flex items-center justify-center flex-shrink-0">
              <MapPin
                size={20}
                className="text-white group-hover:text-stone-900"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-stone-400 group-hover:text-stone-300 uppercase tracking-wider">
                Office Location
              </div>
              <div className="text-sm font-bold text-stone-900 group-hover:text-white">
                2235 30th Ave, San Francisco, CA 94116
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ activeIndex, scrollToSlide, onContactClick }) => {
  return (
    <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <nav className="pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)] px-5 py-3 rounded-2xl w-full max-w-4xl">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-7 h-7 bg-stone-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-6">
            <Trophy size={16} />
          </div>
          <span className="text-xs font-bold tracking-tight text-stone-900">
            Maulik Shukla
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Notary", "Loans", "Insurance"].map((label, index) => (
            <button
              key={label}
              onClick={() => scrollToSlide(index)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 ${
                activeIndex === index
                  ? "text-stone-900"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {label}
              {activeIndex === index && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-stone-900" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={onContactClick}
          className="bg-stone-900 text-white px-4 py-1.5 rounded-xl text-[11px] font-bold hover:bg-stone-800 transition-all active:scale-95"
        >
          Get in Touch
        </button>
      </nav>
    </div>
  );
};

const Slide = ({
  title,
  highlight,
  subtitle,
  desc,
  image,
  icon,
  type,
  onShowCard,
}) => {
  const ctaConfig = {
    loan: {
      href: "https://maulik.loan",
      label: "Check My Rate Options",
    },
    notary: {
      href: "https://notary.snapdocs.com/notary-public/california/san-francisco/maulik-shukla",
      label: "Book Notary Service",
    },
    insurance: {
      href: "mailto:MaulikShukla@yahoo.com",
      label: "Protect My Family",
    },
  };

  const { href, label } = ctaConfig[type];

  return (
    <div className="w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-12 pt-12">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[9px] font-bold uppercase tracking-[0.15em] mb-6">
            {icon}
            {highlight}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-6 tracking-tighter">
            {title} <br />
            <span className="italic font-medium text-stone-400">
              {subtitle}
            </span>
          </h1>

          <p className="text-sm md:text-base text-stone-500 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
            {desc}
          </p>

          {type === "loan" && (
            <div className="text-[11px] text-stone-400 mb-6">
              Ideal for first-time buyers, refinances, and competitive purchase
              offers.
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-stone-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg shadow-stone-100 no-underline"
            >
              {label}
              <ArrowRight size={16} />
            </a>

            <button
              onClick={onShowCard}
              className="w-full sm:w-auto bg-white border border-stone-200 text-stone-900 px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-stone-50 hover:border-stone-900 transition-all"
            >
              View Contact Card
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <div className="flex text-amber-500 scale-75">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Client Choice
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </div>

          <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-stone-100 rounded-full blur-2xl" />
          <div className="absolute -z-10 top-12 -right-4 w-24 h-24 bg-stone-200/50 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const businessCards = {
    notary: {
      title: "California Notary Public | Loan Signing Agent",
      phone: "(408) 394-6289",
      email: "MaulikShukla@yahoo.com",
      address: "2235 30th Ave, San Francisco, CA 94116",
      website: "https://maulik.finance",
    },
    loan: {
      title: "Loan Officer",
      license: "NMLS: #2680591; CO-NMLS: #320841",
      phone: "(408) 394-6289",
      corporatePhone: "(660) 333-3333",
      email: "MaulikShukla@yahoo.com",
      address: "2195 Tully Road, San Jose, CA 95122",
      website: "https://www.loanfactory.com/maulikshukla",
    },
    insurance: {
      title: "Financial Professional | Life Insurance & Annuities",
      license: "California License # 4517833",
      phone: "(408) 394-6289",
      email: "MaulikShukla@yahoo.com",
      address: "2235 30th Ave, San Francisco, CA 94116",
      website: "https://maulik.finance",
    },
  };

  const showCard = (type) => {
    setActiveCard(businessCards[type]);
    setIsModalOpen(true);
  };

  const slides = [
    {
      type: "notary",
      highlight: "Loan Signing Agent & Notary",
      title: "Secure Signing",
      subtitle: "Verified Excellence.",
      desc: "NNA Certified Loan Signing Agent specializing in mortgage, refinance, and HELOC documents. Providing mobile notary services with professional accuracy across San Francisco.",
      image: "/notary.png",
      icon: <PenTool size={12} />,
    },
    {
      type: "loan",
      highlight: "Licensed Mortgage Loan Officer",
      title: "Best Rates.",
      subtitle: "Compare 250+ Lenders.",
      desc: "Access wholesale mortgage rates from 250+ nationwide lenders. I compare options, explain the numbers, and guide you from pre-approval to closing across California and 22 other states.",
      image: "/loan.png",
      icon: <Briefcase size={12} />,
    },
    {
      type: "insurance",
      highlight: "Licensed Life Insurance Advisor",
      title: "Protect What",
      subtitle: "Matters Most.",
      desc: "Life insurance built around your family, your income, and your long-term goals. I help you choose the right coverage, either term or permanent, with clarity, confidence, and no pressure.",
      image: "/insurance.png",
      icon: <Calculator size={12} />,
    },
  ];

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
      );
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  return (
    <div className="bg-stone-50 h-screen w-full overflow-hidden flex flex-col relative font-sans">
      <BusinessCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardData={activeCard}
      />

      <UniversalContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <Navbar
        activeIndex={activeIndex}
        scrollToSlide={scrollToSlide}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-grow flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {slides.map((slide, i) => (
          <Slide key={i} {...slide} onShowCard={() => showCard(slide.type)} />
        ))}
      </div>

      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-center pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeIndex === i ? "w-12 bg-stone-900" : "w-4 bg-stone-200"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              scrollToSlide(Math.min(slides.length - 1, activeIndex + 1))
            }
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-30 grayscale pointer-events-none hidden md:flex">
        <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
          <Award size={12} /> NNA Certified
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
          <Briefcase size={12} /> Bonded & Insured
        </span>
      </div>
    </div>
  );
}
