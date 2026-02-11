import Layout from "@/components/Layout";
import { testimonials } from "@/data/products";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => (
  <Layout>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
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

export default Testimonials;
