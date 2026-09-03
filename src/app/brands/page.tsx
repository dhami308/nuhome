import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Our brands",
  description: "Explore the specialist home and outdoor living brands within NuHome Living Ltd.",
};

export default function BrandsPage() {
  return (
    <PageShell>
      <section className="brands-hero">
        <div className="brands-hero-copy">
          <div className="eyebrow">Our brands</div>
          <h1>Different names.<br />One point of view.</h1>
          <p>Each NuHome brand has its own expertise, voice and community. Together, they make up a more thoughtful way to live at home and outside it.</p>
          <a className="button button-ghost" href="#portfolio">View the portfolio <span aria-hidden="true">↓</span></a>
        </div>
        <div className="brands-hero-image" role="img" aria-label="Natural stone terrace leading into a landscaped garden"><span>01 / 02</span></div>
      </section>
      <section className="section brands-portfolio" id="portfolio">
        <div className="section-heading"><div><div className="eyebrow">The portfolio</div><h2>Specialists in their element.</h2></div><p>Focused brands for the places that matter most, built with care in the UK.</p></div>
        <article className="nustone-feature">
          <div className="nustone-feature-image"><Image src="https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/indian-sandstone/indian-sandstone.jpg" alt="Nustone sandstone paving" fill sizes="(max-width: 700px) 100vw, 52vw" /></div>
          <div className="nustone-feature-content"><Image className="nustone-logo" src="https://nustone-bucket.s3.eu-west-2.amazonaws.com/assets/nustone-logo-vector.svg" alt="Nustone" width={190} height={48} /><div className="eyebrow nustone-accent">01 / Principal brand</div><h2>Nustone</h2><p>Nustone is an established UK specialist in natural stone, porcelain paving and outdoor living products, serving homeowners, landscapers, builders and trade professionals.</p><a className="button button-nustone" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Visit Nustone <span className="button-arrow" aria-hidden="true">↗</span></a><div className="nustone-meta"><a href="https://nustone.co.uk/product-category/sandstone-paving" target="_blank" rel="noreferrer">Natural stone</a><a href="https://nustone.co.uk/product-category/porcelain-paving" target="_blank" rel="noreferrer">Porcelain paving</a><a href="https://nustone.co.uk/product-category/landscaping-and-outdoor" target="_blank" rel="noreferrer">Outdoor living</a></div></div>
        </article>
        <section className="nustone-story">
          <div className="nustone-story-images">
            <div className="nustone-story-image nustone-story-image-large"><Image src="https://old.nustone.co.uk/wp-content/uploads/2024/09/IMG_4351-2-1024x1024.png" alt="Nustone outdoor paving in a finished garden setting" fill sizes="(max-width: 700px) 100vw, 45vw" /></div>
            <div className="nustone-story-image nustone-story-image-small"><Image src="https://old.nustone.co.uk/wp-content/uploads/2025/05/99169852_Brazilian-Black-Slate-Paving-Slabs-600x900-20mm_4-1024x1024.jpg" alt="Nustone Brazilian black slate paving slabs" fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
          </div>
          <div className="nustone-story-copy"><div className="eyebrow">A considered route outside</div><h2>Materials that help spaces settle into place.</h2><p>From the first surface choice to the final finishing detail, Nustone brings together the materials and practical knowledge needed to make outdoor projects feel complete.</p><p>Its range gives homeowners and professionals a dependable starting point, with natural textures, contemporary finishes and products selected for everyday life.</p><div className="nustone-story-list"><div><strong>01</strong><span>Thoughtful materials</span></div><div><strong>02</strong><span>Practical guidance</span></div><div><strong>03</strong><span>Reliable supply</span></div></div><a className="contact-link" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Explore Nustone <span aria-hidden="true">↗</span></a></div>
        </section>
        <article className="future-brand"><div><div className="eyebrow">02 / Coming next</div><h2>Room to grow.</h2></div><div><p>NuHome is building a focused portfolio of brands with a shared standard for quality, value and service.</p><a className="contact-link" href="/contact">Talk to us about partnerships <span aria-hidden="true">→</span></a></div></article>
      </section>
    </PageShell>
  );
}