import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sofa, ChefHat, CakeSlice, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { products, testimonials } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const featuredProducts = products.filter((p) => p.featured);

const categoryIcons = [
  { id: "furniture", label: "Furniture", icon: Sofa, desc: "Sofas, tables, chairs & décor" },
  { id: "kitchen", label: "Kitchen Equipment", icon: ChefHat, desc: "Chapati machines, cooking plants" },
  { id: "bakery", label: "Bakery Equipment", icon: CakeSlice, desc: "Ovens, mixers & slicers" },
];

const Index = () => (
  <Layout>
    <SEO
      title="Home"
      description="NC - Premium furniture & commercial kitchen equipment manufacturer based in Kanpur. Explore our range of sofas, dining tables, and industrial kitchen machinery."
      image={heroBanner}
    />
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="NC Furniture & Kitchen Equipment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Crafting Spaces,<br />Equipping Kitchens
          </h1>
          <p className="text-lg text-white/80 mb-6">
            Premium furniture & commercial kitchen equipment — designed for beauty, built for performance.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/products">Explore Products <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryIcons.map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Link to={`/products?category=${cat.id}`}>
                <Card className="text-center p-8 hover:shadow-md transition-shadow cursor-pointer group">
                  <cat.icon className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-1">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials preview */}
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.id} className="p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.content}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/testimonials">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
          Whether it's elegant furniture or commercial kitchen equipment, we deliver quality and reliability. Get in touch for a custom quote.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10" asChild>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
