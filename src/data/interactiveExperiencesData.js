/**
 * INTERACTIVE EXPERIENCES DATA CONFIGURATION
 * 
 * DISTRIBUTION: EXACTLY 7 IMAGES ACROSS TWO SECTIONS:
 * - SECTION 1 (Upper section): 3 existing event boxes -> Images 01, 02, 03
 * - SECTION 2 (Photo Archive): 4 existing gallery boxes -> Images 04, 05, 06, 07
 */

export const hostingData = {
  title: "The Stage Is Another Office.",
  subtitle: "From intimate gatherings to audiences of 12,000+. I enjoy being where the energy is.",
  badge: "PUBLIC SPEAKING & HOSTING",
  overview: "Public speaking and stage hosting are not just about holding a microphone—they are about emotional transmission, commanding room momentum, and making every single attendee feel connected to the central narrative.",

  keyStats: [
    { label: "Peak Audience Size", value: "12,000+", detail: "Stadium & Arena Engagements" },
    { label: "Formats Hosted", value: "Multi-Format", detail: "Game Shows, Summits & Gatherings" },
    { label: "Core Competency", value: "Live Energy", detail: "Audience Chemistry & Emcee" },
  ],

  // SECTION 1 (Upper Section): Exactly 3 existing boxes -> Images 01, 02, 03
  events: [
    {
      id: "event-12k",
      number: "01",
      title: "Mega Arena & Stage Hosting",
      role: "Emcee & Stage Host",
      audienceSize: "12,000+ Attendees",
      category: "Large-Format Event",
      summary: "Commanded the stage and directed crowd energy in front of stadium-scale audiences of over 12,000 people, maintaining high enthusiasm and seamless speaker transitions.",
      takeaways: [
        "Projecting vocal authority and clear cadence across massive arena acoustics.",
        "Managing spontaneous crowd reactions and unexpected stage cues in real time.",
        "Unifying 12,000+ attendees around the event's high-energy moments."
      ],
      media: {
        coverImage: "/assets/hosting/01-main-podium.jpg",
        badge: "IMAGE 01 • 12,000+ CROWD",
        photoTitle: "Mega Arena Podium Address",
        caption: "Main stage address before a stadium audience of 12,000+.",
        fallbacks: [
          "/assets/hosting/01-main-podium.jpg",
          "/assets/hosting/interactiveExperiencesData.js..JPEG"
        ]
      }
    },
    {
      id: "event-gameshow",
      number: "02",
      title: "Interactive Live Game Shows",
      role: "Game Show Host & Anchor",
      audienceSize: "High-Energy Crowd",
      category: "Live Entertainment & Game Show",
      summary: "Anchored dynamic live game show formats, engaging participants and audience members with quick wit, comedic timing, and competitive momentum.",
      takeaways: [
        "Instant rapport-building with diverse stage contestants.",
        "Improvisational banter and keeping game pacing crisp and suspenseful.",
        "Maximizing audience cheering and interactive voting engagement."
      ],
      media: {
        coverImage: "/assets/hosting/02-event-hosting.jpg",
        badge: "IMAGE 02 • GAME SHOW HOST",
        photoTitle: "Live Game Show Hosting",
        caption: "Directing the schedule, interactive banter, and introducing contestants.",
        fallbacks: [
          "/assets/hosting/02-event-hosting.jpg",
          "/assets/hosting/event-hosting.jpg.jpeg",
          "/assets/hosting/event-hosting.jpg"
        ]
      }
    },
    {
      id: "event-public-speaking",
      number: "03",
      title: "Public Speaking & Formal Events",
      role: "Event Host & Speaker",
      audienceSize: "Intimate to Large Gatherings",
      category: "Summits & Gatherings",
      summary: "Hosted multiple institutional and community events ranging from focused assemblies to broader summits, driving audience attention toward key objectives.",
      takeaways: [
        "Structuring introductory remarks that immediately hook listeners.",
        "Gracefully introducing dignitaries, guest speakers, and panelists.",
        "Balancing formal professional decorum with natural warmth and charisma."
      ],
      media: {
        coverImage: "/assets/hosting/03-stage-moment.jpg",
        badge: "IMAGE 03 • STAGE PRESENCE",
        photoTitle: "Public Speaking & Keynote",
        caption: "Commanding the floor with enthusiasm, clarity, and poise.",
        fallbacks: [
          "/assets/hosting/03-stage-moment.jpg",
          "/assets/hosting/stage-moment.jpg.jpeg",
          "/assets/hosting/stage-moment.jpg"
        ]
      }
    }
  ],

  // SECTION 2 (Photo Archive: Moments on the Stage): Exactly 4 existing boxes -> Images 04, 05, 06, 07
  gallery: [
    {
      id: "photo-04",
      number: "04",
      title: "Event Preparation",
      category: "Pre-Event & Coordination",
      caption: "Reviewing agendas, speech notes, and stage cues.",
      filePath: "/assets/hosting/04-event-preparation.jpg",
      fallbacks: [
        "/assets/hosting/04-event-preparation.jpg",
        "/assets/hosting/event-preparation.jpg.jpeg",
        "/assets/hosting/event-preparation.jpg"
      ]
    },
    {
      id: "photo-05",
      number: "05",
      title: "Audience Engagement",
      category: "Interactive Flow",
      caption: "Connecting directly with attendees and reading room reactions.",
      filePath: "/assets/hosting/05-audience-engagement.jpg",
      fallbacks: [
        "/assets/hosting/05-audience-engagement.jpg",
        "/assets/hosting/audience-engagement.jpg.jpeg",
        "/assets/hosting/audience-engagement.jpg"
      ]
    },
    {
      id: "photo-06",
      number: "06",
      title: "Formal Event Address",
      category: "Formal Ceremonies",
      caption: "Presiding over formal ceremonies with professional decorum.",
      filePath: "/assets/hosting/06-formal-event.jpg",
      fallbacks: [
        "/assets/hosting/06-formal-event.jpg",
        "/assets/hosting/formal-event.jpg.jpeg",
        "/assets/hosting/formal-event.jpg"
      ]
    },
    {
      id: "photo-07",
      number: "07",
      title: "Candid Stage Moment",
      category: "Spontaneous Moments",
      caption: "Genuine laughter and unscripted connection with the crowd.",
      filePath: "/assets/hosting/07-candid-moment.jpg",
      fallbacks: [
        "/assets/hosting/07-candid-moment.jpg",
        "/assets/hosting/candid-moment.jpg.jpeg",
        "/assets/hosting/candid-moment.jpg"
      ]
    }
  ]
};

