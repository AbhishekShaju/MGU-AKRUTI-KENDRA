import { motion } from "framer-motion";
import { Globe, ArrowUp } from "lucide-react";

const footerLinks = {
  Products: ["NovaPods Pro", "ChronoSync Watch", "UltraBook X15", "ProTab Elite"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact Us", "Returns", "Warranty"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: Globe, href: "https://www.mgu.ac.in/keralas-first-barc-akruti-centre-at-mg-university/", label: "MGU AKRUTI Centre" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="flex flex-col items-center mb-12">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-background/10">
          <p className="text-sm text-background/60 mb-4 md:mb-0">
            © 2024 MGU AKRUTI Kendra. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;