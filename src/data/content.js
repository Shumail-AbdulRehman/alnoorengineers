// All site content — real Al Noor Engineers copy, sourced from the design brief.

export const hero = {
  // statusLine: 'Repair bay operational',
  headline:
    'Telecom equipment repair, maintenance and supply — done to operator standard.',
  lede:
    'For over a decade we have repaired, maintained and supplied new and refurbished ' +
    'telecom equipment for leading GSM and PSTN operators, vendors and enterprise ' +
    'infrastructure teams across Pakistan.',
}

export const visionMission = {
  vision:
    'To be the leading telecom services provider in Pakistan — recognized for technical ' +
    'depth, reliability and an ethically run operation that operators can depend on.',
  mission:
    'We serve and manage network operations within operator budgets, match OEM quality of ' +
    'service, and hold a standing commitment to repair and supply excellence across every ' +
    'segment we touch.',
}

export const stats = [
  { value: '10+', label: 'years serving telecom operators' },
  { value: '33', label: 'equipment lines covered' },
  { value: '3', label: 'sectors served — GSM, PSTN, enterprise' },
  { value: '24h', label: 'response on critical repair calls' },
]

export const clients = ['Nokia', 'Jazz', 'Telenor Pakistan', 'Zong', 'Ufone', 'PTCL']

// Portraits are STOCK PHOTOS for layout preview only — replace image files in
// /public/images/leaders/ with real photos of the actual people before launch.
export const leadership = [
  {
    initials: 'MA',
    name: 'Mr. Asif',
    role: 'Chief Executive Officer',
    credential: 'SKS · Global One · Green Base Solutions',
    image: '/images/leaders/mr-asif.jpg',
    bio:
      'Built his career across SKS, Global One and Green Base Solutions before founding ' +
      'Al Noor Engineers — a decade-plus of hands-on telecom operations leadership.',
    fullBio:
      'Mr. Asif founded Al Noor Engineers after a career spent inside the operator and vendor ' +
      'ecosystem — SKS, Global One and Green Base Solutions — where he led field operations, ' +
      'repair programs and equipment supply for GSM and PSTN networks. He built Al Noor ' +
      'Engineers around a simple standard: do the repair properly, document it, and stand ' +
      'behind it. That standard still governs how every unit moves through the lab.',
  },
  {
    initials: 'MAA',
    name: 'Col (Retd) Muhammad Afzal Ahsan, SI(M)',
    role: 'Chief Operating Officer / Chief Technology Officer',
    credential: 'Pak Army PASCOMS · Safe City projects · USF Gilgit-Baltistan',
    image: '/images/leaders/col-afzal-ahsan.jpg',
    bio:
      'Retired Pakistan Army Colonel from the PASCOMS corps; led safe-city and USF ' +
      'Gilgit-Baltistan infrastructure programs before joining Al Noor Engineers.',
    fullBio:
      'Col (Retd) Muhammad Afzal Ahsan, SI(M), served in the Pakistan Army’s PASCOMS ' +
      'defence-communications arm, where he planned, built and maintained strategic ' +
      'communications infrastructure under field conditions. After retiring he led safe-city ' +
      'surveillance and network projects and USF-funded deployments in Gilgit-Baltistan. At ' +
      'Al Noor Engineers he runs operations and technical direction — the same discipline of ' +
      'maintenance schedules, fault isolation and documented acceptance he applied in service.',
  },
  // DUMMY ENTRY — placeholder so the three-person layout can be reviewed.
  // Replace name, credentials, bio and photo with the real person, or delete.
  {
    initials: 'BH',
    name: 'Engr. Bilal Hussain',
    role: 'Head of Repair Lab',
    credential: 'Nokia field ops · 12 yrs on the bench',
    image: '/images/leaders/dummy.jpg',
    bio:
      'Runs the repair bench day to day — fault isolation, component-level rework and ' +
      'load testing across rectifier, RF and transport units before they ship back to site.',
    fullBio:
      'Engr. Bilal Hussain has spent twelve years on telecom repair benches, starting with ' +
      'Nokia field operations and moving through rectifier plants, BTS subsystems and optical ' +
      'test gear. At Al Noor Engineers he owns bench throughput: triage, fault isolation, ' +
      'component-level rework and the load-test records that go out with every repaired unit. ' +
      'His rule on documentation is simple — if it isn’t written down, it didn’t happen.',
  },
]

export const objectives = [
  'Serve and manage network operations within the operator’s budget — no surprise spend, no padded scope.',
  'Match OEM quality of service on every repair and maintenance engagement, at a fraction of OEM turnaround.',
  'Sustain a standing commitment to repair and supply excellence across all equipment segments we cover.',
]

