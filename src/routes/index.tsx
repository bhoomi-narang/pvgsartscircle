import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroStage from "@/assets/hero-stage.jpg";
import koytaImg from "@/assets/play-koyta.jpg";
import bijagiriImg from "@/assets/play-bijagiri.jpg";
import artsCircleLogoAsset from "@/assets/arts-circle-logo.png";
import img1 from "@/assets/gallery/imp1.jpeg";
import img2 from "@/assets/gallery/imp2.jpeg";
import img3 from "@/assets/gallery/imp3.jpeg";
import img4 from "@/assets/gallery/imp4.jpeg";
import img5 from "@/assets/gallery/imp5.jpeg";
import img6 from "@/assets/gallery/imp6.jpeg";
import img7 from "@/assets/gallery/imp7.jpeg";
import img8 from "@/assets/gallery/imp8.jpeg";
import img9 from "@/assets/gallery/imp9.jpeg";
import img10 from "@/assets/gallery/imp10.jpeg";


const LOGO_URL = artsCircleLogoAsset;
const ORG_FULL = "Pune Vidyarthi Griha's College of Engineering, Technology and Management, Pune";
const ORG_SHORT = "PVG's COET Arts Circle";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: heroStage,
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PHONE1 = "7385689938";
const PHONE2 = "9309409320";
const PHONE_DISPLAY1 = "७३८५६८९९३८";
const PHONE_DISPLAY2 = "९३०९४०९३२०";
const WHATSAPP1 = "7385689938";
const WHATSAPP2 = "9309409320";
const MAPS_URL = "https://maps.google.com/?q=Bharat+Natya+Mandir+Sadashiv+Peth+Pune";
const Insta = "https://www.instagram.com/pvgartscircle?igsh=MXdwM2xrYThrYng0MQ==";

function Index() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {loading && <CurtainLoader />}
      <Nav open={navOpen} setOpen={setNavOpen} />
      <Hero />
      <About />
      <Plays />
      <ShowDetails />
      <Venue />
      <Awards />
      <Gallery />
      <Presentors />
      <Tickets />
      <Contact />
      
      <Footer />
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/40 bg-charcoal/80 text-gold backdrop-blur hover-lift"
        >
          ↑
        </button>
      )}
    </div>
  );
}

