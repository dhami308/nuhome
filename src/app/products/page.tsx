import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Products and categories",
  description: "Explore home and outdoor living product categories from Nustone, including natural stone and porcelain paving.",
};

const categories = [
  ["Sandstone Paving", "Timeless, tactile surfaces with the character that only natural stone can bring.", "sandstone", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/indian-sandstone/indian-sandstone.jpg", "https://nustone.co.uk/product-category/sandstone-paving"],
  ["Porcelain Paving", "Hardwearing, low-maintenance paving with a clean, contemporary finish.", "porcelain", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/porcelain-paving/porcelain-paving.jpg", "https://nustone.co.uk/product-category/porcelain-paving"],
  ["Slate Paving", "Deep tones and natural texture for outdoor spaces with a grounded feel.", "slate", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/slate-paving/slate-paving.jpg", "https://nustone.co.uk/product-category/slate-paving"],
  ["Granite Paving", "A durable, distinctive surface for projects that need to stand the test of time.", "granite", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/granite-paving/granite-paving.jpeg", "https://nustone.co.uk/product-category/granite-paving"],
  ["Limestone Paving", "Soft, natural tones that bring warmth and calm to a considered garden.", "limestone", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/limestone-paving/limestone-paving.jpg", "https://nustone.co.uk/product-category/limestone-paving"],
  ["Composite Fencing", "Practical, lasting boundaries with a modern finish and minimal upkeep.", "fencing", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/product-images/WPC-FENCING-PEBBLES-BLACK/WPC-FENCING-PEBBLES-BLACK-ARDEN-GREY_3.webp", "https://nustone.co.uk/product-category/composite-fencing"],
  ["Composite Decking", "A comfortable, durable foundation for outdoor rooms and entertaining.", "decking", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/composite-decking/composite-decking.jpg", "https://nustone.co.uk/product-category/composite-decking"],
  ["Garden Furniture", "Create a place to pause, gather and enjoy the garden for longer.", "furniture", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/garden-furniture/garden-furniture.jpg", "https://nustone.co.uk/product-category/garden-furniture"],
  ["Wall Cladding and Panels", "Add depth, texture and a sense of permanence to walls indoors and out.", "cladding", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/wall-cladding-and-panels/YRCcHwZAyOzN.jpeg", "https://nustone.co.uk/product-category/wall-cladding-and-panels"],
  ["Planters", "The considered finishing touch for planting schemes with structure and personality.", "planters", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/planters/planters.png", "https://nustone.co.uk/product-category/planters"],
  ["Fireplaces", "Bring warmth, atmosphere and a natural focal point to time spent outside.", "fireplaces", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/category-images/fireplaces/fireplaces.png", "https://nustone.co.uk/product-category/patio-heaters"],
  ["Accessories", "The dependable tools, materials and details behind a well-finished project.", "accessories", "https://nustone-bucket.s3.eu-west-2.amazonaws.com/assets/Accessories+image.webp", "https://nustone.co.uk/product-category/accessories"],
];

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="page-intro tile-pattern"><div className="eyebrow">Products and categories</div><h1>Everything a better outdoor space needs.</h1><p>Browse the Nustone range by category. We keep the choice clear, the advice practical and the route to the right product simple.</p><div className="range-summary"><span><strong>12</strong> categories</span><span><strong>1</strong> specialist brand</span><span><strong>UK</strong> delivery and support</span></div></section>
      <section className="range-intro"><div className="eyebrow">The Nustone range</div><h2>Start with the surface.<br /><em>Finish with the details.</em></h2><p>Whether you are planning a new patio, defining the edges of a garden or bringing warmth to an outdoor room, Nustone brings the materials together in one considered range.</p></section>
      <section className="section products-section"><div className="product-group-heading"><div><span>01</span><h2>Surfaces</h2></div><p>Natural stone and porcelain paving for the foundations of a beautiful outdoor space.</p></div><div className="product-grid product-grid-surfaces">{categories.slice(0, 5).map(([name, description, image, imageUrl, categoryUrl]) => <article className={`product-card product-${image}`} key={name}><Image src={imageUrl} alt={name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 20vw" /><div className="product-card-content"><h2>{name}</h2><p>{description}</p><a className="button button-solid" href={categoryUrl} target="_blank" rel="noreferrer">Shop at Nustone <span aria-hidden="true">↗</span></a></div></article>)}</div><div className="product-group-heading product-group-second"><div><span>02</span><h2>Structure & living</h2></div><p>Boundaries, seating, cladding and finishing pieces that make an outside space feel complete.</p></div><div className="product-grid">{categories.slice(5).map(([name, description, image, imageUrl, categoryUrl]) => <article className={`product-card product-${image}`} key={name}><Image src={imageUrl} alt={name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 20vw" /><div className="product-card-content"><h2>{name}</h2><p>{description}</p><a className="button button-solid" href={categoryUrl} target="_blank" rel="noreferrer">Shop at Nustone <span aria-hidden="true">↗</span></a></div></article>)}</div></section>
      <section className="range-cta"><div><div className="eyebrow">Need a little direction?</div><h2>Find the right route for your project.</h2></div><div><p>Explore the complete Nustone range, find practical installation advice or speak to the team about your plans.</p><a className="button button-nustone" href="https://nustone.co.uk" target="_blank" rel="noreferrer">Visit Nustone <span aria-hidden="true">↗</span></a></div></section>
    </PageShell>
  );
}