export const leadershipData = {
  title: "Leadership Didn't Start Yesterday.",
  subtitle: "The school leadership journey that built my foundations in accountability, peer trust, and execution.",
  badge: "SCHOOL LEADERSHIP CHRONICLE",
  overview: "Before managing business development pipelines or launching startup projects, my understanding of team responsibility was forged on school grounds. Serving as School Prefect, House Captain, and Deputy Head Boy taught me how to lead without relying on authority—by listening, organizing, and delivering.",

  milestones: [
    {
      id: "class-12",
      classGrade: "Class 12",
      title: "Deputy Head Boy",
      tier: "Senior Executive Student Council",
      period: "Class 12 Academic Year",
      badge: "HIGHEST STUDENT COUNCIL LEADERSHIP",
      description: "Appointed to the senior student executive body, serving as a primary conduit between the school administration, faculty, and the entire student body.",
      responsibilities: [
        "Represented student perspectives in institutional discussions with school leadership.",
        "Led and coordinated student council prefectorial bodies across school assemblies and major events.",
        "Organized student-led initiatives, maintaining high behavioral standards and peer mentorship.",
        "Delivered formal addresses during major annual functions and ceremonial gatherings."
      ],
      photoSlot: {
        title: "Official Portrait / On Duty",
        caption: "Deputy Head Boy investiture and ceremonial duties.",
        filePath: "/assets/leadership/deputy-headboy-portrait.jpg"
      },
      certificateSlot: {
        title: "Appointment Certificate & Badge",
        caption: "Official investiture certificate and commendation.",
        filePath: "/assets/leadership/deputy-headboy-certificate.jpg"
      }
    },
    {
      id: "class-11",
      classGrade: "Class 11",
      title: "House Captain",
      tier: "House Governance & Competitive Spirit",
      period: "Class 11 Academic Year",
      badge: "INTER-HOUSE STRATEGY & SPIRIT",
      description: "Led the house contingent across athletic championships, cultural competitions, debates, and academic tournaments, uniting students from junior to senior grades.",
      responsibilities: [
        "Formulated team selection and event strategies for inter-house sporting and cultural championships.",
        "Motivated house members, instilling discipline, high morale, and collective pride.",
        "Managed rehearsals, equipment logistics, and practice schedules under tight deadlines.",
        "Fostered healthy competition while ensuring fair play and sportsmanship at all times."
      ],
      photoSlot: {
        title: "House March-Past & Trophy Presentation",
        caption: "Leading the house contingent on the sports field.",
        filePath: "/assets/leadership/house-captain-team.jpg"
      },
      certificateSlot: {
        title: "House Captain Badge & Letter",
        caption: "Commendation for sportsmanship and house stewardship.",
        filePath: "/assets/leadership/house-captain-certificate.jpg"
      }
    },
    {
      id: "class-5",
      classGrade: "Class 5",
      title: "School Prefect",
      tier: "Foundational Leadership",
      period: "Class 5 Academic Year",
      badge: "THE FIRST RESPONSIBILITY",
      description: "Selected as School Prefect at an early age—the initial proving ground for discipline, time management, and setting an example for peers.",
      responsibilities: [
        "Supervised assembly formations and campus hallway order with fairness and patience.",
        "Assisted teachers and junior students with daily school routines and transition bells.",
        "Learned the fundamentals of showing up early, taking accountability, and being dependable."
      ],
      photoSlot: {
        title: "Prefect Investiture Ceremony",
        caption: "Receiving the prefect badge and taking the honor oath.",
        filePath: "/assets/leadership/prefect-ceremony.jpg"
      },
      certificateSlot: {
        title: "Prefect Appointment Scroll",
        caption: "Foundational honor certificate.",
        filePath: "/assets/leadership/prefect-certificate.jpg"
      }
    }
  ],

  principlesGained: [
    {
      number: "01",
      title: "Leading from the Front",
      desc: "Never ask a team member to do something you aren't prepared to do yourself with equal energy."
    },
    {
      number: "02",
      title: "Earning Respect over Demanding It",
      desc: "A badge or title gives you a seat at the table; only consistency, fairness, and empathy give you real authority."
    },
    {
      number: "03",
      title: "Preparation Eliminates Stage Fright",
      desc: "Whether addressing 1,000 students at assembly or pitching in a boardroom, confidence is the byproduct of deep rehearsal."
    }
  ]
};
