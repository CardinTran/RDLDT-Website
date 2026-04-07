import Image from "next/image";
import Link from "next/link";

import RotatingImageShowcase from "@/components/rotating-image-showcase";
import ScrollToExplore from "@/components/scroll-to-explore";

const impactStats = [
  { value: "12+", label: "Years performing across the region" },
  { value: "80+", label: "Community events supported" },
  { value: "3", label: "Focus pillars: culture, discipline, outreach" },
];

const aboutHighlights = [
  {
    title: "Performance with Purpose",
    detail:
      "Rising Dragon blends athletic precision, live percussion, and cultural storytelling for festivals, schools, and celebrations.",
  },
  {
    title: "Training Across Levels",
    detail:
      "New members can start with footwork, rhythm, and conditioning while experienced performers refine teamwork and stage presence.",
  },
  {
    title: "Community-Led Presence",
    detail:
      "The organization is shaped around cultural education, representation, and memorable public-facing experiences.",
  },
];

const bookingOptions = [
  {
    title: "Bronze Package",
    detail: "Includes 2 Lion acrobatic Routine, Ong Dia, and percussion team.",
    note: "Starter performance package",
  },
  {
    title: "Gold Package",
    detail: "Includes 2 Lion Plushie Routine, Ong Dia, and percussion team",
    note: "Expanded showcase package",
  },
];

const joinPaths = [
  {
    title: "Youth Track",
    detail:
      "Entry point for younger members focused on discipline, movement fundamentals, and confidence-building in a team environment.",
  },
  {
    title: "Performer Track",
    detail:
      "For members ready to train regularly, learn choreography, and perform in public showcases throughout the year.",
  },
  {
    title: "Support Team",
    detail:
      "For volunteers helping with logistics, equipment handling, fundraising, social media, and event operations.",
  },
];

const galleryMoments = [
  {
    title: "Lunar New Year Parade",
    tag: "Street Performance",
    description: "Placeholder for a wide action photo with red uniforms, banners, and dense festival energy.",
  },
  {
    title: "Drumline Rehearsal",
    tag: "Training",
    description: "Placeholder for a rehearsal still showcasing rhythm drills, focus, and synchronized movement.",
  },
  {
    title: "Community Blessing",
    tag: "Ceremony",
    description: "Placeholder for a ceremonial entrance image at a business opening or formal celebration.",
  },
  {
    title: "Youth Workshop",
    tag: "Outreach",
    description: "Placeholder for a candid instructional moment with coaches guiding newer members.",
  },
];

const bookingChecklist = [
  "Event type, date, and city",
  "Indoor or outdoor performance setting",
  "Audience size and timing window",
  "Special requests, ceremony details, or cultural programming needs",
];

