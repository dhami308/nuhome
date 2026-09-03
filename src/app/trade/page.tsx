import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Trade and partnerships",
  description:
    "NuHome Living supports landscapers, contractors, developers, architects, retailers and trade professionals across the UK.",
};

export default function TradePage() {
  const services = [
    [
      "01",
      "Trade accounts",
      "Practical support and access for regular professional purchasing.",
    ],
    [
      "02",
      "Wholesale supply",
      "Reliable product flow for retailers and trade partners.",
    ],
    [
      "03",
      "Product sourcing",
      "A focused route to the right materials for your project or customer.",
    ],
    [
      "04",
      "Distribution",
      "Dependable coordination from source to site, showroom or customer.",
    ],
    [
      "05",
      "Commercial partnerships",
      "Collaborate with a specialist home and outdoor living portfolio.",
    ],
  ];

  return (
    <PageShell>
      <section className="trade-intro">
        <div className="trade-intro-copy">
          <div className="trade-intro-top">
            <div className="eyebrow">Trade and partnerships</div>
            <span>UK / Home + Outdoor</span>
          </div>
          <h1>
            A dependable partner
            <br />
            <em>for better projects.</em>
          </h1>
          <div className="trade-intro-bottom">
            <p>
              NuHome Living works with landscapers, contractors, developers,
              architects, retailers and other trade professionals across the UK.
            </p>
            <Link className="button button-nustone" href="/contact">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="trade-intro-image">
          <Image
            src="https://nustone-bucket.s3.eu-west-2.amazonaws.com/blog-images/what-to-expect-at-futurescape-2025-the-uks-leading-landscaping-event/qklSNDXZlIpi.jpg"
            alt="Landscaping professionals at Futurescape"
            fill
            sizes="(max-width: 700px) 100vw, 40vw"
          />
        </div>
      </section>
      <section className="trade-audience">
        <div className="eyebrow">Who we work with</div>
        <div className="audience-list">
          <span>Landscapers</span>
          <span>Contractors</span>
          <span>Developers</span>
          <span>Architects</span>
          <span>Retailers</span>
          <span>Trade professionals</span>
        </div>
      </section>
      <section className="section trade-overview">
        <div className="intro-grid">
          <p className="display-copy">
            The right product is only part of the job.
          </p>
          <div>
            <div className="eyebrow">Built to make work easier</div>
            <p className="body-copy">
              We bring product expertise, dependable supply and responsive
              service to the people making homes, gardens and outdoor spaces
              happen every day.
            </p>
            <p className="body-copy">
              From the first conversation to the final delivery, we help you
              find the right route forward.
            </p>
          </div>
        </div>
        <div className="trade-proof">
          <div>
            <strong>01</strong>
            <span>Clear product advice</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Dependable supply</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Responsive support</span>
          </div>
        </div>
      </section>
      <section className="trade-services-new">
        <div className="trade-services-heading">
          <div className="eyebrow">How we can help</div>
          <h2>
            Bring us the brief.
            <br />
            <em>We&apos;ll help with the rest.</em>
          </h2>
        </div>
        <div className="service-grid">
          {services.map(([number, title, description]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href="/contact" aria-label={`Enquire about ${title}`}>
                Enquire <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="trade-materials">
        <div className="trade-materials-image">
          <Image
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85"
            alt="Hammer and hand tools on a wooden workbench"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div>
          <div className="eyebrow">A partner that keeps moving</div>
          <h2>From first brief to finished space.</h2>
          <p>
            Whether you are sourcing a single project or planning regular
            supply, we make it easier to work with specialist outdoor living
            products at every stage.
          </p>
          <Link className="button button-ghost" href="/contact">
            Talk to the team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="trade-cta">
        <div>
          <div className="eyebrow">Ready when you are</div>
          <h2>Let&apos;s talk about what you&apos;re building.</h2>
        </div>
        <div>
          <p>
            Make an enquiry about trade accounts, wholesale supply, product
            sourcing, distribution or commercial partnerships.
          </p>
          <Link className="button button-solid" href="/contact">
            Make a trade enquiry <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
