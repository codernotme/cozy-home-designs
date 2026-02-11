import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild><Link to="/products">Back to Products</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={product.name}
        description={product.description}
        image={product.image}
      />
      <div className="container mx-auto px-4 py-10">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/products"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Products</Link>
        </Button>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div>
            <Badge variant="secondary" className="mb-3">{product.subcategory}</Badge>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Specifications</h3>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <TableRow key={key}>
                        <TableCell className="font-medium text-sm w-1/3">{key}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{val}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>Request Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/919999999999?text=Hi, I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
