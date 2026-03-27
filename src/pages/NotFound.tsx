import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-h1 font-extrabold text-foreground font-heading">404</h1>
          <p className="mb-6 text-lg text-muted-foreground font-body">Oops! This page seems to have gone missing.</p>
          <Link to="/" className="btn-primary text-sm">
            Go Home →
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
