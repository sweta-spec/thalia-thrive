import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";

const platforms = ["All", ...Array.from(new Set(apps.map((a) => a.platform)))];

const Apps = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? apps : apps.filter((a) => a.platform === filter);

  return (
    <Layout>
      <section className="section-container py-20">
        <SectionHeading label="Our Products" title="All Apps" description="Explore our full suite of SaaS applications built for e-commerce merchants." />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === p ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((app, i) => (
            <AppCard key={app.slug} app={app} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
