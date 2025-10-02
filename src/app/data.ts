import { IconType } from 'react-icons';
import { FaNodeJs } from 'react-icons/fa';
import { Briefcase, Coffee } from 'lucide-react'; 
// import { Briefcase, Code, Coffee } from 'lucide-react'; 
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiVercel,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNotion,
  SiGithub,
  SiPostman,
  SiExpress, // Added
  SiFigma,   // Added
} from 'react-icons/si';

// --- TYPE DEFINITIONS ---

export type Project = {
  title: string;
  description: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
  screenshots: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};

export type Skill = {
  name: string;
  icon: IconType;
  color?: string; // ✅ tambahkan biar tidak error
};

export type NavLink = {
  name: string;
  hash: string;
  href?: string; // ✅ tambahkan biar tidak error
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[]; // Array string untuk bullet points
};

export type WorkingOnItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type SoftSkill = {
  skill: string;
  description: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  logoUrl: string; // Path ke logo di folder public
  credentialUrl: string; // Tautan verifikasi
};

// --- DATA ARRAYS ---

export const projects: Project[] = [
  {
    title: 'SIAD (Digital Archive System)',
    description: 'An end-to-end web platform to modernize document management and institutional workflows at the Lampung Regional Police.',
    caseStudy: {
      problem:
        'The manual, paper-based archiving process caused significant operational friction, including slow document retrieval, lack of transparency, and risk of data loss.',
      solution:
        'Architected and developed a full-stack solution using Next.js, PostgreSQL, and Prisma. The system features role-based access, a centralized dashboard, and digital task delegation.',
      result:
        'Projected to reduce manual effort by 60% and accelerate document retrieval by 70%. The project is currently at 75% completion, with all core features fully functional.',
    },
    screenshots: [
      '/projects/siap/ss1.png',
      '/projects/siap/ss2.png',
      '/projects/siap/ss3.png',
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/hafiz-dev1/siap-tik-polda',
    liveLink: '#',
  },
  // {
  //   title: 'AI-Augmented Content Workflow',
  //   description: 'An R&D project to design an innovative workflow that leverages AI and Design Thinking to efficiently produce high-quality educational content.',
  //   caseStudy: {
  //     problem:
  //       'Solo content creation is often slowed by repetitive tasks like research and drafting, creating a bottleneck that limits both quality and output.',
  //     solution:
  //       'Designed a semi-automated system where AI acts as a collaborative partner, using a custom chain of prompts to handle research and first drafts, freeing me to focus on storytelling.',
  //     result:
  //       'This innovative process successfully reduced the time from ideation to first draft by 50%, proving that a well-designed human-AI system can significantly amplify creative productivity.',
  //   },
  //   screenshots: [
  //     '/projects/ai-workflow/ss1.jpeg', // Anda bisa ganti dengan diagram workflow
  //     '/projects/ai-workflow/ss2.jpeg',
  //   ],
  //   technologies: ['Systems Design', 'Design Thinking', 'AI Prompt Engineering', 'Content Strategy'],
  //   githubLink: '#',
  //   liveLink: '#',
  // },
  {
    title: 'G.L.A.S.S. (Game Director Role)',
    description: 'A PC-exclusive action game developed in an academic setting, where I took on the role of Game Director to lead a multidisciplinary team.',
    caseStudy: {
      problem:
        'The primary challenge was organizational: unifying a diverse team of student artists, programmers, and writers to deliver a single, cohesive creative vision under a tight deadline.',
      solution:
        'I led the project from concept to completion, facilitating brainstorming, managing the production timeline, and ensuring open communication between all disciplines.',
      result:
        "Successfully delivered a polished, playable game prototype. This was my first practical experience in becoming a 'T-shaped' professional, strengthening my leadership and collaboration skills.",
    },
    screenshots: [
      '/projects/glass/ss1.jpeg',
      '/projects/glass/ss2.jpeg',
      '/projects/glass/ss3.jpeg',
    ],
    technologies: ['Leadership', 'Project Management', 'Game Design', 'Team Collaboration'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'E-Cuti (Employee Leave System)',
    description: 'A web application designed to enhance the employee experience by digitizing the entire leave request and approval process.',
    caseStudy: {
      problem:
        'The manual, paper-based leave system created unnecessary friction, was inefficient, and lacked transparency for employees and managers.',
      solution:
        'Developed an intuitive, user-friendly interface with React.js and Tailwind CSS that allows for seamless digital submissions, tracking, and approvals within an Agile Scrum framework.',
      result:
        'The application was a major success, reducing paper-based form usage by 90% and significantly improving employee satisfaction with internal HR processes.',
    },
    screenshots: [
      '/projects/e-cuti/ss1.jpeg',
      '/projects/e-cuti/ss2.jpeg',
      '/projects/e-cuti/ss3.jpeg',
    ],
    technologies: ['React.js', 'Express.js', 'SQL', 'Tailwind CSS', 'Agile Scrum'],
    githubLink: '#',
    liveLink:
      'https://www.figma.com/design/dUgQ5mxznXUSBvjQxrZmx2/High_Fidelity_E-Cuti?node-id=0-1&p=f&t=hKAxYSpnlMCRoueQ-0',
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' }, // Added
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' }, // Added
  { name: 'Notion', icon: SiNotion, color: '#000000' },
];

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#', href: '#' },
  { name: 'About', hash: '#about', href: '#about' },
  { name: 'Skills', hash: '#skills', href: '#skills' },
  { name: 'Projects', hash: '#projects', href: '#projects' },
  { name: 'Contacts', hash: '#contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    role: 'Fullstack Developer',
    company: 'TIK POLDA Lampung',
    duration: 'Aug 2025 - Present',
    description: [
      'Developing the Digital Archive Information System (SIAD) using Next.js, PostgreSQL, and Prisma.',
      'Designing and implementing full-stack features to reduce manual archiving efforts by an estimated 60%.',
      'Supporting a digital transformation projected to cut document retrieval time by 70%.',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'CV. Newus Technology',
    duration: 'Aug 2024 - Sep 2024',
    description: [
      'Built interactive and SEO-friendly web applications with Next.js and React, improving performance by 40%.',
      'Translated Figma designs into responsive user interfaces with 100% accuracy.',
      'Collaborated with cross-functional teams to accelerate project delivery by 20%.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'PT. Bank Syariah Indonesia',
    duration: 'Jul 2023 - Sep 2023',
    description: [
      'Performed data analysis to support financial services, improving reporting accuracy by 25%.',
      'Assisted in the account migration for over 200 customers with a 95% success rate.',
      'Supported the adoption of digital banking services, contributing to a 15% increase.',
    ],
  },
  {
    role: 'Frontend & UI/UX Developer',
    company: 'PT. Sugar Labinta Lampung',
    duration: 'Aug 2022 - Dec 2022',
    description: [
      'Developed an E-Leave Information System using React.js and SQL, reducing paper-based requests by 90%.',
      'Managed project documentation, improving team communication efficiency by 30%.',
      'Delivered features on time in 100% of assigned sprints within an Agile Scrum methodology.',
    ],
  },
];

export const workingOn: WorkingOnItem[] = [
  // {
  //   title: 'Deepening Go (Golang) Expertise',
  //   description: 'Exploring Go to build high-performance, concurrent backend APIs and services.',
  //   icon: Code,
  // },
  {
    title: 'Side Project: AI-Powered Notes',
    description: 'Building a smart note-taking app that uses AI to automatically summarize and categorize notes, extending my work on AI-augmented workflows.',
    icon: Briefcase,
  },
  {
    title: 'Studying System Design',
    description: 'Learning the principles of distributed systems and scalable architecture to build more robust and resilient applications.',
    icon: Coffee,
  },
];

// --- TAMBAHKAN DATA BARU ---
export const softSkills: SoftSkill[] = [
  {
    skill: 'Teamwork & Collaboration',
    description: 'Proven ability to work effectively in cross-functional teams, demonstrated through leading a game development project and thriving in Agile Scrum environments.',
  },
  {
    skill: 'Complex Problem-Solving',
    description: 'A natural inclination to deconstruct complex challenges—from digitizing archival systems to optimizing web performance—into manageable parts to devise efficient solutions.',
  },
  {
    skill: 'Effective Communication',
    description: 'Capable of bridging the gap between technical and non-technical stakeholders, ensuring clear alignment with designers, managers, and end-users.',
  },
  {
    skill: 'Growth Mindset & Adaptability',
    description: 'Enthusiastic about embracing new technologies and methodologies, from leveraging AI for creative workflows to quickly adapting to new project requirements.',
  },
];

export const certifications: Certification[] = [
  {
    name: 'AIntroduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Issued: Feb 2025',
    logoUrl: '/images/logos/cisco.png',
    credentialUrl: 'https://www.credly.com/badges/9c52ab88-4f5e-4a0a-8a29-a869a6f0802d', // Ganti dengan link Anda
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Issued: Feb 2025',
    logoUrl: '/images/logos/cisco.png',
    credentialUrl: 'https://www.credly.com/badges/fbc58827-c1e4-49b8-b6a3-927b1a625f9f', // Ganti dengan link Anda
  },
  {
    name: 'Software Development and IT - Complete Guide to Key',
    issuer: 'Udemy',
    date: 'Issued: Nov 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-08fbb004-3c1c-4f8a-b3cc-295e7d96a237/', // Ganti dengan link Anda
  },
  {
    name: 'The Complete Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Issued: Nov 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-e48eab46-2901-4454-973a-80e026456697/', // Ganti dengan link Anda
  },
  {
    name: 'The Git & GitHub Bootcamp',
    issuer: 'Udemy',
    date: 'Issued: Nov 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-ff15be3a-df17-4b83-b073-9fcf9d6d03f2/', // Ganti dengan link Anda
  },
  {
    name: 'UiPath Automation Explorer (Indosat IDCamp)',
    issuer: 'UiPath',
    date: 'Issued: Nov 2024',
    logoUrl: '/images/logos/uipath.svg',
    credentialUrl: 'https://drive.google.com/file/d/1A1RLKzUpqzE_Hlsy_LoLPzdzuK44kRIe/view', // Ganti dengan link Anda
  },
  {
    name: 'UiPath Citizen Developer (Indosat IDCamp)',
    issuer: 'UiPath',
    date: 'Issued: Nov 2024',
    logoUrl: '/images/logos/uipath.svg',
    credentialUrl: 'https://drive.google.com/file/d/1ayTF_4ZA87dpLdJSUjmpTyISOTM6TSJu/view', // Ganti dengan link Anda
  },
  {
    name: 'Anti-Money Laundering Concepts:AML, KYC, Compliance',
    issuer: 'Udemy',
    date: 'Issued: Oct 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-85a74e5d-5741-434b-8f80-7b8a46b2e0c0/', // Ganti dengan link Anda
  },
  {
    name: 'Aspek Hukum Pembayaran Digital (E-Money, E-Wallert, Fintech)',
    issuer: 'Udemy',
    date: 'Issued: Oct 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-5c322533-4359-401a-a652-11e741198f64/', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding Academy',
    date: 'Issued: Oct 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP74QE8VPR0', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Academy',
    date: 'Issued: Oct 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/4EXG7N2WDPRL', // Ganti dengan link Anda
  },
  {
    name: 'Complete Web Design: from Figma to Webflow',
    issuer: 'Udemy',
    date: 'Issued: Oct 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-5c322533-4359-401a-a652-11e741198f64/', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding Academy',
    date: 'Issued: Sep 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/81P24194JZOY', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar Pemrograman Javascript',
    issuer: 'Dicoding Academy',
    date: 'Issued: Sep 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/81P24194JZOY', // Ganti dengan link Anda
  },
  {
    name: 'The Ultimate SEO Traininng + SEO for WordPress Websites',
    issuer: 'Udemy',
    date: 'Issued: Sep 2024',
    logoUrl: '/images/logos/udemy.png',
    credentialUrl: 'https://www.udemy.com/certificate/UC-fa1600bf-aa42-4788-ace7-565df9d42df3/', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar Data Science',
    issuer: 'Dicoding Academy',
    date: 'Issued: Jan 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/N9ZOOMGJRZG5', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Academy',
    date: 'Issued: Jan 2024',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/1RXY12NDKPVM', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Academy',
    date: 'Issued: Nov 2023',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/1RXY12NDKPVM', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar-Dasar DevOps',
    issuer: 'Dicoding Academy',
    date: 'Issued: Apr 2023',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/ERZRG5JGNPYV', // Ganti dengan link Anda
  },
  {
    name: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Academy',
    date: 'Issued: Mar 2023',
    logoUrl: '/images/logos/dicoding.jpeg',
    credentialUrl: 'https://www.dicoding.com/certificates/4EXG9LR19ZRL', // Ganti dengan link Anda
  },
];
