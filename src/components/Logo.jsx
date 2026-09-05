// Brand mark for Al Noor Engineers — the amber broadcast tower from the
// company lockup, keyed transparent so it sits cleanly on both themes.
// The cream wordmark from the lockup is dropped here: the site renders its
// own "Al Noor Engineers" text next to the mark, which stays legible in
// light mode (cream on white would not).
export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt="Al Noor Engineers"
      className={className}
      width="128"
      height="128"
    />
  )
}
