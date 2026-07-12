/** Central content + contact data for The Ascend. */

export const company = {
  name: "The Ascend",
  tagline: "Your Partner for People Transformation",
  address: "7431, Blundell Road, Richmond, BC, V6Y 3G8",
  email: "info@theascend.ca",
  whatsapp: "+1 (236) 990-0625",
  /** Digits only, for wa.me links */
  whatsappDigits: "12369900625",
  hours: [
    { day: "Mon – Fri", time: "09:00 a.m. – 05:00 p.m." },
    { day: "Sat – Sun", time: "Closed" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/program", label: "Signature Program" },
  { href: "/perspectives", label: "Perspectives" },
] as const;

/* ---------------- Images (Unsplash) ---------------- */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  /* The one landscape kept by request: the summit hero */
  heroSummit: u("photo-1506905925346-21bda4d32df4", 2200),

  /* People & workplace photography (all subjects verified) */
  teamLaughing: u("photo-1522202176988-66273c2fd55f"),
  teamTable: u("photo-1543269865-cbf427effbad"),
  openOffice: u("photo-1556761175-b413da4baf72", 2000),
  meetingGolden: u("photo-1517048676732-d65bc937f952", 2000),
  teamAbove: u("photo-1521737711867-e3b97375f902"),
  teamLaptop: u("photo-1531545514256-b1400bc00f31", 2000),
  whiteboardStrategy: u("photo-1557804506-669a67965ba0"),
  lectureHall: u("photo-1544531585-9847b68c8c86", 2000),
  conferenceDark: u("photo-1540575467063-178a50c2df87", 2000),
  typingDark: u("photo-1486312338219-ce68d2c6f44d", 2000),
  handshake: u("photo-1521791136064-7986c2920216", 2000),
  teamHands: u("photo-1521737604893-d14cc237f11d"),
  teamOffice: u("photo-1522071820081-009f0129c71c"),
  meeting: u("photo-1552664730-d307ca884978"),
  seminar: u("photo-1524178232363-1fb2b075b655"),
  presentation: u("photo-1542744173-8e7e53415bb0"),
  laptopLearning: u("photo-1501504905252-473c47e087f8"),
  whiteboard: u("photo-1531482615713-2afd69097998"),
  mentoring: u("photo-1600880292203-757bb62b4baf"),
};

/* ---------------- Services ---------------- */

export type Service = {
  slug: string;
  title: string;
  short: string;
  pitch: string;
  offers: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "talent-management",
    title: "Talent Management Services",
    short:
      "Identify, develop, and retain top talent through strategic consulting, 9-box assessments, succession planning, and tailored development plans.",
    pitch:
      "We partner with you to design talent strategies that identify, grow, and retain high-potential individuals, so you're never caught off guard by talent gaps. Let's future-proof your workforce.",
    offers: [
      "Strategic Talent Management Consultancy",
      "Tailored Talent Strategy Development",
      "Talent Assessment & 9-Box Placement",
      "Succession Planning & Pipeline Optimisation",
      "Development Planning for Future Leaders",
      "Customised Leadership Coaching",
    ],
    image: img.whiteboardStrategy,
    imageAlt: "Team mapping out a talent strategy on a whiteboard",
  },
  {
    slug: "leadership-assessments",
    title: "Leadership Assessments",
    short:
      "Reveal current capabilities and development needs with multi-perspective feedback aligned to your leadership framework.",
    pitch:
      "Are you uncertain whether your leaders are ready to meet tomorrow's challenges? We help you pinpoint leadership strengths and gaps with science-backed tools, so you can build a leadership pipeline that is aligned, agile, and equipped for impact.",
    offers: [
      "360° Feedback Surveys (Design, Rollout, Reporting)",
      "Leadership Competency Frameworks",
      "Custom Leadership Assessments",
      "Personality Tools (Hogan, MBTI, DISC, etc.)",
    ],
    image: img.mentoring,
    imageAlt: "Two professionals in a coaching conversation",
  },
  {
    slug: "employee-surveys",
    title: "Employee Surveys",
    short:
      "Turn employee feedback into strategic actions that build trust, boost morale, and improve performance.",
    pitch:
      "Not sure what's driving (or draining) engagement in your company? We help you listen deeply and act decisively. We go beyond data collection and help you turn employee feedback into strategic actions that build trust, boost morale, and improve performance.",
    offers: [
      "Customized Employee Engagement Surveys",
      "Pulse Checks & Feedback Snapshots",
      "Culture Diagnostics & Alignment Solutions",
      "Exit & Stay Interviews",
      "Action Planning Based on Survey Insights",
    ],
    image: img.teamHands,
    imageAlt: "Hands joined together, symbolizing teamwork and collaboration",
  },
  {
    slug: "learning-management",
    title: "Learning Management Solutions",
    short:
      "Custom e-learning, microlearning, and full LMS support that grow capability without slowing your team down.",
    pitch:
      "Training shouldn't be generic or hard to access. We design meaningful, modern learning experiences tailored to your business: a scalable, digital-first learning ecosystem that drives employee capability and business agility without overwhelming your team.",
    offers: [
      "Bespoke E-Learning Module Creation",
      "Microlearning Solutions for Fast Skill Building",
      "LMS Hosting, User Support & Technical Admin",
      "Learning Experience Strategy & Digital Content",
    ],
    image: img.laptopLearning,
    imageAlt: "Person learning on a laptop in a bright workspace",
  },
];

/* ---------------- Signature Program ---------------- */

export const program = {
  impact: [
    "Improved business performance",
    "Higher level of stakeholder engagement",
    "Stronger and focused leadership",
    "Right team and culture alignment",
  ],
  challenges: [
    {
      title: "Learning Retention Decline",
      body: "Without reinforcement, most learning is forgotten. Our journeys combat this with continuous learning touchpoints and practical application.",
    },
    {
      title: "The Gap Between Learning and Action",
      body: "We give learners the tools and environments they need to apply what they learn, and we make sure the system around them supports it.",
    },
    {
      title: "The Challenge of Change",
      body: "Learning requires unlearning, experimentation, and resilience. We embed support mechanisms to sustain motivation and progress.",
    },
  ],
  phases: [
    {
      step: "01",
      title: "Discover",
      body: "We begin by mapping out your needs, context, and success indicators.",
    },
    {
      step: "02",
      title: "Define",
      body: "We clarify desired behaviours, align learning goals with KPIs, and set strategic priorities.",
    },
    {
      step: "03",
      title: "Conceptualize",
      body: "We co-design a high-level experience blueprint in collaboration with you.",
    },
    {
      step: "04",
      title: "Customize & Build",
      body: "We develop a tailored journey with rich, multi-modal learning experiences.",
    },
    {
      step: "05",
      title: "Launch, Evaluate & Sustain",
      body: "We deliver, track, and continuously refine based on real-time insights. Coaching, on-the-job tools, and reflection-based assignments embed the learning into daily work for long-term behaviour change.",
    },
  ],
  interventions: [
    {
      title: "Reflection-Based Learning",
      body: "Converting experience into learning through journaling, guided discussions, and coaching sessions.",
    },
    {
      title: "Blended Formats",
      body: "Combines digital, experiential, and social learning for multi-layered impact.",
    },
    {
      title: "Peer Learning",
      body: "Encourages knowledge-sharing and active reflection through collaboration.",
    },
    {
      title: "Group Projects",
      body: "Drives real-world application by solving business problems together.",
    },
    {
      title: "Psychometric Assessments",
      body: "Builds self-awareness and informs personal development priorities.",
    },
  ],
};
