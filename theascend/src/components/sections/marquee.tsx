const words = [
  "Talent Management",
  "Leadership Assessments",
  "Employee Surveys",
  "Learning Solutions",
  "Executive Coaching",
  "Culture Transformation",
];

/** Slow editorial ticker separating the hero from the page body. */
export function Marquee() {
  return (
    <div className="asc-marquee overflow-hidden border-y border-line bg-surface py-4" aria-hidden>
      <div className="asc-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((w) => (
              <span key={`${copy}-${w}`} className="flex items-center">
                <span className="font-display px-6 text-lg tracking-tight text-ink-soft italic">
                  {w}
                </span>
                <svg viewBox="0 0 20 20" className="size-2.5 fill-dawn-500" aria-hidden>
                  <path d="M10 2 18 17H2L10 2Z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
