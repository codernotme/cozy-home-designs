import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";
import { Sofa, ChefHat, CakeSlice, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = { Sofa, ChefHat, CakeSlice };

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  const filtered = useMemo(
    () => {
      let result = products;

      if (activeCategory !== "all") {
        result = result.filter((p) => p.category === activeCategory);
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
      }

      return result;
    },
    [activeCategory, searchQuery]
  );

  const setCategory = (cat: string) => {
    // Clear search when changing category, or keep it? 
    // Usually cleaner to clear search or keep it. Let's keep search if it exists, or just update category.
    // Actually, if we switch category, we might want to clear search to see all items in that category.
    const newParams: Record<string, string> = {};
    if (cat !== "all") newParams.category = cat;
    // We'll clear search when switching categories explicitly
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <SEO
        title="Our Products"
        description="Browse our extensive collection of premium furniture and commercial kitchen equipment. From luxury sofas to industrial ovens."
      />
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-muted-foreground">Browse our complete range of furniture and commercial equipment.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Filter bar */}
          <div className="flex flex-col gap-4 mb-8">
            {searchQuery && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Searching for "{searchQuery}"</span>
                <Button variant="ghost" size="sm" onClick={() => setSearchParams({ category: activeCategory !== "all" ? activeCategory : "" })} className="h-auto p-1 font-normal text-destructive hover:text-destructive">
                  Clear Search
                </Button>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory("all")}
              >
                <LayoutGrid className="mr-1 h-4 w-4" /> All
              </Button>
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon];
                return (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategory(cat.id)}
                  >
                    {Icon && <Icon className="mr-1 h-4 w-4" />} {cat.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
