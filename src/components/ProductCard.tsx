import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  index: number;
}

const ProductCard = ({
  id,
  name,
  price,
  shortDescription,
  detailedDescription,
  image,
  tags,
  index,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      className="group relative h-full"
    >
      {/* Enhanced Glow Effect on Hover */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-400"
      />
      
      <div className="relative glass rounded-3xl overflow-hidden shadow-card h-full flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-blue-500/20">
        {/* Image Container with Modern Overlay */}
        <div className="relative h-80 overflow-hidden bg-white flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          

        </div>

        {/* Content with Modern Spacing */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Price with Modern Typography */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
              {name}
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3 text-justify">
            {shortDescription}
          </p>

          {/* Modern Action Button */}
          <Link to={`/product/${id}`}>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold rounded-2xl py-5 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group/btn hover:scale-105 active:scale-95"
            >
              <span className="group-hover/btn:translate-x-[-4px] transition-transform duration-300">View Details</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-2px] transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;