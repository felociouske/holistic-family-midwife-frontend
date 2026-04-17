import React from "react";
import { Link } from "react-router-dom";
import {
  Heart, Baby, Users, Stethoscope, Calendar,
  BookOpen, UserCheck, ArrowRight, CheckCircle, Sparkles,
} from "lucide-react";
import prenatalImage from "/assets/prenatal-care.jpg";
import postpartumImage from "/assets/postpartum.jpg";
import consultationImage from "/assets/consultations.jpg";
import sharedResponsibilityImage from "/assets/shared-responsibility.jpg";
import preconceptionCareImage from "/assets/preconception-care.jpg";
import labourImage from "/assets/labour.jpg";
import empowermentImage from "/assets/empowerment.jpg";
import girlSessionImage from "/assets/girls-session.jpg";
import sessionImage from "/assets/session2.jpg";


const mainServices = [
  {
    icon: Heart,
    title: "Antenatal Care & Follow-Up",
    image: prenatalImage,
    description:
      "From your first confirmation of pregnancy through to the final weeks before birth, our antenatal care is built around you. We conduct thorough physical examinations and health assessments at every visit, coordinating lab work, screening tests, and ultrasounds to keep a close eye on both you and your growing baby. Our midwives provide personalised nutritional counseling, lifestyle guidance, and fetal growth monitoring so nothing is left to chance. We also work with you to develop a birth plan that reflects your values and preferences, offering regular prenatal education and managing any minor discomforts that arise along the way.",
    frequency: "Monthly visits until 28 weeks, bi-weekly until 36 weeks, then weekly until birth.",
    accent: "#f43f5e",
  },
  {
    icon: Stethoscope,
    title: "Consultations",
    image: consultationImage,
    description:
      "Our consultation service gives you dedicated, unhurried time with an experienced midwife. Whether you are seeking pre-pregnancy health optimisation advice, exploring your birth options, requesting a second opinion, or navigating fertility and conception questions, we are here to guide you. Each session is fully personalised.We listen carefully, explain your options clearly, and help you move forward with confidence. Consultations are available as one-off appointments or as part of an ongoing support package.",
    frequency: "Available by appointment for single sessions or ongoing support packages.",
    accent: "#0ea5e9",
  },
  {
    icon: Users,
    title: "Partner Health: A Shared Responsibility",
    image: sharedResponsibilityImage,
    description:
      "A healthy pregnancy begins long before conception, and both partners play an important role. Our partner health programme offers comprehensive preconception health assessments for couples, including male fertility evaluation, joint lifestyle and nutrition guidance, and genetic counseling. We also address sexual health, stress management, and emotional readiness for parenthood. By supporting both of you together, we help lay the healthiest possible foundation for your growing family.",
    frequency: "Typically 2–4 sessions, flexibly scheduled to suit the couple.",
    accent: "#8b5cf6",
  },
  {
    icon: Baby,
    title: "Postpartum Care & Follow-Up",
    image: postpartumImage,
    description:
      "The weeks after birth are a time of profound change physically, emotionally, and practically. Our postpartum care covers complete physical examinations, breastfeeding and lactation support, newborn care education, and emotional wellbeing assessments. We monitor your physical recovery, provide wound care guidance, discuss contraception and future family planning, and help you navigate your return to normal activities at a pace that feels right for you and your baby.",
    frequency: "Visits at 1–2 days, 1–2 weeks, and 6 weeks postpartum, with additional visits as needed.",
    accent: "#f59e0b",
  },
  {
    icon: Calendar,
    title: "Preconception Care",
    image: preconceptionCareImage,
    description:
      "Starting your pregnancy journey in the best possible health makes a real difference to outcomes for both mother and baby. Our preconception care begins with a comprehensive health history review and physical examination, followed by pre-pregnancy screening tests and immunisations where necessary. We assess your nutrition, review any medications, support management of chronic conditions, and provide fertility awareness and conception timing guidance.",
    frequency: "Initial comprehensive visit with follow-ups as needed before conception.",
    accent: "#10b981",
  },
  {
    icon: UserCheck,
    title: "Preparation for Labor & Delivery",
    image: labourImage,
    description:
      "Feeling informed and prepared can transform your experience of labour and birth. Our preparation programme covers the full journey from understanding the stages of labour and your pain management options, to breathing techniques, relaxation exercises, and the practicalities of hospital or birth centre procedures. We help you and your partner understand your roles during delivery, guide you in creating a personalised birth plan, and begin preparing you for the postpartum period ahead.",
    frequency: "6–8 week course or condensed weekend workshops.",
    accent: "#14b8a6",
  },
  {
    icon: Heart,
    title: "Lamaze Sessions",
    image: null,
    description:
      "Lamaze is one of the most trusted and evidence-based approaches to childbirth education in the world, and our sessions bring this philosophy to life in a warm, supportive setting. We guide you through proven breathing techniques for managing labour pain naturally, relaxation and visualisation exercises, and a range of labour positions and movement strategies designed to work with your body. Your partner is a central part of the process, we equip them with the coaching skills to support you through every contraction.",
    frequency: "6-week course with weekly 2-hour sessions, or an intensive weekend format.",
    accent: "#ec4899",
  },
  {
    icon: Baby,
    title: "Baby Nursing Assistance",
    image: null,
    description:
      "Breastfeeding is one of the most natural things in the world, but it does not always come naturally at first, and that is completely normal. Our baby nursing assistance service offers hands-on, compassionate support from an experienced lactation specialist. We assess and correct latch difficulties, guide you through comfortable positioning, and evaluate your milk supply with practical strategies to support it.",
    frequency: "Initial assessment within 48 hours of birth, with follow-ups at 1 week, 2 weeks, and 1 month.",
    accent: "#0ea5e9",
  },
];

