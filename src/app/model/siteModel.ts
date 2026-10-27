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
  badge: string;
  items: string[];
};

export type TechModel = {
  title: string;
  hint: string;
  faces: TechFace[];
};

export type ExperienceItem = {
  title: string;
  when: string;
  bullets: string[];
  advisor?: string;
  advisorUrl?: string;
  topic?: string;
  areas?: string[];
  technologies?: string[];
  summary?: string;
  courses?: { title: string; instructor: string; description: string; courseUrl?: string; instructorUrl?: string; when?: string }[];
  contextLink?: { label: string; url: string; note: string };
  highlights?: string[]; // Explicitly label personal contribution vs project/team scope.
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
  desc: string;
  meta: string;
  url?: string;
  demo?: string;
  rpaper?: string;
  highlights?: string[]; // Project results must not imply sole individual attribution.
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
  title: string;
  desc: string;
  meta: string;
  authors: string[];
  year: number;
  venue: string;
  status: "accepted" | "published";
  url?: string;     // No link when none is verified
  cta?: string;    // "Open DOI"
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
  items: { id: string; title: string; authors: string[]; year: number; venue: string; location: string; status: "presented" }[];
};

export type ScholarshipsAndAwardsModel = {
  title: string;
  items: { title: string; years: number[]; organization?: string; description: string; details?: string[]; highlights?: string[]; evidenceLinks?: { label: string; url: string; scope: string }[] }[];
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


};

