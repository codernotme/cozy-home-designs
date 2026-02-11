import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

const categoryColors: Record<string, string> = {
  furniture: "bg-secondary text-secondary-foreground",
  kitchen: "bg-accent text-accent-foreground",
  bakery: "bg-muted text-muted-foreground",
};

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="group overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300">
    <div className="aspect-[4/3] bg-muted overflow-hidden relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <CardContent className="p-4">
      <Badge variant="secondary" className={`mb-2 text-xs ${categoryColors[product.category]}`}>
        {product.subcategory}
      </Badge>
      <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{product.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to={`/products/${product.id}`}>Details</Link>
        </Button>
        <Button size="sm" className="flex-1" asChild>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>Inquire</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ProductCard;
