// Product data with image mappings
// Upload your images to src/assets/ and name them as product-1.png, product-2.png, etc.

import product1 from '@/assets/product-1.png';
import product2 from '@/assets/product-2.png';
import product3 from '@/assets/product-3.png';
import product4 from '@/assets/product-4.png';
import product5 from '@/assets/product-5.png';
import product6 from '@/assets/product-6.png';
import product7 from '@/assets/product-7.png';
import product8 from '@/assets/product-8.png';
import product9 from '@/assets/product-9.png';
import product10 from '@/assets/product-10.png';
import product11 from '@/assets/product-11.png';
import product12 from '@/assets/product-12.png';
import product13 from '@/assets/product-13.png';
import product14 from '@/assets/product-14.png';
import product15 from '@/assets/product-15.png';
import product16 from '@/assets/product-16.png';
import product17 from '@/assets/product-17.png';
import product18 from '@/assets/product-18.png';
import product19 from '@/assets/product-19.png';
import product20 from '@/assets/product-20.png';
import product21 from '@/assets/product-21.png';
import product22 from '@/assets/product-22.png';
import product23 from '@/assets/product-23.png';
import product24 from '@/assets/product-24.png';
import product25 from '@/assets/product-25.png';
import product26 from '@/assets/product-26.png';
import product27 from '@/assets/product-27.png';
import product28 from '@/assets/product-28.png';
import product29 from '@/assets/product-29.png';
import product30 from '@/assets/product-30.png';