// Academic/professional facts: docs/ACADEMIC_PROFILE.md.
// Current, historical, direct-artifact, and optional personal evidence is documented in docs/PHASE_1_CONTENT_RECONCILIATION.md.
// Compatibility keys: experience = professional work; projects = selected technical projects.
// Empty research `when` means no date is supplied (undergraduate thesis).
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
        "id": "research",
        "label": "Research",
        "href": "#research"
    },
    {
        "id": "education",
        "label": "Education",
        "href": "#education"
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
        "id": "stack",
        "label": "Skills",
        "href": "#stack"
    },
    {
        "id": "leadership",
        "label": "Leadership",
        "href": "#leadership"
    },
    {
        "id": "projects",
        "label": "Projects",
        "href": "#projects"
    },
    {
        "id": "publications",
        "label": "Publications",
        "href": "#publications"
    }
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
    note: "My thesis work evaluates five benchmark hyperspectral datasets; a related paper has been accepted at WHISPERS 2026."
  },
  about: {
    title: "Research & Background",
    paragraphs: [
      "I’m an M.S. student in Computer Science at Montana State University, building on a B.Sc. in Mechatronics & Industrial Engineering from Chittagong University of Engineering & Technology (CUET). My interests connect machine learning and perception with the algorithms and software behind intelligent, autonomous systems.",
      "My current thesis explores how band selection and semi-supervised learning can support hyperspectral image classification when labeled data are limited. Earlier, I worked on multi-robot path planning and compared task-allocation strategies in ROS/Gazebo simulations. These experiences shape my longer-term interests in robotics, multi-agent systems, planning, and learning.",
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
    title: "Technical Skills",
    hint: "A curated overview of my technology stack, grouped by core skill areas.",
    faces: [
      {
        title: "Backend",
        badge: "APIs • Services • Architecture",
        items: [
          "Java (Spring Boot, Spring Cloud)",
          "Go (Gin)",
          "Python (Flask, Django)",
          "REST APIs",
          "gRPC",
          "Kafka",
          "JWT • Spring Security",
        ],
      },
      {
        title: "Databases",
        badge: "Relational • NoSQL • Cache",
        items: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Google Firebase",
        ],
      },
      {
        title: "ML & Data",
        badge: "Research • Prototypes",
        items: [
          "NumPy • Pandas • Matplotlib",
          "scikit-learn",
          "TensorFlow",
          "OpenCV",
          "MATLAB",
        ],
      },
      {
        title: "DevOps",
        badge: "Build • Deploy",
        items: ["Docker", "AWS EC2", "Linux", "Git"],
      },
      {
        title: "Robotics",
        badge: "Simulation • Systems",
        items: ["ROS", "Gazebo", "Raspberry Pi"],
      },
      {
        title: "Tools",
        badge: "Everyday Workflow",
        items: ["IntelliJ", "VS Code", "Postman", "Google Colab"],
      },
    ],
  },

  experience: {
    title: "Professional Software Engineering Experience",
    items: [
      {
        title: "TechnoNext Ltd — Junior Software Engineer, Backend",
        summary: "Built backend services for payment and travel systems, working across API integrations and microservice operations. This production engineering experience informs how I structure and connect research software.",
        when: "February 2023 – June 2024",
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
        title: "Square Health Ltd — Software Engineer Intern, Backend",
        summary: "Translated inventory-management requirements into a system architecture, relational data model, and REST APIs—experience connecting a problem specification to working software.",
        when: "November 2022 – January 2023",
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
        title: "Tecognize Solutions Limited — Software Engineer, Backend",
        summary: "Developed Python services and external integrations, including more than 50 APIs for DurbinX, and deployed services on AWS and virtual machines. The work strengthened my ability to build and operate complete software systems.",
        when: "January 2022 – June 2022",
        bullets: [
          "Developed Flask-based RESTful APIs for web applications.",
          "Deployed backend services on AWS and virtual machines.",
          "For the DurbinX parcel-delivery platform, developed more than 50 APIs and implemented external service integrations including SMS and email services."
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
        title: "UIT User Support Associate — Montana State University",
        when: "May 2026 – August 2026 · Part-time",
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
        title: "M.S. Thesis Research — Montana State University",
        summary: "I study how band selection and semi-supervised learning can support hyperspectral image classification when labeled data are scarce. A unified evaluation across five benchmark datasets led to a paper accepted at WHISPERS 2026.",
        when: "August 2025 – Present",
        bullets: [
          "Evaluated multiple band-selection methods with lightweight 3D CNN classifiers across five benchmark hyperspectral datasets under a unified experimental framework.",
          "Investigated spectral reduction and classification under limited labeled-data conditions.",
          "The work resulted in an accepted paper at WHISPERS 2026.",
          "Current work extends the framework toward more computationally efficient band-selection approaches and improved semi-supervised learning strategies."
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
        highlights: [
          "Research scope: 5 benchmark hyperspectral datasets evaluated."
        ]
      },
      {
        "title": "Graduate Research Assistant \u2014 TrialWear, Montana State University",
        "when": "Spring\u2013Summer 2026",
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
                "label": "TrialWear \u2014 public MSU project context",
                "url": "https://tto.montana.edu/nsf-art/strp_success_stories/johnson_team.html",
                "note": "This earlier project page provides background on the broader project; it does not document my Spring\u2013Summer 2026 contribution."
        }
},
      {
        title: "Graduate Research Assistant — Protein Scaffold Gap Filling, MSU",
        advisor: "Dr. Binhai Zhu",
        advisorUrl: "https://www.cs.montana.edu/bhz/homepage.html",
        summary: "Explored probabilistic and machine-learning approaches to protein scaffold gap filling through NSF-funded research (NSF CCF-2307572), drawing on literature in genome and protein clustering. This work broadened my experience applying computational methods to scientific questions.",
        when: "January 2025 – August 2025",
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
        title: "Research Assistant — Multi-Robot Path Planning, Directorate of Research & Extension, CUET",
        summary: "Studied path-planning approaches for cooperative multi-robot tasks through literature analysis, simulation experiments, and case studies. The work contributed to a review published in Engineering Reports.",
        when: "June 2023 – January 2024",
        bullets: [
          "Conducted comprehensive literature reviews on multi-robot path planning.",
          "Analyzed state-of-the-art algorithms for multi-robot systems.",
          "Designed simulation experiments and evaluated multi-robot case studies.",
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
      },
      {
        title: "Undergraduate Thesis — Multi-Robot Task Allocation, CUET",
        summary: "Built ROS/Gazebo simulation experiments to compare vacancy-chain and auction-based task allocation for autonomous robots, connecting distributed coordination algorithms with simulated robot behavior.",
        when: "",
        bullets: [
          "Developed ROS/Gazebo simulation experiments for multi-robot task allocation.",
          "Evaluated vacancy-chain and auction-based task-allocation approaches."
        ],
        topic: "Multi-Robot Task Allocation (MRTA) for Autonomous Robots",
        areas: [
          "multi-robot systems",
          "task allocation",
          "ROS",
          "Gazebo",
          "distributed autonomous systems"
        ],
        highlights: [
          "Thesis evaluation: 2 task-allocation strategies compared — vacancy-chain and auction-based."
        ]
      }
    ]
  },

  leadershipExperience: {
    title: "Leadership Experience",
    items: [
      {
        title: "Robo Mechatronics Association, Bangladesh — Vice President",
        summary: "Led a 150+ member chapter and organized mechatronics and automation activities. My broader robotics involvement included participation in 17 competitions and hackathons.",
        when: "February 2021 – August 2022",
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
        summary: "Helped organize an inter-university scientific poster competition. The chapter received the Outstanding Student Chapter Award–GOLD during my tenure; this was chapter/team recognition.",
        when: "Feb 2021 to Aug 2022",
        bullets: [
          "Assisted the team in arranging an online Inter-University Scientific Poster Presentation Competition.",
          "The IEOM CUET Student Chapter received the Outstanding Student Chapter Award–GOLD during the tenure (chapter/team award)."
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
        title: "CUET Chess Club — Founding Technical Secretary",
        summary: "Helped establish the campus chess community, organizing tournaments and supporting club communications.",
        when: "October 2021 – September 2022",
        bullets: [
          "Helped establish a network for chess enthusiasts on campus.",
          "Organized online and offline tournaments and supported club communications."
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    intro: "Selected projects in robotics, computer vision, machine learning, and embedded systems.",
    items: [
      {
        title: "OpenCV-Based Self-Driving Car",
        desc: "Raspberry Pi-based autonomous robot using computer vision.",
        meta: "Robotics, Autonomous Systems, Computer Vision, Raspberry Pi, Python, OpenCV",
        url: "https://github.com/Safat99/openCV-based-Autonomous-car-with-Raspberry-Pi",
        demo: "https://www.youtube.com/watch?v=_uvGQ6cCDds"
      },
      {
        title: "Multi-Robot Task Allocation",
        desc: "Undergraduate thesis project involving autonomous multi-robot task allocation using ROS and Gazebo simulations.",
        meta: "Multi-Robot Systems, ROS, Gazebo, Task Allocation",
        highlights: [
          "Project scope: 2 task-allocation strategies — vacancy-chain and auction-based."
        ]
      },
      {
        title: "NodeMCU-Based IoT Box",
        desc: "Embedded NodeMCU IoT system with a custom PCB, DHT11 sensing, and four-relay internet control using Firebase, with a JavaScript web interface and an MIT App Inventor mobile app. Presented at BIM 2021.",
        meta: "NodeMCU • Firebase • Embedded Systems • JavaScript • MIT App Inventor",
        url: "https://github.com/Safat99/IoT-Box",
        demo: "https://www.youtube.com/watch?v=9XfIP5cwh9o"
      },
      {
        title: "Mechanical Vibration Analysis of a Car Body",
        desc: "Measured car-body vibrations using ADXL335 accelerometers and Arduino, with MATLAB/Excel analysis, Gaussian smoothing, bandpass filtering, and FFT.",
        meta: "MATLAB, Sensors, Signal Analysis, Embedded Systems",
        url: "https://github.com/Safat99/Mechanical_Vibration_Analysis_with_MATLAB_and_Arduino",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6836175024676843520/",
        highlights: [
          "Project setup: 2 ADXL335 three-axis accelerometers for comparison.",
          "Project pipeline: Gaussian smoothing, bandpass filtering, and FFT."
        ]
      },
      {
        title: "Audio Classification — UrbanSound8K",
        desc: "Developed MLP- and CNN-based models for classification of the ten UrbanSound8K sound classes.",
        meta: "Machine Learning, Deep Learning, CNN, TensorFlow",
        url: "https://github.com/Safat99/audio_classifier_of_urbansound8k_dataset",
        highlights: [
          "Project task: 10-class UrbanSound8K audio classification."
        ]
      },
      {
        title: "Deep CNN-Based Emergency Vehicle Detection",
        desc: "Collaborative project exploring emergency-vehicle detection with YOLOv4-generated annotations and VGG16/VGG19 classification and bounding-box models.",
        meta: "Computer Vision • YOLOv4 • VGG16 • VGG19 • TensorFlow/Keras",
        url: "https://github.com/Safat99/emergency_vehicle_detection",
        highlights: [
          "Project-level methods: YOLOv4 annotation generation and VGG16/VGG19 models; collaborative work."
        ]
      },
      {
        title: "Sleep Stage Classification (CAP Sleep Database)",
        desc: "Historical deep CNN-based sleep-stage classification project using the CAP Sleep Database for NFLE patients.",
        meta: "Deep Learning • CNN • CAP Sleep Database",
        url: "https://github.com/Safat99/Sleep_stage_classifciation_of_epilepsy_patient"
      },
      {
        title: "Health AI Receptionist Backend",
        desc: "Historical microservice-based backend project including face recognition and supporting services. Current activity status is unverified.",
        meta: "Microservices • Backend • ML",
        url: "https://github.com/Safat99/Health_AI_Receptionist"
      },
      {
        title: "Deep CNN-based Pedestrian Detection",
        desc: "Historical pedestrian-detection project exploring VGG16, VGG19, and ResNet50.",
        meta: "Computer Vision • Deep Learning • VGG16 • VGG19 • ResNet50",
        url: "https://github.com/Safat99/pedestrian_detection_with_diff_DL_model"
      }
    ]
  },

  creator: {
    title: "Content Creator",
    
    intro: "I also create developer focused and engineering content where I document hands on projects in robotics, IoT, embedded systems, and applied machine learning. My videos focus on practical implementations like autonomous robots, smart home systems, sensor based analysis, and hardware software integration, often explained step by step so others can learn from real projects. Alongside serious engineering topics, I enjoy adding a creative and light touch through simple explanations and occasional humor, because learning engineering should feel curious, engaging, and human.",
    
    hint: "Use the arrows to browse. Press play to load the video.",
    
    videos: [
      {
        id: "_uvGQ6cCDds",
        title: "OpenCV based Autonomous Car with Raspberry Pi",
        desc: `Inspired by "Murtaza's Workshop" a popular YouTube channel for robotics and AI though our Pi 4 has a poor configuration. As a result, we have to follow a different lightweight approach to solving all the problems. The video is long but I hope you will like this.
                I couldn't finish this project without the help of Md. Iftekher Hossain vai and my friend Semonti did a tough job in making the video. So much grateful to them 😍 😍`,
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
    title: "Publications",
    intro: "Publications and accepted research outputs.",
    hint: "Publication status is included in each citation.",
    items: [
      {
        id: "pub-whispers-2026",
        title: "Evaluating Band Selection for Spectral–Spatial Hyperspectral Classification under Label Scarcity",
        authors: [
          "Sarker Safat Mahmud",
          "Brad M. Whitaker",
          "John W. Sheppard"
        ],
        year: 2026,
        venue: "Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS 2026).",
        status: "accepted",
        desc: "Accepted paper on band selection for spectral–spatial hyperspectral classification under label scarcity.",
        meta: "Sarker Safat Mahmud, Brad M. Whitaker, and John W. Sheppard (2026) | Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS 2026). | Accepted"
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
        desc: "Review of multi-robot path-planning approaches, comparing methods and their strengths and limitations.",
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
        desc: "Conference chapter presenting a CNN-based approach to sleep scoring for NFLE patients.",
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
        venue: "Journal of Integrated and Advanced Engineering, 2(2), 147–157.",
        status: "published",
        desc: "Design and fabrication of a conveyor-belt system for color- and weight-based sorting.",
        meta: "T. J. Nuva, M. I. Ahmed, and S. S. Mahmud (2022) | Journal of Integrated and Advanced Engineering, 2(2), 147–157. | Published",
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
        when: "January 2025 – Present",
        gpa: "3.50 / 4.00",
        location: "Bozeman, Montana, USA"
      },
      {
        institution: "Chittagong University of Engineering & Technology (CUET)",
        degree: "B.Sc. in Mechatronics & Industrial Engineering",
        when: "February 2017 – August 2022",
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
            "title": "Graduate Teaching Assistant — Montana State University",
            "when": "2025–Present · Multiple teaching appointments",
            "summary": "Supported undergraduate learning across computer science, software engineering, engineering instrumentation, and environmental science through laboratory instruction, grading, technical guidance, and student feedback across multiple MSU teaching appointments.",
            "bullets": [],
            "courses": [
                {
                    "title": "EMEC 360/361 — Measurement & Instrument",
                    "when": "Fall 2025 · Fall 2026",
                    "instructor": "James Black",
                    "courseUrl": "https://catalog.montana.edu/coursedescriptions/emec/",
                    "instructorUrl": "https://www.montana.edu/mie/directory/1992608/james-black",
                    "description": "Support experimental work through laboratory instruction, sensor/instrument setup, preparation, and feedback on laboratory memos, while also assisting with grading homework for the associated theory coursework"
                },
                {
                    "title": "CSCI 232 — Data Structures and Algorithms",
                    "when": "Summer 2025",
                    "instructor": "Reese Pearsall",
                    "courseUrl": "https://www.cs.montana.edu/pearsall/classes/summer2025/232/syllabus.html",
                    "instructorUrl": "https://www.cs.montana.edu/pearsall/",
                    "description": "Helped students work with Java, data structures, and algorithms, and graded homework and project reports."
                },
                {
                    "title": "ESOF 422 — Advanced Software Engineering: Cybersecurity Practices",
                    "when": "Spring 2025",
                    "instructor": "Dr. Clemente (Clem) Izurieta",
                    "courseUrl": "https://catalog.montana.edu/coursedescriptions/esof/",
                    "instructorUrl": "https://www.cs.montana.edu/izurieta/",
                    "description": "Provided instructional and grading support for advanced software engineering and cybersecurity practices."
                },
                {
                    "title": "ENSC 245IN — Soils",
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
            "title": "Volunteer Judge — FIRST LEGO League Championship, MSU",
            "when": "2025 and 2026",
            "summary": "Served as a volunteer judge at the FIRST LEGO League Championship hosted at Montana State University.",
            "bullets": []
        },
        {
            "title": "Arduino & Basic Electronics — Workshop Trainer",
            "when": "March 2020",
            "summary": "Trained first-year university students through a five-day hands-on Arduino and basic-electronics workshop.",
            "bullets": []
        },
        {
            "title": "Basic Sensor-Based Mobile Robotics — Workshop Instructor",
            "when": "2018",
            "summary": "Taught a two-day workshop at Cantonment Public Collegiate School, Chittagong, introducing sensor-based mobile robotics.",
            "bullets": []
        },
        {
            "title": "Industry 4.0 Workshops — Knowledge-Sharing Contributor",
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
        title: "Development and Optimization of a Real-time Server-based IoT Box for Smart Home Automation.",
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
    title: "Scholarships, Awards, and Achievements",
    items: [
      {
        title: "Crawford Wildlife Habitat Scholarship",
        years: [
          2025,
          2026
        ],
        organization: "Montana State University",
        description: "Two-time recipient of the $10,000 research scholarship.",
        details: [
          "2026: Hyperspectral imaging / machine learning for wildlife-habitat mapping",
          "2025: Probabilistic / machine-learning methods for protein scaffold gap filling"
        ],
        highlights: [
          "Personal award: 2× Crawford Scholarship recipient — 2025 and 2026."
        ],
        evidenceLinks: [
          {
            label: "MSU Alumni Foundation — 2025 inaugural Crawford cohort",
            url: "https://www.msuaf.org/s/1584/m26/1col.aspx?sid=1584&gid=1&pgid=7156&cid=13495&ecid=13495&crid=0&calpgid=61&calcid=6670",
            scope: "2025 inaugural cohort context only; 2026 receipt and two-time-recipient status are supported by the verified academic profile, not independently by this article."
          }
        ]
      },
      {
        title: "Best Volunteer Award",
        years: [
          2019
        ],
        description: "Awarded by Volunteer for Bangladesh for “Shopner-Shoishob” Season 8, an annual children's program in Chittagong."
      },
      {
        title: "Robotics Competition — 2nd Runner-Up",
        years: [
          2018
        ],
        description: "Line-Follower Robot competition, Makers Fest, IEEE Student Branch CUET."
      },
      {
        title: "Formula 1 RC Race — 2nd Runner-Up",
        years: [
          2018
        ],
        description: "ASRRO, CUET."
      },
      {
        title: "Inter-University Robo Fight — 2nd Runner-Up",
        years: [
          2017
        ],
        description: "International Islamic University Chittagong."
      },
      {
        title: "Technical Scholarship",
        years: [
          2017
        ],
        description: "Awarded to students ranked among the top 15 in each department at CUET."
      },
      {
        title: "IEOM Outstanding Student Chapter Award–GOLD",
        years: [],
        organization: "IEOM CUET Student Chapter",
        description: "Chapter/team award received during the February 2021–August 2022 leadership tenure; exact award year is not established.",
        highlights: [
          "Team recognition: chapter award, not an individual award."
        ]
      }
    ]
  },

};
