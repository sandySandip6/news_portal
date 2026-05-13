export type HomeArticle = {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  time: string;
  imageSrc: string;
  imageAlt?: string;
  author?: string;
};

export type OpinionPiece = {
  id: string;
  title: string;
  author: string;
  role: string;
  excerpt: string;
  time: string;
};

export type ShortBullet = {
  id: string;
  title: string;
  time: string;
  category: string;
};

export const LIVE_TICKER_ITEMS: string[] = [
  "Karnali Province cabinet approves new fiscal roadmap for FY 2026/27",
  "Asian Development Bank mission concludes infrastructure review in Surkhet",
  "Nepal national cricket team announces squad for upcoming triangular series",
  "World Bank report highlights climate resilience gains in Himalayan communities",
  "Provincial health directorate launches telemedicine pilot in remote wards",
];

export const BREAKING_SLIDES: HomeArticle[] = [
  {
    id: "b1",
    title: "Government unveils emergency relief package after mid-west floods",
    excerpt:
      "Coordination centers opened in Surkhet and Nepalgunj as response teams deploy to affected villages.",
    category: "Breaking",
    time: "12 min ago",
    imageSrc: "/news.jpg",
    imageAlt: "Flood response briefing",
  },
  {
    id: "b2",
    title: "Karnali assembly passes digital services bill in unanimous vote",
    excerpt:
      "Citizens will soon access land records and municipal permits through a single provincial portal.",
    category: "Politics",
    time: "28 min ago",
    imageSrc: "/news.jpg",
    imageAlt: "Assembly hall",
  },
  {
    id: "b3",
    title: "Major telecom expands 5G footprint across Karnali highway corridor",
    excerpt:
      "Operators say improved backbone connectivity will support schools, hospitals, and local businesses.",
    category: "Technology",
    time: "1 hr ago",
    imageSrc: "/news.jpg",
    imageAlt: "Telecommunications tower",
  },
];

export const TRENDING: HomeArticle[] = [
  {
    id: "t1",
    title: "Provincial capital prepares for international tourism summit",
    excerpt: "Hotels and civic venues gear up for delegates from twelve countries next month.",
    category: "Business",
    time: "2 hr ago",
    imageSrc: "/news.jpg",
  },
  {
    id: "t2",
    title: "Youth-led climate march draws thousands in Surkhet",
    excerpt: "Organizers call for faster renewable adoption and stricter mining oversight.",
    category: "Climate",
    time: "3 hr ago",
    imageSrc: "/news.jpg",
  },
  {
    id: "t3",
    title: "Documentary on Karnali rivers wins national film award",
    excerpt: "Directors highlight indigenous knowledge on water stewardship.",
    category: "Culture",
    time: "5 hr ago",
    imageSrc: "/news.jpg",
  },
  {
    id: "t4",
    title: "Stock exchange sees record turnover in hydropower equities",
    excerpt: "Analysts cite renewed investor confidence after policy clarity on export tariffs.",
    category: "Markets",
    time: "6 hr ago",
    imageSrc: "/news.jpg",
  },
];

export const LATEST: HomeArticle[] = [
  {
    id: "l1",
    title: "Municipalities pilot smart street lighting to cut energy costs",
    category: "Infrastructure",
    time: "8 min ago",
    imageSrc: "/news.jpg",
    excerpt: "Sensors and dimming schedules are expected to reduce consumption by up to thirty percent.",
  },
  {
    id: "l2",
    title: "Women entrepreneurs showcase products at regional trade fair",
    category: "Economy",
    time: "22 min ago",
    imageSrc: "/news.jpg",
    excerpt: "Handicrafts, agritech startups, and packaged foods drew strong wholesale interest.",
  },
  {
    id: "l3",
    title: "Highway safety campaign targets night buses after audit findings",
    category: "Transport",
    time: "41 min ago",
    imageSrc: "/news.jpg",
    excerpt: "Transport offices will coordinate random inspections and driver fatigue checks.",
  },
  {
    id: "l4",
    title: "Archaeology team resumes survey of ancient trade routes",
    category: "Heritage",
    time: "1 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Researchers hope new finds will strengthen UNESCO nomination dossiers.",
  },
  {
    id: "l5",
    title: "Provincial police launch community policing app with offline maps",
    category: "Public safety",
    time: "2 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Residents can report non-emergency incidents and receive safety advisories.",
  },
];

