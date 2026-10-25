import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import consultationImage from "@/assets/consultation.jpg";
import southDakotaImage from "@/assets/south-dakota.jpg";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const PHONE_DISPLAY = "(605) 670-1823";
const PHONE_HREF = "tel:+16056701823";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Callie Chicoine | Medicare Insurance Agent in South Dakota",
      },
      {
        name: "description",
        content:
          "Independent Medicare insurance agent serving all of South Dakota. Medicare Advantage, Medicare Supplement, and prescription drug plans — explained in plain language. Call (605) 670-1823.",
      },
      { property: "og:title", content: "Callie Chicoine | Medicare Insurance Agent in South Dakota" },
      {
        property: "og:description",
        content: "Personal Medicare guidance for South Dakotans. Plan reviews at no cost.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="overflow-x-clip">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhySection />
      <LocalSection />
      <CtaSection />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_0%,var(--color-accent)_0%,transparent_70%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 md:grid-cols-2 md:pb-24 lg:gap-16">
        {/* Image — enters from the left */}
        <Reveal direction="left" className="order-2 md:order-1">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full rounded-4xl border border-gold/40"
            />
            <img
              src={heroImage}
              alt="Callie Chicoine, Medicare insurance agent, in her office"
              width={1600}
              height={1008}
              className="relative aspect-[4/3] w-full rounded-4xl object-cover shadow-lift-lg"
            />
            <div className="animate-float absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift md:-right-6">
              <Star className="size-6 fill-gold text-gold" aria-hidden />
              <div>
                <p className="text-xs font-semibold text-foreground">Personal plan reviews</p>
                <p className="text-xs text-muted-foreground">At no cost to you</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text — enters from the right */}
        <Reveal direction="right" delay={120} className="order-1 md:order-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <MapPin className="size-3.5 text-gold-deep" aria-hidden />
            Medicare Insurance · South Dakota
          </p>
          <h1 className="gold-rule mt-5 font-display text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-[4.25rem]">
            Medicare coverage, <em className="text-gold-deep">made personal.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Choosing a Medicare plan shouldn't feel like homework. I'm Callie Chicoine, a
            licensed insurance agent who walks South Dakotans through their options in plain
            language — so you enroll with confidence, not confusion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:bg-primary/90 hover:shadow-lift-lg"
            >
              <Phone className="size-4" aria-hidden />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/50 hover:bg-secondary"
            >
              Explore services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Trust bar ---------------- */

const trustItems = [
  { icon: HeartHandshake, title: "Local & personal", text: "One agent who knows your name" },
  { icon: ClipboardCheck, title: "Plain-language guidance", text: "No jargon, no pressure" },
  { icon: ShieldCheck, title: "Multiple carriers", text: "Plans compared side by side" },
  { icon: CalendarCheck, title: "Year-round support", text: "Help long after you enroll" },
];

function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {trustItems.map((item, i) => (
          <Reveal key={item.title} direction="right" delay={i * 110}>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-card shadow-lift">
                <item.icon className="size-5 text-gold-deep" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services preview ---------------- */

const servicePreview = [
  {
    icon: ShieldCheck,
    title: "Medicare Advantage",
    text: "All-in-one plans that bundle hospital, medical, and often drug coverage — compared across carriers available in your area.",
  },
  {
    icon: Sparkles,
    title: "Medicare Supplement",
    text: "Medigap policies that help cover the out-of-pocket costs Original Medicare leaves behind.",
  },
  {
    icon: ClipboardCheck,
    title: "Prescription Drug Plans",
    text: "Part D coverage matched to your actual medications, so the pharmacy counter never surprises you.",
  },
];

function ServicesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal direction="right">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">What I do</p>
        <h2 className="gold-rule mt-3 max-w-xl font-display text-4xl leading-tight text-primary md:text-5xl">
          Medicare help, the way it should be
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {servicePreview.map((service, i) => (
          <Reveal key={service.title} direction="right" delay={i * 130}>
            <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift-lg">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
                <service.icon className="size-6 text-gold-deep" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl text-primary">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors hover:text-primary"
              >
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Callie ---------------- */

const whyPoints = [
  "A real conversation about your doctors, prescriptions, and budget",
  "Plan comparisons across the carriers available where you live",
  "Help with enrollment paperwork from start to finish",
  "A check-in every year before open enrollment",
];

function WhySection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:gap-16">
        {/* Image — enters from the left */}
        <Reveal direction="left">
          <img
            src={consultationImage}
            alt="Callie reviewing Medicare plan options with a couple at their kitchen table"
            width={1408}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-4xl object-cover shadow-lift-lg"
          />
        </Reveal>

        {/* Text — enters from the right */}
        <Reveal direction="right" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">Why Callie</p>
          <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
            A neighbor who explains, not a call center that reads scripts
          </h2>
          <ul className="mt-8 space-y-4">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <ClipboardCheck className="size-3 text-primary-foreground" aria-hidden />
                </span>
                <span className="leading-relaxed text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            More about Callie
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- South Dakota ---------------- */

function LocalSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">Proudly local</p>
          <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
            Serving every corner of South Dakota
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            From Sioux Falls to Rapid City, Aberdeen to Yankton — I work with clients across the
            state by phone, video, or in person. Medicare rules are the same everywhere; a
            plan that fits your local doctors and pharmacies is not. That's where personal
            guidance makes the difference.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Get in touch
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
        {/* Image — enters from the left */}
        <Reveal direction="left" delay={120}>
          <img
            src={southDakotaImage}
            alt="Golden sunset over the South Dakota Badlands"
            width={1600}
            height={912}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-4xl object-cover shadow-lift-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CtaSection() {
  return (
    <section className="px-4 pb-20 sm:px-6 md:pb-28">
      <Reveal direction="up">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-primary px-6 py-14 text-center shadow-lift-lg sm:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_15%_0%,var(--color-evergreen-soft)_0%,transparent_70%)] opacity-40"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Ready when you are
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-primary-foreground md:text-5xl">
              Have a Medicare question? Just ask.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
              One call is all it takes to get straightforward answers about your coverage options.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-gold/90 hover:shadow-lift-lg"
              >
                <Phone className="size-4" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5",
                  "text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                )}
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
