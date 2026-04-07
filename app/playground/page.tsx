import Link from "next/link";

const swatches = [
  { name: "Crimson Banner", value: "#8f1414" },
  { name: "Festival Gold", value: "#f3c24f" },
  { name: "Lantern Ember", value: "#d96b2b" },
  { name: "Midnight Ink", value: "#180f11" },
];

export default function PlaygroundPage() {
  return (
    <main className="playground">
      <div className="playground__panel">
        <p className="eyebrow">Testing View</p>
        <h1>Visual sandbox for the Rising Dragon site.</h1>
        <p>
          Use this route to quickly verify the app is running and preview the base visual system while you iterate on
          future sections.
        </p>
        <div className="swatch-grid">
          {swatches.map((swatch) => (
            <article key={swatch.name} className="swatch-card">
              <div className="swatch-card__chip" style={{ backgroundColor: swatch.value }} />
              <strong>{swatch.name}</strong>
              <span>{swatch.value}</span>
            </article>
          ))}
        </div>
        <Link className="button button--solid" href="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}