export const POLITICS: HomeArticle[] = [
  {
    id: "p1",
    title: "Coalition partners finalize agenda for winter legislative session",
    category: "Assembly",
    time: "30 min ago",
    imageSrc: "/news.jpg",
    excerpt: "Budget implementation and local election timelines top the priority list.",
  },
  {
    id: "p2",
    title: "Opposition presses for debate on procurement transparency rules",
    category: "Accountability",
    time: "2 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Party leaders demand publication of all large-tender evaluation summaries.",
  },
  {
    id: "p3",
    title: "Inter-party task force meets on federal–provincial revenue sharing",
    category: "Federalism",
    time: "4 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Technical teams will model scenarios before the next finance commission meeting.",
  },
  {
    id: "p4",
    title: "Mayors’ forum urges faster disaster preparedness grants",
    category: "Local gov",
    time: "6 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Municipal heads say retrofitting public buildings cannot wait for the monsoon cycle.",
  },
];

export const SPORTS: HomeArticle[] = [
  {
    id: "s1",
    title: "Provincial football league announces expanded youth academy intake",
    category: "Football",
    time: "1 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Scouts will tour ten districts to identify under-16 prospects for residential training.",
  },
  {
    id: "s2",
    title: "National marathon series adds high-altitude stage in Jumla",
    category: "Athletics",
    time: "3 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Organizers emphasize medical screening and gradual acclimatization protocols.",
  },
  {
    id: "s3",
    title: "Cricket association names new high-performance director",
    category: "Cricket",
    time: "5 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "The appointee previously worked with emerging teams in associate nations.",
  },
  {
    id: "s4",
    title: "School games federation rolls out anti-doping education modules",
    category: "Governance",
    time: "8 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Workshops will reach coaches and captains before regional qualifiers begin.",
  },
];

export const ENTERTAINMENT: HomeArticle[] = [
  {
    id: "e1",
    title: "Regional music festival announces cross-border collaboration stage",
    category: "Music",
    time: "2 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Artists from three countries will premiere fusion works rooted in Karnali folk motifs.",
  },
  {
    id: "e2",
    title: "Streaming platform picks up acclaimed Nepali anthology series",
    category: "TV",
    time: "4 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Producers say subtitles will launch in five languages within the first month.",
  },
  {
    id: "e3",
    title: "Film commission offers rebates for productions shot in mountain corridors",
    category: "Cinema",
    time: "6 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Applicants must meet local hiring benchmarks and environmental guidelines.",
  },
  {
    id: "e4",
    title: "Theatre collective revives classic drama with immersive staging",
    category: "Stage",
    time: "9 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Venues in Surkhet and Birendranagar will host limited weekend runs.",
  },
];

export const TECHNOLOGY: HomeArticle[] = [
  {
    id: "tech1",
    title: "Open data portal publishes real-time air quality dashboards",
    category: "Data",
    time: "1 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Researchers can download historical series for twelve monitoring stations.",
  },
  {
    id: "tech2",
    title: "Agri-tech startup pilots satellite-assisted irrigation scheduling",
    category: "Innovation",
    time: "3 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Partner cooperatives report lower water use while maintaining yield targets.",
  },
  {
    id: "tech3",
    title: "University opens cybersecurity lab with industry mentorship",
    category: "Education",
    time: "5 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Students will work on incident simulations and secure software supply chains.",
  },
  {
    id: "tech4",
    title: "Cloud region expansion promises lower latency for public services",
    category: "Infrastructure",
    time: "7 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Officials expect faster identity verification during peak enrollment periods.",
  },
];

export const INTERNATIONAL: HomeArticle[] = [
  {
    id: "i1",
    title: "UN agency highlights progress on school meals in South Asia",
    category: "Development",
    time: "2 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Nepal’s models for resilient supply chains are cited as a reference case.",
  },
  {
    id: "i2",
    title: "Global energy agency revises forecast for regional renewables growth",
    category: "Energy",
    time: "4 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Hydropower and grid-scale storage investments outperform prior projections.",
  },
  {
    id: "i3",
    title: "World health assembly debates pandemic accord implementation timelines",
    category: "Health",
    time: "6 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Member states discuss financing for surveillance and equitable vaccine access.",
  },
  {
    id: "i4",
    title: "Major economies signal cautious stance on commodity price volatility",
    category: "Economy",
    time: "10 hr ago",
    imageSrc: "/news.jpg",
    excerpt: "Analysts watch currency pressures on import-heavy emerging markets.",
  },
];

