// Leadership profile — borderless split layout: a large portrait on one side,
// identity and bio on the other, alternating sides per person (flip prop).
// Portraits currently use stock photos as stand-ins (see content.js) — swap the
// files in /public/images/leaders/ for real photos before launch.

export default function LeadershipBadge({ person, full = false, flip = false }) {
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
        <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-balance sm:text-2xl">
          {person.name}
        </h3>
        <p className="mt-1.5 text-sm text-amber-strong">{person.role}</p>
        <p className="tnum mt-1 font-mono text-xs text-dim">{person.credential}</p>
        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-dim sm:text-[15px]">
          {full ? person.fullBio : person.bio}
        </p>
      </div>
    </article>
  )
}
