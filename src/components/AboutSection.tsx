import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Lightbulb, GraduationCap, TrendingUp, Leaf, Package, Zap, Recycle } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Technology Transfer",
    description: "Providing commercialisable technology solutions for local enterprises.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Encouraging the creation of innovative startups and businesses.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Offering training programs to build technical capabilities.",
    gradient: "from-cyan-600 to-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Job Creation & Social Impact",
    description: "Generating employment opportunities and addressing societal challenges.",
    gradient: "from-blue-600 to-blue-400",
  },
];

const technologyDomains = [
  {
    icon: Leaf,
    title: "Agriculture & Biofertilizers",
    description: "Technologies for enhancing soil health, crop productivity, and sustainability.",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: Package,
    title: "Food Processing & Packaging",
    description: "Innovations in food safety, preservation, and packaging.",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: Zap,
    title: "Renewable Energy & Water Purification",
    description: "Solutions for clean energy and efficient water management.",
    gradient: "from-yellow-600 to-yellow-400",
  },
  {
    icon: Recycle,
    title: "Waste Management & Biogas",
    description: "Technologies for sustainable waste management and energy generation.",
    gradient: "from-emerald-600 to-emerald-400",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
                About MGU AKRUTI Kendra
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              A New Dawn for Innovation and Entrepreneurship
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
              The Advanced Knowledge for Rural and Urban Technology Implementation (AKRUTI) Kendra, established at Mahatma Gandhi University in collaboration with the Department of Atomic Energy (DAE) and the Bhabha Atomic Research Centre (BARC), aims to empower entrepreneurs, researchers, and communities by providing access to cutting-edge technologies. This initiative fosters innovation, skill development, and entrepreneurship, particularly in rural and semi-urban areas of Kerala.
            </p>
            
            <p className="text-foreground/80 font-medium leading-relaxed mb-6 text-justify">
              AKRUTI Kendra offers advanced technologies developed by BARC in key sectors such as agriculture, food processing, renewable energy, and water purification. These technologies are available for purchase, enabling entrepreneurs and businesses to integrate innovative solutions into their ventures.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 text-justify">
              Training will be provided by experts from BARC and MG University to ensure the proper implementation of each technology, along with comprehensive documentation for business setup and growth.
            </p>

            {/* Trust Indicators with Modern Design */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50/50 p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                      BARC • DAE
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Certified Technologies
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-cyan-50/50 p-6 border border-cyan-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      MG University
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Academic Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid - Modern Card Design */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative glass rounded-3xl p-6 hover:shadow-glow transition-all duration-500 h-full flex flex-col">
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {feature.description}
                  </p>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${feature.gradient} opacity-10 rounded-tl-3xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;