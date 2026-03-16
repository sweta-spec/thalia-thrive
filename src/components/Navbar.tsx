import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/hero-illustration.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Apps", path: "/apps" },
  { label: "Features", path: "/features" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-background border-b transition-shadow duration-300"
      style={{
        height: 68,
        borderColor: "#E4EAF0",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="section-container flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#29C9F0" }}>
            <span className="font-heading font-bold text-lg" style={{ color: "#0D0D14" }}>t</span>
          </div>
          <span className="font-heading font-bold text-lg" style={{ color: "#0D0D14" }}>Thalia Technologies</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 rounded-md text-sm font-medium font-body transition-colors"
              style={{
                color: location.pathname === link.path ? "#29C9F0" : "#3D3D4E",
              }}
              onMouseEnter={(e) => { if (location.pathname !== link.path) (e.target as HTMLElement).style.color = "#29C9F0"; }}
              onMouseLeave={(e) => { if (location.pathname !== link.path) (e.target as HTMLElement).style.color = "#3D3D4E"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm">Contact Us</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md" style={{ color: "#0D0D14" }}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b" style={{ borderColor: "#E4EAF0" }}>
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium font-body"
                style={{ color: location.pathname === link.path ? "#29C9F0" : "#3D3D4E" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-sm mt-2 text-center">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