export const OPINION: OpinionPiece[] = [
  {
    id: "o1",
    title: "Federal clarity is the real infrastructure Karnali still needs",
    author: "Dr. Meera Shahi",
    role: "Public policy scholar",
    excerpt:
      "Roads and airports matter, but predictable rules for investment and staffing unlock far more value.",
    time: "Today",
  },
  {
    id: "o2",
    title: "Covering climate without doom-scrolling your readers",
    author: "Rabin Bhandari",
    role: "Media editor",
    excerpt:
      "Solutions journalism is not soft news when it is transparent about trade-offs and costs.",
    time: "Yesterday",
  },
  {
    id: "o3",
    title: "Youth migration is a policy signal, not a moral panic",
    author: "Sarita Thapa",
    role: "Columnist",
    excerpt:
      "Provinces should compete on services and wages, not slogans, to retain talent at home.",
    time: "2 days ago",
  },
];

export const SHORT_NEWS: ShortBullet[] = [
  { id: "sn1", title: "Treasury releases Q2 revenue snapshot", time: "6 min ago", category: "Economy" },
  { id: "sn2", title: "Airport authority tests new baggage scanners", time: "14 min ago", category: "Travel" },
  { id: "sn3", title: "Wildlife unit reports stable snow leopard sightings", time: "19 min ago", category: "Environment" },
  { id: "sn4", title: "Banking regulator reminds lenders on consumer disclosure norms", time: "25 min ago", category: "Finance" },
  { id: "sn5", title: "City library extends weekend hours for students", time: "33 min ago", category: "Society" },
  { id: "sn6", title: "National museum loans artifacts for regional exhibit", time: "40 min ago", category: "Culture" },
];

export const RECOMMENDED: HomeArticle[] = [
  {
    id: "r1",
    title: "Inside the campaign to map every landslide-prone ward in Karnali",
    category: "Investigation",
    time: "Yesterday",
    imageSrc: "/news.jpg",
    excerpt: "Volunteers combine drones, field surveys, and community memory to build risk layers.",
  },
  {
    id: "r2",
    title: "How small hydropower developers navigate financing winters",
    category: "Analysis",
    time: "2 days ago",
    imageSrc: "/news.jpg",
    excerpt: "Developers describe creative debt structures and export hedging strategies.",
  },
  {
    id: "r3",
    title: "Portrait series: teachers commuting across mountain passes",
    category: "Features",
    time: "3 days ago",
    imageSrc: "/news.jpg",
    excerpt: "Classrooms before dawn, shared rides, and the students who wait regardless.",
  },
];

export const EDITOR_PICKS: HomeArticle[] = [
  {
    id: "ed1",
    title: "The quiet revolution in Karnali’s community radio networks",
    category: "Editor’s desk",
    time: "This week",
    imageSrc: "/news.jpg",
    excerpt: "Local stations are becoming first responders for weather alerts and civic education.",
  },
  {
    id: "ed2",
    title: "Why transparent procurement dashboards finally have political tailwind",
    category: "Editor’s desk",
    time: "This week",
    imageSrc: "/news.jpg",
    excerpt: "Citizen auditors and open data advocates built the case one release at a time.",
  },
  {
    id: "ed3",
    title: "Field notes from the midwives bridging hospital and home births",
    category: "Editor’s desk",
    time: "This week",
    imageSrc: "/news.jpg",
    excerpt: "Trust, training, and transport emerge as the decisive variables in maternal outcomes.",
  },
];

export const POPULAR_TAGS: string[] = [
  "Election 2027",
  "Climate",
  "Hydropower",
  "Tourism",
  "Education reform",
  "Road safety",
  "Telehealth",
  "Federal budget",
  "Agriculture",
  "Women in leadership",
  "Startups",
  "Heritage",
];
