import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About NuHome",
  description: "Learn about NuHome Living Ltd and our approach to creating better spaces for life at home and outside it.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <div className="eyebrow">Our story</div>
        <h1>Good spaces start with good thinking.</h1>
        <p>NuHome Living is building a focused portfolio of home and outdoor living brands with a practical ambition: to make the spaces around everyday life more useful, more beautiful and more distinctly yours.</p>
      </section>
      <section className="section">
        <div className="story-grid">
          <div className="story-image" role="img" aria-label="Calm, contemporary living room with natural textures" />
          <div className="story-copy">
            <div className="eyebrow">What we believe</div>
            <h2>Form follows feeling.</h2>
            <p>We think the best products earn their place. They solve a real problem, wear in beautifully and make a small but meaningful difference to the way a home feels.</p>
            <p>That is why we build specialist brands with a clear point of view, bringing together quality, value, dependable supply, product expertise and customer service that respects people&apos;s time. Nustone brings established specialist experience in its own category; NuHome&apos;s portfolio will grow from there.</p>
          </div>
        </div>
      </section>
      <section className="about-focus">
        <div className="about-focus-image"><Image src="https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/porcelain-paving/porcelain-paving.jpg" alt="Nustone porcelain paving in a considered outdoor space" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="about-focus-copy"><div className="eyebrow">Where it starts</div><h2>Nustone gives the idea somewhere to land.</h2><p>Our first principal brand is Nustone, an established UK specialist in natural stone, porcelain paving and outdoor living products. It brings deep category knowledge and a practical understanding of what homeowners and professionals need to make a project work.</p><p>NuHome is building from that foundation: a home for focused brands that know their subject, care about the details and make choosing well feel simpler.</p><Link className="button button-ghost" href="/brands">Meet the NuHome brands <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className="section about-principles">
        <div className="section-heading"><div><div className="eyebrow">How we work</div><h2>Quietly ambitious.</h2></div><p>Useful ideas, carefully made, with the people who use them always in view.</p></div>
        <div className="principles-grid"><article><span>01</span><h3>Stay close to the detail</h3><p>We pay attention to materials, finishes, delivery and all the small decisions that shape the final experience.</p></article><article><span>02</span><h3>Make choice feel clearer</h3><p>Good guidance should make a project feel more possible, whether it starts with a sketch or a simple question.</p></article><article><span>03</span><h3>Build for the long view</h3><p>We are creating brands with lasting relevance, grounded in quality, service and relationships that grow over time.</p></article></div>
      </section>
      <section className="manifesto"><h2>Useful beauty, made for real life.</h2><p>We are curious about materials, attentive to detail and always looking for the simpler, more generous answer.</p></section>
    </PageShell>
  );
}