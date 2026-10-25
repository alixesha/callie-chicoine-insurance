import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Phone, ShieldCheck } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";
import consultationImage from "@/assets/consultation.jpg";
import { Reveal } from "@/components/reveal";

const PHONE_DISPLAY = "(605) 670-1823";
const PHONE_HREF = "tel:+16056701823";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Callie Chicoine | Medicare Insurance Agent, South Dakota" },
      {
        name: "description",
        content:
          "Meet Callie Chicoine, a licensed Medicare insurance agent serving South Dakota with personal, no-pressure plan guidance. Call (605) 670-1823.",
      },
      { property: "og:title", content: "About Callie Chicoine | Medicare Insurance Agent" },
      {
        property: "og:description",
        content: "Personal, local Medicare guidance for South Dakotans.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const values = [
  {
    icon: HeartHandshake,
    title: "People before policies",
    text: "My job is to find the plan that fits your life — even when that means telling you the plan you already have is the right one.",
  },
  {
    icon: Compass,
    title: "Guidance, not sales pitches",
    text: "You'll hear every option in plain English, with the trade-offs laid out honestly, so the decision is truly yours.",
  },
  {
    icon: ShieldCheck,
    title: "Year-round partnership",
    text: "Coverage needs change. I stay in touch, review your plan every year, and help you switch when a better fit appears.",
  },
];

function AboutPage() {
  return (
    <div className="overflow-x-clip">
      {/* Intro */}
      <section className="relative pt-28 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_20%_0%,var(--color-accent)_0%,transparent_70%)]"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 md:grid-cols-2 md:pb-24 lg:gap-16">
          {/* Text — enters from the right */}
          <Reveal direction="right">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              About me
            </p>
            <h1 className="gold-rule mt-5 font-display text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl">
              Hi, I'm <em className="text-gold-deep">Callie.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I help South Dakotans make sense of Medicare. That means sitting down with you — at
              my desk, your kitchen table, or over the phone — and walking through your doctors,
              your medications, and your budget until the right plan is obvious.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              As an independent agent, I'm appointed with multiple insurance carriers, so my
              recommendations are built around you — never around a single company's quota.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:bg-primary/90"
              >
                <Phone className="size-4" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/50 hover:bg-secondary"
              >
                What I do
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Image — enters from the left */}
          <Reveal direction="left" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -right-4 -top-4 h-full w-full rounded-4xl border border-gold/40"
              />
              <img
                src={portraitImage}
                alt="Callie Chicoine at her desk"
                width={1008}
                height={1200}
                className="relative aspect-[4/5] w-full rounded-4xl object-cover shadow-lift-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">How I work</p>
            <h2 className="gold-rule mt-3 max-w-xl font-display text-4xl leading-tight text-primary md:text-5xl">
              Three things you can count on
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} direction="right" delay={i * 130}>
                <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-lift">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
                    <value.icon className="size-6 text-gold-deep" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:gap-16">
        {/* Image — enters from the left */}
        <Reveal direction="left">
          <img
            src={consultationImage}
            alt="Callie meeting with clients to review Medicare options"
            width={1408}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-4xl object-cover shadow-lift-lg"
          />
        </Reveal>
        {/* Text — enters from the right */}
        <Reveal direction="right" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">My promise</p>
          <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
            You'll never feel rushed or sold to
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Medicare decisions deserve time. I'll explain how each plan actually works —
            networks, drug tiers, out-of-pocket limits — and answer every question, even the
            ones you think are obvious. And if a plan isn't right for you, I'll say so.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            My reviews and consultations are always at no cost and no obligation to you.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Let's talk
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
