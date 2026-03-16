import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Globe, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const stats = [
  { value: "100,000+", label: "Businesses Served" },
  { value: "20+", label: "SaaS Products" },
  { value: "10+", label: "Years of Innovation" },
  { value: "4.8★", label: "Avg. App Rating" },
];

const values = [
  { icon: Zap, title: "Innovation", desc: "We push boundaries with cutting-edge solutions for e-commerce." },
  { icon: Users, title: "Customer First", desc: "Every product is designed with our customers' success in mind." },
  { icon: Globe, title: "Global Reach", desc: "Our apps serve merchants across 150+ countries worldwide." },
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade stability that businesses can depend on." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Software that{" "}
              <span className="gradient-text">Makes a Difference</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Our focus is to build technology products that help businesses solve their most pressing problems and make them more successful.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/apps">
                  Explore Our Apps <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={heroImg} alt="Team building software" className="w-full rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-alt py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="section-container py-20">
        <SectionHeading
          label="Our Products"
          title="Our Labour of Love"
          description="Here are some of the SaaS applications that we build to help e-commerce businesses thrive."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {apps.slice(0, 8).map((app, i) => (
            <AppCard key={app.slug} app={app} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/apps">View All {apps.length} Apps <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt py-20">
        <div className="section-container">
          <SectionHeading
            label="Why Us"
            title="Our Values"
            description="A passion for building world-class products within a company culture built on trust, dedication, and shared values."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated p-6 text-center"
              >
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

      {/* CTA */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 md:p-16 text-center"
          style={{ background: "var(--hero-gradient)" }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            We are Hiring!
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Join our team of passionate builders and help shape the future of e-commerce technology.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/careers">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
