import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  PackageCheck,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
  Wallet,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import consultationImage from "@/assets/consultation.jpg";
import { Reveal } from "@/components/reveal";

const PHONE_DISPLAY = "(605) 670-1823";
const PHONE_HREF = "tel:+16056701823";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Medicare Services | Callie Chicoine Insurance, South Dakota" },
      {
        name: "description",
        content:
          "Medicare Advantage, Medicare Supplement (Medigap), Part D prescription drug plans, and free annual plan reviews — serving South Dakota. Call (605) 670-1823.",
      },
      { property: "og:title", content: "Medicare Services | Callie Chicoine Insurance" },
      {
        property: "og:description",
        content: "Medicare Advantage, Supplement, and Part D plans — explained in plain language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    icon: HeartPulse,
    title: "Medicare Advantage",
    tag: "Part C",
    text: "All-in-one plans from private carriers that bundle hospital and medical coverage — often with dental, vision, hearing, and prescription benefits included. I compare the plans available in your county so you see real, side-by-side costs.",
    points: ["Network and doctor checks", "Out-of-pocket maximum comparisons", "Extra benefits explained"],
  },
  {
    icon: ShieldCheck,
    title: "Medicare Supplement",
    tag: "Medigap",
    text: "Original Medicare leaves gaps — deductibles, coinsurance, and more. A Medigap policy helps fill them, and I'll help you pick the right lettered plan for your budget and how often you travel.",
    points: ["Plan G, N, and more, compared", "Predictable monthly costs", "Freedom to see any doctor who accepts Medicare"],
  },
  {
    icon: Pill,
    title: "Prescription Drug Plans",
    tag: "Part D",
    text: "The right drug plan depends entirely on your prescriptions. Bring your medication list and I'll match it against the formularies, so your pharmacy bill is never a surprise.",
    points: ["Matched to your exact medications", "Pharmacy network checks", "Annual re-check as prescriptions change"],
  },
  {
    icon: Stethoscope,
    title: "New to Medicare",
    tag: "Turning 65",
    text: "Enrolling for the first time can feel like a maze of deadlines and penalties. I'll walk you through your initial enrollment window step by step, and help you avoid costly timing mistakes.",
    points: ["Enrollment timelines explained", "Penalties avoided", "First plan chosen with confidence"],
  },
  {
    icon: ClipboardCheck,
    title: "Annual Plan Reviews",
    tag: "Every fall",
    text: "Plans change their costs and networks every year — sometimes quietly. Each open enrollment, I re-check your plan against the new options and tell you honestly if you should stay or switch.",
    points: ["Free, no obligation", "Costs re-verified yearly", "Switching handled for you"],
  },
  {
    icon: Wallet,
    title: "Cost-Saving Reviews",
    tag: "Anytime",
    text: "Paying more than you should? If you've had a change in income, health, or prescriptions, there may be savings programs or a better-fitting plan. It costs nothing to ask.",
    points: ["Low-income program screening", "Coverage change guidance", "Straight answers, fast"],
  },
];

function ServicesPage() {
  return (
    <div className="overflow-x-clip">
      {/* Header */}
      <section className="relative pt-28 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_75%_0%,var(--color-accent)_0%,transparent_70%)]"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 md:grid-cols-2 md:pb-20 lg:gap-16">
          {/* Text — enters from the right */}
          <Reveal direction="right">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              Services
            </p>
            <h1 className="gold-rule mt-5 font-display text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl">
              Medicare plans, <em className="text-gold-deep">explained simply</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From your first enrollment to your yearly review, here's everything I can help
              with — always at no cost and no obligation to you.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:bg-primary/90"
            >
              <Phone className="size-4" aria-hidden />
              Call {PHONE_DISPLAY}
            </a>
          </Reveal>
          {/* Image — enters from the left */}
          <Reveal direction="left" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 h-full w-full rounded-4xl border border-gold/40"
              />
              <img
                src={heroImage}
                alt="Callie Chicoine, Medicare insurance agent"
                width={1600}
                height={1008}
                className="relative aspect-[4/3] w-full rounded-4xl object-cover shadow-lift-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} direction="right" delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift-lg">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
                    <service.icon className="size-6 text-gold-deep" aria-hidden />
                  </span>
                  <span className="rounded-full bg-cream px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                    {service.tag}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-2xl text-primary">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <PackageCheck className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-16">
          {/* Image — enters from the left */}
          <Reveal direction="left">
            <img
              src={consultationImage}
              alt="A plan review session with Callie"
              width={1408}
              height={912}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-4xl object-cover shadow-lift-lg"
            />
          </Reveal>
          {/* Text — enters from the right */}
          <Reveal direction="right" delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">How it works</p>
            <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
              Three simple steps
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  title: "Reach out",
                  text: "Call or send a message. We'll find a time that works — phone, video, or in person.",
                },
                {
                  title: "We review together",
                  text: "I compare plans across carriers using your doctors, prescriptions, and budget.",
                },
                {
                  title: "You choose with confidence",
                  text: "Enroll with me handling the paperwork, and get support every year after.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Start with step one
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
