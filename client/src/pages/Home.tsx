import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Car,
  Clock,
  Droplets,
  Flame,
  Heart,
  IdCard,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const WHATSAPP = "https://wa.me/212676777790";
const MENU_LINK = "https://bit.ly/DabaMenu";
const DIRECTIONS_LINK = "https://bit.ly/DabaDirection";
const CHECKIN_LINK = "https://forms.gle/BWa8kLj9dfzGwSWz8";

const RETREATS = [
  {
    title: "Yoga Retreats",
    tag: "Breathe · Move · Restore",
    desc: "Group yoga retreats with a dedicated shala and rooftop deck facing the Atlas mountains.",
    href: "https://yoga-daba.vercel.app",
    image: "/images/hero-handstand.jpg",
  },
  {
    title: "Weddings & Celebrations",
    tag: "Love in the gardens",
    desc: "Intimate garden weddings, henna nights and private celebrations at Daba Village.",
    href: "https://daba-wedding-journey.vercel.app",
    image: "/images/wedding-DSC00029.jpg",
  },
  {
    title: "Sakinah Spiritual Retreat",
    tag: "Find your inner peace",
    desc: "A spiritual retreat to slow down, gather in remembrance and find your Sakinah.",
    href: "https://spiritual-retreat-np.vercel.app",
    image: "/images/courtyard_night.jpg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
  light = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
      <span
        className={`font-sans text-xs tracking-[0.25em] uppercase font-semibold ${light ? "text-[#d4a359]" : "text-primary"}`}
      >
        {eyebrow}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl mt-4 mb-5 ${light ? "text-white" : ""}`}>
        {title} {accent && <span className={`italic font-light ${light ? "text-[#d4a359]" : "text-primary"}`}>{accent}</span>}
      </h2>
      {children && (
        <p className={`font-light leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>{children}</p>
      )}
    </motion.div>
  );
}

