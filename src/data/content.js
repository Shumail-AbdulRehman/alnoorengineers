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
  { value: '28', label: 'equipment segments covered' },
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

// Supply catalog images live in /public/images/supply/. Sourced from Openverse
// (CC0 / public domain unless credited below — CC-BY requires keeping the credit):
//   gensets.jpg          "Early industrial generator" by quinet (CC-BY) — flickr.com/photos/91994044@N00/24859385890
//   ats-panels.jpg       "Electrical switchgear" by David Jones (CC-BY) — flickr.com/photos/45457437@N00/36083223894
//   spds.jpg             "Outlet panels, converters, power strips" by AstroSamantha (CC-BY) — flickr.com/photos/65541944@N07/6250035530
//   duct-rod.jpg         "Guiding New Fiber from Reel Truck" by Tessa Bury (CC-BY) — commons.wikimedia.org?curid=184601539
//   multimeters.jpg      "Voltage-Testing Digital-Multimeter" by Emilian Robert Vicol (CC-BY) — commons.wikimedia.org?curid=38382862
export const supplyServices = [
  { name: 'SFPs', img: '/images/supply/sfps.jpg' },
  { name: 'SPDs', tag: 'surge protection', img: '/images/supply/spds.jpg' },
  { name: 'OTDR', img: '/images/supply/otdr.jpg' },
  { name: 'Patch cords', img: '/images/supply/patch-cords.jpg' },
  { name: 'Optical modems', img: '/images/supply/optical-modems.jpg' },
  { name: 'Hand tools', img: '/images/supply/hand-tools.jpg' },
  { name: 'Optical fiber cable', img: '/images/supply/optical-fiber-cable.jpg' },
  { name: 'Rectifier modules & racks', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'ATS panels', img: '/images/supply/ats-panels.jpg' },
  { name: 'Splice-machine consumables', img: '/images/supply/splice-consumables.jpg' },
  { name: 'Duct rod', img: '/images/supply/duct-rod.jpg' },
  { name: 'DC aircon', img: '/images/supply/dc-aircon.jpg' },
  { name: 'Gensets', img: '/images/supply/gensets.jpg' },
  { name: 'CCTV', img: '/images/supply/cctv.jpg' },
  { name: 'Networking cable', img: '/images/supply/networking-cable.jpg' },
  { name: 'Optical power monitors', img: '/images/supply/optical-power-monitors.jpg' },
  { name: 'DCDB / ACDB', img: '/images/supply/dcdb-acdb.jpg' },
  { name: 'Multimeters & clamp meters', img: '/images/supply/multimeters.jpg' },
  { name: 'ODF rack mounts', tag: '48 / 96 / 144 fiber', img: '/images/supply/odf-rack-mounts.jpg' },
]

// Warehouse inventory lines. Images reuse the same category photos as the
// supply catalog (src/pages/Services) — replace with real product shots.
export const supplies = [
  { name: 'Delta ESR 48/40', tag: 'rectifier', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'Huawei R4850G2', tag: 'rectifier module', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'Eltek 48/3000', tag: 'rectifier', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'Optic modems', img: '/images/supply/optical-modems.jpg' },
  { name: 'SolarMax & Inverex solar inverters', img: '/images/supply/gensets.jpg' },
  { name: 'ATS panel', img: '/images/supply/ats-panels.jpg' },
  { name: 'OTDR 1310', img: '/images/supply/otdr.jpg' },
  { name: 'DC aircon', img: '/images/supply/dc-aircon.jpg' },
  { name: 'Optical power meter', img: '/images/supply/optical-power-monitors.jpg' },
  { name: 'Emerson R48 2900U', tag: 'rectifier', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'ZXD 2400', tag: 'rectifier module', img: '/images/supply/rectifier-modules.jpg' },
  { name: 'Nera ODU / IDU', tag: 'microwave', img: '/images/supply/networking-cable.jpg' },
  { name: 'Surge protection devices', img: '/images/supply/spds.jpg' },
]

export const aboutIntro =
  'Al Noor Engineers (Pvt.) Ltd. is a Pakistan-based B2B firm with more than ten years in ' +
  'telecom equipment repair, maintenance and supply — new and refurbished. Our clients are ' +
  'GSM and PSTN operators, telecom vendors and enterprise infrastructure teams. We repair to ' +
  'operator standard, document the work, and stand behind every unit that leaves the lab.'
