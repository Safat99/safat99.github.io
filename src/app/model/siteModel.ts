export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type HeroModel = {
  kicker: string;
  location: string;
  headline: string;
  subline: string;
  pills: string[];
  cta: {
    email: string;
    links: {
      label: string;
      url: string;
      icon: "linkedin" | "github" | "youtube" | "grabcad" | "scholar";
    }[];
  };
  note: string;
};


export type AboutModel = {
  title: string;
  paragraphs: string[];
  focusAreas: string[];
};

export type TechFace = {
  title: string;
  items: string[];
};

export type TechModel = {
  title: string;
  hint: string;
  faces: TechFace[];
};

export type RelatedOutput = { label: string; targetId?: string; url?: string };

export type ExperienceItem = {
  title: string;
  when: string;
  bullets: string[];
  relatedOutputs?: RelatedOutput[];
  advisor?: string;
  advisorUrl?: string;
  topic?: string;
  areas?: string[];
  technologies?: string[];
  summary?: string;
  courses?: { title: string; instructor: string; description: string; courseUrl?: string; instructorUrl?: string; when?: string; media?: { src: string; alt: string; caption: string; width: number; height: number } }[];
  contextLink?: { label: string; url: string; note: string };
  highlights?: string[]; // Explicitly label personal contribution vs project/team scope.
  evidence?: { highlights?: string[] };
  detailSlug?: string;
};

export type ExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type ResearchExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type LeadershipExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type ProjectItem = {
  title: string;
  subtitle?: string;
  desc: string;
  selection: "primary" | "secondary" | "historical";
  tags: string[];
  contribution?: string;
  technologies?: string[];
  status?: string;
  evidenceLinks?: { label: "GitHub" | "Live Demo" | "Video Demo"; url: string }[];
  relatedOutputs?: RelatedOutput[];
  detailSlug?: string;
};

export type DetailPageSection = { title: string; paragraphs?: string[]; bullets?: string[] };
export type DetailPageMedia = { src: string; alt: string; caption: string; width: number; height: number };
export type DetailPageVideo = { title: string; youtubeId: string };
export type DetailPageInteractiveDemo = { title: string; url: string; description: string };
export type DetailPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  context?: string;
  contribution?: string;
  sections: DetailPageSection[];
  media?: DetailPageMedia[];
  videos?: DetailPageVideo[];
  interactiveDemo?: DetailPageInteractiveDemo;
  technologies?: string[];
  links?: { label: string; url: string }[];
  relatedOutputs?: RelatedOutput[];
};

export type ProjectsModel = {
  title: string;
  intro: string;
  items: ProjectItem[];
};

export type CreatorVideo = {
  id: string;
  title: string;
  desc: string;
  url: string;
  homepageSelected?: boolean;
};

export type CreatorModel = {
  title: string;
  intro: string;
  hint: string;
  videos: CreatorVideo[];
};


export type ContactModel = {
  email: string;
  links: {
    label: string;
    url: string;
  }[];
};


export type RecommendationItem = {
  name: string;
  role: string;
  company: string;
  photo?: string;
  text: string;
  linkedin?: string;
};

export type RecommendationsModel = {
  title: string;
  intro: string;
  items: RecommendationItem[];
};


export type TravelFlag = {
  emoji: string;
  name: string;
};

export type TravelPhoto = {
  src: string;
  title: string;
  desc: string;
};

export type TravelModel = {
  title: string;
  intro: string;
  flags: TravelFlag[];
  quote: {
    text: string;
    author: string;
  };
  photos: {
    title: string;
    intro: string;
    hint: string;
    items: TravelPhoto[];
  };
};

export type PublicationItem = {
  id: string;
  featured?: boolean;
  title: string;
  desc: string;
  problem?: string;
  approach?: string;
  studyContribution?: string;
  personalRole?: string;
  quantitativeHighlights?: string[];
  relatedLink?: { label: string; url: string };
  meta: string;
  authors: string[];
  year: number;
  venue: string;
  status: "accepted" | "published";
  url?: string;     // No link when none is verified
  cta?: string;    // "Open DOI"
  presentedAt?: string;
  evidenceLinks?: { label: string; url: string }[];
  visual?: { src: string; alt: string; caption: string; width: number; height: number };
};

export type PublicationsModel = {
  highlights?: string[];
  title: string;
  intro: string;
  hint: string;
  items: PublicationItem[];
};


export type EducationModel = {
  title: string;
  items: { institution: string; degree: string; when: string; gpa: string; location: string }[];
};

export type ResearchPresentationsModel = {
  title: string;
  items: { id: string; title: string; authors: string[]; year: number; venue: string; location: string; status: "presented"; type?: "conferencePaper" | "presentation"; month?: string; fullTextUrl?: string; videoUrl?: string; slidesUrl?: string; problem?: string; approach?: string; result?: string; personalRole?: string; quantitativeHighlights?: string[]; visual?: { src: string; alt: string; caption: string; width: number; height: number }; relatedLink?: { label: string; url: string }; authorVerificationPending?: boolean }[];
};

export type ScholarshipsAndAwardsModel = {
  title: string;
  intro: string;
  scholarships: { title: string; year: number; organization: string; researchFocus: string; evidenceLink?: { label: string; url: string; scope: string } }[];
  awards: { title: string; year?: number; organization?: string; description: string; recognition?: "individual" | "chapter/team" }[];
  competitions: { year: number; title: string; organization: string }[];
};

export type SiteModel = {
  education: EducationModel;
  researchInterests: string[];
  teachingAndMentoring: ExperienceModel;
  researchPresentations: ResearchPresentationsModel;
  scholarshipsAndAwards: ScholarshipsAndAwardsModel;
  brand: { name: string; href: string };
  nav: NavItem[];

  hero: HeroModel;
  about: AboutModel;
  tech: TechModel;
  experience: ExperienceModel;
  researchExperience: ResearchExperienceModel;
  leadershipExperience: LeadershipExperienceModel;
  projects: ProjectsModel;
  creator: CreatorModel;
  travel: TravelModel;
  contact: ContactModel; 
  recommendations: RecommendationsModel;
  publications: PublicationsModel;
  detailPages: DetailPage[];


};

