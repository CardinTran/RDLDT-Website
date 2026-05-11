export const siteConfig = {
  name: "Rising Dragon Lion Dance Team",
  shortName: "RDLDT",
  alternateNames: ["RDLDT", "Thang Long"],
  foundingDate: "1994",
  defaultSiteUrl: "https://www.risingdragonliondance.com",
  description:
    "Traditional lion dance performances, youth development, cultural education, and event bookings in Marrero, New Orleans, and Louisiana.",
  seoDescription:
    "Book Rising Dragon Lion Dance Team for lion dance performances, cultural celebrations, school programs, grand openings, and community events in Marrero, New Orleans, and Louisiana.",
  email: "risingdragonlion@outlook.com",
  membershipFormUrl: "https://forms.gle/j7jKShCNwABjaKUc7",
  images: {
    hero: "/hero-team.jpg",
    booking: "/RDLBooking.jpg",
    watermark: "/mock-logo.png",
    logo: "/logo-watermark.png",
  },
  address: {
    streetAddress: "6851 St. Le Thi Thanh Street",
    city: "Marrero",
    region: "LA",
    postalCode: "70072",
    country: "US",
  },
  serviceAreas: ["Marrero, Louisiana", "New Orleans, Louisiana", "Greater New Orleans", "Louisiana"],
  keywords: [
    "Rising Dragon Lion Dance Team",
    "RDLDT",
    "Thang Long",
    "lion dance Louisiana",
    "lion dance New Orleans",
    "lion dance Marrero",
    "dragon dance performance",
    "Vietnamese lion dance",
    "cultural performance booking",
    "grand opening lion dance",
  ],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.defaultSiteUrl).replace(/\/$/, "");
}

export function getMapUrl() {
  const { streetAddress, city, region, postalCode } = siteConfig.address;
  const query = new URLSearchParams({
    api: "1",
    query: `${streetAddress}, ${city}, ${region} ${postalCode}`,
  });

  return `https://www.google.com/maps/search/?${query.toString()}`;
}
