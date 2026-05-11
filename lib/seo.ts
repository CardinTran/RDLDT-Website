import { getSiteUrl, siteConfig } from "@/lib/site-config";

export function getOrganizationStructuredData() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    additionalType: "https://schema.org/DanceGroup",
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    url: siteUrl,
    email: siteConfig.email,
    image: `${siteUrl}${siteConfig.images.hero}`,
    logo: `${siteUrl}${siteConfig.images.logo}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceAreas,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lion dance performance booking",
          description:
            "Traditional lion dance performances for festivals, schools, grand openings, ceremonies, and community events.",
        },
      },
    ],
  };
}
