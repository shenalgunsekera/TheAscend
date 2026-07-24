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
  /* The one landscape kept by request: the summit hero (lighter crop) */
  heroSummit: u("photo-1464822759023-fed622ff2c3b", 2200),

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

  /* --- Service & section imagery (all verified in this pass) --- */
  talentTeam: u("photo-1543269865-cbf427effbad", 1600),
  leadershipAssess: u("photo-1552664730-d307ca884978", 1600),
  surveyExpressions: u("photo-1522202176988-66273c2fd55f", 1600),
  coachingOneToOne: u("photo-1573497620053-ea5300f94f21", 1400),
  aboutStory: u("photo-1540575467063-178a50c2df87", 2000),
  whyChoose: u("photo-1531545514256-b1400bc00f31", 1600),
  ctaTeam: u("photo-1556761175-b413da4baf72", 2000),
  programWorkshop: u("photo-1552581234-26160f608093", 2000),
  perspectivesHands: u("photo-1591115765373-5207764f72e7", 2000),
  visionImg: u("photo-1517245386807-bb43f82c33c4", 1200),
  missionImg: u("photo-1600880292089-90a7e086ee0c", 1200),
  beliefImg: u("photo-1521737711867-e3b97375f902", 1200),
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
      "Identify, develop, and retain your organization's top talent through talent assessment, succession planning, and leadership development.",
    pitch:
      "Identify, develop, and retain your organization's top talent through a strategic approach to talent assessment, succession planning, and leadership development. We help align your talent strategy with your business goals, ensuring you have a strong leadership pipeline and the right people ready for future success.",
    offers: [
      "Strategic Talent Management Consultancy",
      "Tailored Talent Strategy Development",
      "Talent Assessment & 9-Box Placement",
      "Succession Planning & Pipeline Optimisation",
      "Development Planning for Future Leaders",
      "Customised Leadership Coaching",
    ],
    image: img.talentTeam,
    imageAlt: "A small team reviewing talent plans together",
  },
  {
    slug: "leadership-assessments",
    title: "Leadership Assessments",
    short:
      "Assess leadership strengths and identify development opportunities through multi-source feedback aligned with your leadership competency framework.",
    pitch:
      "Assess leadership strengths and identify development opportunities through multi-source feedback aligned with your organization's leadership competency framework.",
    offers: [
      "360° Feedback Surveys (Design, Rollout, Reporting)",
      "Leadership Competency Frameworks",
      "Custom Leadership Assessments",
      "Personality Tools (Hogan, MBTI, DISC, etc.)",
    ],
    image: img.leadershipAssess,
    imageAlt: "Leaders reviewing assessment feedback in a meeting",
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
      "Action Planning Based on Survey Insights",
      "Exit Interview Insight Analysis and Action Planning",
    ],
    image: img.surveyExpressions,
    imageAlt: "Colleagues sharing candid feedback in a bright office",
  },
  {
    slug: "learning-management",
    title: "Learning Management Solutions",
    short:
      "Meaningful, modern learning experiences that strengthen capability and support business agility without overwhelming your team.",
    pitch:
      "Training should be easy to access, simple to follow, and enjoyable for every user. We create meaningful, modern learning experiences tailored to your business, building a scalable, digital-first learning ecosystem that strengthens employee capability and supports business agility without overwhelming your team.",
    offers: [
      "Bespoke E-Learning Module Creation",
      "Microlearning Solutions for Fast Skill Building",
      "LMS Hosting, User Support & Technical Admin",
      "Learning Experience Strategy & Digital Content Creation",
    ],
    image: img.laptopLearning,
    imageAlt: "Person learning on a laptop in a bright workspace",
  },
  {
    slug: "leadership-coaching",
    title: "Leadership Coaching",
    short:
      "Develop confident, resilient leaders who drive performance and lasting organisational success through personalized, competency-based coaching.",
    pitch:
      "Develop confident, resilient leaders who drive performance and lasting organisational success. We partner with organizations to develop high-performing leaders and employees through personalized, competency-based coaching. Our coaching identifies individual development needs, aligns growth with organizational goals, and creates practical development plans that drive measurable improvement. By combining targeted coaching with ongoing accountability, we help your people build leadership capability, enhance performance, and achieve sustainable growth, strengthening both individual success and organizational effectiveness.",
    offers: [
      "Psychometric Assessments — including MBTI® and other validated tools to deepen self-awareness based on the client's requirements",
      "Personalized, confidential coaching tailored to individual goals and challenges",
      "Career & Life Planning — supporting clarity on long-term direction and purpose",
      "Personal Development Planning — creating structured pathways to guide continuous growth",
      "Progress Reviews & Feedback — ongoing reflection, accountability, and measurable progress tracking",
      "Post-Program Support — continued guidance to sustain momentum and long-term development",
    ],
    image: img.coachingOneToOne,
    imageAlt: "A one-to-one leadership coaching conversation",
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
  intro:
    "Strong leaders are not developed in a single workshop — they grow through a structured learning journey. Our Signature Leadership Development Program is a customised 6–9-month experience designed to strengthen leadership capability while supporting your organisation's strategic goals. We start by understanding your business, culture, and leadership priorities. Before the program begins, each participant completes leadership competency and personality assessments, giving us valuable insights into their strengths and development opportunities. Using these insights, we create a tailored learning journey that combines three interactive workshops, practical workplace application, and ongoing coaching to reinforce learning and encourage lasting behavioural change. By the end of the program, participants have developed the confidence, skills, and mindset to lead more effectively, while your organisation benefits from stronger leadership capability, improved performance, and measurable business outcomes.",
  whoForTitle: "Who is it for?",
  whoFor:
    "This program is ideal for middle managers, team leaders, and professionals who have recently stepped into senior management roles and are responsible for leading people, driving performance, and delivering results.",
};