/* ---------------- Curtain Loader ---------------- */
function CurtainLoader() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div
        className="absolute inset-y-0 left-0 w-1/2 animate-curtain-left"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.32 0.13 22) 0%, oklch(0.20 0.09 22) 100%)",
          boxShadow: "inset -20px 0 60px oklch(0 0 0 / 60%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 animate-curtain-right"
        style={{
          background:
            "linear-gradient(270deg, oklch(0.32 0.13 22) 0%, oklch(0.20 0.09 22) 100%)",
          boxShadow: "inset 20px 0 60px oklch(0 0 0 / 60%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="relative mx-auto grid place-items-center">
            <div
              className="absolute inset-0 -m-10 rounded-full blur-3xl animate-shimmer"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.82 0.14 82 / 55%) 0%, transparent 65%)",
              }}
            />
            <img
              src={LOGO_URL}
              alt="PVG's COET Arts Circle"
              className="relative h-40 w-40 md:h-52 md:w-52 object-contain rounded-full animate-fade-up drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              style={{ animation: "fade-up 1.1s ease-out both, float-slow 5s ease-in-out infinite 1.1s" }}
            />
          </div>
          <p className="font-devanagari mt-6 text-gold-gradient text-2xl md:text-4xl animate-shimmer">
            रंग तेच... रंगत नवी!
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = [
    { href: "#top", label: "मुख्यपृष्ठ" },
    { href: "#details", label: "कार्यक्रम" },
    { href: "#plays", label: "एकांकिका" },
    { href: "#awards", label: "पुरस्कार" },
    { href: "#venue", label: "स्थळ" },
    { href: "#contact", label: "संपर्क" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-3 mt-3 rounded-2xl border border-[var(--gold)]/20 bg-charcoal/70 px-4 py-3 backdrop-blur-xl shadow-[var(--shadow-elegant)] md:mx-6 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <span className="grid h-11 w-11 md:h-12 md:w-12 shrink-0 place-items-center rounded-full border border-[var(--gold)]/40 bg-black/60 overflow-hidden">
              <img
                src={LOGO_URL}
                alt="PVG's COET Arts Circle"
                className="h-full w-full  object-contain p-0.5"
              />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-[0.95rem] md:text-base text-gold-gradient tracking-wide truncate">
                {ORG_SHORT}
              </span>
              <span className="hidden sm:block text-[0.6rem] md:text-[0.65rem] text-muted-foreground truncate max-w-[52ch]">
                {ORG_FULL}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-devanagari-body text-sm text-muted-foreground transition hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Menu"
            className="rounded-full border border-[var(--gold)]/30 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-5 bg-gold mb-1" />
            <span className="block h-0.5 w-5 bg-gold mb-1" />
            <span className="block h-0.5 w-5 bg-gold" />
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-[var(--gold)]/25 bg-charcoal/95 p-6 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-devanagari-body text-sm text-muted-foreground hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroStage}
        alt="Cinematic theatre stage with red velvet curtains"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-fade)" }} />
      <div className="absolute inset-0 spotlight animate-spotlight" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pt-32 pb-16 text-center">
        <img
          src={LOGO_URL}
          alt="PVG's COET Arts Circle"
          className="h-24 w-24 md:h-28 md:w-28 object-contain animate-fade-up rounded-full drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        />
        <p
          className="mt-6 animate-fade-up uppercase text-gold/80 tracking-normal text-xl "
          style={{ animationDelay: "0.2s" }}
        >
          व्यावसायिक सादरीकरण
        </p>
        <div className="mx-auto mt-5 h-px w-24 gold-divider animate-fade-up" />
        <h1
          className="font-devanagari mt-6 text-5xl text-gold-gradient sm:text-7xl md:text-8xl animate-fade-up leading-normal  "
          style={{ animationDelay: "0.15s" }}
        >
          रंग तेच...
          <br />
          <span className="italic">रंगत नवी!</span>
        </h1>
        <p
          className="font-devanagari-body mx-auto mt-8 max-w-2xl text-lg text-foreground/80 sm:text-xl animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          कथा तीच... रंग तेच... पण रंगत नवी.
          <br />
          दोन गाजलेल्या मराठी एकांकिकांचा व्यावसायिक प्रयोग.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a 
            href="#plays"
            className="font-devanagari rounded-full border border-[var(--gold)]/30 px-5 py-2 text-sm text-gold">
            कोयता
          </a>
          <span className="text-gold/40">·</span>
          <a 
            href="#plays"
            className="font-devanagari rounded-full border border-[var(--gold)]/30 px-5 py-2 text-sm text-gold">
            बिजागिरी
          </a>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#tickets"
            className="rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 hover:scale-[1.02]"
          >
            🎟 तिकिटे बुक करा
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--gold)]/40 bg-charcoal/40 px-8 py-3.5 text-sm font-medium text-gold backdrop-blur transition hover:bg-charcoal/70"
          >
            📍 दिशानिर्देश
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-l text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <span>📅 १४ जुलै</span>
          <span className="text-gold/40">•</span>
          <span>🕗 रात्री ८:००</span>
          <span className="text-gold/40">•</span>
          <span>📍 भारत नाट्य मंदिर, पुणे</span>
          <span className="text-gold/40">•</span>
          <span>🎟 ₹२००</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 animate-float-slow">
        <span className="font-devanagari-body text-xs">खाली स्क्रोल करा</span>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center reveal">
        <SectionEyebrow>About the Event</SectionEyebrow>
        <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
          रंगमंचावर पुन्हा एकदा जादू
        </h2>
        <div className="mx-auto mt-6 h-px w-16 gold-divider" />
        <p className="font-devanagari-body mt-8 text-lg leading-[1.9] text-foreground/85 md:text-xl">
          स्पर्धांच्या रंगभूमीवर प्रेक्षकांची मनं जिंकणाऱ्या आणि अनेक पुरस्कारांनी गौरविलेल्या दोन प्रभावी
          मराठी एकांकिका आता प्रथमच व्यावसायिक स्वरूपात आपल्या भेटीला येत आहेत. अधिक समृद्ध सादरीकरण,
          उत्कृष्ट तांत्रिक मांडणी आणि तितक्याच प्रभावी अभिनयासह हा रंगमंचीय अनुभव प्रत्येक रसिकासाठी
          अविस्मरणीय ठरेल.
        </p>
        <div className="mt-18 items-center text-center gap-1">
        <p className="text-[0.85rem] uppercase mb-3 tracking-[0.2em] text-gold/70">
          निर्मिती
        </p>
        <p className="font-display text-lg text-gold-gradient">शुभम होतचंदानी <br /> साईश धुरी</p>
      </div>
      </div>
    </section>
  );
}