function PriceRow({ label, detail, price }: { label: string; detail?: string; price: string }) {
  return (
    <div className="flex items-baseline gap-3 py-3.5 border-b border-border/60 last:border-b-0">
      <div className="min-w-0">
        <p className="font-serif text-lg leading-snug">{label}</p>
        {detail && <p className="text-xs text-muted-foreground font-light mt-0.5">{detail}</p>}
      </div>
      <span className="flex-1 border-b border-dotted border-border translate-y-[-4px] min-w-6" />
      <span className="font-serif text-2xl text-primary whitespace-nowrap">{price}</span>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Daba Village" className="h-11 w-auto" />
          </a>
          <div
            className={`hidden lg:flex items-center gap-7 font-sans text-xs tracking-widest uppercase ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <a href="#plan" className="hover:text-primary transition-colors">Plan your stay</a>
            <a href="#chauffeur" className="hover:text-primary transition-colors">Chauffeur</a>
            <a href="#experiences" className="hover:text-primary transition-colors">Experiences</a>
            <a href="#spa" className="hover:text-primary transition-colors">Hammam & Spa</a>
            <a href="#menu" className="hover:text-primary transition-colors">Food</a>
            <a href="#retreats" className="hover:text-primary transition-colors">Retreats</a>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${scrolled ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : "border-white text-white hover:bg-white hover:text-black"}`}
          >
            <MessageCircle className="w-4 h-4" /> Book
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative h-[92vh] min-h-[640px] max-h-[960px] w-full overflow-hidden flex items-center justify-center">
        <img src="/images/garden_path.jpg" alt="Gardens at Daba Village" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase">🌿 Welcome to Daba Village 🌿</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mt-6">
            Services <span className="italic font-light">&</span> Prices
          </h1>
          <p className="font-sans text-base md:text-lg max-w-2xl mx-auto font-light opacity-90 mt-6 leading-relaxed">
            A stay rooted in nature and well-being, in a sustainable environment surrounded by gardens, flowers and fresh organic produce.
            Everything you can add to your stay — in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#chauffeur"
              className="bg-white text-black hover:bg-white/90 px-8 py-4 text-xs tracking-widest uppercase font-medium inline-flex items-center justify-center gap-2"
            >
              View price list <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-xs tracking-widest uppercase font-medium inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Ask us on WhatsApp
            </a>
          </div>
        </motion.div>
      </header>

      {/* Notice bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-xs tracking-widest uppercase text-center">
          <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> Menus: 48-hour notice required</span>
          <span className="hidden md:inline opacity-50">✦</span>
          <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4" /> Activities: please book 24h in advance</span>
        </div>
      </div>

      {/* Plan your stay */}
      <section id="plan" className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading eyebrow="Before you arrive" title="Plan your" accent="stay">
            To make your stay smooth, share your program with us. Let us know about any allergies or food preferences, and we'll take care of the rest.
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Utensils className="w-5 h-5" />, title: "Our Menu", desc: "Browse the full menu. Reservation required.", href: MENU_LINK, cta: "Open menu" },
              { icon: <MapPin className="w-5 h-5" />, title: "Directions", desc: "A short video to guide you to our gate.", href: DIRECTIONS_LINK, cta: "Watch video" },
              { icon: <IdCard className="w-5 h-5" />, title: "Online Check-in", desc: "Send us passport / ID details for all guests.", href: CHECKIN_LINK, cta: "Check in" },
              { icon: <MessageCircle className="w-5 h-5" />, title: "Your Program", desc: "Tell us your plans, transfers and activities.", href: WHATSAPP, cta: "WhatsApp us" },
            ].map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-border bg-card p-7 hover:border-primary/60 transition-colors flex flex-col"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-5">{c.icon}</div>
                <h3 className="font-serif text-2xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-light mb-6 flex-1">{c.desc}</p>
                <span className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
                  {c.cta} <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeured service */}
      <section id="chauffeur" className="py-24 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/images/retreat_palms.jpg" alt="Palm-lined road near Daba Village" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground px-6 py-5 shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Airport transfer</p>
                <p className="font-serif text-4xl">45 €</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <span className="text-primary font-sans text-xs tracking-[0.25em] uppercase font-semibold inline-flex items-center gap-2">
                <Car className="w-4 h-4" /> Chauffeured service
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
                To go <span className="italic font-light text-primary">further…</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                A private car can be booked for a specific time — ideal for multi-destination trips. We drive you from and to your desired destination.
              </p>

              <div className="bg-card border border-border px-6 py-2">
                <PriceRow label="Airport transfer" detail="One way" price="45 €" />
                <PriceRow label="Medina drop or pick-up" detail="One way" price="45 €" />
                <PriceRow label="Half day" detail="4 hours, between 8 am and 6 pm · then 25 € / hour" price="85 €" />
                <PriceRow label="Full day" detail="8 am to 9 pm · after 9 pm, 30 € / hour" price="180 €" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences: horse riding + pool */}
      <section id="experiences" className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading eyebrow="Activities" title="Experiences" accent="at Daba">
            Spa, hammam, massage, yoga and horse riding — all bookable during your stay. Please book 24h in advance.
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Horse riding */}
            <motion.div {...fadeUp} className="lg:col-span-2 border border-border bg-card overflow-hidden grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src="/images/willow_picnic.jpg" alt="Countryside at the foot of the Atlas" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Equistar Club</span>
                <h3 className="font-serif text-3xl mt-2 mb-4">Horseback Riding</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-1">
                  Set among 12 acres of private open farmland on the outskirts of Marrakech, at the foot of the Atlas mountains — a friendly, professional
                  horse training yard with excellent facilities, where riders of all levels can enjoy their horses. Enjoy a tour between the local
                  villages or a private class.
                </p>
                <div className="flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">From</p>
                    <p className="font-serif text-4xl text-primary">45 € <span className="text-base text-muted-foreground">pp</span></p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Min. 2 people</span>
                </div>
              </div>
            </motion.div>

            {/* Pool heating */}
            <motion.div {...fadeUp} className="border border-border bg-card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/Pool.jpg" alt="Pool at Daba Village" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2"><Waves className="w-4 h-4 text-primary" /> Pool</span>
                <h3 className="font-serif text-3xl mt-2 mb-4">Pool Heating</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-1">
                  Enjoy a warm swim whatever the season — let us know a day ahead so the pool is ready for you.
                </p>
                <div className="border-t border-border pt-5">
                  <p className="font-serif text-4xl text-primary">90 € <span className="text-base text-muted-foreground">/ day</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-8 border border-dashed border-primary/40 bg-primary/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Sun className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm font-light">
                <span className="font-serif text-lg font-medium">Yoga & meditation sessions</span> in our shala or on the rooftop — available on request.
              </p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-1.5 whitespace-nowrap">
              Ask for availability <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hammam & Spa */}
      <section id="spa" className="py-24 md:py-28 bg-[#353c29] text-[#f7f3eb] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionHeading eyebrow="Hammam & Spa" title="Ancestral" accent="rituals" light>
            Rooted in the Moroccan tradition of the 8th century — a moment to cleanse, relax and renew.
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            <motion.div {...fadeUp} className="lg:col-span-2 overflow-hidden min-h-[320px]">
              <img src="/images/evening-pool-relaxation.jpg" alt="Relaxation at Daba Village" className="w-full h-full object-cover" />
            </motion.div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <motion.div {...fadeUp} className="border border-white/15 bg-black/20 p-8">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#d4a359] inline-flex items-center gap-2"><Droplets className="w-4 h-4" /> Signature ritual</span>
                    <h3 className="font-serif text-3xl text-white mt-2">Traditional Hammam</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-serif text-4xl text-white">75 €</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/60">40 min</p>
                  </div>
                </div>
                <p className="text-white/75 font-light text-sm leading-relaxed mb-5">
                  The bathing ritual begins with the application of eucalyptus black soap, followed by a full-body scrub with a kessa glove to cleanse the
                  skin and relax the muscles.
                </p>
                <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#d4a359]/15 text-[#d4a359] text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Free kessa glove included
                </span>
              </motion.div>

              <motion.div {...fadeUp} className="border border-white/15 bg-black/20 p-8 flex items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#d4a359] inline-flex items-center gap-2"><Flame className="w-4 h-4" /> Private use</span>
                  <h3 className="font-serif text-2xl text-white mt-2">Hammam Heating</h3>
                  <p className="text-white/70 font-light text-sm mt-1">Hammam room heated & available for all-day use.</p>
                </div>
                <p className="font-serif text-4xl text-white shrink-0">30 €</p>
              </motion.div>

              <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
                <p className="text-white/70 text-sm font-light inline-flex items-center gap-2">
                  <Moon className="w-4 h-4 text-[#d4a359]" /> Full hammam & massage menu available on request.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4a359] text-black hover:bg-[#e0b26c] px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors whitespace-nowrap"
                >
                  Request spa menu
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Food menu */}
      <section id="menu" className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading eyebrow="Farm to table" title="Food" accent="menu">
            Sharing meals is at the heart of the culinary experience we strive to offer — Moroccan hospitality rooted in family values.
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden"><img src="/images/dinner_stars.jpg" alt="Dinner under the stars" className="w-full h-full object-cover" /></div>
                <div className="aspect-square overflow-hidden"><img src="/images/olives.jpg" alt="Olives from the farm" className="w-full h-full object-cover" /></div>
                <div className="col-span-2 aspect-[2/1] overflow-hidden"><img src="/images/Farm.jpg" alt="Free-range hens at the farm" className="w-full h-full object-cover" /></div>
              </div>
              <div className="bg-muted/40 border border-border p-6">
                <h3 className="font-serif text-xl mb-3 inline-flex items-center gap-2"><Leaf className="w-5 h-5 text-primary" /> From our garden</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We use organic produce, herbs and seasonal vegetables from our garden as much as possible. Our milk is whole, fresh and organic; our eggs
                  are free range. Butter, honey and olive oil come from our farm or local producers, and our jam is homemade from garden fruits.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="border border-primary/40 bg-card p-8 md:p-10 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Prices per person, per meal</p>
                <h3 className="font-serif text-3xl mb-6">Meal plans</h3>
                <PriceRow label="Breakfast" price="25 €" />
                <PriceRow label="Half Board" detail="Breakfast & Lunch, or Breakfast & Dinner" price="59 €" />
                <PriceRow label="Full Board" detail="Breakfast, Lunch & Dinner" price="95 €" />

                <div className="mt-6 flex items-start gap-3 bg-primary/5 p-4">
                  <Baby className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-light">
                    Children under 12 pay <strong className="font-medium">half price</strong>. Free for children under 2.
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-3 bg-muted/50 p-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-light">
                    Each day, let us know your menu for the next couple of days. <strong className="font-medium">48-hour notice required</strong>; please
                    tell us about any allergies or food preferences.
                  </p>
                </div>

                <a
                  href={MENU_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  See the full menu <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our retreats */}
      <section id="retreats" className="py-24 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading eyebrow="Discover more" title="Our retreats" accent="& events">
            Planning something special? Explore our dedicated experiences at Daba Village.
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RETREATS.map((r, i) => (
              <motion.a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden block"
              >
                <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/75">{r.tag}</span>
                  <h3 className="font-serif text-3xl mt-2 mb-3">{r.title}</h3>
                  <p className="text-sm font-light text-white/80 mb-5">{r.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/60 pb-1 group-hover:border-white">
                    Visit website <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src="/images/henna_new.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <motion.div {...fadeUp} className="relative z-10 container mx-auto px-4 text-center text-white max-w-2xl">
          <Heart className="w-6 h-6 mx-auto mb-4 text-[#d4a359]" />
          <h2 className="font-serif text-4xl md:text-5xl mb-5">We look forward to making your stay unforgettable</h2>
          <p className="font-light text-white/80 mb-8">Send us your program, transfers and activities — we'll prepare everything before you arrive.</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 text-xs uppercase tracking-widest font-medium"
          >
            <MessageCircle className="w-4 h-4" /> Book on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background pt-20 pb-10 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            <div>
              <img src="/images/logo.webp" alt="Daba Village" className="h-16 w-auto mb-5 opacity-80" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                A sanctuary of peace in the foothills of the Atlas Mountains. Where tradition meets tranquility.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Route Aurika Km 12, Mohamadia 9, Tameslouht 42312</li>
                <li className="flex gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <a href="tel:+212676777790" className="hover:text-primary">+212 6 76 77 77 90</a>
                </li>
                <li className="flex gap-2">
                  <MessageCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Chat on WhatsApp</a>
                </li>
                <li><a href="mailto:info@dabavillage.com" className="hover:text-primary pl-6">info@dabavillage.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-5">Useful links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><a href={MENU_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Food menu</a></li>
                <li><a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Directions video</a></li>
                <li><a href={CHECKIN_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Online check-in</a></li>
                {RETREATS.map((r) => (
                  <li key={r.href}><a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{r.title}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light tracking-widest uppercase">
            <p>© 2026 Daba Village. All rights reserved.</p>
            <p>Prices in euros · subject to availability</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
