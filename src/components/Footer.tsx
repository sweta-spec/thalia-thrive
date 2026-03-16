import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0D0D14", color: "#ffffff" }}>
      <div className="section-container" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#29C9F0" }}>
                <span className="font-heading font-bold text-lg" style={{ color: "#0D0D14" }}>t</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">Thalia Technologies</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Building software that makes a difference for businesses worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>About Us</Link>
              <Link to="/careers" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Careers</Link>
              <Link to="/blog" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Blog</Link>
              <Link to="/contact" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Contact</Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Products</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/apps/spreadr" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Spreadr</Link>
              <Link to="/apps/watchlyst" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Watchlyst</Link>
              <Link to="/apps/bolt" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Bolt</Link>
              <Link to="/apps/pro" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Pro</Link>
              <Link to="/apps" className="text-sm hover:text-white transition-colors" style={{ color: "#29C9F0" }}>All Apps →</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Resources</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/case-studies" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Case Studies</Link>
              <Link to="/features" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>Features</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Legal</h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Privacy Policy</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Terms of Service</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Cookie Policy</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>GDPR</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>© 2025 Thalia Technologies Private Limited. All rights reserved.</p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