/* ---------------- Plays ---------------- */
function Plays() {
  const plays = [
    {
      title: "कोयता",
      subtitle: "Koyta",
      img: koytaImg,
      desc: `ऊसतोड मजुरांच्या आयुष्याचा संघर्ष हा केवळ त्यांच्या श्रमांपुरता मर्यादित नसतो; तो त्यांच्या स्वप्नांचा, नात्यांचा, अस्तित्वाचा आणि जगण्याच्या लढ्याचाही असतो. 'कोयता' ही अशाच असंख्य कष्टकरी कुटुंबांच्या वास्तवाला भिडणारी, मनाला अस्वस्थ करणारी आणि विचार करायला भाग पाडणारी एकांकिका आहे.

दुष्काळ, स्थलांतर, कर्जबाजारीपणा, शिक्षणापासून वंचित राहणारी मुलं, तुटणारी नाती आणि दोन वेळच्या अन्नासाठी सुरू असलेली जीवघेणी धडपड—या सगळ्याचं अत्यंत प्रभावी नाट्यरूपांतर या एकांकिकेत पाहायला मिळतं. प्रत्येक पात्र ही एका व्यक्तीची कथा नसून हजारो ऊसतोड कामगारांच्या आयुष्याचं प्रतिनिधित्व करतं.

समाजातील दुर्लक्षित वास्तवावर भाष्य करताना ही एकांकिका प्रेक्षकांना केवळ भावनिक करत नाही, तर आपल्या सामाजिक जबाबदारीचाही पुनर्विचार करायला भाग पाडते.`,
      writer: "अथर्व किरवे",
      writerLabel: "लेखक",
      directors: ["अथर्व किरवे", "साईश धुरी"],
    },
    {
      title: "बिजागिरी",
      subtitle: "Bijagiri",
      img: bijagiriImg,
      desc: `घरातील जुनं बिजागर जसं दोन दारांना जोडून ठेवतं, तसंच नात्यांनाही जपणारा एक अदृश्य धागा असतो. 'बिजागिरी' ही एका आजी आणि तिच्या नातीमधील नात्याची हळवी, कोमल आणि मनाला स्पर्शून जाणारी कथा आहे.

वेगाने बदलणाऱ्या काळात हरवत चाललेले संवाद, पिढ्यांमधील विचारांचा संघर्ष, आठवणींची ऊब आणि नात्यांमधील न बोललेलं प्रेम यांचं अत्यंत संवेदनशील चित्रण या एकांकिकेत अनुभवायला मिळतं. प्रत्येक प्रसंगात माणुसकी, जिव्हाळा आणि कुटुंबव्यवस्थेतील भावनिक गुंतागुंत प्रभावीपणे उलगडत जाते.

ही केवळ एका आजी-नातीची गोष्ट नाही; ती प्रत्येक घराची, प्रत्येक कुटुंबाची आणि प्रत्येक प्रेक्षकाच्या मनाला स्पर्श करणारी कथा आहे. नात्यांची किंमत, प्रेमाची भाषा आणि आठवणींचा ठेवा यांची जाणीव करून देणारा हा एक अविस्मरणीय रंगमंचीय अनुभव आहे.`,
      writer: "गार्गी कथले",
      writerLabel: "लेखिका",
      directors: ["गार्गी कथले", "साईश धुरी"],
    },
  ];
  return (
    <section id="plays" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center reveal">
          <SectionEyebrow>Featured Plays</SectionEyebrow>
          <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
            दोन एकांकिका · एक संध्याकाळ
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {plays.map((p) => (
            <article
              key={p.title}
              className="group reveal glass-card overflow-hidden rounded-2xl hover-lift"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.subtitle}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
                    {p.subtitle}
                  </p>
                  <h3 className="font-devanagari mt-1 text-4xl text-gold-gradient leading-normal">
                    {p.title}
                  </h3>
                </div>
              </div>
              <div className="p-7 md:p-8">
                <p className="font-devanagari-body text-[0.98rem] leading-[1.85] text-foreground/80">
                  {p.desc}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--gold)]/15 pt-5">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                      {p.writerLabel}
                    </p>
                    <p className="mt-1 text-sm text-foreground/90">{p.writer}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                      दिग्दर्शक
                    </p>
                    <p className="mt-1 text-sm text-foreground/90">
                      {p.directors.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Show Details ---------------- */
function ShowDetails() {
  const items = [
    { icon: "📅", label: "दिनांक", value: "१४ जुलै" },
    { icon: "🕗", label: "वेळ", value: "रात्री ८:०० ते ११:००" },
    { icon: "📍", label: "स्थळ", value: "भारत नाट्य मंदिर\nसदाशिव पेठ, पुणे" },
    { icon: "🎟", label: "प्रवेश शुल्क", value: "₹२००" },
    { icon: "🗣", label: "भाषा", value: "मराठी" },
    { icon: "⏱", label: "वेळ", value: "सुमारे ३ तास" },
  ];
  return (
    <section id="details" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center reveal">
          <SectionEyebrow>Show Details</SectionEyebrow>
          <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
            प्रयोगाची माहिती
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.label}
              className="reveal glass-card rounded-2xl p-7 hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl">{it.icon}</div>
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-gold/70">
                {it.label}
              </p>
              <p className="mt-2 whitespace-pre-line font-display text-2xl text-foreground/95">
                {it.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Venue ---------------- */
function Venue() {
  return (
    <section id="venue" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center reveal">
          <SectionEyebrow>Venue</SectionEyebrow>
          <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
            भरत नाट्य मंदिर, पुणे
          </h2>
        </div>
        <div className="mt-12 grid gap-8 reveal lg:grid-cols-5">
          <div className="glass-card overflow-hidden rounded-2xl lg:col-span-3">
            <iframe
              title="Bharat Natya Mandir Location"
              src="https://www.google.com/maps?q=Bharat+Natya+Mandir+Sadashiv+Peth+Pune&output=embed"
              className="h-[400px] w-full lg:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="glass-card flex flex-col justify-between rounded-2xl p-8 lg:col-span-2">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/70">
                पत्ता
              </p>
              <p className="font-display mt-3 text-2xl text-foreground/95">
                भरत नाट्य मंदिर
              </p>
              <p className="mt-1 text-muted-foreground">
                सदाशिव पेठ, पुणे, महाराष्ट्र
              </p>
              <div className="mt-6 h-px gold-divider" />
              <p className="mt-6 font-devanagari-body text-foreground/80 leading-relaxed">
                पुण्यातील ऐतिहासिक व मानाच्या रंगमंचांपैकी एक — रसिकांसाठी सुलभ स्थान.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Awards ---------------- */
function Awards() {
  const koytaAwards = [
    {
      name: "भरत करंडक २०२५",
      items: [
        "सांघिक तृतीय क्रमांक",
        "सर्वोत्कृष्ट पुरुष अभिनय (द्वितीय)",
        "सर्वोत्कृष्ट प्रकाशयोजना (तृतीय)",
        "सर्वोत्कृष्ट स्त्री अभिनय (उत्तेजनार्थ)",
        "सर्वोत्कृष्ट दिग्दर्शन (उत्तेजनार्थ)",
      ],
    },
    {
      name: "प्रकाश इनामदार करंडक २०२५",
      items: [
        "सर्वोत्कृष्ट पार्श्वसंगीत (प्रथम)",
        "सर्वोत्कृष्ट पुरुष अभिनय (उत्तेजनार्थ)",
        "सर्वोत्कृष्ट प्रकाशयोजना (तृतीय)",
        "सर्वोत्कृष्ट पुरुष अभिनय (तृतीय)",
      ],
    },
    {
      name: "पुरुषोत्तम करंडक २०२५",
      items: [
        "अंतिम फेरी",
        "अनंत नारायण करंडक – सर्वोत्कृष्ट लेखन",
        "सर्वोत्कृष्ट आयोजित संघ",
        "सर्वोत्कृष्ट अभिनय (उत्तेजनार्थ)",
      ],
    },
    {
      name: "दाजीकाका गाडगीळ करंडक २०२५",
      items: ["अंतिम फेरी"],
    },
  ];

  const bijagiriAwards = [
    {
      name: "पुरुषोत्तम करंडक",
      items: ["काकाजी जोगळेकर पुरस्कार – द्वितीय सर्वोत्कृष्ट स्त्री अभिनय"],
    },
    {
      name: "शिवसेना करंडक",
      items: ["सर्वोत्कृष्ट स्त्री अभिनय"],
    },
    {
      name: "भरत करंडक",
      items: ["उत्तेजनार्थ स्त्री अभिनय"],
    },
    {
      name: "दाजीकाका गाडगीळ करंडक",
      items: ["उत्तेजनार्थ स्त्री अभिनय"],
    },
  ];

  return (
    <section id="awards" className="relative py-24 md:py-32">
      <div className="absolute inset-0 spotlight opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center reveal">
          <p className="text-4xl">🏆</p>
          <SectionEyebrow className="mt-3">Award Winning Performances</SectionEyebrow>
          <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
            पुरस्कारांचा गौरव
          </h2>
        </div>

        <div className="mt-16 reveal">
          <h3 className="font-devanagari text-center text-3xl leading-normal text-gold-gradient">कोयता</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {koytaAwards.map((award) => (
              <div
                key={award.name}
                className="reveal glass-card flex flex-col gap-3 rounded-2xl p-6 hover-lift"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--gold)]/40 bg-charcoal/60">
                  <span className="text-gold text-xl">🏆</span>
                </div>
                <p className="font-devanagari text-xl text-gold-gradient">{award.name}</p>
                <ul className="space-y-1 font-devanagari-body text-sm text-foreground/85">
                  {award.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold/80">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 reveal">
          <h3 className="font-devanagari text-center text-3xl leading-normal text-gold-gradient">बिजागिरी</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bijagiriAwards.map((award) => (
              <div
                key={award.name}
                className="reveal glass-card flex flex-col gap-3 rounded-2xl p-6 hover-lift"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--gold)]/40 bg-charcoal/60">
                  <span className="text-gold text-xl">🏆</span>
                </div>
                <p className="font-devanagari text-xl text-gold-gradient">{award.name}</p>
                <ul className="space-y-1 font-devanagari-body text-sm text-foreground/85">
                  {award.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold/80">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const items = [
    { ratio: "aspect-square", src: img1 },
    { ratio: "aspect-square", src: img2 },
    { ratio: "aspect-[4/3]", src: img3 },
    { ratio: "aspect-[3/4]", src: img4 },
    { ratio: "aspect-square", src: img5 },
    { ratio: "aspect-[4/3]", src: img6 },
    { ratio: "aspect-[4/3]", src: img7 },
    { ratio: "aspect-[4/3]", src: img8 },
    { ratio: "aspect-[4/3]", src: img9 },
    { ratio: "aspect-[4/3]", src: img10 },
  ];
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center reveal">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
            क्षणचित्रे
          </h2>
        </div>
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:balance]">
          {items.map((it) => (
            <figure
              key={it.src}
              className={`reveal mb-4 break-inside-avoid glass-card ${it.ratio} group relative overflow-hidden rounded-2xl`}
            >
              <img
                src={it.src}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-[0.65rem] uppercase tracking-[0.35em] text-gold/90">
                {/* {it.label} */}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Presentors ---------------- */
function Presentors() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-3xl px-5 text-center reveal">
        <SectionEyebrow>प्रस्तुत करणारे · Presented By</SectionEyebrow>
        <div className="mt-8 glass-card rounded-2xl px-8 py-12 hover-lift">
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-[var(--gold)]/40 bg-black/50 p-2 shadow-[var(--shadow-gold)]">
            <img
              src={LOGO_URL}
              alt="PVG's COET Arts Circle"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <h3 className="font-devanagari mt-6 text-2xl md:text-3xl text-foreground/95 leading-snug">
            पुणे विद्यार्थी गृहाचे कॉलेज ऑफ इंजिनिअरिंग, टेक्नॉलॉजी अँड मॅनेजमेंट, पुणे
          </h3>
          <div className="mx-auto mt-5 h-px w-16 gold-divider" />
          <p className="font-display mt-5 text-2xl md:text-3xl text-gold-gradient">
            {ORG_SHORT}
          </p>
          <p className="font-devanagari-body mt-4 text-sm text-muted-foreground">
            मराठी रंगभूमीच्या सेवेत समर्पित
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tickets ---------------- */
function Tickets() {
  return (
    <section id="tickets" className="relative py-24 md:py-32">
      <div className="absolute inset-0 spotlight" />
      <div className="relative mx-auto max-w-4xl px-5">
        <div className="reveal glass-card overflow-hidden rounded-3xl">
          <div className="relative p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.82 0.14 82 / 30%), transparent 60%)",
              }}
            />
            <div className="relative">
              <SectionEyebrow>Tickets</SectionEyebrow>
              <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
                आपली जागा राखीव करा
              </h2>
              <div className="mx-auto mt-8 inline-flex items-baseline gap-2">
                <span className="font-display text-7xl md:text-8xl text-gold-gradient">
                  ₹200
                </span>
                <span className="text-sm uppercase tracking-[0.3em] text-gold/70">
                  / seat
                </span>
              </div>
              <p className="mt-4 text-muted-foreground">Book Your Seats Now</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP1}?text=I%20want%20to%20book%20tickets%20for%20Rang%20Tech...%20Rangat%20Navi!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--gold)]/40 bg-charcoal/40 px-10 py-4 text-base font-medium text-gold backdrop-blur hover:bg-charcoal/70"
                >
                  💬 Book via WhatsApp
                </a>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Booking coming soon on BookMyShow · District · Direct Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 text-center reveal">
        <SectionEyebrow>Contact</SectionEyebrow>
        <h2 className="font-devanagari mt-4 text-4xl md:text-5xl leading-normal text-gold-gradient">
          संपर्क
        </h2>
        <div className="mt-10 glass-card flex flex-col gap-6 rounded-2xl p-10">
          <p className="font-display mt-3 text-3xl text-foreground/95">प्रज्वल मेरगळ</p>
          <p className="font-display mt-2 text-xl text-gold">📞 {PHONE_DISPLAY1}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:+91${PHONE1}`}
              className="rounded-full bg-gold-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)]"
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--gold)]/40 bg-charcoal/40 px-7 py-3 text-sm font-medium text-gold hover:bg-charcoal/70"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="font-display mt-3 text-3xl text-foreground/95">भूमी नारंग</p>
          <p className="font-display mt-2 text-xl text-gold">📞 {PHONE_DISPLAY2}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:+91${PHONE2}`}
              className="rounded-full bg-gold-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)]"
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP2}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--gold)]/40 bg-charcoal/40 px-7 py-3 text-sm font-medium text-gold hover:bg-charcoal/70"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-[var(--gold)]/15 pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="PVG's COET Arts Circle"
                className="h-14 w-14 object-contain rounded-full border border-[var(--gold)]/30 bg-black/50 p-1"
              />
              <p className="font-devanagari text-2xl text-gold-gradient">रंगत नवी</p>
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-gold/70">
              Presented by
            </p>
            <p className="mt-2 font-display text-lg text-foreground/90">{ORG_SHORT}</p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground leading-relaxed">
              {ORG_FULL}
            </p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/70">
              Follow
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-muted-foreground hover:text-gold" href="https://www.instagram.com/pvgartscircle?igsh=MXdwM2xrYThrYng0MQ==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/70">
              संपर्क
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-gold" href={`tel:+91${PHONE1}`}>
                  📞 {PHONE_DISPLAY1}
                </a> <br />

                <a className="text-muted-foreground hover:text-gold" href={`tel:+91${PHONE2}`}>
                  📞 {PHONE_DISPLAY2}
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-gold"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 gold-divider h-px" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 {ORG_SHORT}. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-gold">❤</span> for Marathi Theatre.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Shared ---------------- */
function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.65rem] uppercase tracking-[0.25em] text-gold/80 ${className}`}
    >
      {children}
    </p>
  );
}
