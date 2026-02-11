import { useState } from "react";
import Layout from "@/components/Layout";
import { products, categories } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, LayoutGrid } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-muted-foreground">A visual showcase of our products and craftsmanship.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
              <LayoutGrid className="mr-1 h-4 w-4" /> All
            </Button>
            {categories.map((c) => (
              <Button key={c.id} variant={filter === c.id ? "default" : "outline"} size="sm" onClick={() => setFilter(c.id)}>
                {c.label}
              </Button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(p.image)}
              >
                <div className="relative bg-muted rounded-lg overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <span className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">{p.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <img src={lightbox} alt="" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