// Rack-elevation row items: name + optional spec tag.
export const repairServices = [
  { name: 'Rectifiers', tag: '48V DC plant' },
  { name: 'Microwave links', tag: 'ODU / IDU' },
  { name: 'Switching modules' },
  { name: 'RF repeaters' },
  { name: 'CTC modem' },
  { name: 'OTDR', tag: '1310 / 1550 nm' },
  { name: 'Splice machines' },
  { name: 'BTS fan trays & modules' },
  { name: 'Juniper routers' },
  { name: 'Cisco switching' },
  { name: 'ONT repair' },
  { name: 'TV box repair' },
  { name: 'UPS up to 30kVA', tag: 'AVR / ATS' },
  { name: 'Environment modules' },
  { name: 'ZTE power & environment supervisory' },
]

// Supply catalog, organized per the Guangyan 2024 catalogue (Shenzhen Guangyan
// Network Electronic Co., Ltd) that Al Noor stocks and sources from. Product
// photos are cropped from that catalogue (provided by the client).
// Images live in /public/images/supply/.
export const supplyCategories = [
  {
    title: 'Fusion Splicers',
    items: [
      { name: 'K3 / K3S Fusion Splicer', tag: 'SM / MM / NZDS', img: '/images/supply/splicer-k3.jpg' },
      { name: 'K5 Fusion Splicer', tag: 'touch screen', img: '/images/supply/splicer-k5.jpg' },
      { name: 'M5 Fusion Splicer', tag: '4.3″ touch', img: '/images/supply/splicer-m5.jpg' },
    ],
  },
  {
    title: 'OTDR & Fiber Testers',
    items: [
      { name: '1000 Series Touch-Screen OTDR', tag: '1310 / 1550 nm', img: '/images/supply/otdr-1000.jpg' },
      { name: 'MTO-50 / MTO-51 OTDR', tag: 'up to 100 km', img: '/images/supply/otdr-mto50.jpg' },
      { name: 'G8 Optical Power Meter', tag: '850–1625 nm', img: '/images/supply/power-meter-g8.jpg' },
      { name: 'Y8 All-in-1 Multifunction Tester', tag: '6-in-1', img: '/images/supply/multi-tester-y8.jpg' },
      { name: 'G7 / G10 / G11 Mini Power Meters', tag: 'pen style', img: '/images/supply/mini-power-meters.jpg' },
      { name: 'HT-XX / B5 / B3S Visual Fault Locator', tag: '5–30 mW', img: '/images/supply/vfl-pens.jpg' },
      { name: 'A-35 / A-36 / A-40 Fiber Identifier', tag: 'live fiber', img: '/images/supply/fiber-identifier.jpg' },
      { name: 'PON Power Meter', tag: '1310 / 1490 / 1550 nm', img: '/images/supply/pon-meter.jpg' },
    ],
  },
  {
    title: 'CCTV & Cable Testers',
    items: [
      { name: 'HD-2900 CCTV Security Tester', tag: '4.3″ TFT', img: '/images/supply/cctv-hd2900.jpg' },
      { name: 'IPCX-ACTI CCTV Tester', tag: '7″ touch', img: '/images/supply/cctv-ipcx-acti.jpg' },
      { name: 'MT-6800 CCTV Tester & OTDR', tag: '1310 / 1550 nm', img: '/images/supply/cctv-otdr-mt6800.jpg' },
      { name: 'LT-1200 Cable Tester Tracker', tag: 'PoE', img: '/images/supply/cable-tester-lt1200.jpg' },
      { name: 'ET618 Cable Tracker & Multimeter', tag: '2-in-1', img: '/images/supply/tracker-multimeter-et618.jpg' },
      { name: 'ET626 / ET628 Cable Tester', tag: 'VFL / PoE / NCV', img: '/images/supply/cable-tester-et626.jpg' },
      { name: 'M100 Non-Contact Voltage Detector', tag: '12–1000 V AC', img: '/images/supply/ncv-detector-m100.jpg' },
      { name: 'YT-811 Pen Multimeter', tag: 'CAT III 600 V', img: '/images/supply/multimeter-yt811.jpg' },
    ],
  },
  {
    title: 'Fiber Tools & FTTH Toolkits',
    items: [
      { name: 'FC-6S Fiber Cleaver', img: '/images/supply/cleaver-fc6s.jpg' },
      { name: 'Miller Fiber Stripper', tag: 'CFS series', img: '/images/supply/fiber-stripper.jpg' },
      { name: 'KT-216B FTTH Tool Kit', img: '/images/supply/ftth-toolkit-kt216b.jpg' },
      { name: 'FTTH-K1 FTTH Tool Kit', img: '/images/supply/ftth-toolkit-k1.jpg' },
    ],
  },
]

// Flat list of every stocked line — used for counts and preview strips.
export const supplyServices = supplyCategories.flatMap((category) => category.items)

// About-page inventory preview: the first lines of the catalog.
export const supplies = supplyServices.slice(0, 6)

export const aboutIntro =
  'Al Noor Engineers (Pvt.) Ltd. is a Pakistan-based B2B firm with more than ten years in ' +
  'telecom equipment repair, maintenance and supply — new and refurbished. Our clients are ' +
  'GSM and PSTN operators, telecom vendors and enterprise infrastructure teams. We repair to ' +
  'operator standard, document the work, and stand behind every unit that leaves the lab.'
