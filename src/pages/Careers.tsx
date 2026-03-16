import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const openings = [
  { title: "Senior Full-Stack Developer", type: "Full-time", location: "Remote", dept: "Engineering" },
  { title: "Product Designer", type: "Full-time", location: "Remote", dept: "Design" },
  { title: "Customer Support Specialist", type: "Full-time", location: "Remote", dept: "Support" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", dept: "Engineering" },
  { title: "Content Marketing Manager", type: "Full-time", location: "Remote", dept: "Marketing" },
];

const perks = ["Remote-first culture", "Competitive salary", "Learning budget", "Flexible hours", "Health benefits", "Team retreats"];

const Careers = () => {
  return (
    <Layout>
      <section className="section-container py-20">
        <SectionHeading label="Careers" title="Join Our Team" description="We're looking for passionate people who want to build products that make a difference." />

        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {perks.map((perk) => (
              <div key={perk} className="bg-accent text-accent-foreground rounded-lg px-4 py-3 text-sm font-medium text-center">
                {perk}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">Open Positions</h3>
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated p-5 flex items-center justify-between gap-4"
            >
              <div>
                <h4 className="font-heading font-semibold text-foreground">{job.title}</h4>
                <p className="text-sm text-muted-foreground">{job.dept} · {job.type} · {job.location}</p>
              </div>
              <Button size="sm" variant="outline">
                Apply <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
