import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  { title: "How to Optimize Your Shopify Store for Conversions", date: "Mar 10, 2026", category: "E-commerce", excerpt: "Learn the top strategies to convert more visitors into paying customers on your Shopify store." },
  { title: "The Rise of Multi-Channel Selling", date: "Mar 5, 2026", category: "Strategy", excerpt: "Why selling on multiple platforms is no longer optional and how to get started." },
  { title: "5 Tips for Better Product Descriptions", date: "Feb 28, 2026", category: "Marketing", excerpt: "Write product descriptions that sell with these proven copywriting techniques." },
  { title: "Understanding Amazon FBA for Shopify Sellers", date: "Feb 20, 2026", category: "Fulfillment", excerpt: "A complete guide to leveraging Amazon FBA for your Shopify store fulfillment." },
  { title: "Pricing Strategies That Drive Revenue", date: "Feb 15, 2026", category: "Growth", excerpt: "Dynamic pricing, bulk discounts, and other tactics to maximize your revenue." },
  { title: "Building Trust with Product Badges", date: "Feb 10, 2026", category: "Design", excerpt: "How product badges and labels can increase customer confidence and boost sales." },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-container py-20">
        <SectionHeading label="Blog" title="Insights & Resources" description="Tips, strategies, and updates from the Thalia Technologies team." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated p-6 cursor-pointer group"
            >
              <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-md">{post.category}</span>
              <h3 className="font-heading font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
