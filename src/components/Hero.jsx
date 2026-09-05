import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../data/content'

// Lab footage (Mixkit, free license): engineer servicing rack equipment in a
// dark server room. Poster shows while the video loads and under reduced
// motion, where playback is paused entirely.
const HERO_VIDEO = '/images/hero-lab.mp4'
const HERO_POSTER = '/images/hero-poster.jpg'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause()
    }
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-line">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* legibility scrims — fixed charcoal, theme-independent like the page
          banners, so the video reads the same in dark and light mode */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0e1613]/95 via-[#0e1613]/70 to-[#0e1613]/30"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0e1613] to-transparent" />

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-center px-4 pb-24 pt-36 sm:px-6 md:pt-40">
        <div className="animate-hero-settle">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f4f2ea]/70">
            {/* status dot: pulses exactly once on load, then rests */}
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-amber animate-status-pulse"
            />
            <span className="tnum">{hero.statusLine}</span>
          </p>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#f4f2ea] sm:text-5xl lg:text-[3.9rem]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-[#f4f2ea]/80 sm:text-lg">
            {hero.lede}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="bg-amber px-6 py-3 font-display text-sm font-semibold text-rack transition-colors duration-150 hover:bg-[#f0b45a]"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="border border-teal px-6 py-3 font-display text-sm font-semibold text-[#f4f2ea] transition-colors duration-150 hover:border-amber hover:text-amber"
            >
              View Capabilities
            </Link>
          </div>
        </div>

        {/* bench status line — sits on the video's bottom scrim */}
        {/* <div className="tnum absolute inset-x-4 bottom-6 flex items-center justify-between font-mono text-[11px] text-[#f4f2ea]/50 sm:inset-x-6">
          <span>ANE LAB — BAY 01</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
            ALL SYSTEMS NOMINAL
          </span>
        </div> */}
      </div>
    </section>
  )
}
