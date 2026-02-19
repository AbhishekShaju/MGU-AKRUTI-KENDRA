import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative overflow-hidden bg-white" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header with Modern Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 mb-6 shadow-lg">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
              Available Technologies
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6 leading-tight">
            Ready-to-Implement{" "}
            <span className="gradient-text block">Innovation Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Proven BARC & DAE technologies designed for immediate business impact. 
            Complete with training, documentation, and ongoing support.
          </p>
        </motion.div>

        {/* Products Grid with Modern Spacing */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
