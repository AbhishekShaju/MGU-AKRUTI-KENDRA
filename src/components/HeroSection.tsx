import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logoBarc from "@/assets/logo-barc.png";
import logoBiic from "@/assets/logo-biic.png";
import logoMgu from "@/assets/logo-mgu.png";
import akrutiImage from "@/assets/Akruti.jpeg";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    headline: "KERALA'S FIRST BARC AKRUTI CENTRE AT MG UNIVERSITY",
    subtext: "The first MGU AKRUTI Centre of Bhabha Atomic Research Centre (BARC) is set to launch at Mahatma Gandhi University. Dr. S. Adhikari, Director, Knowledge Management Group, BARC and University Registrar Dr. Bismi Gopalakrishnan formally signed a Memorandum of Understanding (MoU) regarding this. The event was presided over by Vice-Chancellor Dr. C.T. Aravindakumar.",
    cta: "Discover AKRUTI",
    badge: "BARC • DAE • MG University"
  },
  {
    id: 2,
    
    subtext: "The first MGU AKRUTI Centre of Bhabha Atomic Research Centre (BARC) is set to launch at Mahatma Gandhi University. Dr. S. Adhikari, Director, Knowledge Management Group, BARC and University Registrar Dr. Bismi Gopalakrishnan formally signed a Memorandum of Understanding (MoU) regarding this. The event was presided over by Vice-Chancellor Dr. C.T. Aravindakumar.",
    cta: "Explore Technologies",
    image: akrutiImage
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  return (
    <>
      {/* Header Section - Full Screen with Logos */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Logo Header Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-3 sm:px-6 lg:px-8 relative z-10"
        >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {/* Three Small Logos at Top */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              {/* Logo 1 - MGU */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-blue-200 flex items-center justify-center shadow-lg p-1.5 sm:p-2">
                <img src={logoMgu} alt="MGU Logo" className="w-full h-full object-contain" />
              </div>

              {/* Logo 2 - BARC */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-blue-200 flex items-center justify-center shadow-lg p-1.5 sm:p-2">
                <img src={logoBarc} alt="BARC Logo" className="w-full h-full object-contain" />
              </div>

              {/* Logo 3 - BIIC */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-blue-200 flex items-center justify-center shadow-lg p-1.5 sm:p-2">
                <img src={logoBiic} alt="BIIC Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Center Text */}
            <div className="text-center px-3 sm:px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-wider leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '0.05em', filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))' }}>
                MGU AKRUTI KENDRA
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-black tracking-wide uppercase px-2">
                Mahatma Gandhi University Campus, Kottayam, KERALA
              </p>
            </div>
          </div>
        </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Carousel Section - Separate Full Screen Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img
            key={currentSlide}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "easeOut" }}
            src={heroBg}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Carousel Content */}
        <div className="relative z-10 w-full px-3 sm:px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ 
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {/* Badge */}
              {slide.badge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {slide.badge}
                  </span>
                </motion.div>
              )}

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight text-center px-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))' }}
              >
                {slide.headline}
              </motion.h1>

              {/* Image for slide 2 */}
              {slide.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-6 sm:mb-8 mx-auto max-w-3xl px-2 sm:px-0"
                >
                  <img 
                    src={slide.image} 
                    alt="AKRUTI Kendra" 
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                </motion.div>
              )}

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 text-justify px-2"
              >
                {slide.subtext}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
                  onClick={() => scrollToSection(currentSlide === 0 ? 'about' : 'products')}
                >
                  {slide.cta}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mt-16"
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
      </section>

      {/* Scroll Indicator - Removed duplicate */}
    </>
  );
};

export default HeroSection;