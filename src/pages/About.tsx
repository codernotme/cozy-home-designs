import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Award, Users, Factory, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import factoryImg from "@/assets/factory_interior_v3_1770805491014.png";

const highlights = [
  { icon: Factory, title: "Modern Manufacturing", desc: "State-of-the-art facility in Kanpur with advanced machinery and skilled craftsmen." },
  { icon: Award, title: "Quality Assured", desc: "Every product undergoes rigorous quality checks before delivery." },
  { icon: Users, title: "500+ Happy Clients", desc: "Trusted by hotels, restaurants, institutions, and homeowners across India." },
  { icon: Shield, title: "Warranty & Support", desc: "Comprehensive warranty and dedicated after-sales service." },
];

const About = () => (
  <Layout>
    <SEO
      title="About Us"
      description="Learn about NC's history, our state-of-the-art manufacturing facility in Kanpur, and our commitment to quality craftsmanship."
      image={factoryImg}
    />
    {/* Page header */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-4">About NC</h1>
          <p className="text-muted-foreground max-w-2xl">
            Crafting premium furniture and engineering commercial kitchen equipment since our inception in Kanpur.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="prose text-muted-foreground space-y-4 text-sm leading-relaxed">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Our Story</h2>
            <p>NC is a Kanpur-based manufacturer specializing in two distinct but complementary domains — elegant home and office furniture, and robust commercial kitchen & bakery equipment.</p>
            <p>Founded with a vision to deliver quality craftsmanship at competitive prices, we have grown to serve a diverse clientele including hotels, restaurants, institutional canteens, bakeries, and individual homeowners across India.</p>
            <p>Our manufacturing facility combines traditional craftsmanship with modern technology, ensuring every product meets the highest standards of durability, functionality, and aesthetics.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={factoryImg} alt="NC Manufacturing Facility" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose NC</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Card className="p-6 text-center h-full">
                <h.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Credentials */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-6">Business Credentials</h2>
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-sm text-muted-foreground mb-2">Registered under GST</p>
          <p className="font-mono text-lg font-semibold">GSTIN: 09XXXXX1234X1ZX</p>
          <p className="text-sm text-muted-foreground mt-4">Located in Kanpur, Uttar Pradesh, India</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
