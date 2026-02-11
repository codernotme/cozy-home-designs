import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { testimonials, categories } from "@/data/products";
import { motion } from "framer-motion";
import { Star, LayoutGrid, Sofa, ChefHat, CakeSlice } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = { Sofa, ChefHat, CakeSlice };

const Testimonials = () => {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter),
    [filter]
  );

  return (
    <Layout>
      <SEO
        title="Client Testimonials"
        description="Read what our satisfied clients from hotels, bakeries, and homes have to say about NC's furniture and kitchen equipment."
      />
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
            <p className="text-muted-foreground">Hear from our satisfied customers across India.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              <LayoutGrid className="mr-1 h-4 w-4" /> All
            </Button>
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Button
                  key={cat.id}
                  variant={filter === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat.id)}
                >
                  {Icon && <Icon className="mr-1 h-4 w-4" />} {cat.label}
                </Button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-accent text-accent" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic flex-1 mb-4">"{t.content}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