const showcaseImages = [
  {
    title: "Parade Lead Entrance",
    description: "Placeholder for a lead lion entering a street parade with banners and crowd energy behind it.",
    palette: ["#5f0f14", "#b33a2f", "#f3c24f"] as [string, string, string],
  },
  {
    title: "Festival Drumline",
    description: "Placeholder for a drumline frame focused on rhythm, power, and synchronized movement.",
    palette: ["#34110f", "#8f1414", "#d96b2b"] as [string, string, string],
  },
  {
    title: "Team Portrait",
    description: "Placeholder for a formal team portrait before a major performance or annual celebration.",
    palette: ["#40191a", "#7c2320", "#f0a94a"] as [string, string, string],
  },
  {
    title: "Youth Workshop",
    description: "Placeholder for instructors guiding younger members through footwork and coordination drills.",
    palette: ["#4e1d17", "#944f28", "#f3c24f"] as [string, string, string],
  },
  {
    title: "Grand Opening Blessing",
    description: "Placeholder for a ceremonial business opening with lion dance, cymbals, and ribbon moments.",
    palette: ["#2c1115", "#7b1719", "#e48d36"] as [string, string, string],
  },
  {
    title: "Backstage Preparation",
    description: "Placeholder for costume setup, headpiece adjustments, and pre-show focus backstage.",
    palette: ["#2f191a", "#6f3430", "#deb05f"] as [string, string, string],
  },
  {
    title: "Lunar New Year Crowd",
    description: "Placeholder for a dense celebration scene with lanterns, spectators, and layered movement.",
    palette: ["#541817", "#9d3b1f", "#f7d16c"] as [string, string, string],
  },
  {
    title: "School Assembly Demo",
    description: "Placeholder for an educational performance introducing symbolism, rhythm, and movement.",
    palette: ["#3f0f10", "#882c1b", "#f2b95a"] as [string, string, string],
  },
  {
    title: "Evening Stage Lighting",
    description: "Placeholder for a dramatic low-light performance with warm highlights and stage smoke.",
    palette: ["#180f11", "#6a1d1e", "#d46c32"] as [string, string, string],
  },
  {
    title: "Competition Run",
    description: "Placeholder for a high-intensity action shot with precise movement and elevated choreography.",
    palette: ["#301014", "#8b1a1d", "#f5c153"] as [string, string, string],
  },
  {
    title: "Community Street Fair",
    description: "Placeholder for a lively outdoor fair scene with red tents, crowds, and percussion.",
    palette: ["#4b1414", "#a03b28", "#e9c073"] as [string, string, string],
  },
  {
    title: "Instrument Detail",
    description: "Placeholder for a tight composition of drum skins, cymbals, and textured performance tools.",
    palette: ["#241214", "#6a3120", "#f0b24a"] as [string, string, string],
  },
  {
    title: "Team Warmup",
    description: "Placeholder for stretching, footwork drills, and rehearsal energy before an event.",
    palette: ["#361819", "#7d2f2d", "#db8c45"] as [string, string, string],
  },
  {
    title: "Ceremonial Close-Up",
    description: "Placeholder for a close-up on lion costume textures, embroidery, and eye detail.",
    palette: ["#451415", "#a62d24", "#f3cf77"] as [string, string, string],
  },
  {
    title: "Full Team Bow",
    description: "Placeholder for a closing formation image after a showcase or outreach event.",
    palette: ["#2d1114", "#7d191c", "#f1b454"] as [string, string, string],
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#090807] text-[#F3EBDD]">
      <BackgroundWatermark />

      <div className="relative z-10">
        <SiteShell>
          <Navbar />
          <Hero />

          <div className="mx-auto w-full max-w-[1280px]">
            <section className="dragon-banner" aria-label="Dragon banner artwork">
              <div className="dragon-banner__copy">
                <p className="eyebrow">Signature Motif</p>
                <h2>A ceremonial dragon banner to anchor the brand.</h2>
                <p>
                  This decorative strip gives the homepage a stronger cultural centerpiece and can later evolve into a
                  reusable divider for events, team history, sponsor sections, or announcement banners.
                </p>
              </div>
              <div className="dragon-banner__art" aria-hidden="true">
                <svg viewBox="0 0 900 260" role="presentation">
                  <defs>
                    <linearGradient id="dragonBody" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f3c24f" />
                      <stop offset="50%" stopColor="#d96b2b" />
                      <stop offset="100%" stopColor="#8f1414" />
                    </linearGradient>
                    <linearGradient id="dragonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 240, 199, 0.95)" />
                      <stop offset="100%" stopColor="rgba(255, 240, 199, 0)" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M69 150c61-81 167-114 280-90 44 9 81 25 127 20 43-5 72-30 114-31 48-1 91 29 133 69 31 30 64 54 108 66-26 19-65 26-107 20-49-8-84-32-120-52-35-20-74-36-118-26-55 12-94 54-147 77-47 21-101 27-160 17-46-7-84-22-110-41z"
                    fill="url(#dragonBody)"
                    opacity="0.95"
                  />
                  <path
                    d="M116 160c42-38 93-59 154-61 59-2 103 16 146 35 26 12 52 21 82 18 26-3 48-14 70-24 23-11 45-20 71-17 33 3 58 22 84 46-45-7-80 2-114 21-24 14-49 30-80 37-49 12-92-5-136-20-55-20-112-36-181-12-30 10-58 27-96 30z"
                    fill="none"
                    stroke="#fff1c7"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <circle cx="673" cy="90" r="33" fill="#8f1414" />
                  <circle cx="677" cy="87" r="19" fill="#f3c24f" />
                  <circle cx="682" cy="84" r="6" fill="#180f11" />
                  <path d="M717 89c24-5 44 5 60 25-22-3-41 4-58 17 3-14 2-28-2-42z" fill="#f3c24f" />
                  <path
                    d="M707 59l34-24-10 31M685 55l14-38 11 33"
                    fill="none"
                    stroke="#f3c24f"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M114 158c-15 2-32-8-44-21 19-2 34-12 45-30 4 19 4 35-1 51z" fill="#f3c24f" />
                  <path
                    d="M78 113c-12-12-25-16-41-14 13-13 30-20 50-18M95 86c-9-15-22-24-37-28 20-4 40 0 57 11"
                    fill="none"
                    stroke="#d96b2b"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M352 116c22-27 61-42 98-40-20 10-35 25-43 44-17-7-36-9-55-4zM501 97c19-25 52-39 84-36-16 9-26 23-31 39-16-4-35-5-53-3z"
                    fill="url(#dragonGlow)"
                    opacity="0.8"
                  />
                </svg>
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

            <section id="about" className="content-block">
              <div className="section-heading">
                <p className="eyebrow">About</p>
                <h2>Built to explain who the team is, what it stands for, and why people remember the performance.</h2>
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

            <section id="book" className="content-block content-block--accent booking-section">
              <div className="section-heading">
                <p className="eyebrow">Book</p>
                <h2>Make booking feel premium, organized, and easy to act on.</h2>
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
                  <h3>Recommended details to collect later in your form.</h3>
                  <ul>
                    {bookingChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="button button--solid" href="mailto:booking@risingdragon.org">
                    Placeholder Booking Email
                  </a>
                </aside>
              </div>
            </section>

            <RotatingImageShowcase items={showcaseImages} />

            <section id="join" className="content-block join-section">
              <div className="section-heading">
                <p className="eyebrow">Join</p>
                <h2>Create a clear path for performers, students, and supporters to get involved.</h2>
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
                <h2>A media section with enough structure to look finished before real photography is added.</h2>
              </div>
              <div className="gallery-grid">
                {galleryMoments.map((moment, index) => (
                  <article key={moment.title} className={`gallery-card gallery-card--${index + 1}`}>
                    <span className="meta-pill">{moment.tag}</span>
                    <h3>{moment.title}</h3>
                    <p>{moment.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
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
          src="/mock-logo.png"
          alt=""
          aria-hidden="true"
          width={1800}
          height={1800}
          priority
          className="h-auto w-[135vw] max-w-none object-contain opacity-[0.5]"
        />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <header className="pt-5 sm:pt-6">
      <div className="mx-auto flex w-full max-w-[980px] items-center rounded-full border border-[#3A3124] bg-[rgba(8,8,8,0.78)] px-3 py-3 shadow-[0_0_0_1px_rgba(214,168,72,0.04)] backdrop-blur-sm">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-[#E3B850] px-7 text-sm font-semibold tracking-[0.22em] text-[#17130C] sm:h-11"
        >
          RDLDT
        </Link>

        <nav className="mx-auto hidden items-center gap-10 md:flex">
          {["Home", "About", "Book", "Join", "Gallery"].map((item) => (
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
          className="inline-flex h-12 items-center rounded-full bg-[#D9993F] px-7 text-base font-semibold text-[#1A1208] transition hover:brightness-105"
        >
          Request Booking
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-110px)] items-center">
      <div className="relative w-full">
        <div className="relative min-h-[760px] w-full">
          <div className="relative z-20 max-w-[680px] pt-24 lg:pt-28">
            <p className="mb-7 text-[14px] font-semibold uppercase tracking-[0.32em] text-[#C89C39]">
              Rising Dragon Lion Dance Team
            </p>

            <h1 className="font-serif max-w-[640px] text-[64px] font-semibold leading-[0.94] tracking-[-0.04em] text-[#F4ECDD] sm:text-[78px] lg:text-[88px] xl:text-[96px]">
              Bold cultural performance, disciplined training, and a stronger digital stage.
            </h1>

            <p className="mt-14 max-w-[620px] text-[19px] leading-[1.75] text-[#CFC1A3]">
              This homepage is now structured around the sections your organization actually needs: a branded home
              experience, a clear story, a booking area, a recruitment area, and a gallery layout ready for real media
              later on.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#about"
                className="inline-flex h-14 items-center rounded-full bg-[#E5BC59] px-8 text-lg font-semibold text-[#16120B] transition hover:brightness-105"
              >
                Meet the Team
              </Link>

              <Link
                href="#gallery"
                className="inline-flex h-14 items-center rounded-full border border-[#4A4031] bg-[rgba(10,10,10,0.38)] px-8 text-lg font-semibold text-[#EEE2C8] backdrop-blur-sm transition hover:border-[#6B5B43] hover:bg-[rgba(18,18,18,0.48)]"
              >
                View Gallery
              </Link>

              <Link
                href="/playground"
                className="inline-flex h-14 items-center rounded-full border border-[#4A4031] bg-[rgba(10,10,10,0.38)] px-8 text-lg font-semibold text-[#EEE2C8] backdrop-blur-sm transition hover:border-[#6B5B43] hover:bg-[rgba(18,18,18,0.48)]"
              >
                Open Sandbox
              </Link>
            </div>
          </div>

          <ScrollToExplore />

          <div className="absolute right-0 top-[54%] z-10 hidden h-[500px] w-[46%] -translate-y-1/2 lg:block xl:h-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2px]">
              <Image src="/mock-team.jpg" alt="Rising Dragon team" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.18)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
