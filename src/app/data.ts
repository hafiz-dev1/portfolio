import { IconType } from 'react-icons';
import { FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiVercel,
  SiMysql,
  SiGit
} from 'react-icons/si';

// --- TYPE DEFINITIONS ---

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  screenshots: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export type NavLink = {
  name: string;
  href: string;
  hash: string;
};

// --- DATA ARRAYS ---

export const projects: Project[] = [
  {
    title: 'E-Cuti',
    description: 'A web-based information system for digitizing employee leave applications.',
    longDescription: 'E-Cuti is a web-based information system designed to simplify and digitize the employee leave application process. The application replaces traditional paper-based forms with an efficient and accessible online platform. Employees can submit leave requests digitally, while administrators can manage and track records more effectively. The project utilized React.js and Tailwind CSS for the front-end, Express.js for the back-end, and SQL for database management.',
    screenshots: [
      '/projects/e-cuti/ss1.jpeg',
      '/projects/e-cuti/ss2.jpeg',
      '/projects/e-cuti/ss3.jpeg',
    ],
    technologies: ['Express.js', 'React.js', 'Tailwind CSS', 'SQL'],
    githubLink: '#',
    liveLink: 'https://www.figma.com/design/dUgQ5mxznXUSBvjQxrZmx2/High_Fidelity_E-Cuti?node-id=0-1&p=f&t=hKAxYSpnlMCRoueQ-0',
  },
  {
    title: 'G.L.A.S.S',
    description: 'A PC-exclusive action game developed as a major project for the Game Technology course.',
    longDescription: 'G.L.A.S.S (Global League Against Sinister Syndicates) is a PC-exclusive action game created as part of a major coursework project. As the game director, I oversaw the entire creative and development process, including gameplay mechanics, storyline design, and visual elements. This project allowed me to strengthen my leadership skills, improve teamwork, and gain hands-on experience in managing the complexities of game production from concept to completion.',
    screenshots: [
      '/projects/glass/ss1.jpeg',
      '/projects/glass/ss2.jpeg',
      '/projects/glass/ss3.jpeg',
    ],
    technologies: ['Game Development', 'C#', 'Unity', 'Project Management'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Notes App',
    description: 'A simple note-taking web application with features to create, delete, and search notes.',
    longDescription: 'Notes App is a lightweight web application built to help users manage their personal notes efficiently. Users can create new notes with a title and description, delete notes they no longer need, and search through existing notes using the search bar. The app includes a character limit indicator for note titles, ensuring concise input. This project was developed using React.js for the front-end and styled with CSS, focusing on building core CRUD functionality and an intuitive user interface.',
    screenshots: [
      '/projects/notes-app/ss1.png',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS', 'CRUD Functionality'],
    githubLink: 'https://github.com/hafiz-dev1/notes-app',
    liveLink: '#',
  },
  {
  title: 'SIAD POLDA Lampung',
  description: 'A web-based disposition management system for handling official letters and task delegation at POLDA Lampung.',
  longDescription: 'SIAD (Sistem Informasi Administrasi Disposisi) is a web-based application developed to digitalize the management of official correspondence and dispositions at POLDA Lampung. Built with Next.js for the frontend and PostgreSQL for the database, the system enables users to efficiently manage incoming and outgoing letters, delegate tasks, and oversee archival processes. Key features include a dashboard with activity summaries, quick access to important actions, and role-based user management. By transitioning from manual processes to a digital platform, SIAD significantly improves efficiency, transparency, and data accuracy within the organization.',
  screenshots: [
    '/projects/siad/ss1.png',
  ],
  technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
  githubLink: 'https://github.com/hafiz-dev1/siad-polda',
  liveLink: '#',
  },
  // {
  //   title: 'Aplikasi Cuaca',
  //   description: 'Aplikasi sederhana untuk menampilkan prakiraan cuaca berdasarkan lokasi menggunakan API publik.',
  //   longDescription: 'Sebuah proyek frontend yang fokus pada pengambilan dan penampilan data dari API pihak ketiga. Pengguna bisa mencari kota mana pun di dunia untuk melihat kondisi cuaca saat ini serta prakiraan untuk beberapa hari ke depan. Antarmukanya dibuat responsif dan intuitif dengan Tailwind CSS.',
  //   screenshots: [],
  //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //   liveLink: '#',
  // },
];

export const skills: Skill[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Git', icon: SiGit, color: '#F05032' }, // tambahan biar jadi 10
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "#", hash: "#" },
  { name: "About", href: "#about", hash: "#about" },
  { name: "Projects", href: "#projects", hash: "#projects" },
  { name: "Skills", href: "#skills", hash: "#skills" },
  { name: "Contacts", href: "#contact", hash: "#contact" },
];

