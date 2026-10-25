import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, MapPin, MessageSquareText, Phone, Send } from "lucide-react";
import southDakotaImage from "@/assets/south-dakota.jpg";
import { Reveal } from "@/components/reveal";

const PHONE_DISPLAY = "(605) 670-1823";
const PHONE_HREF = "tel:+16056701823";
const SMS_HREF = "sms:+16056701823";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Callie Chicoine Medicare Insurance, South Dakota" },
      {
        name: "description",
        content:
          "Call or text Callie Chicoine at (605) 670-1823 for personal Medicare guidance anywhere in South Dakota. Free plan reviews, no obligation.",
      },
      { property: "og:title", content: "Contact Callie Chicoine | Medicare Insurance" },
      {
        property: "og:description",
        content: "Call (605) 670-1823 for personal Medicare guidance in South Dakota.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hi Callie, my name is ${name || "…"}. ${message || "I'd like to talk about my Medicare options."}`
    );
    window.location.href = `sms:+16056701823?&body=${text}`;
  };

  return (
    <div className="overflow-x-clip">
      <section className="relative pt-28 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_25%_0%,var(--color-accent)_0%,transparent_70%)]"
        />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
          {/* Text — enters from the right */}
          <Reveal direction="right" className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              Contact
            </p>
            <h1 className="gold-rule mt-5 font-display text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl">
              Let's find your <em className="text-gold-deep">right plan</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The fastest way to reach me is a phone call. Prefer to write? Send a text or use
              the message form below — it opens a text message straight to my phone.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Info column — image enters from the left */}
            <Reveal direction="left" className="lg:col-span-2">
              <div className="space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-lift transition-all hover:-translate-y-0.5 hover:shadow-lift-lg"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary">
                    <Phone className="size-5 text-primary-foreground" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                      Call or text
                    </span>
                    <span className="mt-1 block font-display text-2xl text-primary">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-lift">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <MapPin className="size-5 text-gold-deep" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">Service area</p>
                    <p className="mt-1 font-semibold text-foreground">All of South Dakota</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In person locally, by phone or video statewide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-lift">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <Clock className="size-5 text-gold-deep" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">Availability</p>
                    <p className="mt-1 font-semibold text-foreground">By appointment</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Evenings and weekends can usually be arranged — just ask.
                    </p>
                  </div>
                </div>
                <img
                  src={southDakotaImage}
                  alt="Sunset over the South Dakota Badlands"
                  width={1600}
                  height={912}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lift"
                />
              </div>
            </Reveal>

            {/* Form — text enters from the right */}
            <Reveal direction="right" delay={120} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-4xl border border-border bg-card p-7 shadow-lift-lg sm:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary">
                    <MessageSquareText className="size-5 text-gold-deep" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl text-primary">Send me a message</h2>
                    <p className="text-sm text-muted-foreground">
                      Opens as a text to {PHONE_DISPLAY} on your phone.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                      How can I help?
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="I'm turning 65 in a few months and don't know where to start…"
                      className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:bg-primary/90 hover:shadow-lift-lg sm:w-auto"
                  >
                    <Send className="size-4" aria-hidden />
                    Open in messages
                  </button>
                  <p className="text-xs text-muted-foreground">
                    You can also reach me directly at{" "}
                    <a href={SMS_HREF} className="font-semibold text-primary underline underline-offset-2">
                      {PHONE_DISPLAY}
                    </a>{" "}
                    — calls and texts are both welcome.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
