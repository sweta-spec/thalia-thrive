import { Link } from "react-router-dom";
import type { AppData } from "@/data/apps";
import { getPlatformColor, getPlatformLabel } from "@/data/apps";

const AppCard = ({ app }: { app: AppData; index?: number }) => {
  if (app.comingSoon) {
    return (
      <div className="card-elevated p-6 h-full relative opacity-60">
        <div className="absolute top-4 right-4 text-xs font-heading font-bold px-3 py-1 rounded-full" style={{ background: "#E4EAF0", color: "#8888A0" }}>
          Coming Soon
        </div>
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${app.color}18` }}>
          {app.icon}
        </div>
        <h3 className="font-heading font-bold text-lg mb-1" style={{ color: "#0D0D14" }}>{app.name}</h3>
        <p className="text-sm font-body" style={{ color: "#8888A0" }}>{app.tagline}</p>
      </div>
    );
  }

  return (
    <Link to={`/apps/${app.slug}`} className="block card-elevated p-6 h-full group">
      <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${app.color}18` }}>
        {app.icon}
      </div>
      <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors" style={{ color: "#0D0D14" }}>
        {app.name}
      </h3>
      <p className="text-sm font-body leading-relaxed mb-3" style={{ color: "#8888A0" }}>{app.tagline}</p>
      <div className="flex items-center justify-between">
        <span
          className="inline-block text-xs font-bold font-body px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${getPlatformColor(app.platform)}14`, color: getPlatformColor(app.platform) }}
        >
          {getPlatformLabel(app.platform)}
        </span>
        <span className="text-sm font-medium transition-colors" style={{ color: "#29C9F0" }}>View App →</span>
      </div>
    </Link>
  );
};

export default AppCard;
