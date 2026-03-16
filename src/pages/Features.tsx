import { motion } from "framer-motion";
import { Layers, Zap, Shield, Globe, BarChart3, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Layers, title: "Multi-Platform", desc: "Our apps work across Shopify, BigCommerce, and custom platforms to meet you where you sell." },
  { icon: Zap, title: "Lightning Fast", desc: "Built for performance — bulk edit thousands of products in seconds, not minutes." },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade infrastructure with 99.9% uptime and data protection you can trust." },
  { icon: Globe, title: "Global Ready", desc: "Multi-currency, multi-language, and tax-compliant features for worldwide commerce." },
  { icon: BarChart3, title: "Powerful Analytics", desc: "Track performance, monitor inventory, and gain insights to grow your business." },
  { icon: Headphones, title: "Dedicated Support", desc: "Our support team is always here to help you get the most from our products." },
];

const Features = () => {
  return (
    <Layout>
      <section className="section-container py-20">
        <SectionHeading label="Features" title="Built for Modern Commerce" description="Our products are engineered with the features that e-commerce businesses need to thrive." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Features;
