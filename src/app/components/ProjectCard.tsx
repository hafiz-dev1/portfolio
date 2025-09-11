import { Project } from '@/app/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col h-full cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm">Teknologi:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-4 flex gap-4 text-sm font-semibold">
            <span className="text-blue-300 hover:text-blue-500 transition">Lihat Detail</span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px] bg-white dark:bg-gray-900 shadow-2xl rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <h4 className="font-bold mb-4">Screenshots</h4>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {project.screenshots.map((ss, index) => (
              <div key={index} className="flex-shrink-0">
                <Image 
                  src={ss} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  width={1280}
                  height={720}
                  className="rounded-md object-cover w-full max-w-md shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 w-full text-center shadow-md hover:shadow-lg transition-all"
            >
              Kode (GitHub)
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 w-full text-center shadow-md hover:shadow-lg transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
