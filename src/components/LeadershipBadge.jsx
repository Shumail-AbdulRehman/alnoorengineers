// Leadership profile — borderless: the card sits directly on the page
// background with a large centered portrait, centered identity block and bio.
// Portraits currently use stock photos as stand-ins (see content.js) — swap the
// files in /public/images/leaders/ for real photos before launch.

export default function LeadershipBadge({ person, full = false }) {
  return (
    <article className="flex w-full flex-col items-center text-center md:w-[calc(50%-1rem)]">
      <img
        src={person.image}
        alt={`Portrait of ${person.name}`}
        className="h-44 w-36 border border-teal/60 object-cover object-top sm:h-56 sm:w-44"
        loading="lazy"
        width="352"
        height="448"
      />

      <div className="mt-6 max-w-md">
        <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-balance">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-amber-strong">{person.role}</p>
        <p className="tnum mt-1 font-mono text-xs text-dim">{person.credential}</p>
      </div>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">
        {full ? person.fullBio : person.bio}
      </p>
    </article>
  )
}