const faqs = [
  {
    question: "What is included in antenatal care visits?",
    answer:
      "Each antenatal visit includes checking your blood pressure, weight, urine, and baby's heart rate. We measure your belly to track baby's growth, discuss any concerns, perform necessary screenings, and provide education on pregnancy wellness. Visits typically last 30–45 minutes to ensure all your questions are answered.",
  },
  {
    question: "How does partner health affect pregnancy?",
    answer:
      "Partner health plays a crucial role in conception and pregnancy outcomes. Male fertility, lifestyle factors, and genetic health all contribute to successful conception and a healthy pregnancy. Our partner health programme addresses nutrition, exercise, stress management, and overall wellness for both partners.",
  },
  {
    question: "What does labour and delivery preparation include?",
    answer:
      "Our preparation programme covers everything from understanding labour stages, pain management options, breathing techniques, and comfort measures, to creating your birth plan and preparing for the postpartum period. We offer both group classes and private sessions to suit your needs.",
  },
  {
    question: "Do you provide teenage reproductive health education?",
    answer:
      "Yes. We offer age-appropriate, comprehensive reproductive health education for teenagers. Our programmes cover puberty, menstrual health, healthy relationships, and prevention education in a safe, supportive environment. We can work with schools, community groups, or provide individual sessions.",
  },
  {
    question: "What is preconception care and when should I start?",
    answer:
      "Preconception care helps optimise your health before pregnancy. Ideally, you should start 3–6 months before trying to conceive. We will assess your overall health, address any risk factors, optimise nutrition, review medications, and ensure you are physically and emotionally ready for pregnancy.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance plans and are happy to verify your coverage. We also offer self-pay options and flexible payment plans. Contact us to discuss your specific insurance or payment needs.",
  },
];


