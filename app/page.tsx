import Image from "next/image";
import Link from "next/link";

import DrivePhotoGallery from "@/components/drive-photo-gallery";
import RotatingImageShowcase from "@/components/rotating-image-showcase";
import ScrollToExplore from "@/components/scroll-to-explore";
import {
  aboutHighlights,
  bookingChecklist,
  bookingOptions,
  impactStats,
  joinPaths,
  showcaseImages,
} from "@/lib/home-content";
import { getOrganizationStructuredData } from "@/lib/seo";
import { getMapUrl, siteConfig } from "@/lib/site-config";

const siteDetails = [
  {
    label: "Location",
    value: `${siteConfig.address.streetAddress}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    href: getMapUrl(),
  },
  {
    label: "Booking Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Availability",
    value: "Festivals, school events, grand openings, and community programs",
  },
];

export default function HomePage() {
  const structuredData = getOrganizationStructuredData();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090807] text-[#F3EBDD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BackgroundWatermark />

      <div className="relative z-10">
        <SiteShell>
          <Navbar />
          <Hero />

          <div className="mx-auto w-full max-w-[1280px]">
            <section id="about" className="content-block">
              <div className="section-heading">
                <p className="eyebrow">About</p>
                <h2>Rising Dragon Lion Dance Team carries tradition forward through youth development, cultural education, and community service.</h2>
                <p>
                  Also known as Thang Long, the team was founded to give young people a productive path, a stronger
                  sense of self, and a place where tradition, physical discipline, and brotherhood could be passed down
                  from generation to generation in Marrero and the Greater New Orleans community.
                </p>
              </div>
              <div className="card-grid">
                {aboutHighlights.map((item) => (
                  <article key={item.title} className="info-card">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="stats" aria-label="Organization highlights">
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </section>

            <section id="book" className="content-block content-block--accent booking-section">
              <div className="section-heading">
                <p className="eyebrow">Book</p>
                <h2>Book a performance that feels ceremonial, polished, and memorable from the first impression.</h2>
                <p>
                  The booking experience should help event organizers quickly understand where the team fits best,
                  whether the lion dance performance is for a business blessing, cultural celebration, school event,
                  or community program.
                </p>
              </div>
              <div className="booking-layout">
                <div className="feature-list">
                  {bookingOptions.map((option) => (
                    <article key={option.title} className="info-card info-card--lifted">
                      <h3>{option.title}</h3>
                      <p>{option.detail}</p>
                      <span className="meta-pill">{option.note}</span>
                    </article>
                  ))}
                </div>
                <aside className="booking-panel">
                  <p className="eyebrow">Inquiry Details</p>
                  <h3>What clients should prepare before reaching out.</h3>
                  <ul>
                    {bookingChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="button button--solid" href={`mailto:${siteConfig.email}`}>
                    Request a Booking
                  </a>
                </aside>
              </div>
            </section>

            <RotatingImageShowcase items={showcaseImages} />

            <section id="join" className="content-block join-section">
              <div className="section-heading">
                <p className="eyebrow">Join</p>
                <h2>Become a big part of the team and spread the culture through performances.</h2>
                <p>
                  Rising Dragon is not only a performance group. It is a place to train, serve, build confidence, and
                  carry the team’s traditions into the next generation.
                </p>
              </div>
              <div className="join-section__actions">
                <a
                  className="button button--solid"
                  href={siteConfig.membershipFormUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Membership Form
                </a>
              </div>
              <div className="join-grid">
                {joinPaths.map((path, index) => (
                  <article key={path.title} className="join-card">
                    <span className="join-card__index">0{index + 1}</span>
                    <h3>{path.title}</h3>
                    <p>{path.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="gallery" className="content-block gallery-section">
              <div className="section-heading">
                <p className="eyebrow">Gallery</p>
                <h2>View the various performance photos the Rising Dragon Lion Dance Team has to offer.</h2>
                <p>
                  Explore photos from our lion dance and dragon dance performances, including community events, cultural celebrations, and live showcases.
                </p>
              </div>
              <DrivePhotoGallery />
            </section>

          </div>

          <footer className="site-footer" aria-label="Site information">
            <div className="site-footer__inner">
              <div className="site-footer__brand">
                <p className="eyebrow">{siteConfig.name}</p>
                <h2>Contact and location details for visitors, families, and event organizers.</h2>
              </div>
              <div className="site-info-grid">
                {siteDetails.map((item) => (
                  <article key={item.label} className="site-info-card">
                    <span className="site-info-card__label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="site-info-card__link"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </footer>
        </SiteShell>
      </div>
    </main>
  );
}

function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 sm:px-8 lg:px-12 xl:px-16">
      {children}
    </div>
  );
}

function BackgroundWatermark() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(120,82,36,0.10),_transparent_38%),linear-gradient(180deg,#0b0a0a_0%,#090807_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Image
          src={siteConfig.images.watermark}
          alt=""
          aria-hidden="true"
          width={1800}
          height={1800}
          sizes="100vw"
          quality={62}
          className="h-auto w-[150vw] max-w-none object-contain opacity-[0.32] sm:w-[135vw] sm:opacity-[0.42]"
        />
      </div>
    </>
  );
}

function Navbar() {
  const navItems = ["About", "Book", "Join", "Gallery"];

  return (
    <header className="pt-4 sm:pt-6">
      <div className="mx-auto w-full max-w-[1080px] rounded-[28px] border border-[#3A3124] bg-[rgba(8,8,8,0.80)] p-2.5 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-md md:rounded-full">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 shrink-0 items-center rounded-full bg-[#E3B850] px-5 text-sm font-semibold tracking-[0.22em] text-[#8f1414] sm:px-7"
            aria-label="Rising Dragon Lion Dance Team home"
          >
            RDLDT
          </Link>

          <nav className="mx-auto hidden items-center gap-8 md:flex lg:gap-10" aria-label="Primary navigation">
            {["Home", ...navItems].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[15px] font-medium text-[#D9C89E] transition hover:text-[#F3EBDD]"
              >
                {item}
              </Link>
            ))}
          </nav>

          <Link
            href="#book"
            className="ml-auto inline-flex h-12 shrink-0 items-center rounded-full bg-[#D9993F] px-5 text-sm font-semibold text-[#1A1208] transition hover:brightness-105 sm:px-6 md:ml-0"
          >
            Book
          </Link>
        </div>

        <nav className="mt-3 grid grid-cols-4 gap-2 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#4A4031] bg-[rgba(255,255,255,0.035)] px-2 text-[0.82rem] font-semibold text-[#E8D8B8]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-104px)] items-start py-6 sm:py-8">
      <div className="relative w-full">
        <div className="relative min-h-0 w-full lg:min-h-[calc(100svh-150px)] xl:min-h-[720px]">
          <div className="relative z-20 max-w-[690px] pt-4 sm:pt-8 lg:max-w-[620px] lg:pt-16 xl:max-w-[700px] xl:pt-20">
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.34em] text-[#D7A73E]">
              Rising Dragon Lion Dance Team • Thang Long
            </p>

            <h1 className="font-serif max-w-[12ch] pb-2 text-[clamp(2.65rem,13vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.052em] text-[#F4ECDD] lg:text-[72px] xl:text-[84px]">
              Rising Dragon Lion Dance Team performances in Louisiana.
            </h1>

            <p className="mt-7 max-w-[590px] text-[17px] leading-[1.78] text-[#D7C5A6] xl:text-[19px]">
              Since 1994, Rising Dragon has used lion dance to preserve tradition, mentor youth, and serve
              Marrero, New Orleans, and Louisiana communities through performances that feel powerful,
              respectful, and unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#book"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#E5BC59] px-8 text-lg font-semibold text-[#16120B] transition hover:brightness-105 sm:w-auto"
              >
                Book a Performance
              </Link>

              <Link
                href="#about"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#4A4031] bg-[rgba(10,10,10,0.38)] px-8 text-lg font-semibold text-[#EEE2C8] backdrop-blur-sm transition hover:border-[#6B5B43] hover:bg-[rgba(18,18,18,0.48)] sm:w-auto"
              >
                Learn the Story
              </Link>

              <Link
                href="#join"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#4A4031] bg-[rgba(10,10,10,0.38)] px-8 text-lg font-semibold text-[#EEE2C8] backdrop-blur-sm transition hover:border-[#6B5B43] hover:bg-[rgba(18,18,18,0.48)] sm:w-auto"
              >
                Join the Team
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#3A3124] bg-[rgba(255,255,255,0.035)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] lg:hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={siteConfig.images.hero}
                  alt="Rising Dragon Lion Dance Team performing a traditional lion dance"
                  fill
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.30)_100%)]" />
              </div>
            </div>
          </div>

          <ScrollToExplore />

          <div className="absolute right-0 top-[42%] z-10 hidden h-[460px] w-[46%] -translate-y-1/2 lg:block xl:top-[41%] xl:h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2px]">
              <Image
                src={siteConfig.images.hero}
                alt="Rising Dragon Lion Dance Team performing a traditional lion dance"
                fill
                priority
                sizes="(min-width: 1280px) 640px, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.18)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
