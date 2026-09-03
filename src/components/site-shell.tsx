import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="NuHome Living home">
        <span className="logo-mark" aria-hidden="true" />
        NuHome Living
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/about">About NuHome</Link>
        <Link href="/brands">Our brands</Link>
        <Link href="/products">Products</Link>
        <Link href="/trade">Trade</Link>
        <Link href="/contact" className="nav-cta">Get in touch</Link>
      </nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav className="mobile-links" aria-label="Mobile navigation">
          <Link href="/about">About NuHome</Link>
          <Link href="/brands">Our brands</Link>
          <Link href="/products">Products</Link>
          <Link href="/trade">Trade & partnerships</Link>
          <Link href="/contact">Get in touch</Link>
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <h3>Better living.<br />Inside and out.</h3>
        <div>
          <div className="footer-label">Explore</div>
          <Link className="footer-link" href="/about">About NuHome</Link>
          <Link className="footer-link" href="/brands">Our brands</Link>
          <Link className="footer-link" href="/products">Products</Link>
          <Link className="footer-link" href="/trade">Trade & partnerships</Link>
          <Link className="footer-link" href="/contact">Contact</Link>
        </div>
        <div>
          <div className="footer-label">Find us</div>
          <a className="footer-link" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a className="footer-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="footer-link" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Nustone.co.uk</a>
        </div>
      </div>
      <div className="footer-company">
        <strong>NuHome Living Ltd</strong>
        <span>Company registration number: </span>
        <span>Registered office: </span>
        <span>Registered in England and Wales</span>
        <a href="mailto:support@nuhome.co.uk">support@nuhome.co.uk</a>
        <span>Nustone is a trading brand of NuHome Living Ltd.</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NuHome Living Ltd</span>
        <span className="footer-legal"><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="page-main">{children}</main><Footer /></>;
}