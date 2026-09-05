import { useState } from 'react'

// Leadership profile — borderless split layout: a large portrait on one side,
// identity and bio on the other, alternating sides per person (flip prop).
// "Show more info" expands the full bio with a smooth height animation.
// Portraits currently use stock photos as stand-ins (see content.js) — swap the
// files in /public/images/leaders/ for real photos before launch.

export default function LeadershipBadge({ person, flip = false }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={`flex flex-col gap-6 sm:gap-10 md:flex-row md:items-center ${
        flip ? 'md:flex-row-reverse' : ''
      }`}
    >
      <img
        src={person.image}
        alt={`Portrait of ${person.name}`}
        className="h-64 w-full border border-teal/60 object-cover object-top sm:h-72 md:h-80 md:w-72 lg:w-80"
        loading="lazy"
        width="640"
        height="800"
      />

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
          <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-balance sm:text-2xl">
            {person.name}
          </h3>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 bg-amber px-4 py-2 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a]"
          >
            {expanded ? 'Show less' : 'Show more info'}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <p className="mt-1.5 text-sm text-amber-strong">{person.role}</p>
        <p className="mt-1 text-xs font-medium text-dim">{person.credential}</p>

        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-dim sm:text-[15px]">
          {person.bio}
        </p>

        {/* expanding full bio — grid-rows trick animates height smoothly */}
        <div
          className={`grid transition-all duration-300 ease-out ${
            expanded ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-[62ch] text-sm leading-relaxed text-dim sm:text-[15px]">
              {person.fullBio}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