export interface Product {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  description?: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  applications?: {
    title: string;
    description: string;
  }[];
  features?: string[];
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "bio-fertilizer-technology",
    name: "Foldable Solar Dryer",
    price: "₹10,000",
    shortDescription: "Sun-Powered Drying, Folded for Convenience",
    description:
      "BARC's Foldable Solar Dryer (FSD) is a clean, compact, and climate-friendly innovation that brings solar-powered efficiency right to your doorstep! Available in 10, 25, and 100 kg capacities, it speeds up drying 5x faster than traditional sun drying—perfect for farmers, startups, and herbal processors aiming for premium quality with zero emissions. From grapes to jackfruit, ginger to herbs, the FSD preserves nutrients and color while reducing spoilage and weight. Fold it, store it, and deploy it with ease—Kerala and beyond, it's your secret to smart, sustainable processing!",
    detailedDescription:
      "BARC's Foldable Solar Dryer (FSD) is a clean, compact, and climate-friendly innovation that brings solar-powered efficiency right to your doorstep! Available in 10, 25, and 100 kg capacities, it speeds up drying 5x faster than traditional sun drying—perfect for farmers, startups, and herbal processors aiming for premium quality with zero emissions. From grapes to jackfruit, ginger to herbs, the FSD preserves nutrients and color while reducing spoilage and weight. Fold it, store it, and deploy it with ease—Kerala and beyond, it's your secret to smart, sustainable processing!",
    applications: [
      {
        title: "Fruit & Vegetable Drying",
        description: "Ideal for jackfruit pulp, grapes, green pepper, ginger, etc—preserves natural flavor and nutrition."
      },
      {
        title: "Ayurvedic & Herbal Medicine",
        description: "Perfect for drying herbs like ashwagandha, tulsi, and turmeric to meet export standards."
      },
      {
        title: "Urban & Small-Scale Use",
        description: "The 10 kg model fits right into compact kitchens, terraces, or food startup setups."
      }
    ],
    image: product1,
    images: [product1, product17, product18, product19],
    tags: ["Agriculture", "Sustainable"],
    rating: 5,
    features: [
      "5x faster than sun drying",
      "Available in 10, 25, and 100 kg capacities",
      "Zero emissions",
      "Preserves nutrients and color",
      "Compact and foldable design",
      "Suitable for fruits, vegetables, and herbs"
    ],
    specifications: {}
  },
  {
    id: "water-purification-system",
    name: "Rapid Composting Technology for BioWaste",
    price: "₹25,000",
    shortDescription: "Advanced composting system for organic waste management.",
    description:
      "BARC's Rapid Composting Technology offers a smart, eco-friendly solution to organic waste management—turning kitchen, market, and garden waste into nutrient-rich compost in just weeks! Powered by a single, safe microbe, this simple yet powerful formulation works across a wide range of biodegradable materials, making it ideal for homes, farms, markets, and institutions alike. The result? High-carbon compost that improves soil health, boosts crop productivity, and supports sustainable agriculture. Clean, quick, and climate friendly—it's the future of waste management made easy!",
    detailedDescription:
      "BARC's Rapid Composting Technology offers a smart, eco-friendly solution to organic waste management—turning kitchen, market, and garden waste into nutrient-rich compost in just weeks! Powered by a single, safe microbe, this simple yet powerful formulation works across a wide range of biodegradable materials, making it ideal for homes, farms, markets, and institutions alike. The result? High-carbon compost that improves soil health, boosts crop productivity, and supports sustainable agriculture. Clean, quick, and climate friendly—it's the future of waste management made easy!",
    applications: [
      {
        title: "Households, Housing Societies & Institutions",
        description: "Efficiently manage daily kitchen and garden waste on-site."
      },
      {
        title: "Farms, Nurseries & Orchards",
        description: "Recycle crop residues and plant waste into high-quality compost for better yields."
      },
      {
        title: "Municipalities, Markets & Canteens",
        description: "Reduce landfill burden by composting large volumes of organic waste sustainably."
      }
    ],
    image: product2,
    images: [product2, product20, product21, product22],
    tags: ["Waste Management", "Sustainable"],
    rating: 5,
    features: [
      "45-day composting cycle",
      "Reduces waste volume by 70%",
      "Creates premium organic fertilizer",
      "Low maintenance required",
      "BARC certified",
      "Suitable for various organic wastes"
    ],
    specifications: {}
  },
  {
    id: "food-processing-unit",
    name: "On-line Domestic Water Purifier",
    price: "₹1,40,000",
    shortDescription: "Complete food processing solution for small businesses.",
    description:
      "BARC's Online Domestic Water Purifier is a reliable, affordable, and chemical free solution for clean, safe drinking water—right from your tap! Powered by a robust polysulfone ultrafiltration membrane, it removes over 99.99% of bacteria, eliminates turbidity, and produces crystal-clear water without wasting a single drop. Unlike typical UV purifiers, it needs no electricity and almost no maintenance, making it ideal for homes, especially in water stressed and power-scarce regions. With a long-lasting membrane and zero recurring costs, it's purity you can trust—every day!",
    detailedDescription:
      "BARC's Online Domestic Water Purifier is a reliable, affordable, and chemical free solution for clean, safe drinking water—right from your tap! Powered by a robust polysulfone ultrafiltration membrane, it removes over 99.99% of bacteria, eliminates turbidity, and produces crystal-clear water without wasting a single drop. Unlike typical UV purifiers, it needs no electricity and almost no maintenance, making it ideal for homes, especially in water stressed and power-scarce regions. With a long-lasting membrane and zero recurring costs, it's purity you can trust—every day!",
    applications: [
      {
        title: "Households",
        description: "Ensure safe, bacteria-free drinking water without electricity or chemical treatment."
      },
      {
        title: "Rural & Urban Communities",
        description: "Provide cost-effective water purification where electricity or advanced systems are unreliable."
      },
      {
        title: "Institutions & Public Facilities",
        description: "Offer clean water access in schools, offices, and public places with minimal maintenance needs."
      }
    ],
    image: product3,
    images: [product3, product23, product24, product25],
    tags: ["Food Tech", "Business"],
    rating: 4,
    features: [
      "Turnkey solution",
      "Hygiene certified",
      "Multiple food processing options",
      "Includes packaging system",
      "Quality control tools",
      "Training included"
    ],
    specifications: {}
  },
  {
    id: "renewable-energy-kit",
    name: "Ready-to-Eat (RTE) Intermediate Moisture Fruit Cubes",
    price: "₹20,000",
    shortDescription: "Solar-based energy solutions for sustainable power.",
    description:
      "BARC's Ready-to-Eat (RTE) Intermediate Moisture Fruit Cubes is a game-changing solution to cut fruit waste and deliver nutrition-packed snacks all year round! By reducing water activity, the technology preserves fruits like mango, papaya, banana, and apple into soft, tasty cubes that stay fresh for up to 6 months at room temperature. It ensures food safety, retains nutrients, and opens new doors for exports and value-added products. With minimal energy use and scalable production, it's a win for farmers, food businesses, and health-conscious consumers alike!",
    detailedDescription:
      "BARC's Ready-to-Eat (RTE) Intermediate Moisture Fruit Cubes is a game-changing solution to cut fruit waste and deliver nutrition-packed snacks all year round! By reducing water activity, the technology preserves fruits like mango, papaya, banana, and apple into soft, tasty cubes that stay fresh for up to 6 months at room temperature. It ensures food safety, retains nutrients, and opens new doors for exports and value-added products. With minimal energy use and scalable production, it's a win for farmers, food businesses, and health-conscious consumers alike!",
    applications: [
      {
        title: "Snack & Health Food Industry",
        description: "Ready-to-eat cubes for direct consumption or as nutritional breakfast add-ons."
      },
      {
        title: "Dessert & Dairy Products",
        description: "Ideal mix-ins for ice creams, custards, and yogurt for enhanced flavor and appeal."
      },
      {
        title: "Food Processing Units",
        description: "Create jams or fruit blends while minimizing waste and ensuring year-round fruit availability."
      }
    ],
    image: product4,
    images: [product4, product26, product27, product28],
    tags: ["Energy", "Green Tech"],
    rating: 5,
    features: [
      "Complete solar package",
      "Battery storage included",
      "Smart monitoring system",
      "Government subsidies available",
      "3-4 year ROI",
      "Low maintenance"
    ],
    specifications: {}
  },
  {
    id: "organic-pesticide-solution",
    name: "Shelf Stable Oil Free Potato Chips of Different Flavors",
    price: "₹25,000",
    shortDescription: "Eco-friendly pest control for sustainable farming.",
    description:
      "BARC's Shelf-Stable Oil-Free Potato Chips bring you the crunch you crave—without the oil! Made using an innovative blend of induction, microwave, and hot air baking, these six uniquely flavored chips offer a healthier, tastier alternative to traditional fried snacks. With low sugar and starch content, long shelf life, and zero oil, they're perfect for fitness-conscious consumers and snack lovers alike. This scalable, energy-efficient process turns everyday potatoes into a guilt-free, market-ready snack sensation!",
    detailedDescription:
      "BARC's Shelf-Stable Oil-Free Potato Chips bring you the crunch you crave—without the oil! Made using an innovative blend of induction, microwave, and hot air baking, these six uniquely flavored chips offer a healthier, tastier alternative to traditional fried snacks. With low sugar and starch content, long shelf life, and zero oil, they're perfect for fitness-conscious consumers and snack lovers alike. This scalable, energy-efficient process turns everyday potatoes into a guilt-free, market-ready snack sensation!",
    applications: [
      {
        title: "Health & Snack Food Market",
        description: "A ready-to-eat, oil-free snack option with flavors that stand out on shelves."
      },
      {
        title: "Food Startups & Processors",
        description: "Versatile processing that works with any potato variety and ensures year-round production."
      },
      {
        title: "Export & Retail Chains",
        description: "Easy-to-store, shelf-stable product ideal for domestic and international health food markets."
      }
    ],
    image: product5,
    images: [product5, product29, product30, product17],
    tags: ["Agriculture", "Organic"],
    rating: 5,
    features: [
      "Chemical-free formulation",
      "Effective against major pests",
      "Maintains soil health",
      "Safe for humans and animals",
      "BARC certified",
      "Easy application"
    ],
    specifications: {}
  },
  {
    id: "vermicompost-production",
    name: "A Novel Universal Multi-nutrient Soil Extractant for Assessing Bio-availability of Nutrients in Soil",
    price: "₹77,000",
    shortDescription: "Commercial vermicompost setup for organic farming.",
    description:
      "BARC is producing a groundbreaking universal soil extractant that unlocks accurate insights into nutrient bioavailability—developed through a powerful collaboration between premier agricultural institutions. This patented formulation mimics the rhizospheric environment of plant roots, offering a true picture of nutrient accessibility rather than just solubility. Easy to prepare, compatible with all soil types, and free from interference during testing, it's a game-changer for modern agriculture, lab diagnostics, and fertilizer innovation. Now, farmers and soil scientists alike can assess multiple nutrients—including pollutants—in one cost-effective, unified test!",
    detailedDescription:
      "BARC is producing a groundbreaking universal soil extractant that unlocks accurate insights into nutrient bioavailability—developed through a powerful collaboration between premier agricultural institutions. This patented formulation mimics the rhizospheric environment of plant roots, offering a true picture of nutrient accessibility rather than just solubility. Easy to prepare, compatible with all soil types, and free from interference during testing, it's a game-changer for modern agriculture, lab diagnostics, and fertilizer innovation. Now, farmers and soil scientists alike can assess multiple nutrients—including pollutants—in one cost-effective, unified test!",
    applications: [
      {
        title: "Agriculture & Farming",
        description: "Enhances nutrient management strategies for improved crop productivity."
      },
      {
        title: "Soil Testing Laboratories",
        description: "A single, efficient solution replacing multiple extractants."
      },
      {
        title: "Fertilizer Industry",
        description: "Provides accurate data to tailor and test nutrient formulations for better performance."
      }
    ],
    image: product6,
    images: [product6, product18, product19, product20],
    tags: ["Agriculture", "Waste Management"],
    rating: 4,
    features: [
      "Complete production setup",
      "Technical training included",
      "Minimal investment required",
      "High-quality output",
      "Income generation opportunity",
      "Sustainable solution"
    ],
    specifications: {}
  },
  {
    id: "mushroom-cultivation-tech",
    name: "Biosensor Kit (Biokit) for Pesticide Detection",
    price: "₹50,000",
    shortDescription: "Scientific mushroom farming for profitable agriculture.",
    description:
      "Advanced mushroom cultivation technology with climate control guidance. High-yield varieties with 45-day harvest cycle. Complete training and spawn supply included.",
    detailedDescription:
      "Advanced mushroom cultivation technology with climate control guidance. High-yield varieties with 45-day harvest cycle. Complete training and spawn supply included. Perfect for agricultural entrepreneurs.",
    image: product7,
    images: [product7, product21, product22, product23],
    tags: ["Agriculture", "Food Tech"],
    rating: 5,
    features: [
      "Climate control guidance",
      "45-day harvest cycle",
      "High-yield varieties",
      "Training included",
      "Spawn supply provided",
      "Scientific methods"
    ],
    specifications: {
      "Technology Type": "Mushroom Cultivation",
      "Harvest Cycle": "45 Days",
      "Yield": "High",
      "Training": "Included",
      "Climate Control": "Guided",
      "Warranty": "1 Year"
    }
  },
  {
    id: "drip-irrigation-system",
    name: "Soil Organic Carbon Detection Kit",
    price: "₹50,000",
    shortDescription: "Water-efficient irrigation for modern farming.",
    description:
      "Automated drip irrigation system saving 60% water. Solar-powered pump option available. Increases crop yield while reducing labor costs.",
    detailedDescription:
      "Automated drip irrigation system saving 60% water. Solar-powered pump option available. Increases crop yield while reducing labor costs. Perfect for modern farming practices.",
    image: product8,
    images: [product8, product24, product25, product26],
    tags: ["Agriculture", "Water Tech"],
    rating: 5,
    features: [
      "60% water savings",
      "Automated system",
      "Solar-powered option",
      "Increases crop yield",
      "Reduces labor costs",
      "Easy installation"
    ],
    specifications: {
      "Technology Type": "Drip Irrigation",
      "Water Savings": "60%",
      "Area Coverage": "1-5 Acres",
      "Power Options": "Electric/Solar",
      "Maintenance": "Low",
      "Warranty": "3 Years"
    }
  },
  {
    id: "fruit-preservation-tech",
    name: "NISARGRUNA Biogas Plant for Processing Biodegradable Waste",
    price: "₹1,00,000",
    shortDescription: "Advanced preservation for extended fruit shelf life.",
    description:
      "Modern fruit preservation technology extending shelf life by 3-6 months. Maintains nutritional value and natural taste. Suitable for export-oriented businesses.",
    detailedDescription:
      "Modern fruit preservation technology extending shelf life by 3-6 months. Maintains nutritional value and natural taste. Suitable for export-oriented businesses. Perfect for fruit processing units.",
    image: product9,
    images: [product9, product27, product28, product29],
    tags: ["Food Tech", "Export"],
    rating: 4,
    features: [
      "3-6 month shelf life extension",
      "Preserves nutritional value",
      "Maintains natural taste",
      "Export quality standards",
      "Easy operation",
      "Cost-effective"
    ],
    specifications: {
      "Technology Type": "Fruit Preservation",
      "Shelf Life Extension": "3-6 Months",
      "Capacity": "100-500 kg/day",
      "Quality Standards": "Export Grade",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "micropropagation-pineapple",
    name: "Micropropagation of Pineapple",
    price: "₹1,04,000",
    shortDescription: "Advanced tissue culture technology for high-quality pineapple plant production.",
    description:
      "Micropropagation technology for mass production of disease-free, uniform pineapple plants. Ensures faster growth and higher yield with superior quality.",
    detailedDescription:
      "Advanced micropropagation technology for producing disease-free, genetically uniform pineapple plants through tissue culture. This technology enables rapid multiplication of elite varieties with consistent quality and improved traits. Perfect for commercial nurseries and large-scale plantations seeking high-yield, disease-resistant plants.",
    image: product10,
    images: [product10, product30, product17, product18],
    tags: ["Agriculture", "Biotechnology"],
    rating: 5,
    features: [
      "Disease-free plant production",
      "Rapid multiplication technology",
      "Genetically uniform plants",
      "Higher yield potential",
      "Tissue culture technology",
      "Elite variety selection"
    ],
    specifications: {
      "Technology Type": "Micropropagation",
      "Plant Type": "Pineapple",
      "Production Method": "Tissue Culture",
      "Quality": "Disease-free, Uniform",
      "Growth Rate": "Faster than conventional",
      "Warranty": "1 Year"
    }
  },
  {
    id: "bio-pesticide-formulation",
    name: "Micropropagation Protocol for Turmeric",
    price: "₹1,10,000",
    shortDescription: "Eco-friendly bio-pesticide for sustainable crop protection.",
    description:
      "BARC-developed bio-pesticide formulation using natural microbial agents. Effective pest control without chemical residues, suitable for organic farming and export-quality produce.",
    detailedDescription:
      "Advanced bio-pesticide technology using beneficial microorganisms for pest management. Safe for humans, animals, and the environment. Provides long-lasting protection while maintaining soil health and biodiversity. Perfect for organic farming operations and export-oriented agriculture.",
    image: product11,
    images: [product11, product19, product20, product21],
    tags: ["Agriculture", "Organic"],
    rating: 5,
    features: [
      "Chemical-free pest control",
      "Safe for environment",
      "No toxic residues",
      "Suitable for organic farming",
      "Long-lasting protection",
      "BARC certified"
    ],
    specifications: {
      "Technology Type": "Bio-Pesticide",
      "Active Ingredient": "Microbial Formulation",
      "Application": "Spray/Soil Treatment",
      "Certification": "BARC Certified",
      "Safety": "Non-toxic",
      "Shelf Life": "1 Year"
    }
  },
  {
    id: "herbal-extraction-unit",
    name: "Micropropagation Protocol for Ginger",
    price: "₹1,20,000",
    shortDescription: "Complete setup for herbal medicine and essential oil extraction.",
    description:
      "Advanced extraction technology for processing medicinal plants and herbs. Produces high-quality extracts, essential oils, and herbal concentrates for pharmaceutical and cosmetic applications.",
    detailedDescription:
      "State-of-the-art herbal processing unit with extraction, distillation, and concentration capabilities. Maintains active compounds and therapeutic properties. Includes quality control systems and standardization protocols. Ideal for Ayurvedic medicine production and herbal product manufacturing.",
    image: product12,
    images: [product12, product22, product23, product24],
    tags: ["Health", "Ayurveda"],
    rating: 4,
    features: [
      "Complete extraction setup",
      "Maintains medicinal properties",
      "Quality control included",
      "Multiple processing methods",
      "Pharmaceutical grade output",
      "Training provided"
    ],
    specifications: {
      "Technology Type": "Herbal Extraction",
      "Capacity": "25-50 kg/day",
      "Output": "Extracts, Oils, Concentrates",
      "Quality Standards": "Pharmaceutical Grade",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "aquaculture-technology",
    name: "Micropropagation Protocol for Banana",
    price: "₹1,00,000",
    shortDescription: "Modern fish farming technology with water recycling system.",
    description:
      "Integrated aquaculture system combining fish farming with water treatment and recycling. Maximizes production while minimizing water usage and environmental impact.",
    detailedDescription:
      "Advanced aquaculture technology with biofilter systems, aeration, and automated feeding. Suitable for freshwater fish, prawns, and ornamental fish farming. Includes water quality monitoring and disease prevention systems. Perfect for commercial fish farming and backyard operations.",
    image: product13,
    images: [product13, product25, product26, product27],
    tags: ["Aquaculture", "Sustainable"],
    rating: 5,
    features: [
      "Water recycling system",
      "Automated feeding",
      "Disease prevention",
      "High production capacity",
      "Low water consumption",
      "Monitoring systems"
    ],
    specifications: {
      "Technology Type": "Integrated Aquaculture",
      "Capacity": "500-1000 fish",
      "Water Usage": "90% less than traditional",
      "Species": "Multiple fish types",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "bee-keeping-technology",
    name: "Phosphorus Fertilizer from Biosludge",
    price: "₹40,000",
    shortDescription: "Modern beekeeping setup for honey and bee product production.",
    description:
      "Scientific beekeeping technology with modern hives, queen rearing, and honey processing equipment. Produces honey, bee pollen, royal jelly, and beeswax for commercial applications.",
    detailedDescription:
      "Complete beekeeping solution with disease-resistant bee colonies, modern hive designs, and honey processing units. Includes training on bee management, disease control, and quality honey production. Perfect for agricultural entrepreneurship and pollination services.",
    image: product14,
    images: [product14, product28, product29, product30],
    tags: ["Agriculture", "Food Production"],
    rating: 5,
    features: [
      "Modern hive technology",
      "Disease-resistant colonies",
      "Honey processing unit",
      "Multiple bee products",
      "Training included",
      "Low maintenance"
    ],
    specifications: {
      "Technology Type": "Apiculture",
      "Colony Size": "10-20 boxes",
      "Honey Production": "100-200 kg/year",
      "Products": "Honey, Pollen, Royal Jelly, Wax",
      "Maintenance": "Low",
      "Warranty": "1 Year"
    }
  },
  {
    id: "tissue-culture-lab",
    name: "Zinc Fertilizer Formulation from Biosludge",
    price: "₹40,000",
    shortDescription: "Complete tissue culture lab for plant multiplication.",
    description:
      "Professional tissue culture laboratory equipment for large-scale plant propagation. Produces disease-free, genetically uniform plants for commercial nurseries and agriculture.",
    detailedDescription:
      "Fully equipped tissue culture lab with laminar flow, autoclaves, growth chambers, and media preparation facilities. Capable of multiplying ornamental plants, fruit crops, and medicinal herbs. Includes protocols for multiple plant species and technical training.",
    image: product15,
    images: [product15, product17, product18, product19],
    tags: ["Biotechnology", "Agriculture"],
    rating: 5,
    features: [
      "Complete lab setup",
      "Laminar flow and autoclave",
      "Growth chambers",
      "Multiple plant protocols",
      "Sterile environment",
      "Expert training"
    ],
    specifications: {
      "Technology Type": "Plant Tissue Culture",
      "Production Capacity": "10,000+ plants/month",
      "Lab Size": "200-300 sq ft",
      "Applications": "Ornamental, Fruit, Medicinal",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "spice-processing-unit",
    name: "Mass multiplication medium of Biofungicide Trichoderma spp.",
    price: "₹10,000",
    shortDescription: "Modern spice cleaning, grinding, and packaging technology.",
    description:
      "Complete spice processing unit with cleaning, drying, grinding, and packaging systems. Produces hygienically processed spices meeting export quality standards.",
    detailedDescription:
      "Integrated spice processing line with destoning, cleaning, steam sterilization, grinding, and automated packaging. Maintains color, aroma, and flavor while ensuring food safety. Suitable for turmeric, chili, coriander, pepper, and other spices. Perfect for spice export businesses.",
    image: product16,
    images: [product16, product20, product21, product22],
    tags: ["Food Processing", "Export"],
    rating: 5,
    features: [
      "Complete processing line",
      "Steam sterilization",
      "Maintains aroma and flavor",
      "Export quality standards",
      "Automated packaging",
      "Multiple spice processing"
    ],
    specifications: {
      "Technology Type": "Spice Processing",
      "Capacity": "100-200 kg/day",
      "Processing": "Cleaning, Grinding, Packaging",
      "Quality Standards": "Export Grade",
      "Maintenance": "Low",
      "Warranty": "2 Years"
    }
  },
  {
    id: "dairy-processing-unit",
    name: "Microfine Neem Biopesticide",
    price: "₹40,000",
    shortDescription: "Complete dairy processing setup for milk products.",
    description:
      "Modern dairy processing unit for milk pasteurization, homogenization, and packaging. Produces milk, curd, paneer, and other dairy products with food safety compliance.",
    detailedDescription:
      "Integrated dairy processing system with pasteurizer, homogenizer, and cold storage. Meets FSSAI standards for dairy processing. Includes packaging equipment and quality testing kits. Perfect for dairy farmers and milk cooperatives.",
    image: product17,
    images: [product17, product23, product24, product25],
    tags: ["Food Processing", "Dairy"],
    rating: 5,
    features: [
      "Complete dairy setup",
      "Pasteurization system",
      "Cold storage included",
      "FSSAI compliant",
      "Multiple product options",
      "Quality testing equipment"
    ],
    specifications: {
      "Technology Type": "Dairy Processing",
      "Capacity": "200-500 liters/day",
      "Products": "Milk, Curd, Paneer, Butter",
      "Quality Standards": "FSSAI Approved",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "mushroom-spawn-production",
    name: "Organic seed dressing bio-fungicide formulation",
    price: "₹2,32,000",
    shortDescription: "Spawn production unit for mushroom cultivation business.",
    description:
      "Professional mushroom spawn production facility with autoclave, laminar flow, and incubation systems. Produces high-quality spawn for commercial mushroom farming.",
    detailedDescription:
      "Complete spawn production setup with sterilization equipment, inoculation chamber, and incubation room. Capable of producing multiple mushroom varieties. Includes training on spawn production and quality control.",
    image: product18,
    images: [product18, product26, product27, product28],
    tags: ["Agriculture", "Mushroom"],
    rating: 5,
    features: [
      "Professional spawn production",
      "Autoclave and laminar flow",
      "Multiple mushroom varieties",
      "Quality control systems",
      "Technical training",
      "High success rate"
    ],
    specifications: {
      "Technology Type": "Spawn Production",
      "Production": "500-1000 spawn bags/month",
      "Varieties": "Oyster, Button, Shiitake",
      "Equipment": "Autoclave, Laminar Flow",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "poultry-feed-mill",
    name: "Technology for Xanthan Gum Production with a BARC Strain",
    price: "₹2,50,000",
    shortDescription: "Complete feed mill for poultry and livestock nutrition.",
    description:
      "Automated poultry feed manufacturing unit with mixing, pelleting, and packaging systems. Produces balanced feed for layers, broilers, and other livestock.",
    detailedDescription:
      "Modern feed mill with hammer mill, mixer, pellet machine, and cooler. Formulates nutritionally balanced feed according to livestock requirements. Includes quality control and packaging equipment.",
    image: product19,
    images: [product19, product29, product30, product17],
    tags: ["Agriculture", "Livestock"],
    rating: 4,
    features: [
      "Automated feed production",
      "Nutritionally balanced",
      "Pelleting system",
      "Multiple formulations",
      "Quality control",
      "Packaging included"
    ],
    specifications: {
      "Technology Type": "Feed Manufacturing",
      "Capacity": "500-1000 kg/day",
      "Products": "Layer, Broiler, Cattle Feed",
      "Processing": "Mixing, Pelleting, Packaging",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "organic-fertilizer-unit",
    name: "Biodegradable Films for Food Packaging Applications",
    price: "₹1,50,000",
    shortDescription: "Commercial organic fertilizer manufacturing technology.",
    description:
      "Complete organic fertilizer production unit using composting, vermicomposting, and microbial enrichment. Produces certified organic fertilizers for sustainable agriculture.",
    detailedDescription:
      "Integrated organic fertilizer plant with composting systems, enrichment facilities, and packaging equipment. Uses agricultural waste, farm residues, and organic materials. Produces FCO certified organic fertilizers.",
    image: product20,
    images: [product20, product18, product19, product21],
    tags: ["Agriculture", "Organic"],
    rating: 5,
    features: [
      "Multiple production methods",
      "Waste recycling",
      "FCO certification support",
      "Microbial enrichment",
      "Automated packaging",
      "Quality testing"
    ],
    specifications: {
      "Technology Type": "Organic Fertilizer",
      "Capacity": "1-2 tons/day",
      "Certification": "FCO Compatible",
      "Raw Materials": "Agricultural Waste",
      "Maintenance": "Low",
      "Warranty": "2 Years"
    }
  },
  {
    id: "greenhouse-technology",
    name: "De-Bittered Bitter Gourd (Karela) juice with high antidiabetic activity",
    price: "₹1,00,000",
    shortDescription: "Climate-controlled greenhouse for high-value crop production.",
    description:
      "Advanced greenhouse with climate control, drip irrigation, and fertigation systems. Suitable for vegetables, flowers, and hydroponic cultivation with year-round production.",
    detailedDescription:
      "Polyhouse structure with automated climate control, irrigation, and monitoring systems. Includes shadenet, foggers, and nutrient delivery systems. Perfect for tomatoes, cucumbers, capsicum, and exotic vegetables.",
    image: product21,
    images: [product21, product22, product23, product24],
    tags: ["Agriculture", "Protected Cultivation"],
    rating: 5,
    features: [
      "Climate controlled environment",
      "Automated irrigation",
      "Year-round production",
      "High-value crops",
      "Pest protection",
      "Monitoring systems"
    ],
    specifications: {
      "Technology Type": "Greenhouse",
      "Size": "1000-2000 sq ft",
      "Cultivation": "Soil/Hydroponic",
      "Crops": "Vegetables, Flowers",
      "Maintenance": "Moderate",
      "Warranty": "3 Years"
    }
  },
  {
    id: "oil-expeller-unit",
    name: "Process for De-Bittering Fenugreek Seed Extracts",
    price: "₹53,000",
    shortDescription: "Chemical-free oil extraction from seeds and nuts.",
    description:
      "Cold press oil expeller for extracting pure, chemical-free oils from coconut, groundnut, sesame, and other oilseeds. Maintains nutritional value and natural flavor.",
    detailedDescription:
      "Screw press oil expeller with filtering and packaging systems. Extracts high-quality edible oils without heat or chemicals. Suitable for coconut oil, groundnut oil, sesame oil, and specialty oils.",
    image: product22,
    images: [product22, product25, product26, product27],
    tags: ["Food Processing", "Health"],
    rating: 5,
    features: [
      "Cold press technology",
      "Chemical-free extraction",
      "Multiple oil types",
      "High oil recovery",
      "Natural flavor retention",
      "Easy operation"
    ],
    specifications: {
      "Technology Type": "Oil Extraction",
      "Capacity": "50-100 kg/day",
      "Oil Types": "Coconut, Groundnut, Sesame",
      "Extraction": "Cold Press",
      "Maintenance": "Low",
      "Warranty": "2 Years"
    }
  },
  {
    id: "banana-fiber-extraction",
    name: "Gluten Free - Multigrain premix",
    price: "₹32,000",
    shortDescription: "Eco-friendly fiber extraction from banana pseudo-stems.",
    description:
      "Innovative technology for extracting natural fiber from banana plant waste. Produces eco-friendly fiber for textiles, handicrafts, and paper products.",
    detailedDescription:
      "Mechanical fiber extraction unit that processes banana pseudo-stems into valuable natural fiber. Zero waste technology converting agricultural residue into income. Perfect for banana growing regions and rural entrepreneurship.",
    image: product23,
    images: [product23, product28, product29, product30],
    tags: ["Agriculture", "Eco-friendly"],
    rating: 4,
    features: [
      "Waste to wealth conversion",
      "Eco-friendly processing",
      "Multiple applications",
      "Low operating cost",
      "Rural employment",
      "Zero waste technology"
    ],
    specifications: {
      "Technology Type": "Fiber Extraction",
      "Capacity": "100-200 stems/day",
      "Fiber Type": "Natural Banana Fiber",
      "Applications": "Textiles, Handicrafts, Paper",
      "Maintenance": "Low",
      "Warranty": "1 Year"
    }
  },
  {
    id: "turmeric-processing",
    name: "Low dose dosimeter (ANUDOSE) for food irradiation application",
    price: "₹1,86,000",
    shortDescription: "Complete turmeric processing for premium quality powder.",
    description:
      "Advanced turmeric processing unit with boiling, drying, polishing, and grinding systems. Produces export-quality turmeric powder with high curcumin content.",
    detailedDescription:
      "Integrated turmeric processing line with steam boiler, dryer, polishing drum, and pulverizer. Maintains natural color and curcumin content. Suitable for export-oriented turmeric business.",
    image: product24,
    images: [product24, product17, product18, product19],
    tags: ["Food Processing", "Export"],
    rating: 5,
    features: [
      "Complete processing line",
      "Export quality output",
      "High curcumin retention",
      "Color enhancement",
      "Automated grinding",
      "Quality packaging"
    ],
    specifications: {
      "Technology Type": "Turmeric Processing",
      "Capacity": "100-200 kg/day",
      "Processing": "Boiling, Drying, Polishing, Grinding",
      "Quality": "Export Grade",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "coconut-processing",
    name: "Shelf-life extension of 'Kesar' mangoes for sea export",
    price: "₹3,40,000",
    shortDescription: "Complete coconut processing for oil, water, and fiber.",
    description:
      "Comprehensive coconut processing facility producing coconut oil, tender coconut water, desiccated coconut, and coir products. Maximum value extraction from coconut.",
    detailedDescription:
      "Multi-product coconut processing unit with dehusking, oil extraction, water filling, and fiber processing capabilities. Zero waste approach utilizing all coconut parts. Perfect for coconut producing regions.",
    image: product25,
    images: [product25, product20, product21, product22],
    tags: ["Food Processing", "Agriculture"],
    rating: 5,
    features: [
      "Multi-product processing",
      "Zero waste approach",
      "Oil and water extraction",
      "Coir fiber production",
      "Automated systems",
      "Maximum value extraction"
    ],
    specifications: {
      "Technology Type": "Coconut Processing",
      "Capacity": "500-1000 coconuts/day",
      "Products": "Oil, Water, Fiber, Desiccated Coconut",
      "Processing": "Complete Utilization",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "pickle-processing",
    name: "Type IE CRISPR system based microbial gene silencing kit",
    price: "₹14,600",
    shortDescription: "Commercial pickle production with food safety compliance.",
    description:
      "Modern pickle manufacturing unit with mixing, cooking, and filling systems. Produces traditional and innovative pickles, chutneys, and preserves with FSSAI compliance.",
    detailedDescription:
      "Complete pickle processing setup with steam jacketed kettles, mixing systems, and filling machines. Maintains traditional taste with modern hygiene standards. Suitable for mango, lemon, mixed vegetable, and specialty pickles.",
    image: product26,
    images: [product26, product23, product24, product25],
    tags: ["Food Processing", "Traditional"],
    rating: 4,
    features: [
      "Traditional recipes",
      "Modern hygiene",
      "FSSAI compliance",
      "Multiple varieties",
      "Automated filling",
      "Quality packaging"
    ],
    specifications: {
      "Technology Type": "Pickle Manufacturing",
      "Capacity": "100-200 kg/day",
      "Products": "Pickles, Chutneys, Preserves",
      "Standards": "FSSAI Compliant",
      "Maintenance": "Low",
      "Warranty": "1 Year"
    }
  },
  {
    id: "cassava-processing",
    name: "Super Cotton (super absorbent for removal of oily substance from aqueous media)",
    price: "₹60,000",
    shortDescription: "Cassava processing for starch, flour, and chips production.",
    description:
      "Integrated cassava processing unit producing starch, flour, sago, and chips. Converts cassava tubers into high-value products for food and industrial applications.",
    detailedDescription:
      "Complete cassava processing line with washing, peeling, grating, extraction, and drying systems. Produces industrial starch, tapioca flour, sago pearls, and cassava chips. Perfect for cassava growing regions.",
    image: product27,
    images: [product27, product26, product28, product29],
    tags: ["Food Processing", "Agriculture"],
    rating: 5,
    features: [
      "Multi-product capability",
      "High starch recovery",
      "Automated processing",
      "Industrial grade output",
      "Value addition",
      "Complete utilization"
    ],
    specifications: {
      "Technology Type": "Cassava Processing",
      "Capacity": "500-1000 kg/day",
      "Products": "Starch, Flour, Sago, Chips",
      "Processing": "Complete Line",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "honey-processing",
    name: "Ultra-Flexible Lead-Free X-Ray Shields",
    price: "₹4,00,000",
    shortDescription: "Honey processing unit with testing and packaging systems.",
    description:
      "Professional honey processing facility with filtration, heating, moisture control, and filling systems. Produces pure, quality honey meeting export standards.",
    detailedDescription:
      "Complete honey processing setup with double filtration, controlled heating, moisture removal, and automated filling. Maintains natural properties while ensuring quality and safety. Suitable for beekeepers and honey traders.",
    image: product28,
    images: [product28, product27, product29, product30],
    tags: ["Food Processing", "Beekeeping"],
    rating: 5,
    features: [
      "Quality processing",
      "Maintains purity",
      "Export standards",
      "Multiple packaging sizes",
      "Quality testing",
      "Automated filling"
    ],
    specifications: {
      "Technology Type": "Honey Processing",
      "Capacity": "100-200 kg/day",
      "Processing": "Filtration, Heating, Filling",
      "Standards": "Export Grade",
      "Maintenance": "Low",
      "Warranty": "2 Years"
    }
  },
  {
    id: "fruit-pulp-extraction",
    name: "Superabsorbent BARC-Hydrogel (MRIDAMŔT)",
    price: "₹1,80,000",
    shortDescription: "Commercial fruit pulp processing with cold storage.",
    description:
      "Advanced fruit pulp extraction unit with pulping, pasteurization, and freezing systems. Processes mango, guava, papaya, and other fruits for year-round availability.",
    detailedDescription:
      "Integrated pulp processing line with pulper, finisher, pasteurizer, and blast freezer. Maintains natural color, flavor, and nutrients. Suitable for juice industry, ice cream production, and export market.",
    image: product29,
    images: [product29, product30, product17, product18],
    tags: ["Food Processing", "Export"],
    rating: 5,
    features: [
      "Multiple fruit processing",
      "Natural quality retention",
      "Freezing facility",
      "Export packaging",
      "Year-round availability",
      "Pasteurization system"
    ],
    specifications: {
      "Technology Type": "Fruit Pulp Processing",
      "Capacity": "200-500 kg/day",
      "Fruits": "Mango, Guava, Papaya, etc.",
      "Storage": "Blast Freezing",
      "Maintenance": "Moderate",
      "Warranty": "2 Years"
    }
  },
  {
    id: "bamboo-processing",
    name: "Membrane for Brackish Water Desalination",
    price: "₹2,50,000",
    shortDescription: "Bamboo processing for furniture, handicrafts, and products.",
    description:
      "Complete bamboo processing unit with seasoning, treatment, and manufacturing equipment. Produces bamboo furniture, handicrafts, flooring, and eco-friendly products.",
    detailedDescription:
      "Integrated bamboo processing facility with treatment tanks, drying kilns, cutting machines, and finishing equipment. Converts raw bamboo into high-value products. Perfect for bamboo-rich regions and eco-entrepreneurs.",
    image: product30,
    images: [product30, product19, product20, product21],
    tags: ["Eco-friendly", "Handicrafts"],
    rating: 5,
    features: [
      "Complete bamboo processing",
      "Treatment and seasoning",
      "Multiple products",
      "Eco-friendly business",
      "High value addition",
      "Export potential"
    ],
    specifications: {
      "Technology Type": "Bamboo Processing",
      "Capacity": "100-200 bamboo/day",
      "Products": "Furniture, Handicrafts, Flooring",
      "Processing": "Treatment, Cutting, Finishing",
      "Maintenance": "Low",
      "Warranty": "2 Years"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