/* ---------------- Team ---------------- */

export type Member = {
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string[];
};

export const team: Member[] = [
  {
    name: "Rukmal Bandaranayake",
    role: "Chief Consultant",
    credentials: "Executive Coach · HRM Expert · Leadership Development Facilitator · Faculty Member",
    image: "/team/rukmal.jpg",
    bio: [
      "Rukmal Bandaranayake is an executive coach, leadership development facilitator, and Human Resources professional with more than 15 years of experience leading people and culture initiatives across multinational organisations, including AIA Insurance, MAS Holdings, and HealthRecon Connect LLC.",
      "He specializes in leadership development, organizational effectiveness, talent management, and executive coaching, helping leaders and teams build capability, navigate change, and achieve strategic outcomes. Known for his engaging facilitation style and practical, business-focused approach, Rukmal delivers coaching and learning experiences that create lasting impact.",
      "Based in British Columbia, Rukmal currently serves as a faculty member at University Canada West, where he combines academic insight with extensive industry experience to support professionals, managers, and emerging leaders. He holds a Bachelor's degree in Human Resource Management, an MBA, and a Doctor of Business Administration (DBA) from Swiss School of Business and Management. His doctoral research focused on transformational leadership in the healthcare sector in British Columbia, Canada.",
      "Rukmal is a Certified Executive Coach through the Certified Coaches Federation and an accredited practitioner of the Myers-Briggs Type Indicator. He has also completed executive education at the National University of Singapore. In addition, he is a Chartered Professional in Human Resources (CPHR), a professional member of CIPD, and a member of CIPM Sri Lanka.",
      "Through coaching, consulting, and leadership development programs, Rukmal partners with organizations to strengthen leadership capability, enhance employee engagement, and build high-performing workplace cultures. His approach combines strategic thinking, evidence-based practice, and genuine empathy to help individuals and organizations thrive.",
    ],
  },
  {
    name: "Oshan Withanage",
    role: "Senior Consultant",
    credentials: "HR Consultant",
    image: "/team/oshan.jpg",
    bio: [
      "Oshan Withanage is an HR Consultant at The Ascend, bringing over six years of progressive experience across the technology, healthcare, and professional services sectors. He specializes in delivering practical, people-centered HR solutions that align workforce strategies with business objectives.",
      "Throughout his career, Oshan has led HR transformation initiatives, implemented HRIS platforms, designed talent management frameworks, supported organizational restructuring, and partnered with leadership teams to enhance employee engagement, performance, and organizational culture. He has successfully managed HR strategies for workforces of over 1,000 employees and has extensive expertise in talent acquisition, learning and development, leadership assessment, performance management, employee experience, and HR analytics.",
      "Prior to joining The Ascend, Oshan held senior HR roles at HealthRecon Connect and SLASSCOM, where he drove strategic HR initiatives and contributed to large-scale organizational development and industry-wide capability-building programs.",
      "Oshan holds postgraduate qualifications in Human Resource Management and Project Management from Conestoga College, Canada, an MBA from Cardiff Metropolitan University, UK, and a Bachelor's degree in Business Management from Uva Wellassa University of Sri Lanka. His consulting approach combines strategic insight, data-driven decision-making, and a commitment to creating meaningful and measurable people outcomes.",
    ],
  },
];
