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
    title: 'Aplikasi Manajemen Tugas',
    description: 'Sebuah aplikasi web untuk mengelola tugas harian dengan fitur drag-and-drop, prioritas, dan notifikasi.',
    longDescription: 'Aplikasi ini dirancang untuk membantu pengguna mengatur jadwal harian mereka dengan lebih efisien. Fitur utama termasuk pembuatan tugas, penetapan prioritas, tenggat waktu, dan notifikasi pengingat. Arsitekturnya menggunakan Next.js untuk rendering sisi server yang cepat dan Prisma untuk interaksi database yang aman.',
    screenshots: [
      '/projects/manajemen-tugas/ss1.png',
      '/projects/manajemen-tugas/ss2.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Website E-commerce',
    description: 'Platform e-commerce lengkap dengan katalog produk, keranjang belanja, dan integrasi pembayaran.',
    longDescription: 'Platform e-commerce ini dibangun dari awal menggunakan React dan Node.js. Fitur-fiturnya meliputi autentikasi pengguna, manajemen produk oleh admin, keranjang belanja yang persisten, dan proses checkout yang aman. Pembayaran diintegrasikan menggunakan API pihak ketiga untuk memproses transaksi.',
    screenshots: [],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    githubLink: '#',
  },
  {
    title: 'Blog Pribadi',
    description: 'Blog pribadi yang dibuat dengan Next.js SSG untuk performa super cepat, menggunakan Markdown untuk konten.',
    longDescription: 'Website blog ini memanfaatkan kekuatan Static Site Generation (SSG) dari Next.js untuk mencapai kecepatan muat yang luar biasa. Semua postingan ditulis dalam format Markdown (MDX), yang memungkinkan penyisipan komponen React langsung di dalam tulisan. Desainnya minimalis dan fokus pada keterbacaan.',
    screenshots: [],
    technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Sistem Reservasi Hotel',
    description: 'Aplikasi booking hotel dengan fitur pencarian, filter tanggal, dan manajemen kamar.',
    longDescription: 'Aplikasi ini memungkinkan pengguna untuk mencari ketersediaan kamar, memfilter berdasarkan tanggal dan tipe kamar, serta melakukan reservasi. Sisi admin memiliki dasbor untuk mengelola daftar kamar, harga, dan melihat pemesanan yang masuk. Dibangun dengan React dan Firebase untuk backend real-time.',
    screenshots: [],
    technologies: ['React', 'Firebase', 'Material-UI'],
    githubLink: '#',
  },
  {
    title: 'Aplikasi Cuaca',
    description: 'Aplikasi sederhana untuk menampilkan prakiraan cuaca berdasarkan lokasi menggunakan API publik.',
    longDescription: 'Sebuah proyek frontend yang fokus pada pengambilan dan penampilan data dari API pihak ketiga. Pengguna bisa mencari kota mana pun di dunia untuk melihat kondisi cuaca saat ini serta prakiraan untuk beberapa hari ke depan. Antarmukanya dibuat responsif dan intuitif dengan Tailwind CSS.',
    screenshots: [],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '#',
  },
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
  { name: "Home", href: "#home", hash: "#home" },
  { name: "About", href: "#about", hash: "#about" },
  { name: "Projects", href: "#projects", hash: "#projects" },
  { name: "Contact", href: "#contact", hash: "#contact" },
];

