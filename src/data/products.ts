export interface Product {
  id: string;
  name: string;
  category: "furniture" | "kitchen" | "bakery";
  subcategory: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Furniture
  {
    id: "f1",
    name: "Milano Leather Sofa",
    category: "furniture",
    subcategory: "Sofas",
    description: "Premium Italian-inspired leather sofa with solid wood frame and high-density foam cushioning for ultimate comfort.",
    features: ["Genuine leather upholstery", "Solid teak wood frame", "High-density foam", "5-year warranty"],
    specifications: { "Dimensions": "220 × 90 × 85 cm", "Material": "Genuine Leather", "Frame": "Teak Wood", "Seating": "3-Seater", "Color": "Tan Brown" },
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "f2",
    name: "Oslo Dining Table",
    category: "furniture",
    subcategory: "Tables",
    description: "Scandinavian-inspired solid wood dining table with clean lines and natural finish.",
    features: ["Solid sheesham wood", "Seats 6 comfortably", "Scratch-resistant finish", "Easy assembly"],
    specifications: { "Dimensions": "180 × 90 × 76 cm", "Material": "Sheesham Wood", "Finish": "Natural Matte", "Seating Capacity": "6", "Weight": "45 kg" },
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "f3",
    name: "Windsor Accent Chair",
    category: "furniture",
    subcategory: "Chairs",
    description: "Classic accent chair with modern fabric upholstery and ergonomic design.",
    features: ["Ergonomic design", "Premium fabric", "Sturdy metal legs", "360° swivel"],
    specifications: { "Dimensions": "70 × 65 × 90 cm", "Material": "Fabric & Metal", "Color": "Charcoal Grey", "Max Weight": "120 kg" },
    image: "/placeholder.svg",
  },
  {
    id: "f4",
    name: "Aurora Floor Lamp",
    category: "furniture",
    subcategory: "Lighting",
    description: "Contemporary arc floor lamp with adjustable height and warm LED lighting.",
    features: ["Adjustable height", "LED compatible", "Marble base", "Warm tone shade"],
    specifications: { "Height": "150–180 cm", "Base": "Marble", "Shade": "Linen", "Bulb Type": "E27 LED" },
    image: "/placeholder.svg",
  },
  {
    id: "f5",
    name: "Zen Coffee Table",
    category: "furniture",
    subcategory: "Tables",
    description: "Minimalist coffee table with tempered glass top and walnut wood legs.",
    features: ["Tempered glass top", "Walnut legs", "Minimalist design", "Easy to clean"],
    specifications: { "Dimensions": "120 × 60 × 45 cm", "Top": "Tempered Glass", "Legs": "Walnut Wood", "Weight": "18 kg" },
    image: "/placeholder.svg",
    featured: true,
  },
  // Kitchen Equipment
  {
    id: "k1",
    name: "Automatic Chapati Making Machine",
    category: "kitchen",
    subcategory: "Chapati Machines",
    description: "Fully automatic chapati making machine for commercial kitchens. Produces up to 1000 chapatis per hour with consistent quality.",
    features: ["Fully automatic operation", "1000 chapatis/hour", "Adjustable thickness", "Stainless steel body"],
    specifications: { "Capacity": "1000 pcs/hour", "Power": "3 HP Motor", "Material": "SS 304", "Dimensions": "150 × 60 × 120 cm", "Weight": "250 kg" },
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "k2",
    name: "Steam Cooking Plant",
    category: "kitchen",
    subcategory: "Steam Equipment",
    description: "Industrial steam cooking plant for large-scale meal preparation. Ideal for hospitals, hostels, and canteens.",
    features: ["Large capacity", "Energy efficient", "Easy maintenance", "Food-grade steel"],
    specifications: { "Capacity": "500 meals/batch", "Steam Pressure": "2 kg/cm²", "Material": "SS 316", "Fuel": "LPG / PNG", "Warranty": "2 Years" },
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "k3",
    name: "Semi-Automatic Roti Machine",
    category: "kitchen",
    subcategory: "Chapati Machines",
    description: "Semi-automatic roti making machine perfect for medium-scale commercial kitchens.",
    features: ["Semi-automatic", "500 rotis/hour", "Compact design", "Easy to operate"],
    specifications: { "Capacity": "500 pcs/hour", "Power": "1.5 HP", "Material": "SS 304", "Dimensions": "90 × 50 × 100 cm" },
    image: "/placeholder.svg",
  },
  {
    id: "k4",
    name: "Commercial Gas Range",
    category: "kitchen",
    subcategory: "Cooking Range",
    description: "Heavy-duty commercial gas range with 4 burners and oven for professional kitchens.",
    features: ["4 high-power burners", "Built-in oven", "Stainless steel construction", "Adjustable flames"],
    specifications: { "Burners": "4", "Material": "SS 304", "Fuel": "LPG / PNG", "Dimensions": "120 × 80 × 90 cm" },
    image: "/placeholder.svg",
  },
  // Bakery Equipment
  {
    id: "b1",
    name: "Deck Oven - 3 Tray",
    category: "bakery",
    subcategory: "Ovens",
    description: "Professional deck oven with 3 trays and steam injection for artisan bread and pastries.",
    features: ["Steam injection", "Digital temperature control", "Stone baking surface", "Energy efficient"],
    specifications: { "Trays": "3", "Temperature": "50–350°C", "Power": "9 kW", "Material": "SS 304", "Dimensions": "120 × 100 × 160 cm" },
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "b2",
    name: "Spiral Dough Mixer",
    category: "bakery",
    subcategory: "Mixers",
    description: "Heavy-duty spiral dough mixer for commercial bakeries. Ideal for bread, pizza, and pastry dough.",
    features: ["Spiral mixing action", "Timer control", "Safety guard", "Bowl scraper"],
    specifications: { "Capacity": "50 kg dough", "Speed": "2-speed", "Power": "3 HP", "Material": "SS & Cast Iron" },
    image: "/placeholder.svg",
  },
  {
    id: "b3",
    name: "Bread Slicer Machine",
    category: "bakery",
    subcategory: "Slicers",
    description: "Automatic bread slicing machine for uniform slices at high speed.",
    features: ["Adjustable slice thickness", "High speed", "Safety features", "Easy cleaning"],
    specifications: { "Capacity": "400 loaves/hour", "Slice Thickness": "8–25 mm", "Power": "0.5 HP", "Material": "SS 304" },
    image: "/placeholder.svg",
  },
];

