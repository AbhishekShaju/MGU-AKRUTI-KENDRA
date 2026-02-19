import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { products, getProductById } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const product = products.find((p) => p.id === id);

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/#products")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Technologies</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Tags */}
              <div className="flex gap-2">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-blue-100 text-blue-600 border-0 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {product.name}
              </h1>

              {/* Price */}
              <div className="py-4 border-y border-border">
                <span className="text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  {product.price}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xl text-muted-foreground leading-relaxed text-justify">
                {product.shortDescription}
              </p>

              {/* Description Section */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed text-base text-justify">
                  {product.description || product.detailedDescription}
                </p>
              </div>

              {/* Applications Section */}
              {product.applications && (
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Applications</h3>
                  <div className="space-y-5">
                    {product.applications.map((app, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="border-l-4 border-blue-500 pl-4 py-2"
                      >
                        <h4 className="font-bold text-foreground mb-2">{app.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                          {app.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy Features Section (fallback) */}
              {!product.applications && product.features && (
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold rounded-2xl py-6 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  onClick={() => navigate("/#contact")}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 border-primary/30 rounded-2xl py-6 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  onClick={() => navigate("/#contact")}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
