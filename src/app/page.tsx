import Link from "next/link";
import Image from "next/image";
import { Footer, Header } from "@/components/site-shell";

const featuredCategories = [
  ["Sandstone Paving", "Natural texture and timeless warmth.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/indian-sandstone/indian-sandstone.jpg", "https://nustone.co.uk/product-category/sandstone-paving"],
  ["Porcelain Paving", "Clean lines for contemporary gardens.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/porcelain-paving/porcelain-paving.jpg", "https://nustone.co.uk/product-category/porcelain-paving"],
  ["Slate Paving", "Deep tones with natural character.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/slate-paving/slate-paving.jpg", "https://nustone.co.uk/product-category/slate-paving"],
  ["Composite Fencing", "Modern boundaries, made to last.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/product-images/WPC-FENCING-PEBBLES-BLACK/WPC-FENCING-PEBBLES-BLACK-ARDEN-GREY_3.webp", "https://nustone.co.uk/product-category/composite-fencing"],
  ["Garden Furniture", "Make more room for outside life.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/garden-furniture/garden-furniture.jpg", "https://nustone.co.uk/product-category/garden-furniture"],
  ["Wall Cladding", "Texture and depth for every surface.", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/wall-cladding-and-panels/YRCcHwZAyOzN.jpeg", "https://nustone.co.uk/product-category/wall-cladding-and-panels"],
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <Header />
        <div className="hero-copy">
          <div className="eyebrow">The NuHome way</div>
          <h1>Better Living.<br />Inside and Out.</h1>
          <p>NuHome Living brings together specialist brands, quality products and trusted expertise to help homeowners and trade professionals create better spaces.</p>
          <div className="button-row">
            <Link className="button button-solid" href="/brands">Explore Our Brands <span aria-hidden="true">→</span></Link>
            <a className="button button-nustone" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Shop Nustone <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-note"><span>•</span> Home / Garden / Outside</div>
      </div>
      <section className="section">
        <div className="intro-grid">
          <p className="display-copy">A focused portfolio for better living.</p>
          <div>
            <div className="eyebrow">About NuHome</div>
            <p className="body-copy">NuHome Living Ltd is a UK home and outdoor living company building a focused portfolio of specialist brands. We care about quality, value, dependable supply and the kind of customer service that makes choosing well feel straightforward.</p>
            <Link className="button button-ghost" href="/about">Our story <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <section className="living-section">
        <div className="living-heading"><div className="eyebrow">The NuHome point of view</div><h2>Good living has no hard edges.</h2><p>From the rooms we retreat to, to the gardens we gather in, we think about the whole picture.</p></div>
        <div className="living-grid">
          <Link className="living-card living-inside" href="/about"><div><span>Inside / At home</span><h3>Spaces with a sense of ease.</h3><b>Explore our story <i aria-hidden="true">→</i></b></div></Link>
          <Link className="living-card living-outside" href="/products"><div><span>Outside / In the garden</span><h3>More room for living.</h3><b>Explore products <i aria-hidden="true">→</i></b></div></Link>
        </div>
      </section>
      <section className="brand-feature">
        <div className="brand-image" role="img" aria-label="Nustone sandstone paving terrace with outdoor seating" />
        <div className="brand-content">
          <Image className="brand-logo" src="https://nustone-bucket.s3.eu-west-2.amazonaws.com/assets/nustone-logo-vector.svg" alt="Nustone" width={190} height={48} />
          <div className="eyebrow nustone-accent">Principal brand</div>
          <h2>Nustone</h2>
          <p>Nustone is an established UK specialist in natural stone, porcelain paving and outdoor living products, serving homeowners, landscapers, builders and trade professionals.</p>
          <a className="button button-nustone" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Visit nustone.co.uk <span aria-hidden="true">↗</span></a>
          <div className="brand-details"><div><strong>For homeowners</strong><span>Ideas, materials and guidance for creating a garden that feels like yours.</span></div><div><strong>For trade</strong><span>Reliable supply and practical support for landscapers, builders and project teams.</span></div><div><strong>Explore the range</strong><span>Natural stone, porcelain paving, walling, furniture and outdoor essentials.</span></div></div>
        </div>
      </section>
      <section className="section tile-band">
        <div className="section-heading">
          <div><div className="eyebrow">Featured categories</div><h2>Products for spaces that work hard.</h2></div>
          <p>Selected categories from Nustone, with practical materials and finishing touches for outdoor projects of every scale.</p>
        </div>
        <div className="category-grid">
          {featuredCategories.map(([name, description, image, categoryUrl]) => <article className="category-card" key={name}><Image src={image} alt={name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /><div className="category-card-content"><h3>{name}</h3><p>{description}</p><a href={categoryUrl} target="_blank" rel="noreferrer">Shop at Nustone →</a></div></article>)}
        </div>
        <div className="section-footer-link"><Link className="button button-ghost" href="/products">View all Nustone categories <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className="split-callout"><div><div className="eyebrow">Trade & partnerships</div><h2>Good work starts with the right supply.</h2></div><div><p>We work with landscapers, contractors, developers, architects, retailers and other trade professionals to make product sourcing simpler.</p><Link className="button button-ghost" href="/trade">Work with NuHome <span aria-hidden="true">→</span></Link></div></section>
      <section className="manifesto"><h2>Let&apos;s make better spaces together.</h2><p>For questions, partnerships or help finding the right route into NuHome, our team is ready to talk.</p><Link className="button button-solid" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link></section>
      <Footer />
    </>
  );
}
