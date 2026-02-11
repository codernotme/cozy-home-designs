import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const productInterest = searchParams.get("product") || "";
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with NC for quotes, inquiries, or support. We are located in Kanpur and serve clients across India."
      />
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground">Have a question or need a quote? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="p-12 text-center">
                  <CheckCircle className="h-16 w-16 mx-auto text-accent mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">Your inquiry has been received. We'll contact you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Inquiry</Button>
                </Card>
              ) : (
                <Card className="p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-6">Send an Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product">Product Interest</Label>
                        <Input id="product" defaultValue={productInterest} placeholder="e.g. Chapati Machine" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required rows={5} placeholder="Tell us about your requirements..." />
                    </div>
                    <Button type="submit" size="lg">
                      <Send className="mr-2 h-4 w-4" /> Send Inquiry
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Kanpur, Uttar Pradesh, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:Newcoolsindia@gmail.com" className="text-muted-foreground hover:text-foreground">Newcoolsindia@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919999999999" className="text-muted-foreground hover:text-foreground">+91 99999 99999</a>
                    </div>
                  </div>
                </div>
              </Card>

              <Button className="w-full" size="lg" variant="outline" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d80.07820344999999!3d26.449923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NC Location - Kanpur"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
