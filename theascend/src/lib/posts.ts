import { img } from "./site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "transform-your-workplace-with-leadership-development",
    title: "Transform Your Workplace with Leadership Development",
    date: "May 18, 2026",
    dateISO: "2026-05-18",
    category: "Talent Management",
    excerpt:
      "Why leadership development is the catalyst for modern workplace transformation, and how to build a future-ready leadership pipeline.",
    image: img.presentation,
    imageAlt: "Leader presenting to a team in a modern office",
    body: [
      { type: "h2", text: "Why Leadership Development Is the Catalyst for Modern Workplace Transformation" },
      {
        type: "p",
        text: "In today's fast-evolving business landscape, the organizations that thrive are not just adapting. They are anticipating change, and at the core of that is strong, agile leadership. Leadership development is no longer a luxury reserved for executive tiers; it's a strategic imperative that fuels engagement, innovation, and long-term resilience across all levels of an organization. Companies in Vancouver and beyond are recognizing that investing in leadership capability directly impacts performance, retention, and customer satisfaction.",
      },
      {
        type: "p",
        text: "Effective leadership development programs address common pain points like communication gaps, inconsistent decision-making, and low team morale. When leaders are equipped with emotional intelligence, change management skills, and strategic thinking frameworks, they create cultures where employees feel valued and aligned with organizational goals. This ripple effect enhances productivity and drives meaningful transformation from within.",
      },
      { type: "h2", text: "Unlock High-Potential Leaders with the Right Assessment Framework" },
      {
        type: "p",
        text: "Identifying future-ready leaders starts with robust leadership assessment tools designed to uncover both visible competencies and latent potential. Effective assessments go beyond personality tests to evaluate strategic thinking, emotional intelligence, and adaptive decision-making, the skills critical for navigating modern workplace challenges. These tools use multi-rater feedback, situational judgment scenarios, and cognitive agility exercises to create a 360-degree view of leadership capacity.",
      },
      {
        type: "p",
        text: "For best results, integrate assessments into ongoing development plans rather than one-time evaluations. This approach supports continuous improvement and succession planning. When calibrated correctly, these tools don't just identify who's ready for promotion. They reveal who can drive transformation.",
      },
      { type: "h2", text: "How Talent Management Systems Drive Retention and Close Skill Gaps" },
      {
        type: "p",
        text: "A well-implemented talent management system helps pinpoint critical skill gaps through data-driven assessments and performance tracking. This enables learning and development teams to deploy targeted training initiatives, such as leadership development programs or competency-based courses, exactly where they are needed. Over time, employees feel more valued and see clear career progression within your organization, which significantly reduces turnover.",
      },
      {
        type: "ul",
        items: [
          "Real-time performance insights to guide coaching conversations",
          "Succession planning tools that identify future leaders",
          "Automated development planning tied to role-specific competencies",
        ],
      },
      { type: "h2", text: "5 Ways Employee Surveys Unlock True Workplace Insights" },
      {
        type: "ul",
        items: [
          "Identify cultural gaps and alignment issues: survey data highlights disconnects between leadership intent and employee experience.",
          "Track engagement trends over time: regular pulse surveys let you correlate dips with specific events and intervene before turnover spikes.",
          "Uncover hidden barriers to performance: anonymous feedback surfaces issues employees may not voice in meetings.",
          "Inform leadership development priorities: insights pinpoint which leadership behaviours are working and which aren't.",
          "Strengthen trust through action and transparency: when employees see changes made from their feedback, trust deepens.",
        ],
      },
      { type: "h2", text: "Unlock Growth Through Smart Learning Management" },
      {
        type: "p",
        text: "Learning management solutions centralize training, streamline skill acquisition, and support leadership growth across teams. Features like automated reporting, mobile accessibility, and personalized learning tracks ensure engagement remains high and outcomes measurable. By embedding learning into daily workflows, companies foster a culture where growth is continuous, transparent, and results-driven.",
      },
      { type: "h2", text: "The Lasting Impact of Strategic Leadership Development" },
      {
        type: "p",
        text: "Organizational transformation doesn't happen by chance. It's driven by intentional leadership development that aligns with business goals and cultural vision. Begin by auditing current leadership competencies, identifying gaps, and designing tailored development paths. Leverage learning management systems to deliver scalable content, and encourage mentorship programs that promote knowledge sharing.",
      },
      { type: "quote", text: "True transformation starts with empowered leaders. Start building yours today." },
    ],
  },
  {
    slug: "dei-efforts-why-gender-neutral-language-matters",
    title: "DEI Efforts: Why Gender-Neutral Language Matters",
    date: "July 29, 2025",
    dateISO: "2025-07-29",
    category: "Talent Management",
    excerpt:
      "Language shapes workplace culture, inclusivity, and belonging. Small, deliberate word choices build environments where everyone feels seen.",
    image: img.teamOffice,
    imageAlt: "Diverse team collaborating around a table",
    body: [
      {
        type: "p",
        text: "In today's modern workplace, language isn't just a tool for communication; it's a powerful instrument that shapes workplace culture, inclusivity, and employee belonging. One of the most effective yet often overlooked ways organisations can build equitable environments is by using gender-neutral language in all aspects of work, from policies to performance feedback, from recruitment to casual conversations.",
      },
      { type: "h2", text: "Why Gender-Neutral Language Matters" },
      {
        type: "p",
        text: "Gender bias, whether conscious or unconscious, can manifest in our words, hiring practices, feedback, and leadership decisions. When we default to gendered terms or outdated stereotypes, we risk alienating talented individuals and reinforcing inequality. Adopting gender-neutral language helps to:",
      },
      {
        type: "ul",
        items: [
          "Create a respectful and welcoming environment for all identities",
          "Eliminate assumptions based on gender roles",
          "Reflect organizational values of equity, diversity, and inclusion (EDI)",
          "Comply with legal standards, including the Human Rights Code",
        ],
      },
      { type: "h2", text: "Practical Examples: Say This, Not That" },
      {
        type: "ul",
        items: [
          "“Sir/Madam” → “Everyone, Colleagues, Team”",
          "“Chairman” → “Chairperson”",
          "“Salesman” → “Salesperson”",
          "“Manpower” → “Workforce, Staffing”",
          "“Maternity leave” → “Parental leave”",
        ],
      },
      { type: "h2", text: "Gender-Inclusive Policies and Hiring" },
      {
        type: "p",
        text: "When drafting policies, job ads, or performance reviews, avoid gender-coded language like “aggressive,” “dominant,” or “nurturing.” Opt for qualities like “collaborative,” “strategic,” or “team-oriented.” Respect for pronouns and gender identity is also essential. Encourage employees to include pronouns in their email signatures, and always refer to individuals using their chosen pronouns or name.",
      },
      { type: "h2", text: "Real-World Examples of Gender-Neutral Practices" },
      {
        type: "ul",
        items: [
          "IBM replaced titles like “Chairman” with “Chairperson” across all communications",
          "The Canadian Government uses “they/them” pronouns in official correspondence",
          "The BBC updated broadcasting guidelines to remove gendered titles such as “weatherman”",
          "HSBC enables clients and employees to self-identify gender and pronouns",
          "The University of British Columbia offers training on inclusive language and pronoun use",
        ],
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Language is more than grammar. It's culture, identity, and inclusion. Every time we choose words that are inclusive, we create a workplace where everyone feels welcome and respected. Start with a language audit in your HR policies, offer training on inclusive language and unconscious bias, and model inclusive language in leadership communication.",
      },
      { type: "quote", text: "Your words have power. Use them to create workplaces where everyone belongs." },
    ],
  },
  {
    slug: "the-power-of-360-degree-feedback",
    title: "The Power of Feedback for Leaders: Why 360-Degree Feedback Matters",
    date: "June 22, 2025",
    dateISO: "2025-06-22",
    category: "Talent Management",
    excerpt:
      "Leadership without feedback is like navigating without a compass. 360-degree feedback offers leaders the full picture of their impact.",
    image: img.meeting,
    imageAlt: "Team giving feedback in a meeting",
    body: [
      {
        type: "p",
        text: "In today's complex and fast-paced workplace, leadership is no longer just about giving direction. It's about listening, adapting, and growing. One of the most powerful tools that supports this kind of growth is feedback. And when it comes to truly transformational feedback, 360-degree feedback stands out.",
      },
      { type: "h2", text: "Why Feedback Is Essential for Leaders" },
      {
        type: "p",
        text: "Leadership without feedback is like navigating without a compass. The higher you go in leadership, the harder it is to get honest, constructive input. Yet feedback is critical. It's the mirror that reflects how our actions affect those around us. Strong leaders use feedback to uncover blind spots, amplify their strengths, build better relationships, and improve team performance.",
      },
      { type: "h2", text: "What Makes 360-Degree Feedback So Powerful?" },
      {
        type: "p",
        text: "Unlike traditional top-down feedback, 360-degree feedback collects insights from all around a leader: peers, direct reports, supervisors, and sometimes even customers. This holistic view offers a more complete and objective picture of how a leader shows up across the organization.",
      },
      {
        type: "ul",
        items: [
          "Greater self-awareness about how others perceive your leadership style",
          "Improved emotional intelligence through empathy and reflection",
          "Targeted development focused on real-world impact",
          "Increased trust by modeling openness and humility",
          "Stronger accountability through multi-source perspectives",
        ],
      },
      { type: "h2", text: "Making the Most of 360 Feedback" },
      {
        type: "ul",
        items: [
          "Ensure confidentiality: honest input depends on psychological safety",
          "Use a validated tool: choose a reliable, research-based framework",
          "Pair it with coaching: help leaders interpret results and design a growth plan",
          "Focus on development: make it about learning, not performance rating",
          "Follow through: the value is in applying the insights, not just collecting them",
        ],
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Feedback is a gift. Used wisely, 360-degree feedback becomes a powerful development tool that builds stronger, more human-centered leaders, not just better performance numbers. If you lead people, or support those who do, ask yourself: are you getting the full picture of your impact?",
      },
      { type: "quote", text: "Let's make leadership better, together." },
    ],
  },
  {
    slug: "talent-management",
    title: "Talent Management: A Story of Transformation and Triumph",
    date: "May 28, 2025",
    dateISO: "2025-05-28",
    category: "Talent Management",
    excerpt:
      "The story of a company that stopped treating talent like a process and started treating it like its future.",
    image: img.whiteboard,
    imageAlt: "Team planning strategy at a whiteboard",
    body: [
      { type: "h2", text: "The Future-Proof Business: A Story of Talent, Transformation, and Triumph" },
      {
        type: "p",
        text: "A few years ago, a mid-sized company stood at a crossroads. The industry was shifting. Technology was moving faster than their teams could adapt. The workforce was disengaged, and their best people were quietly leaving for more dynamic opportunities. They tried quick fixes: new systems, reorgs, external hires. Nothing stuck.",
      },
      {
        type: "p",
        text: "Then, something changed. A new leader joined their executive team and asked a simple question:",
      },
      { type: "quote", text: "What if we stopped treating talent like a process… and started treating it like our future?" },
      {
        type: "p",
        text: "That's when the transformation began. They didn't just fill roles; they mapped future skills. They didn't just run workshops; they designed learning journeys. They didn't just measure performance; they nurtured potential. Over time, a new culture took root: one where every person understood their impact, every leader was accountable for growth, and every decision was made with the future in mind.",
      },
      {
        type: "p",
        text: "Today, that company is thriving: agile, resilient, and recognized as a top place to work. This isn't just their story. It can be yours.",
      },
      {
        type: "p",
        text: "We at Ascend help organizations future-proof their business through strategic, insight-driven talent management. Whether you're building your next generation of leaders, transforming employee experience, or aligning skills with business strategy, we're here to partner with you every step of the way.",
      },
      { type: "quote", text: "Ready to write your success story? Let's connect and build the workforce your future demands." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
