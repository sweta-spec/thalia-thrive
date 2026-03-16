import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const studies = [
  {
    title: "How a Fashion Brand Scaled to $1M with Spreadr",
    result: "300% revenue increase",
    desc: "A fashion retailer used Spreadr to import thousands of Amazon products, building a niche store that generated over $1M in affiliate commissions within 18 months.",
    app: "Spreadr",
  },
  {
    title: "Reducing Cart Abandonment with Watchlyst",
    result: "45% fewer abandoned carts",
    desc: "An electronics store implemented Watchlyst price drop alerts and saw a dramatic reduction in cart abandonment as customers returned when prices dropped.",
    app: "Watchlyst",
  },
  {
    title: "Multi-Channel Sync with Connectr",
    result: "10 hours/week saved",
    desc: "A home goods seller eliminated manual inventory management by syncing their Amazon and Shopify stores with Connectr, saving 10+ hours weekly.",
    app: "Connectr",
  },
  {
    title: "Flash Sale Success with Pro Bulk Price Editor",
    result: "5x more flash sale revenue",
    desc: "A beauty brand used Pro to schedule automated bulk pricing for flash sales, resulting in 5x higher revenue compared to manual price updates.",
    app: "Pro",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="section-container py-20">
        <SectionHeading label="Case Studies" title="Real Results, Real Businesses" description="See how e-commerce merchants use our apps to grow their businesses." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {studies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated p-8"
            >
              <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-md">{s.app}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mt-4 mb-2">{s.title}</h3>
              <div className="font-heading text-2xl font-bold gradient-text mb-3">{s.result}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
