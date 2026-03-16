import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { apps } from "@/data/apps";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const AppDetail = () => {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);

  if (!app) return <NotFound />;

  return (
    <Layout>
      <section className="section-container py-20">
        <Link to="/apps" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Apps
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
              style={{ backgroundColor: `hsl(${app.color} / 0.12)` }}
            >
              {app.icon}
            </div>
            <span className="inline-block text-xs font-medium text-primary bg-accent px-2 py-1 rounded-md mb-3">
              {app.platform}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">{app.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{app.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{app.description}</p>

            {app.externalUrl !== "#" && (
              <Button asChild size="lg">
                <a href={app.externalUrl} target="_blank" rel="noopener noreferrer">
                  View on Store <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-8"
          >
            <h3 className="font-heading font-bold text-lg text-foreground mb-6">Key Features</h3>
            <ul className="space-y-4">
              {app.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AppDetail;