// Academic/professional facts: docs/ACADEMIC_PROFILE.md.
// Current, historical, direct-artifact, and optional personal evidence is documented in docs/PHASE_1_CONTENT_RECONCILIATION.md.
// Compatibility keys: experience = professional work; projects = selected technical projects.
export const siteModel: SiteModel = {
  brand: {
    name: "Sarker Safat Mahmud",
    href: "#top"
  },
  nav: [
    {
        "id": "about",
        "label": "Background",
        "href": "#about"
    },
    {
        "id": "updates",
        "label": "Updates",
        "href": "#updates"
    },
    {
        "id": "research",
        "label": "Research",
        "href": "#research"
    },
    {
        "id": "publications",
        "label": "Publications",
        "href": "#publications"
    },
    {
        "id": "education",
        "label": "Education",
        "href": "#education"
    },
    {
        "id": "awards",
        "label": "Awards",
        "href": "#awards"
    },
    {
        "id": "teaching",
        "label": "Teaching",
        "href": "#teaching"
    },
    {
        "id": "experience",
        "label": "Professional",
        "href": "#experience"
    },
    {
        "id": "projects",
        "label": "Projects",
        "href": "#projects"
    },
    {
        "id": "stack",
        "label": "Toolkit",
        "href": "#stack"
    },
    {
        "id": "leadership",
        "label": "Leadership",
        "href": "#leadership"
    },
],

  hero: {
    kicker: "M.S. Computer Science · Montana State University",
    location: "Based in Bozeman, Montana",
    headline: "AI & Machine Learning for Intelligent Systems",
    subline: "My current research investigates band selection and semi-supervised learning for hyperspectral image classification, with broader interests in robotics, multi-agent systems, and computer vision.",
    pills: [
      "Robotics & Autonomy",
      "Multi-Agent & Multi-Robot Systems",
      "Computer Vision & Perception",
      "Planning, Learning & Decision-Making"
    ],
    cta: {
      email: "sarkersafatmahmud@montana.edu",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=A7AvcbQAAAAJ&hl=en", icon: "scholar" },
        { label: "GitHub", url: "https://github.com/safat99", icon: "github" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/safat99/", icon: "linkedin" },
        { label: "YouTube", url: "https://www.youtube.com/@safat99", icon: "youtube" },
        { label: "Grabcad", url: "https://grabcad.com/sarker.safat.mahmud-1", icon: "grabcad"}
      ]
    },
    note: "My thesis work evaluates five benchmark hyperspectral datasets; related work was accepted and presented at IEEE WHISPERS 2026."
  },
  about: {
    title: "Research & Background",
    paragraphs: [
      "I’m an M.S. student in Computer Science at Montana State University, building on a B.Sc. in Mechatronics & Industrial Engineering from Chittagong University of Engineering & Technology (CUET). My interests connect machine learning and perception with the algorithms and software behind intelligent, autonomous systems.",
      "My current thesis explores how band selection and semi-supervised learning can support hyperspectral image classification when labeled data are limited. Earlier, I worked on multi-robot path-planning research and gained experience with multi-robot coordination, task-allocation methods, and robotic simulation. I have also explored independent grid-based multi-robot simulation and reinforcement-learning prototypes. These experiences shape my longer-term interests in robotics, multi-agent systems, planning, and learning.",
      "My professional backend engineering experience, spanning more than two years, has given me a strong foundation in APIs, integrations, distributed services, and production software. I bring that engineering perspective to computational research, simulation, and the development of reliable research systems."
    ],
    focusAreas: [
      "Hyperspectral Imaging",
      "Remote Sensing",
      "Precision Agriculture",
      "Environmental & Wildlife Monitoring",
      "AI/ML for Sensing Applications"
    ]
  },
  tech: {
    title: "Technical Toolkit",
    hint: "Tools and technologies supported by research, project, and professional experience.",
    faces: [
      {
        title: "AI / ML & Scientific Computing",
        items: [
          "Python",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Scikit-learn",
          "TensorFlow",
          "OpenCV",
          "MATLAB",
        ],
      },
      {
        title: "Robotics & Embedded Systems",
        items: [
          "ROS",
          "Gazebo",
          "Arduino",
          "Raspberry Pi",
          "Sensors & Instrumentation",
          "Embedded Systems",
        ],
      },
      {
        title: "Software & Distributed Systems",
        items: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "Python / Flask",
          "Go / Gin",
          "REST APIs",
          "gRPC",
          "Kafka",
          "Microservices",
          "Spring Security / JWT",
        ],
      },
      {
        title: "Data & Infrastructure",
        items: [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Firebase",
          "Docker",
          "AWS EC2",
          "Git",
        ],
      },
    ],
  },

  experience: {
    title: "Professional Software Engineering Experience",
    items: [
      {
        title: "TechnoNext Ltd | Junior Software Engineer, Backend",
        summary: "Built backend services for payment and travel systems, working across API integrations and microservice operations. This production engineering experience informs how I structure and connect research software.",
        when: "February 2023 - June 2024",
        bullets: [
          "Contributed to backend development for payment-service and online travel agency projects.",
          "Participated in R&D involving microservice-based payment-service operations.",
          "Integrated third-party airfare-distribution and payment-settlement APIs.",
          "Contributed to backend development for an Applicant Tracking System."
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Go",
          "Gin",
          "JPA",
          "MySQL",
          "PostgreSQL",
          "Kafka",
          "gRPC"
        ]
      },
      {
        title: "Square Health Ltd | Software Engineer Intern, Backend",
        summary: "Translated inventory-management requirements into a system architecture, an entity-relationship diagram (ERD), and REST APIs; demonstrated experience connecting problem specifications to working software.",
        when: "November 2022 - January 2023",
        bullets: [
          "Developed the architecture for an Inventory Management System from requirements analysis.",
          "Designed its ER diagram.",
          "Developed REST APIs according to the system architecture."
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "JPA",
          "MySQL",
          "Git"
        ]
      },
      {
        title: "Tecognize Solutions Limited | Software Engineer, Backend",
        summary: "Developed Python/Flask APIs, integrated SMS and email services for DurbinX, and deployed backend services on AWS and virtual machines.",
        when: "January 2022 - June 2022",
        bullets: [
          "Developed Flask-based RESTful APIs for web applications.",
          "Deployed backend services on AWS and virtual machines.",
          "Integrated external SMS and email services for the DurbinX parcel-delivery platform."
        ],
        technologies: [
          "Python",
          "Flask",
          "PostgreSQL",
          "Git",
          "Docker",
          "AWS EC2",
          "Redis"
        ],
        highlights: [
          "Personal contribution: developed 50+ APIs for DurbinX."
        ]
      },
      {
        title: "UIT User Support Associate | Montana State University",
        when: "May 2026 - August 2026 · Part-time",
        summary: "Supported campus computing infrastructure through systems troubleshooting, workstation configuration, and computer-lab and print-station deployment.",
        bullets: [
          "Diagnosed hardware, software, account, printing, and connectivity issues across Windows and macOS; documented service tickets and escalated issues when needed.",
          "Supported workstation replacements, lab refreshes, and orientation technology setup, communicating technical issues with students, faculty, and staff."
        ]
      }
    ]
  },

  researchExperience: {
    title: "Research Experience",
    items: [
      {
        title: "M.S. Thesis Research | Montana State University",
        relatedOutputs: [{ label: "Evaluating Band Selection for Spectral-Spatial Hyperspectral Classification under Label Scarcity | WHISPERS 2026 · Accepted and presented", targetId: "pub-whispers-2026" }],
        summary: "My thesis examines band selection and semi-supervised learning for hyperspectral image classification when labeled data are scarce.",
        when: "August 2025 - Present",
        bullets: [
          "Compared three band-selection methods and two lightweight 3D CNN classifiers across five datasets and 5-, 20-, and 50-band budgets.",
          "Hyper3DNetLite was part of the best configuration in 13 of 15 dataset/band settings; no pipeline was statistically superior across all settings.",
          "Pseudo-labeling improved matched supervised baselines in selected low- and intermediate-label settings, but did not compensate for weak initial models.",
          "Current work explores computationally efficient band-selection approaches and further semi-supervised learning strategies."
        ],
        advisor: "Dr. Brad Whitaker",
        advisorUrl: "https://ece.montana.edu/directory/faculty/2110159/bradley-whitaker",
        topic: "Efficient Band Selection and Semi-Supervised Learning for Hyperspectral Image Classification",
        areas: [
          "hyperspectral image classification",
          "band selection / dimensionality reduction",
          "spectral-spatial learning",
          "3D convolutional neural networks",
          "semi-supervised learning",
          "learning with limited labeled data"
        ],
        evidence: {
          highlights: [
            "Unified scope: 90 dataset–budget–pipeline evaluations.",
            "Hyper3DNetLite + IBRA+GSS had the best overall cross-dataset ranking."
          ]
        }
      },
      {
        "title": "Graduate Research Assistant | TrialWear, Montana State University",
        "when": "Spring-Summer 2026",
        "advisor": "Dr. Elizabeth Johnson (Principal Investigator)",
        "advisorUrl": "https://www.montana.edu/nursing/directory/bozeman/2344665/elizabeth-johnson",
        "summary": "I contributed research software to TrialWear, an interdisciplinary clinical-trial safety and wearable-technology project at MSU. I developed and extended a provider-facing Flutter prototype and a Spring Boot backend prototype to connect mobile workflows with trial and geospatial data.",
        "bullets": [
                "Built REST APIs and a PostgreSQL/PostGIS data layer with Flyway migrations; integrated the Flutter application through a service/repository/controller architecture.",
                "Implemented prototype provider-access, participant/trial dashboard, device-assignment, geo-event, contact-request, and audit-event workflows, and prepared BLE discovery, connection, and data-transfer logic.",
                "Prepared developer handover documentation. Work used development data; production deployment, production authentication/security, full clinical functionality, and complete real-hardware validation were outside the completed scope."
        ],
        "technologies": [
                "Flutter",
                "Dart",
                "Java",
                "Spring Boot",
                "REST APIs",
                "PostgreSQL",
                "PostGIS",
                "Flyway",
                "Docker",
                "BLE"
        ],
        "contextLink": {
                "label": "TrialWear's public MSU project context",
                "url": "https://tto.montana.edu/nsf-art/strp_success_stories/johnson_team.html",
                "note": "This earlier project page provides background on the broader project; it does not document my Spring-Summer 2026 contribution."
        }
},
      {
        title: "Graduate Research Assistant | Protein Scaffold Gap Filling, MSU",
        advisor: "Dr. Binhai Zhu",
        advisorUrl: "https://www.cs.montana.edu/bhz/homepage.html",
        summary: "Explored probabilistic and machine-learning approaches to protein scaffold gap filling through NSF-funded research (NSF CCF-2307572), drawing on literature in genome and protein clustering. This work broadened my experience applying computational methods to scientific questions.",
        when: "January 2025 - August 2025",
        bullets: [
          "Investigated the Protein Scaffold Gap Filling problem using probabilistic and machine-learning approaches.",
          "Conducted literature reviews involving genome-clustering and protein-clustering algorithms."
        ],
        topic: "Protein Scaffold Gap Filling Problem",
        areas: [
          "machine learning",
          "probabilistic methods",
          "computational biology",
          "clustering algorithms"
        ]
      },
      {
        title: "Research Assistant | Directorate of Research & Extension, CUET",
        relatedOutputs: [{ label: "Path Planning Approaches in Multi-robot System: A Review - Engineering Reports / Wiley · Published", targetId: "pub-wiley-2024", url: "https://doi.org/10.1002/eng2.13035" }],
        summary: "Studied path-planning approaches for cooperative multi-robot tasks through literature analysis, simulation experiments, and case studies. The work contributed to a review published in Engineering Reports.",
        when: "June 2023 - January 2024",
        bullets: [
          "Conducted comprehensive literature reviews on multi-robot path planning.",
          "Analyzed state-of-the-art algorithms for multi-robot systems and designed simulation experiments for case studies.",
          "Wiley's author-contribution statement credits my work in data curation, investigation, software, visualization, formal analysis, and manuscript review/editing.",
          "The work contributed to a review paper published in Engineering Reports (Wiley)."
        ],
        advisor: "Dr. Sajal Chandra Banik",
        advisorUrl: "https://scholar.google.com/citations?user=PZCslRcAAAAJ&hl=en",
        topic: "Multi-Robot Path Planning for Cooperative Tasks",
        areas: [
          "multi-robot systems",
          "path planning",
          "cooperative robotics",
          "autonomous systems",
          "simulation"
        ]
      }
    ]
  },

  leadershipExperience: {
    title: "Leadership Experience",
    items: [
      {
        title: "Robo Mechatronics Association, Bangladesh | Vice President",
        detailSlug: "rma-undergraduate-robotics",
        summary: "Led RMA activities focused on mechatronics and automation, alongside broader robotics competition and hackathon participation.",
        when: "February 2021 - August 2022",
        bullets: [
          "Organized university seminars, workshops, and competitions focused on mechatronics technology and industrial automation.",
          "Led a chapter of 150+ members toward community service, academics, and unity.",
          "Participated in 17 inter- and intra-university national robotics competitions and hackathons."
        ],
        highlights: [
          "Leadership scope: 150+ chapter members.",
          "Personal participation: 17 robotics competitions and hackathons."
        ]
      },
      {
        title: "IEOM CUET Student Chapter | Research & Publication Secretary",
        summary: "Helped organize an inter-university scientific poster competition. The chapter received the Outstanding Student Chapter Award-GOLD during my tenure; this was chapter/team recognition.",
        when: "Feb 2021 to Aug 2022",
        bullets: [
          "Assisted the team in arranging an online Inter-University Scientific Poster Presentation Competition.",
          "The IEOM CUET Student Chapter received the Outstanding Student Chapter Award, \"GOLD\" during the tenure (chapter/team award)."
        ]
      },
      {
        title: "Volunteer for Bangladesh | Institute Representative",
        summary: "Connected campus volunteers with community initiatives supporting children’s health, education, well-being, and environmental cleanliness.",
        when: "Mar 2019 to Jul 2019",
        bullets: [
          "Acted as a liaison, connecting campus volunteers with initiatives supporting underprivileged children’s health, education, and well-being.",
          "Promoted environmental cleanliness and actively participated in volunteer activities to support the community."
        ]
      },
      {
        title: "CUET Chess Club | Founding Technical Secretary",
        summary: "Helped establish the campus chess community, organizing tournaments and supporting club communications.",
        when: "October 2021 - September 2022",
        bullets: [
          "Helped establish a network for chess enthusiasts on campus.",
          "Organized online and offline tournaments and supported club communications."
        ]
      }
    ]
  },

  projects: {
  "title": "Selected Projects & Research Software",
  "intro": "Selected implementations across robotics, sensing, machine learning, and research software, with code, demonstrations, and related outputs.",
  "items": [
    {
      "title": "OpenCV-Based Autonomous Car with Raspberry Pi",
      "detailSlug": "opencv-autonomous-car",
      "selection": "primary",
      "tags": [
        "Robotics",
        "Autonomous Systems",
        "Computer Vision"
      ],
      "desc": "A Raspberry Pi robot that connects camera-based lane estimates to differential motor control.",
      "contribution": "Adapted a tutorial-inspired pipeline using HSV masking, perspective warping, histogram-based lane estimates, and smoothing, with proportional steering control. Developed with assistance acknowledged in the repository.",
      "technologies": [
        "Python",
        "OpenCV",
        "Raspberry Pi",
        "GPIO/PWM"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/openCV-based-Autonomous-car-with-Raspberry-Pi"
        },
        {
          "label": "Video Demo",
          "url": "https://www.youtube.com/watch?v=_uvGQ6cCDds"
        }
      ],
      "subtitle": "Vision-Based Lane-Following Robot"
    },
    {
      "title": "StatScope",
      "detailSlug": "statscope",
      "selection": "primary",
      "tags": [
        "Research Software",
        "Statistical Computing"
      ],
      "desc": "An interactive tool for exploring hypothesis-testing errors, statistical power, and sample-size planning.",
      "contribution": "Built Flutter/Dart interfaces for distribution visualization, approximate sample-size calculations, and CSV-based treatment-pair comparisons with effect-size and replication estimates.",
      "technologies": [
        "Flutter",
        "Dart",
        "Normal approximations",
        "CSV analysis"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/statscope"
        },
        {
          "label": "Live Demo",
          "url": "https://safat99.github.io/statscope/"
        }
      ],
      "subtitle": "Statistical Power & Study Planning"
    },
    {
      "title": "Sleep-Stage Classification for NFLE Patients",
      "detailSlug": "sleep-stage-classification",
      "selection": "primary",
      "tags": [
        "Machine Learning",
        "Signal Processing"
      ],
      "desc": "A collaborative sleep-scoring study using recordings from the CAP Sleep Database for NFLE patients.",
      "contribution": "Coauthored the related CNN study. The public repository preserves EDF/annotation preparation and exploratory Keras LSTM code; it is not presented as a complete reproduction of the published CNN.",
      "technologies": [
        "Python",
        "MNE",
        "Pandas",
        "TensorFlow/Keras"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/Sleep_stage_classifciation_of_epilepsy_patient"
        }
      ],
      "relatedOutputs": [
        {
          "label": "Related Publication · Springer / ICO 2021 · Published 2022",
          "targetId": "pub-ico-2022",
          "url": "https://doi.org/10.1007/978-3-030-93247-3_35"
        }
      ],
      "subtitle": "CAP Sleep Database"
    },
    {
      "title": "Emergency Vehicle Detection",
      "detailSlug": "emergency-vehicle-detection",
      "selection": "primary",
      "tags": [
        "Computer Vision",
        "Deep Learning"
      ],
      "status": "Collaborative project",
      "desc": "A vehicle-image workflow combining emergency/non-emergency classification with bounding-box prediction.",
      "contribution": "Contributed to a collaborative project whose repository documents YOLOv4-generated annotations and VGG16/VGG19 models with classification and box-regression heads. Methods describe the team workflow, not sole individual implementation or results.",
      "technologies": [
        "TensorFlow/Keras",
        "OpenCV",
        "YOLOv4",
        "VGG16/VGG19"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/emergency_vehicle_detection"
        }
      ],
      "subtitle": "Classification & Bounding-Box Prediction"
    },
    {
      "title": "NodeMCU IoT Box",
      "detailSlug": "nodemcu-iot-box",
      "selection": "primary",
      "tags": [
        "Embedded Systems",
        "IoT",
        "Sensors"
      ],
      "desc": "A fabricated controller for internet-connected relay switching and temperature/humidity monitoring.",
      "contribution": "Built NodeMCU firmware and interfaces around Firebase, DHT11 sensing, and four-relay control. Repository documentation includes custom PCB design/fabrication, a web dashboard, and an MIT App Inventor app.",
      "technologies": [
        "ESP8266/NodeMCU",
        "Firebase",
        "JavaScript",
        "MIT App Inventor"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/IoT-Box"
        },
        {
          "label": "Video Demo",
          "url": "https://www.youtube.com/watch?v=9XfIP5cwh9o"
        }
      ],
      "relatedOutputs": [
        {
          "label": "Conference Paper · BIM 2021 · Presented",
          "targetId": "bim-2021"
        }
      ],
      "subtitle": "Smart Home Automation System"
    },
    {
      "title": "Mechanical Vibration Analysis",
      "detailSlug": "mechanical-vibration-analysis",
      "selection": "primary",
      "tags": [
        "Sensors",
        "Signal Processing",
        "Embedded Systems"
      ],
      "desc": "A sensor-to-analysis workflow for examining measured car-body vibration in time and frequency domains.",
      "contribution": "Collected two ADXL335 accelerometer signals through Arduino and CSV, then analyzed them using Gaussian smoothing, bandpass filtering, FFT, and MATLAB/Excel plots.",
      "technologies": [
        "ADXL335",
        "Arduino",
        "MATLAB",
        "Excel"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/Mechanical_Vibration_Analysis_with_MATLAB_and_Arduino"
        },
        {
          "label": "Video Demo",
          "url": "https://www.youtube.com/watch?v=p5eDBFT5zkI"
        }
      ],
      "subtitle": "Arduino & ADXL335 Car-Body Sensing"
    },
    {
      "title": "Audio Classification | UrbanSound8K",
      "selection": "secondary",
      "tags": [
        "Machine Learning",
        "Signal Processing"
      ],
      "status": "Historical prototype",
      "desc": "Ten-class sound-classification project with MFCC preprocessing, CNN inference, and a Tkinter interface.",
      "contribution": "Current repository supports MFCC padding/truncation and pretrained-CNN inference. Training/model assets are external; historical MLP/CNN work is preserved in the factual inventory without new performance claims.",
      "technologies": [
        "Python",
        "librosa",
        "TensorFlow/Keras",
        "Tkinter"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/audio_classifier_of_urbansound8k_dataset"
        }
      ]
    },
    {
      "title": "Health AI Receptionist | Face-Detection Prototype",
      "selection": "secondary",
      "tags": [
        "Computer Vision",
        "Backend Systems"
      ],
      "status": "Partial prototype",
      "desc": "Historical face-detection service and backend scaffold, preserved as a future archive candidate.",
      "contribution": "Inspected code supports a Flask-RESTX API with MediaPipe/OpenCV detection and face-crop helpers. The Java side is a Spring Boot scaffold; a complete recognition or microservice system is not established.",
      "technologies": [
        "Python",
        "Flask-RESTX",
        "MediaPipe",
        "Spring Boot scaffold"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/Health_AI_Receptionist"
        }
      ]
    },
    {
      "title": "Pedestrian Detection | VGG16 Experiments",
      "selection": "secondary",
      "tags": [
        "Computer Vision",
        "Deep Learning"
      ],
      "status": "Historical experiments",
      "desc": "Pedestrian image/annotation preparation and transfer-learning experiments for bounding-box prediction.",
      "contribution": "Inspected training code uses an ImageNet VGG16 backbone and regression head. Older VGG19/ResNet50 exploration remains historical source context, not a verified code comparison.",
      "technologies": [
        "Python",
        "TensorFlow/Keras",
        "VGG16",
        "OpenCV"
      ],
      "evidenceLinks": [
        {
          "label": "GitHub",
          "url": "https://github.com/Safat99/pedestrian_detection_with_diff_DL_model"
        }
      ]
    }
  ]
},

  detailPages: [
    {
      slug: "opencv-autonomous-car",
      title: "OpenCV-Based Autonomous Car with Raspberry Pi",
      eyebrow: "Robotics · Computer Vision",
      summary: "A Raspberry Pi lane-following robot that connects camera-based lane estimates to differential motor control.",
      contribution: "Adapted a tutorial-inspired vision and steering pipeline, with assistance acknowledged in the repository.",
      sections: [
        { title: "System scope", bullets: ["The repository describes two operating modes: local keyboard control with a camera preview, and autonomous lane following.", "The prototype uses a Raspberry Pi 4, camera module, motor driver, and two DC motors."] },
        { title: "Technical approach", bullets: ["An earlier lane-detection path used HSV thresholding, perspective transformation, histogram-based lane estimates, and proportional steering.", "The repository's final lane-following script instead thresholds the lower camera view and compares white-pixel counts on the image's left and right sides to choose steering direction.", "A separate local-control mode runs keyboard motor control alongside a camera preview; motor commands use Raspberry Pi GPIO/PWM."] },
        { title: "Attribution", paragraphs: ["This project followed a tutorial-inspired approach. The repository acknowledges assistance; this page does not imply sole authorship of every component or design choice."] }
      ],
      technologies: ["Python", "OpenCV", "Raspberry Pi", "GPIO/PWM"],
      media: [{ src: "assets/media/projects/autonomous-car/autonomous-car-flow.png", alt: "System flow diagram connecting the Pi camera, Raspberry Pi, motor driver, robot motors, router, keyboard, and display.", caption: "Repository system diagram for the camera, Raspberry Pi, motor-control, and keyboard/display workflow.", width: 591, height: 331 }],
      videos: [{ title: "Autonomous car project demonstration", youtubeId: "_uvGQ6cCDds" }],
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/openCV-based-Autonomous-car-with-Raspberry-Pi" }, { label: "Watch video demonstration", url: "https://www.youtube.com/watch?v=_uvGQ6cCDds" }]
    },
    {
      slug: "statscope",
      title: "StatScope",
      eyebrow: "Research Planning Software · Educational Tool",
      summary: "An interactive study-planning simulator for exploring hypothesis-testing errors, statistical power, and sample-size choices.",
      contribution: "Built the Flutter/Dart application interfaces for distribution visualization, approximate sample-size calculations, and CSV-based treatment-pair comparisons.",
      sections: [
        { title: "Four learning and planning workflows", bullets: ["Learning Mode introduces hypothesis-testing concepts and statistical terminology.", "The error simulator visualizes Type I/II errors and statistical power.", "Sample-size calculators use documented normal-approximation calculations.", "Bulk Treatment Analysis compares selected/all treatment pairs from pasted CSV data and presents effect-size and sample-size planning estimates."] },
        { title: "Scope", paragraphs: ["StatScope is an educational and research-planning tool. It is not presented as a validated statistical package; users should independently verify assumptions and calculations for formal study design."] }
      ],
      technologies: ["Flutter", "Dart", "Distribution visualization", "CSV analysis"],
      interactiveDemo: { title: "Try the StatScope simulator", url: "https://safat99.github.io/statscope/", description: "Interact with the public web application. Its calculations are presented as an educational/research-planning tool and should be independently checked for formal study design." },
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/statscope" }, { label: "Live demo", url: "https://safat99.github.io/statscope/" }]
    },
    {
      slug: "sleep-stage-classification",
      title: "Sleep-Stage Classification for NFLE Patients",
      eyebrow: "Collaborative Research Project · Biomedical Signal Processing",
      summary: "A collaborative sleep-scoring study involving recordings from the CAP Sleep Database for patients with nocturnal frontal lobe epilepsy.",
      contribution: "Coauthored the related CNN study. The public repository preserves EDF/annotation preparation and exploratory Keras LSTM code; it is not a complete reproduction of the published CNN.",
      sections: [
        { title: "Project and dataset scope", bullets: ["The repository describes the CAP Sleep Database as containing 108 polysomnographic recordings, including 40 NFLE subjects; these are dataset-level counts, not Safat's individual contribution.", "The related paper studied 15 NFLE subjects. The repository contains EDF/annotation preparation and exploratory sequence-model code, not a complete reproduction of the paper's CNN."] },
        { title: "Research output", paragraphs: ["The related paper is published in the Springer / ICO 2021 volume. The publication entry provides the DOI and complete authorship details."] }
      ],
      technologies: ["Python", "MNE", "Pandas", "TensorFlow/Keras"],
      media: [{ src: "assets/media/projects/sleep-stage/sleep-stage-workflow.jpg", alt: "Project workflow diagram showing EEG signal preprocessing, EDF-to-CSV conversion, model training, evaluation, and sleep-stage prediction.", caption: "Workflow diagram from the public project repository. It documents the project pipeline, not a reproduction of the published CNN paper.", width: 1280, height: 778 }],
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/Sleep_stage_classifciation_of_epilepsy_patient" }],
      relatedOutputs: [{ label: "Published paper · Springer / ICO 2021", targetId: "pub-ico-2022", url: "https://doi.org/10.1007/978-3-030-93247-3_35" }]
    },
    {
      slug: "emergency-vehicle-detection",
      title: "Emergency Vehicle Detection",
      eyebrow: "Collaborative Project · Computer Vision",
      summary: "A vehicle-image workflow combining emergency/non-emergency classification with bounding-box prediction.",
      contribution: "The project was collaborative. Available repository documentation describes the team workflow, but does not establish an individual division of implementation sufficient for sole-contribution claims.",
      sections: [
        { title: "Documented team experiment scope", bullets: ["The team README describes an 80/20 training/test split, YOLOv4-generated annotations, and VGG16/VGG19 classification and bounding-box regression experiments.", "It reports runs at 25, 100, and 250 epochs. These are repository-reported experimental settings, not independently reproduced results or an attribution of individual work."] },
        { title: "Attribution", paragraphs: ["The methods here describe the documented project workflow. No individual performance result or sole implementation claim is assigned to Safat."] }
      ],
      technologies: ["TensorFlow/Keras", "OpenCV", "YOLOv4", "VGG16/VGG19"],
      media: [{ src: "assets/media/projects/emergency-vehicle/emergency-vehicle-workflow.png", alt: "Project workflow diagram from vehicle-image input through YOLOv4-generated bounding boxes, dataset preparation, VGG16/VGG19 experiments, and prediction output.", caption: "Collaborative project workflow documented in the public repository; this figure is not an individual performance claim.", width: 1710, height: 320 }],
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/emergency_vehicle_detection" }]
    },
    {
      slug: "nodemcu-iot-box",
      title: "NodeMCU IoT Box",
      eyebrow: "Collaborative Project · Embedded Systems",
      summary: "A fabricated controller for internet-connected relay switching and temperature/humidity monitoring.",
      contribution: "Built NodeMCU firmware and interfaces around Firebase, DHT11 sensing, and four-relay control. Project documentation also describes PCB design/fabrication, a web dashboard, and an MIT App Inventor app.",
      sections: [
        { title: "System components", bullets: ["ESP8266/NodeMCU firmware connected sensor readings and relay control to Firebase.", "The documented system included a custom PCB, web dashboard, and companion mobile interface."] },
        { title: "Research output", paragraphs: ["The work was presented at BIM 2021 as a conference paper. A public ResearchGate full-text record is available; no DOI or indexed proceedings record has been verified."] }
      ],
      technologies: ["ESP8266/NodeMCU", "Firebase", "JavaScript", "MIT App Inventor"],
      media: [
        { src: "assets/media/projects/iot-box/iot-box-working-system.webp", alt: "Assembled NodeMCU smart-home controller connected to relay modules, sensors, and household lights.", caption: "Project working setup shown in the public repository; the work was collaborative.", width: 1032, height: 581 },
        { src: "assets/media/projects/iot-box/iot-box-circuit-schematic.png", alt: "Circuit schematic for the IoT Box controller, including NodeMCU, sensors, optocouplers, and relay channels.", caption: "Controller schematic from the public project repository. Open the image for the full-resolution diagram.", width: 1920, height: 1080 }
      ],
      videos: [{ title: "NodeMCU IoT Box project demonstration", youtubeId: "9XfIP5cwh9o" }],
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/IoT-Box" }, { label: "Watch video demonstration", url: "https://www.youtube.com/watch?v=9XfIP5cwh9o" }, { label: "Conference paper full text · ResearchGate", url: "https://www.researchgate.net/publication/354860121_157-P-4_Development_and_Optimization_of_a_Real-time_Server-based_IoT_Box_A_Smart_Home_Automation_System_and_its_Subsequent_Fabrication" }],
      relatedOutputs: [{ label: "BIM 2021 conference paper · presented", targetId: "bim-2021" }]
    },
    {
      slug: "mechanical-vibration-analysis",
      title: "Mechanical Vibration Analysis",
      eyebrow: "Instrumentation · Signal Processing",
      summary: "A sensor-to-analysis workflow for examining measured car-body vibration in time and frequency domains.",
      contribution: "Collected two ADXL335 accelerometer signals through Arduino and CSV, then analyzed them using Gaussian smoothing, bandpass filtering, FFT, and MATLAB/Excel plots.",
      sections: [
        { title: "Measurement and analysis", bullets: ["Acquired two accelerometer signals using an Arduino and ADXL335 sensors.", "Processed recorded data with smoothing and bandpass filtering.", "Used FFT and time/frequency-domain plots to inspect the signals."] }
      ],
      technologies: ["ADXL335", "Arduino", "MATLAB", "Excel"],
      media: [
        { src: "assets/media/projects/mechanical-vibration/vibration-analysis-workflow.png", alt: "Flow diagram from unknown vibration measurement through ADXL335 sensing, Arduino data transfer, MATLAB noise reduction and FFT, and Excel plotting.", caption: "Project workflow diagram from the public repository.", width: 1662, height: 718 },
        { src: "assets/media/projects/mechanical-vibration/bandpass-filter-plot.jpg", alt: "Two-panel project plot comparing an original vibration time series with its band-pass-filtered time series.", caption: "Example signal-processing figure from the project repository; shown as project evidence, not a validated performance benchmark.", width: 1365, height: 775 }
      ],
      videos: [{ title: "Mechanical vibration analysis demonstration", youtubeId: "p5eDBFT5zkI" }],
      links: [{ label: "GitHub repository", url: "https://github.com/Safat99/Mechanical_Vibration_Analysis_with_MATLAB_and_Arduino" }, { label: "Watch video demonstration", url: "https://www.youtube.com/watch?v=p5eDBFT5zkI" }]
    },
    {
      slug: "rma-undergraduate-robotics",
      title: "RMA and Undergraduate Robotics",
      eyebrow: "Robotics Involvement · CUET",
      summary: "A selected account of robotics activities and student leadership associated with the Robo Mechatronics Association during Safat's undergraduate years.",
      context: "Safat served as RMA Vice President from February 2021 to August 2022. The documented portfolio records participation in 17 inter- and intra-university robotics competitions and hackathons across his broader robotics involvement.",
      contribution: "Leadership and participation are described at the level supported by the academic profile. This page does not claim sole design or construction of robots appearing in historical event media.",
      sections: [
        { title: "Leadership and community", bullets: ["Helped lead a chapter of more than 150 members.", "Organized university seminars, workshops, and competitions focused on mechatronics and industrial automation."] },
        { title: "Robotics experience", paragraphs: ["Undergraduate robotics activity included competition and simulation experience. The undergraduate MRTA thesis reproduced an existing open-source ROS/Gazebo implementation and is not featured here as original algorithm development.", "Historical photographs remain private until event context, attribution, and participant permissions are resolved."] },
        { title: "Related recognition", bullets: ["2018 · 2nd Runner-Up, Line-Follower Robotics Competition, Makers Fest, IEEE Student Branch CUET.", "2018 · 2nd Runner-Up, Formula 1 RC Race, ASRRO, CUET.", "2017 · 2nd Runner-Up, Inter-University Robo Fight, International Islamic University Chittagong."] }
      ]
    }
  ],

  creator: {
    title: "Technical Outreach & Content",
    intro: "A small selection of public demonstrations accompanying robotics, IoT, and sensing projects.",
    hint: "Use the arrows to browse selected technical videos.",
    
    videos: [
      {
        id: "_uvGQ6cCDds",
        homepageSelected: true,
        title: "OpenCV based Autonomous Car with Raspberry Pi",
        desc: "Tutorial-inspired Raspberry Pi lane-following project using OpenCV. The repository acknowledges assistance from Md. Iftekher Hossain Nabil and video support from Semonti.",
        url: "https://www.youtube.com/watch?v=_uvGQ6cCDds",
      },
      {
        id: "1279245203273771",
        title: "Eluveitie - Isara (Instrumental Cover)",
        desc: "This performance is way too special for me for several reasons. Covering Eluveitie's Isara was one of my many ambitions when I started playing flute in my undergraduate life. It was extremely difficult and without Asad Vai's guidance, this would never have been possible. He and Farshina Apu kept their nerves calm throughout our whole rehearsal sessions. Had the chance to play with my life partner which I had never thought of before. 😍👻❤️❤️",
        url: "https://www.facebook.com/reel/1279245203273771",
      },

      {
        id: "9XfIP5cwh9o",
        homepageSelected: true,
        title: "NodeMCU based IoT-Box | A Smart Home Automation System",
        desc: "An IoT project of NodeMCU-based  IoT Box which is a fully embedded system of controlling AC outputs over the internet using an App and Web Dashboard. This project was done back in the days of Covid-19.",
        url: "https://www.youtube.com/watch?v=9XfIP5cwh9o",
      },
      {
        id: "Nc4FjDRkLv0",
        title: "Line Follower Robot",
        desc: "During my undergraduate university life, I participated in many robotics competitions, where implementing faster LFR was a crucial and harder task. This video was captured probably back in 2018 when we were preparing for one of the LFR contests, which I can't remember right now.",
        url: "https://www.youtube.com/watch?v=Nc4FjDRkLv0",
      },


      // {
      //   id: "1630771997837990",
      //   title: "Ice Skating",
      //   desc: "Never give up! Practiced a lot to improve my skating skills. Fell so many times but got up again and again. Finally, I can skate smoothly now. Ice skating is not just a sport for me; it's a journey of perseverance and determination. Every fall taught me to rise stronger, and every glide filled me with joy. Grateful to Asad Vai for teaching me patiently and making this experience unforgettable. ❄️⛸️❤️",
      //   url: "https://www.facebook.com/reel/1630771997837990",
      // },

      {
        id: "661860007647465",
        title: "Unsuccessful cover>> Hariye jao",
        desc: "This is an unsuccessful cover of a popular song 'Hariye jao' by Arbovirus. I tried my best to make it as close to the original as possible but couldn't reach that level. However, I had a lot of fun making this video and hope you enjoy watching it too! Special thanks to Asad Vai for helping me with the recording and editing process. 😊🎶",
        url: "https://www.facebook.com/reel/661860007647465",
      },


      {
        id: "UXQPxg_8do",
        title: "Arduino based GameBot in TinkerCAD",
        desc: `The project is made and simulated in TinkerCAD. The goal is to make a pong game that challenges a player's reaction time by making them stop a sweeping series of LEDs at a specified point. 

                After micro-wins a big win comes where it will flash to notify the user. 
                Also, a fail will give a different sound by the buzzer.
                When the number of lives remaining will come down to zero. The game is over. 

                Arduino's port manipulation gives a better response time and consumes less memory.`,
        url: "https://www.youtube.com/watch?v=UXQPxg_8do",
      },
      {
        id: "p5eDBFT5zkI",
        homepageSelected: true,
        title: "Mechanical Vibration Analysis using Arduino and ADXL335 Sensor",
        desc: `The main target of this project is to find unknown 
        vibrations and analyze them with respect to time. Two ADXL335 sensors were used. 
        We used all the Gaussian and bandpass filters for noise reduction and Fast Fourier transform for finding the natural frequency. I hope you'll like that.`,
        url: "https://www.youtube.com/watch?v=p5eDBFT5zkI",
      },
      {
        id: "4zrcsfwV1TE",
        title: "PIR Sensor Based Alarm (Bangla Explanation)",
        desc: `I have made a DIY video about PIR Sensor Based Alarm which can be used for many kinds of security purposes. In this video, I've just described how the circuitry works. I've used Proteus software for this circuit. I hope people may like this. The main demonstration project video's link is given below. Hope you might like that too.`,
        url: "https://www.youtube.com/watch?v=4zrcsfwV1TE",
      },
      {
        id: "8pGMaKcStik",
        title: "Simple PIR Sensor Based Alarm (Bengali Demonstration)",
        desc: `A simple homemade DIY project for security and surveillance system. With PIR motion sensor a buzzer is attached. When any person comes to the range of the sensor a 20 sec(around) beep will be generated. This will be useful where we want a response if we wanna detect people in certain areas.`,
        url: "https://www.youtube.com/watch?v=8pGMaKcStik",
      },

    ],
  },

  publications: {
    title: "Publications & Research Outputs",
    intro: "Publications and accepted research outputs.",
    hint: "Publication status is included in each citation.",
    items: [
      {
        id: "pub-whispers-2026",
        featured: true,
        title: "Evaluating Band Selection for Spectral-Spatial Hyperspectral Classification under Label Scarcity",
        authors: [
          "Sarker Safat Mahmud",
          "Brad M. Whitaker",
          "John W. Sheppard"
        ],
        year: 2026,
        venue: "Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS 2026).",
        status: "accepted",
        presentedAt: "November 18, 2026",
        evidenceLinks: [
          { label: "Paper", url: "https://ieee-whispers.com/program/papers/WHISPERS_2026_paper__117.pdf" },
          { label: "Presentation Video", url: "https://www.youtube.com/watch?v=6daVOa4B1C4" },
          { label: "Program", url: "https://ieee-whispers.com/program/" },
          { label: "Conference", url: "https://www.grss-ieee.org/event/2026-16th-workshop-on-hyperspectral-imaging-and-signal-processing-evolution-in-remote-sensing-whispers/" },
          { label: "Slides", url: "assets/media/research/hyperspectral/whispers-2026-presentation.pdf" }
        ],
        problem: "Spectral dimensionality and limited expert labels constrain hyperspectral image classification.",
        approach: "Compared IBRA+GSS, SSEP, and SRPA with two lightweight 3D CNN architectures under a unified five-dataset framework.",
        studyContribution: "Hyper3DNetLite with IBRA+GSS had the strongest overall cross-dataset ranking; pseudo-labeling improved matched-label baselines in selected low- and intermediate-label settings.",
        personalRole: "Coauthored the published study.",
        desc: "A unified hyperspectral band-selection and label-scarcity study.",
        quantitativeHighlights: ["5 datasets", "3 band budgets", "8 / 25 SSL improvements"],
        relatedLink: { label: "M.S. Thesis Research", url: "#research" },
        visual: {
          src: "assets/media/research/hyperspectral/whispers-2026-experimental-pipeline.webp",
          alt: "Unified experimental pipeline for the WHISPERS 2026 hyperspectral band-selection study.",
          caption: "Unified experimental pipeline: five benchmark datasets, controlled supervised comparison, and matched pseudo-labeling analysis.",
          width: 1200,
          height: 900
        },
        meta: "Sarker Safat Mahmud, Brad M. Whitaker, and John W. Sheppard (2026) | Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS 2026) | Accepted and presented"
      },
      {
        id: "pub-wiley-2024",
        title: "Path Planning Approaches in Multi-robot System: A Review",
        authors: [
          "S. Banik",
          "S. C. Banik",
          "S. S. Mahmud"
        ],
        year: 2024,
        venue: "Engineering Reports, Wiley.",
        status: "published",
        problem: "Researchers need a systematic comparison of path-planning methods for collaborative robots in uncertain and dynamic environments.",
        approach: "Categorized classical, heuristic, and AI-based approaches and analyzed their strength, limitations, environments, experiments, and hybridization.",
        studyContribution: "The review synthesized 109 papers across 111 cases and identified how hybrid and AI-based approaches are increasingly used for dynamic, real-time planning.",
        personalRole: "Worked in data curation, investigation, software, visualization, formal analysis, and writing-review and editing.",
        desc: "A comparative review of multi-robot path planning across classical, heuristic, and AI-based methods.",
        quantitativeHighlights: ["109 papers", "111 cases", "61.3% hybrid approaches"],
        relatedLink: { label: "Multi-Robot Research Experience", url: "#research" },
        meta: "S. Banik, S. C. Banik, and S. S. Mahmud (2024) | Engineering Reports, Wiley. | Published",
        url: "https://doi.org/10.1002/eng2.13035",
        cta: "Open DOI"
      },
      {
        id: "pub-ico-2022",
        title: "A Deep Convolutional Neural Network Based Classification Approach for Sleep Scoring of NFLE Patients",
        authors: [
          "Sarker Safat Mahmud",
          "Md. Rakibul Islam Prince",
          "Md. Shamim",
          "Sarker Shahriar Mahmud"
        ],
        year: 2022,
        venue: "Intelligent Computing & Optimization (ICO 2021), Lecture Notes in Networks and Systems, Vol. 371, Springer",
        status: "published",
        problem: "Manual sleep-stage scoring is expert-dependent and difficult to scale for patients with nocturnal frontal lobe epilepsy (NFLE).",
        approach: "Applied a 1D deep CNN to six EEG channels from NFLE PSG recordings, with preprocessing and R&K sleep-stage annotations.",
        studyContribution: "The study investigated automatic sleep-stage scoring for 15 NFLE participants and reported 60.46% accuracy in the paper.",
        personalRole: "Coauthored, developed the system and ran all the experiments of the published study.",
        desc: "A Springer/ICO conference chapter presenting a CNN-based approach to sleep scoring for NFLE patients.",
        quantitativeHighlights: ["15 NFLE participants", "8-hour sleep", "60.46% reported accuracy"],
        relatedLink: { label: "View Sleep-Stage Project", url: "#/detail/sleep-stage-classification" },
        visual: {
          src: "assets/media/projects/sleep-stage/sleep-stage-workflow.jpg",
          alt: "Exploratory sleep-stage project workflow from EDF preparation through model evaluation.",
          caption: "The flow diagram of the complete study.",
          width: 1280,
          height: 778
        },
        meta: "Sarker Safat Mahmud, Md. Rakibul Islam Prince, Md. Shamim, Sarker Shahriar Mahmud (2022) | Intelligent Computing & Optimization (ICO 2021), Lecture Notes in Networks and Systems, Vol. 371, Springer | Published",
        url: "https://doi.org/10.1007/978-3-030-93247-3_35",
        cta: "Open DOI"
      },
      {
        id: "pub-jiae-2022",
        title: "Design & Fabrication of Automatic Color & Weight-Based Sorting System on Conveyor Belt",
        authors: [
          "T. J. Nuva",
          "M. I. Ahmed",
          "S. S. Mahmud"
        ],
        year: 2022,
        venue: "Journal of Integrated and Advanced Engineering, 2(2), 147-157.",
        status: "published",
        problem: "Manual sorting by color and weight is slow, labor-intensive, and inconsistent.",
        approach: "Built an Arduino-controlled conveyor prototype using an RGB color sensor, strain-gauge load cell, DC motor, servo motors, and collection bins.",
        studyContribution: "The study fabricated a low-cost sorting prototype and evaluated calibration and 21-sample sorting performance.",
        personalRole: "Experiment setup, development of the full system, design of the CAD model, Arduino Coding etc.",
        desc: "A fabricated conveyor-belt system that sorts objects by RGB color and weight.",
        quantitativeHighlights: ["100% color accuracy", "99% overall weight accuracy", "21-sample sorting test"],
        meta: "T. J. Nuva, M. I. Ahmed, and S. S. Mahmud (2022) | Journal of Integrated and Advanced Engineering, 2(2), 147-157. | Published",
        url: "https://doi.org/10.51662/jiae.v2i2.87",
        cta: "Open DOI"
      }
    ],
    highlights: [
      "Coauthored research outputs: 3 published + 1 accepted."
    ]
  },

 travel: {
    title: "Travel & Mindset",
    intro:
      "Traveling has shaped how I think and work. Experiencing different cultures across Europe helped me adapt quickly, communicate clearly, and stay calm while solving complex problems in unfamiliar environments.",
    flags: [
      { emoji: "🇧🇩", name: "Bangladesh" },
      { emoji: "🇺🇸", name: "USA" },
      { emoji: "🇮🇳", name: "India" },
    ],
    quote: {
      text: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein",
    },
    photos: {
      title: "Travel Photos",
      intro: "A few moments from my travels. Use the arrows to browse.",
      hint: "Use the arrows to browse photos.",
      items: [
        {
          src: "assets/travel/lv.jpg",
          title: "Las Vegas, USA",
          desc: `Perched on the red rocks, overlooking a vast and quiet landscape, this moment felt grounded and reflective. The desert stretched endlessly ahead, silent but powerful, making everything else feel small and clear at the same time. Sitting low, steady, and close to the earth, I remember pausing without urgency, just observing the space around me. It was a reminder that progress does not always come from movement. Sometimes it comes from stopping, thinking, and choosing the next step with intention.
`,
        },

        {
          src: "assets/travel/music.jpg",
          title: "Montana State University, USA",
          desc: `Sitting on stage, surrounded by colors, patterns, and familiar sounds, this moment felt like a quiet bridge between two worlds. The music carried memories of home while being played far away from it. Every note felt intentional, not performed for applause, but for connection. It was a reminder that culture travels with us, shaping who we are no matter where we stand. In that shared rhythm, distance faded, and belonging felt simple and real.`,
        },
        {
          src: "assets/travel/kakra.jpg",
          title: "Cox’s Bazar, Bangladesh",
          desc: `Standing on the wet sand with the sea stretching far into the horizon, I found a small moment of playfulness and curiosity. Holding a tiny crab above me, laughing without thinking, it felt simple and real. The salty air, the open sky, and the quiet rhythm of the waves made everything slow down. There was no rush, no responsibility, just presence. Moments like this remind me that joy does not need planning. Sometimes it is found by noticing small things and letting yourself enjoy them fully.`,
        },

       {
          src: "assets/travel/bd_foot.jpg",
          title: "Dhaka, Bangladesh",
          desc: `Holding the trophy under the night lights, this moment felt quietly satisfying rather than loud. It was the result of teamwork, consistency, and showing up even when it was tiring. The win itself mattered, but what stayed with me more was the process behind it. Training, coordination, and trust in each other. It reminded me that meaningful results are rarely accidental. They come from patience, discipline, and shared effort, lessons that carry far beyond the field.`,
        },
        {
          src: "assets/travel/prize.jpg",
          title: "Dhaka, Bangladesh",
          desc: "Standing on the stage during the prize giving ceremony, this moment felt less about recognition and more about shared effort. Behind the certificate were long hours of preparation, coordination, and learning together as a team. The lights, the audience, and the applause passed quickly, but the sense of responsibility and pride stayed. It reminded me that achievements feel most meaningful when they are collective, built through collaboration, trust, and showing up for each other until the end.",
        },

        {
          src: "assets/travel/jhorna.jpg",
          title: "Amiakhum, Bandarban, Bangladesh",
          desc: `Sitting beneath the falling water, this moment felt deeply grounding. The sound was loud, constant, and calming all at once, washing away the noise that usually stays in the mind. With closed eyes and open hands, there was nothing to hold onto and nothing to control. Just presence. It reminded me that strength does not always come from pushing forward. Sometimes it comes from surrendering, listening, and letting nature reset what words cannot.`,
        },
        {
          src: "assets/travel/vol.jpg",
          title: "Chittagong, Bangladesh",
          desc: `This volunteer badge and shirt represent responsibility more than recognition. Wearing it meant committing time, effort, and attention to causes that mattered beyond personal goals. There was no spotlight in the work itself, only steady contribution and quiet teamwork. It reminded me that meaningful change often happens away from applause. Through consistency, care, and showing up when needed, small actions slowly shape something larger and lasting.`,
        },

      ],
    },


    
  },

  recommendations: {
    title: "Recommendations",
    intro: "Kind words from colleagues and clients I've worked with over the years.",
    items: [
      {
        name: "Mohammad Mohitul Islam",
        role: "SWE",
        company: "Technonext Ltd (US-Bangla Group)",
        photo: "assets/recommendations/MMI.jfif",
        text: "I've worked closely with Mr. Safat on the \"Applicant Tracking System\" project and have been consistently impressed by his intelligence, hard work, and helpfulness. His exceptional problem-solving and debugging skills were evident from the start. He collaborates effectively with the QA team, ensuring deadlines and client requirements are met without issue. Mr. Safat would be a valuable addition to any development team, and I highly recommend him.",
      },
      {
        name: "Tahmia Akter",
        role: "Software Engineer",
        company: "Tecognize Solutions Limited",
        photo: "assets/recommendations/TA.jfif",
        text: "I have worked with Safat in the same team. He is an excellent backend developer with a lot of skills. When it comes to learning and implementing new tools and technologies he is the best. In addition he is a team player always willing to help his team mates. He surely can be a great asset to a team.",
      },
     
    ],
  },

  contact: {
    email: "sarkersafatmahmud@montana.edu",
    links: [
      { label: "GitHub", url: "https://github.com/safat99" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/safat99/" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=A7AvcbQAAAAJ&hl=en" },
      { label: "GrabCAD", url: "https://grabcad.com/sarker.safat.mahmud-1" },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        institution: "Montana State University",
        degree: "M.S. in Computer Science",
        when: "January 2025 - Present",
        gpa: "3.50 / 4.00",
        location: "Bozeman, Montana, USA"
      },
      {
        institution: "Chittagong University of Engineering & Technology (CUET)",
        degree: "B.Sc. in Mechatronics & Industrial Engineering",
        when: "February 2017 - August 2022",
        gpa: "3.09 / 4.00",
        location: "Chittagong, Bangladesh"
      }
    ]
  },
  researchInterests: [
    "Robotics and autonomous systems",
    "Multi-agent and multi-robot systems",
    "Machine learning and deep learning",
    "Computer vision and perception",
    "Planning, decision-making, and embodied / physical AI",
    "Remote sensing, hyperspectral imaging, and precision-agriculture applications involving AI/ML/CV or autonomy"
  ],
  teachingAndMentoring: {
    "title": "Teaching & Mentoring",
    "items": [
        {
            "title": "Graduate Teaching Assistant | Montana State University",
            "when": "2025-Present · Multiple teaching appointments",
            "summary": "Supported undergraduate learning across computer science, software engineering, engineering instrumentation, and environmental science through laboratory instruction, grading, technical guidance, and student feedback across multiple MSU teaching appointments.",
            "bullets": [],
            "courses": [
                {
                    "title": "EMEC 360/361 - Measurement & Instrument",
                    "when": "Fall 2025 · Fall 2026",
                    "instructor": "James Black",
                    "courseUrl": "https://catalog.montana.edu/coursedescriptions/emec/",
                    "instructorUrl": "https://www.montana.edu/mie/directory/1992608/james-black",
                    "description": "Support experimental work through laboratory instruction, sensor/instrument setup, preparation, and feedback on laboratory memos, while also assisting with grading homework for the associated theory coursework",
                    "media": {
                        "src": "assets/media/teaching/emec-361/emec-361-instrumentation-lab.webp",
                        "alt": "Digital oscilloscope displaying a waveform beside a function generator on an instrumentation lab bench.",
                        "caption": "Instrumentation bench used in the EMEC 361 laboratory.",
                        "width": 1600,
                        "height": 1200
                    }
                },
                {
                    "title": "CSCI 232 - Data Structures and Algorithms",
                    "when": "Summer 2025",
                    "instructor": "Reese Pearsall",
                    "courseUrl": "https://www.cs.montana.edu/pearsall/classes/summer2025/232/syllabus.html",
                    "instructorUrl": "https://www.cs.montana.edu/pearsall/",
                    "description": "Helped students work with Java, data structures, and algorithms, and graded homework and project reports."
                },
                {
                    "title": "ESOF 422 - Advanced Software Engineering: Cybersecurity Practices",
                    "when": "Spring 2025",
                    "instructor": "Dr. Clemente (Clem) Izurieta",
                    "courseUrl": "https://catalog.montana.edu/coursedescriptions/esof/",
                    "instructorUrl": "https://www.cs.montana.edu/izurieta/",
                    "description": "Provided instructional and grading support for advanced software engineering and cybersecurity practices."
                },
                {
                    "title": "ENSC 245IN - Soils",
                    "when": "Fall 2025",
                    "instructor": "Dr. Tony Hartshorn",
                    "courseUrl": "https://catalog.montana.edu/coursedescriptions/ensc/",
                    "instructorUrl": "https://landresources.montana.edu/directory/faculty/1524160/anthony-hartshorn",
                    "description": "Conducted and supported laboratory sessions and graded laboratory reports."
                }
            ],
            "highlights": [
                "Personal teaching support: 4 MSU courses."
            ]
        },
        {
            "title": "Volunteer Judge | FIRST LEGO League Championship, MSU",
            "when": "2025 and 2026",
            "summary": "Served as a volunteer judge at the FIRST LEGO League Championship hosted at Montana State University.",
            "bullets": []
        },
        {
            "title": "Arduino & Basic Electronics | Workshop Trainer",
            "when": "March 2020",
            "summary": "Trained first-year university students through a five-day hands-on Arduino and basic-electronics workshop.",
            "bullets": []
        },
        {
            "title": "Basic Sensor-Based Mobile Robotics | Workshop Instructor",
            "when": "2018",
            "summary": "Taught a two-day workshop at Cantonment Public Collegiate School, Chittagong, introducing sensor-based mobile robotics.",
            "bullets": []
        },
        {
            "title": "Industry 4.0 Workshops | Knowledge-Sharing Contributor",
            "when": "January and August 2022",
            "summary": "Participated in paid collaborative Industry 4.0 workshops at the Bangladesh Industrial Technical Assistance Centre (BITAC). During group discussions and presentations, I shared technical ideas and knowledge with leading academic and industry professionals in Bangladesh, learned from fellow participants, and explored industry skill needs and ideas for future technical training and course development.",
            "bullets": []
        }
    ]
},

  researchPresentations: {
    title: "Research Presentations",
    items: [
      {
        id: "bim-2021",
        type: "conferencePaper",
        month: "September",
        fullTextUrl: "https://www.researchgate.net/publication/354860121_157-P-4_Development_and_Optimization_of_a_Real-time_Server-based_IoT_Box_A_Smart_Home_Automation_System_and_its_Subsequent_Fabrication",
        videoUrl: "https://youtu.be/bHaUdkjGjU0",
        slidesUrl: "assets/media/research/iot-box/bim-2021-iot-box-slides.pdf",
        problem: "Existing home-automation controllers often compromise cost, remote control, security, or hardware integration.",
        approach: "Designed a compact NodeMCU and Firebase system with four relay channels, web/mobile interfaces, and a custom PCB.",
        result: "Stable-connection trials recorded 93 successful operations and 7 errors across 100 trials.",
        personalRole: "presenter, development of the full hardware setup, NodeMCU-Firebase communication, App development",
        quantitativeHighlights: ["100 trials", "93 successful", "7 failed"],
        relatedLink: { label: "View NodeMCU IoT Box", url: "#/detail/nodemcu-iot-box" },
        visual: {
          src: "assets/media/projects/iot-box/iot-box-working-system.webp",
          alt: "Assembled NodeMCU IoT Box controller connected to relays and switches.",
          caption: "The working project setup; the photo documents the working prototype associated with this presentation.",
          width: 1032,
          height: 581
        },
        // Preserve older source data until the seven-author paper byline can be verified.
        // The incomplete list is not rendered publicly while this flag is true.
        authorVerificationPending: true,
        title: "157-P-4; Development and Optimization of a Real-time Server-based IoT Box: A Smart Home Automation System and its Subsequent Fabrication",
        authors: [
          "Safat, S.",
          "Das, A.",
          "Mahmud, S. S.",
          "Rashid, R."
        ],
        year: 2021,
        venue: "International Conference on Big Data, IoT, and Machine Learning (BIM 2021)",
        location: "Cox’s Bazar, Bangladesh",
        status: "presented"
      }
    ]
  },
  scholarshipsAndAwards: {
    title: "Scholarships & Awards",
    intro: "Two-time recipient of the Crawford Wildlife Habitat Scholarship, with research themes spanning protein scaffold analysis and machine learning for wildlife habitat mapping.",
    scholarships: [
      {
        title: "Crawford Wildlife Habitat Scholarship",
        year: 2025,
        organization: "Montana State University",
        researchFocus: "Probabilistic and machine learning approaches for protein scaffold gap filling.",
        evidenceLink: {
          label: "MSU Alumni Foundation Article",
          url: "https://www.msuaf.org/s/1584/m26/1col.aspx?sid=1584&gid=1&pgid=7156&cid=13495&ecid=13495&crid=0&calpgid=61&calcid=6670",
          scope: "Confirms the 2025 inaugural cohort and this 2025 research topic. It does not independently verify the 2026 award."
        }
      },
      {
        title: "Crawford Wildlife Habitat Scholarship",
        year: 2026,
        organization: "Montana State University",
        researchFocus: "Hyperspectral imaging and machine learning for wildlife habitat mapping."
      }
    ],
    awards: [
      {
        title: "CUET Technical Scholarship",
        year: 2017,
        organization: "Chittagong University of Engineering & Technology",
        description: "The supplied academic CV describes this scholarship as awarded to students ranked among the top 15 in each department."
      },
      {
        title: "Best Volunteer Award",
        year: 2019,
        organization: "Volunteer for Bangladesh",
        description: "Awarded for “Shopner-Shoishob” Season 8, an annual children's program in Chittagong."
      },
      {
        title: "Outstanding Student Chapter Award: GOLD",
        organization: "IEOM CUET Student Chapter",
        description: "Chapter/team recognition received during the February 2021 to August 2022 leadership tenure. The exact award year is not established.",
        recognition: "chapter/team"
      }
    ],
    competitions: [
      { year: 2018, title: "2nd Runner-Up, Line-Follower Robotics Competition", organization: "Makers Fest, IEEE Student Branch CUET" },
      { year: 2018, title: "2nd Runner-Up, Formula 1 RC Race", organization: "ASRRO, CUET" },
      { year: 2017, title: "2nd Runner-Up, Inter-University Robo Fight", organization: "International Islamic University Chittagong" }
    ]
  },

};