const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-[#ece9e3]">
      <button
        className="w-full flex items-start justify-between gap-6 py-7 text-left cursor-pointer bg-transparent border-none outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-[22px] font-medium text-[#111] leading-snug">
          {question}
        </span>
        <span
          className={`text-2xl text-[#ec4899] flex-shrink-0 mt-0.5 transition-transform duration-300 select-none ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-7 font-sans text-[15px] font-light text-[#666] leading-[1.85]">
          {answer}
        </p>
      )}
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Services = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] font-sans text-[#1a1a1a]">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[72vh] flex items-center overflow-hidden py-20"
        style={{ background: "linear-gradient(150deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
      >
        {/* noise */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          }}
        />
        {/* pink glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 700, height: 700,
            background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
            top: -200, right: -150,
          }}
        />
        {/* indigo glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            bottom: -150, left: -100,
          }}
        />

        <div className="relative z-10 max-w-[860px] mx-auto px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm text-white/75 text-xs tracking-[2px] uppercase font-sans">
            <Sparkles size={13} />
            Holistic Maternal Care
          </div>

          <h1 className="font-serif text-[clamp(52px,8vw,96px)] font-normal leading-[1.05] text-white tracking-[-1px] mb-3">
            Services Designed<br />
            for{" "}
            <em className="text-[#f9a8d4]" style={{ fontStyle: "italic" }}>
              Your Journey
            </em>
          </h1>

          <p className="font-sans text-lg font-light text-white/60 max-w-[560px] mx-auto mt-6 mb-12 leading-[1.7] tracking-[0.2px]">
            From preconception through postpartum, we provide personalised
            midwifery care tailored to your unique needs and goals.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-[4px] font-sans text-sm font-medium tracking-[1px] uppercase no-underline transition-all duration-200 hover:-translate-y-px"
            >
              Schedule a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-9 py-4 bg-transparent hover:border-white/60 hover:text-white text-white/80 border border-white/25 rounded-[4px] font-sans text-sm font-normal tracking-[1px] uppercase no-underline transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ──────────────────────────────────────────────── */}
      <section className="py-[120px] bg-[#faf9f7]">
        <div className="text-center max-w-[640px] mx-auto mb-20 px-8">
          <p className="font-sans text-[11px] tracking-[3px] uppercase text-[#ec4899] font-medium mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-medium leading-[1.1] text-[#111] tracking-[-0.5px] mb-5">
            Our Core Services
          </h2>
          <p className="font-sans text-[17px] font-light text-[#666] leading-[1.7]">
            Comprehensive care at every stage of your maternal health journey.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-[4px]">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid ${service.image ? "lg:grid-cols-2" : "grid-cols-1"} min-h-[560px] bg-white border border-[#ece9e3] overflow-hidden group max-[900px]:grid-cols-1 max-[900px]:min-h-0`}
              >
                {/* image */}
                {service.image && (
                  <div className={`relative overflow-hidden min-h-[480px] max-[900px]:min-h-[320px] ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: isReverse
                          ? "linear-gradient(to left, rgba(0,0,0,0.08) 0%, transparent 100%)"
                          : "linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 100%)",
                      }}
                    />
                  </div>
                )}

                {/* text */}
                <div
                  className={`flex flex-col justify-center gap-6 px-14 py-16 max-[900px]:px-7 max-[900px]:py-10 ${
                    service.image ? (isReverse ? "lg:order-1" : "lg:order-2") : ""
                  }`}
                >
                  <div className="font-serif text-[64px] font-normal text-[#ece9e3] leading-none tracking-[-2px] -mb-2">
                    0{index + 1}
                  </div>

                  <div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="h-[3px] w-9 rounded-sm" style={{ background: service.accent }} />
                      <span
                        className="font-sans text-[11px] tracking-[2px] uppercase font-medium"
                        style={{ color: service.accent }}
                      >
                        Service {index + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-[clamp(28px,3vw,40px)] font-medium text-[#111] leading-[1.2] tracking-[-0.3px] m-0">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-sans text-base font-light text-[#555] leading-[1.85] m-0">
                    {service.description}
                  </p>

                  <div
                    className="flex items-start gap-3 px-5 py-[18px] bg-[#faf9f7] border-l-[3px] rounded-r-[4px]"
                    style={{ borderColor: service.accent }}
                  >
                    <span className="font-sans text-[11px] tracking-[2px] uppercase text-[#999] font-medium whitespace-nowrap mt-0.5">
                      Schedule
                    </span>
                    <span className="font-sans text-sm text-[#444] leading-[1.6]">
                      {service.frequency}
                    </span>
                  </div>

                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2.5 self-start px-7 py-3.5 border border-[#1a1a2e] rounded-[4px] text-[#1a1a2e] font-sans text-[13px] font-medium tracking-[1px] uppercase no-underline transition-all duration-200 hover:bg-[#1a1a2e] hover:text-white"
                  >
                    Book This Service
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TEENAGE EMPOWERMENT ───────────────────────────────────────────── */}
      <section
        className="py-[120px] relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #1a1a2e 0%, #16213e 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-12 max-[900px]:px-6">
          {/* header */}
          <div className="text-center mb-[72px]">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-7 rounded-full border border-[#f9a8d4]/30 text-[#f9a8d4] font-sans text-[11px] tracking-[2px] uppercase">
              <BookOpen size={13} />
              Featured Programme
            </div>
            <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-normal text-white leading-[1.1] mb-5">
              Teenage Empowerment &<br />
              <em className="text-[#f9a8d4]" style={{ fontStyle: "italic" }}>Reproductive Education</em>
            </h2>
            <p className="font-sans text-[17px] font-light text-white/55 max-w-[600px] mx-auto leading-[1.8]">
              Building a foundation of knowledge, confidence, and healthy
              choices for young people through comprehensive, age-appropriate education.
            </p>
          </div>

          {/* image grid */}
          <div className="grid grid-cols-3 gap-[2px] mb-[72px] h-[460px] max-[900px]:grid-cols-1 max-[900px]:h-auto">
            {[
              { src: empowermentImage, alt: "Group education session", label: "Group Workshops" },
              { src: sessionImage,     alt: "Individual counseling",   label: "Individual Sessions" },
              { src: girlSessionImage, alt: "School programmes",       label: "School Programmes" },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden max-[900px]:h-[260px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover block transition-all duration-[600ms] brightness-[0.85] hover:scale-105 hover:brightness-95"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 pt-10 px-6 pb-6 font-serif text-[22px] font-normal text-white"
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* two-column content */}
          <div className="grid grid-cols-2 gap-12 items-start max-[900px]:grid-cols-1">
            {/* left */}
            <div>
              <div className="text-white/75 font-sans text-base font-light leading-[1.9]">
                <h3 className="font-serif text-[32px] font-normal text-white mb-5 leading-[1.2]">
                  Why This Matters
                </h3>
                <p>
                  Early education empowers young people to make informed decisions about their
                  health, relationships, and future. Our programmes provide a safe, supportive
                  environment where teenagers can learn, ask questions, and develop confidence.
                  We work with families, schools, and communities to ensure comprehensive,
                  culturally sensitive education that respects values while providing essential
                  health information.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-[2px] mt-10 max-[900px]:grid-cols-1">
                {[
                  { title: "School Workshops",       desc: "Group sessions for students in educational settings." },
                  { title: "Community Programmes",   desc: "Community-based group education and support." },
                  { title: "Individual Counselling", desc: "Private one-on-one sessions for personalised guidance." },
                  { title: "Parent-Teen Sessions",   desc: "Joint sessions to improve family communication." },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    <p className="font-serif text-xl text-[#f9a8d4] mb-2">{f.title}</p>
                    <p className="font-sans text-[13px] text-white/50 font-light leading-[1.6] m-0">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right — checklist */}
            <div className="flex flex-col gap-[2px]">
              {[
                "Age-appropriate reproductive health education",
                "Puberty and body changes discussions",
                "Menstrual health and hygiene education",
                "Healthy relationships and consent education",
                "Prevention of teenage pregnancy",
                "STI awareness and prevention",
                "Mental health and self-esteem support",
                "Parent-teen communication facilitation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-5 py-4 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-200"
                >
                  <div className="w-5 h-5 rounded-full bg-[#f9a8d4]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} color="#f9a8d4" />
                  </div>
                  <span className="font-sans text-sm text-white/65 font-light leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* bottom CTA */}
          <div className="text-center mt-16">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 mr-3 px-9 py-4 bg-white hover:bg-[#f9a8d4] text-[#1a1a2e] rounded-[4px] font-sans text-[13px] font-medium tracking-[1px] uppercase no-underline transition-all duration-200 hover:-translate-y-px"
            >
              Schedule Consultation
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 bg-transparent hover:border-white/50 hover:text-white text-white/70 border border-white/20 rounded-[4px] font-sans text-[13px] font-normal tracking-[1px] uppercase no-underline transition-all duration-200"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[760px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-[11px] tracking-[3px] uppercase text-[#ec4899] font-medium mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-medium leading-[1.1] text-[#111] tracking-[-0.5px]">
              Frequently Asked Questions
            </h2>
          </div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-[120px] bg-[#faf9f7]">
        <div className="max-w-[820px] mx-auto px-8 text-center">
          <div className="w-12 h-[2px] bg-[#ec4899] mx-auto mb-10" />

          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-normal text-[#111] leading-[1.1] tracking-[-0.5px] mb-6">
            Ready to Begin<br />
            <em className="text-[#ec4899]" style={{ fontStyle: "italic" }}>Your Journey?</em>
          </h2>

          <p className="font-sans text-[17px] font-light text-[#777] max-w-[520px] mx-auto mb-12 leading-[1.75]">
            Schedule a consultation to learn more about our services and
            discuss how we can support your maternal health journey.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#1a1a2e] hover:bg-[#ec4899] text-white rounded-[4px] font-sans text-[13px] font-medium tracking-[1px] uppercase no-underline transition-all duration-200 hover:-translate-y-px"
            >
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-9 py-4 bg-transparent hover:border-[#1a1a2e] text-[#1a1a2e] border border-[#ccc] rounded-[4px] font-sans text-[13px] font-normal tracking-[1px] uppercase no-underline transition-all duration-200"
            >
              Learn About Us
            </Link>
          </div>

          <div className="flex gap-8 justify-center flex-wrap">
            <a
              href="tel:0797735027"
              className="font-sans text-sm text-[#888] hover:text-[#ec4899] no-underline tracking-[0.5px] transition-colors duration-200"
            >
              +254 797 735 027
            </a>
            <a
              href="mailto:info@holisticfamilymidwife.com"
              className="font-sans text-sm text-[#888] hover:text-[#ec4899] no-underline tracking-[0.5px] transition-colors duration-200"
            >
              info@holisticfamilymidwife.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;