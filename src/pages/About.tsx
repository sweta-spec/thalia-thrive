import { motion } from "framer-motion";
import { Heart, Target, Lightbulb, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/team-illustration.png";

const values = [
  { icon: Heart, title: "Passion", desc: "We love what we build and it shows in every product we ship." },
  { icon: Target, title: "Focus", desc: "We solve real problems for real businesses — no fluff." },
  { icon: Lightbulb, title: "Innovation", desc: "We constantly explore new ways to make e-commerce better." },
  { icon: Users, title: "Trust", desc: "Our culture is built on transparency, respect, and collaboration." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building Software that <span className="gradient-text">Empowers Businesses</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Thalia Technologies is a product-focused technology company that builds SaaS applications for e-commerce merchants. Trusted by over 100,000 businesses worldwide, our suite of apps helps Shopify, BigCommerce, and other platform merchants automate, optimize, and grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a mission to make technology accessible, we've built 20+ products that solve real-world challenges — from product importing and price management to invoicing and fulfillment.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={teamImg} alt="Our team" className="w-full rounded-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="section-alt py-20">
        <div className="section-container">
          <SectionHeading label="Our Values" title="What Drives Us" description="Although we are all different, we share a passion for building world-class products." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