export const categories = [
  { id: "furniture", label: "Furniture", icon: "Sofa" },
  { id: "kitchen", label: "Kitchen Equipment", icon: "ChefHat" },
  { id: "bakery", label: "Bakery Equipment", icon: "CakeSlice" },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Hotel Owner, Lucknow",
    content: "The chapati machine from NC has revolutionized our kitchen. We serve 500+ guests daily and the quality is consistently excellent.",
    rating: 5,
    category: "kitchen",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Designer, Delhi",
    content: "The furniture quality is outstanding. My clients are always impressed with the craftsmanship and attention to detail.",
    rating: 5,
    category: "furniture",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Bakery Chain Owner, Mumbai",
    content: "We've equipped three bakeries with NC equipment. The deck ovens produce perfect bread every time. Excellent after-sales support.",
    rating: 5,
    category: "bakery",
  },
  {
    id: 4,
    name: "Sunita Verma",
    role: "Homeowner, Kanpur",
    content: "Beautiful sofa set and dining table. The quality justifies the price. NC team was very helpful during selection.",
    rating: 4,
    category: "furniture",
  },
  {
    id: 5,
    name: "Mohammad Irfan",
    role: "Canteen Manager, IIT Kanpur",
    content: "The steam cooking plant handles 2000 meals daily without any issues. Very energy efficient and easy to maintain.",
    rating: 5,
    category: "kitchen",
  },
  {
    id: 6,
    name: "Deepak Agarwal",
    role: "Restaurant Owner, Varanasi",
    content: "Switched from manual roti making to NC's machine. Productivity tripled and consistency improved dramatically.",
    rating: 5,
    category: "kitchen",
  },
];
