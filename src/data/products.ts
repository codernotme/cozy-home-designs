import sofaImg from "@/assets/milano_leather_sofa_1770805284776.png";
import tableImg from "@/assets/oslo_dining_table_v2_1770805408825.png";
import coffeeTableImg from "@/assets/zen_coffee_table_v2_1770805456578.png";
import chapatiImg from "@/assets/chapati_making_machine_v2_1770805372237.png";
import steamImg from "@/assets/steam_cooking_plant_v2_1770805389458.png";
import rangeImg from "@/assets/commercial_gas_range_v2_1770805439160.png";
import ovenImg from "@/assets/deck_oven_bakery_1770805306158.png";
import mixerImg from "@/assets/spiral_dough_mixer_1770805322055.png";
import slicerImg from "@/assets/bread_slicer_machine_1770805338083.png";
import pooriImg from "@/assets/poori_making_machine_1770808349539.png";
import placeholderImg from "../assets/placeholder.svg";

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
    image: sofaImg,
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
    image: tableImg,
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
    image: placeholderImg,
  },
  {
    id: "f4",
    name: "Aurora Floor Lamp",
    category: "furniture",
    subcategory: "Lighting",
    description: "Contemporary arc floor lamp with adjustable height and warm LED lighting.",
    features: ["Adjustable height", "LED compatible", "Marble base", "Warm tone shade"],
    specifications: { "Height": "150–180 cm", "Base": "Marble", "Shade": "Linen", "Bulb Type": "E27 LED" },
    image: placeholderImg,
  },
  {
    id: "f5",
    name: "Zen Coffee Table",
    category: "furniture",
    subcategory: "Tables",
    description: "Minimalist coffee table with tempered glass top and walnut wood legs.",
    features: ["Tempered glass top", "Walnut legs", "Minimalist design", "Easy to clean"],
    specifications: { "Dimensions": "120 × 60 × 45 cm", "Top": "Tempered Glass", "Legs": "Walnut Wood", "Weight": "18 kg" },
    image: coffeeTableImg,
    featured: true,
  },
  // Kitchen Equipment
  {
    id: "k1",
    name: "Fully Automatic L-Type Chapati Machine",
    category: "kitchen",
    subcategory: "Chapati Machines",
    description: "High-capacity fully automatic L-type chapati making machine. Available in capacities from 1000 to 5000 chapatis per hour.",
    features: ["Fully automatic operation", "Capacity: 1000 - 5000 pcs/hr", "Adjustable thickness (1.5-3mm)", "Stainless Steel Food Touching Material"],
    specifications: { "Capacity": "1000-5000 pcs/hr", "Gas Consumption": "4.5 to 13 kg/hr", "Electrical Load": "4.4 to 7 KWH", "Size": "L-14ft to 17ft", "Weight": "1100-1800 KG" },
    image: chapatiImg,
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
    image: steamImg,
    featured: true,
  },
  {
    id: "k3",
    name: "Semi Automatic Chapati Machine",
    category: "kitchen",
    subcategory: "Chapati Machines",
    description: "Semi-automatic chapati making machine with automatic pressing. Compact and efficient for medium-scale production.",
    features: ["Automatic Pressing", "Capacity: 1000 - 2000 pcs/hr", "Adjustable Size (4-6.5\")", "Stainless Steel construction"],
    specifications: { "Capacity": "1000-2000 pcs/hr", "Gas Consumption": "3 to 6 kg/hr", "Electrical Load": "3 to 5 KWH", "Size": "L-7ft to 8ft", "Weight": "600-800 KG" },
    image: chapatiImg,
  },
  {
    id: "k4",
    name: "Commercial Gas Range",
    category: "kitchen",
    subcategory: "Cooking Range",
    description: "Heavy-duty commercial gas range with 4 burners and oven for professional kitchens.",
    features: ["4 high-power burners", "Built-in oven", "Stainless steel construction", "Adjustable flames"],
    specifications: { "Burners": "4", "Material": "SS 304", "Fuel": "LPG / PNG", "Dimensions": "120 × 80 × 90 cm" },
    image: rangeImg,
  },
  {
    id: "k5",
    name: "Dough Ball Making Machine",
    category: "kitchen",
    subcategory: "Food Prep",
    description: "Pneumatic dough ball making machine with adjustable weight and high capacity.",
    features: ["Pneumatic Type", "Adjustable Weight (10gm-50gm)", "High Speed (1000-4000/hr)", "Stainless Steel Food Touching"],
    specifications: { "Capacity": "1000-4000 pcs/hr", "Dough Ball Weight": "10gm to 50gm", "Electrical Load": "1.2 to 2.5 KWH", "Machine Weight": "350-480 KG" },
    image: placeholderImg,
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
    image: ovenImg,
    featured: true,
  },
  {
    id: "b2",
    name: "Dough Mixture Machine",
    category: "bakery",
    subcategory: "Mixers",
    description: "Heavy-duty stainless steel dough mixture machine available in capacities from 10kg to 100kg.",
    features: ["Stainless Steel Food Touching", "Soft, Medium, Hard mixing quality", "Robust construction", "High efficiency"],
    specifications: { "Capacity": "10kg to 100kg", "Electrical Load": "1.2 to 5.3 KWH", "Machine Weight": "150-400 KG", "Mixing Quality": "Soft, Medium, Hard" },
    image: mixerImg,
  },
  {
    id: "b3",
    name: "Bread Slicer Machine",
    category: "bakery",
    subcategory: "Slicers",
    description: "Automatic bread slicing machine for uniform slices at high speed.",
    features: ["Adjustable slice thickness", "High speed", "Safety features", "Easy cleaning"],
    specifications: { "Capacity": "400 loaves/hour", "Slice Thickness": "8–25 mm", "Power": "0.5 HP", "Material": "SS 304" },
    image: slicerImg,
  },
  // New Catalog Items
  {
    id: "k6",
    name: "Automatic Poori Making Machine",
    category: "kitchen",
    subcategory: "Poori Machines",
    description: "High-speed automatic poori making machine with sheet cutting type. Capacity up to 10,000 poori/hr.",
    features: ["Fully Automatic", "Sheet Cutting Type", "Adjustable Thickness (2-4mm)", "Capacity: 1000 - 10000 / Hr"],
    specifications: { "Capacity": "1000-10000 pcs/hr", "Electrical Load": "1.5 to 2.2 KWH", "Weight": "500-750 Kg", "Size": "L-8ft to 9ft" },
    image: pooriImg,
    featured: true,
  },
  {
    id: "k7",
    name: "Vegetable Cutting Machine",
    category: "kitchen",
    subcategory: "Food Prep",
    description: "Heavy duty vegetable cutting machine with 4 cutting blades. stainless steel body.",
    features: ["Capacity: 50kg/hr", "Stainless Steel Body", "4 Cutting Blades", "Heavy Duty Motor"],
    specifications: { "Capacity": "50kg/hr", "Electrical Load": "1.5 KWH", "Weight": "30kg", "Size": "L-1.5ft x W-1.5ft" },
    image: placeholderImg,
  },
  {
    id: "k8",
    name: "Hood Type Bain Marie",
    category: "kitchen",
    subcategory: "Serving",
    description: "Stainless steel hood type bain marie for keeping food warm and hygienic.",
    features: ["Stainless Steel Construction", "Glass Hood", "Temperature Control", "GN Pan Compatible"],
    specifications: { "Material": "SS 304", "Type": "Electric / Gas", "Size": "Customizable" },
    image: placeholderImg,
  },
  {
    id: "k9",
    name: "Three Burner Cooking Range",
    category: "kitchen",
    subcategory: "Cooking Range",
    description: "Industrial three burner cooking range with undershelf for heavy utensil storage.",
    features: ["3 High Pressure Burners", "Stainless Steel Body", "Heavy Duty Pan Support", "Undershelf"],
    specifications: { "Material": "SS 304", "Dimensions": "Standard", "Fuel": "LPG / PNG" },
    image: placeholderImg,
  },
  {
    id: "k10",
    name: "Double Washing Sink",
    category: "kitchen",
    subcategory: "Hygiene",
    description: "Commercial double bowl washing sink with drainboard.",
    features: ["Double Bowl", "Stainless Steel 304", "Large Drainboard", "Backsplash"],
    specifications: { "Material": "SS 304", "Bowl Size": "Customizable", "Overall Size": "Customizable" },
    image: placeholderImg,
  },
  {
    id: "k11",
    name: "Heavy Duty Wet Grinder",
    category: "kitchen",
    subcategory: "Food Prep",
    description: "Commercial tilting wet grinder for idli/dosa batter and gravies.",
    features: ["Tilting Drum", "Heavy Duty Motor", "Stainless Steel Drum", "High Efficiency"],
    specifications: { "Capacity": "5-20 Liters", "Motor": "0.5 - 2 HP", "Material": "SS 304 Drum" },
    image: placeholderImg,
  },
  // Furniture Additions
  {
    id: "f6",
    name: "SS 8-Seater Dining Table",
    category: "furniture",
    subcategory: "Commercial Tables",
    description: "Stainless steel 8-seater dining table with attached stools. Ideal for canteens and mess halls.",
    features: ["Seating for 8", "Attached Stools", "Stainless Steel Construction", "Easy Cleaning"],
    specifications: { "Material": "SS 304", "Seating": "8 Persons", "Type": "Fixed Seat" },
    image: placeholderImg,
  },
  {
    id: "f7",
    name: "Canteen Table",
    category: "furniture",
    subcategory: "Commercial Tables",
    description: "Durable stainless steel canteen table with round stool seating.",
    features: ["Space Saving", "Durable", "Rust Resistant", "Custom Sizes"],
    specifications: { "Material": "SS 304", "Seating": "4-6 Persons" },
    image: placeholderImg,
  },
  {
    id: "f8",
    name: "Hostel Mesh Dining Table",
    category: "furniture",
    subcategory: "Commercial Tables",
    description: "Robust dining table with mesh seating for hostels and institutions.",
    features: ["Heavy Duty", "Mesh Seating", "Easy Maintenance", "Long Lasting"],
    specifications: { "Material": "SS / MS", "Seating": "6-8 Persons" },
    image: placeholderImg,
  },
  {
    id: "f9",
    name: "Stainless Steel Rack",
    category: "kitchen",
    subcategory: "Storage",
    description: "Multi-tier stainless steel rack for kitchen storage and bakery items.",
    features: ["Multi-tier", "Adjustable Feet", "High Load Capacity", "Rust Proof"],
    specifications: { "Material": "SS 304", "Shelves": "4-6", "Size": "Customizable" },
    image: placeholderImg,
  },
  {
    id: "f10",
    name: "Stainless Steel Working Table",
    category: "kitchen",
    subcategory: "Tables",
    description: "Heavy duty stainless steel preparation table with undershelf.",
    features: ["Food Grade SS Top", "Undershelf Storage", "Adjustable Bullet Feet", "Reinforced Top"],
    specifications: { "Material": "SS 304", "Size": "Customizable" },
    image: placeholderImg,
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
