import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from "react-icons/fa";
import { SiVite, SiExpress, SiNestjs, SiGraphql, SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const TECH_SKILLS = [
    {
        id: 1,
        label: 'HTML',
        icon: <FaHtml5 className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500" />
    },
    {
        id: 2,
        label: 'CSS',
        icon: <FaCss3 className="h-8 w-8 lg:h-10 lg:w-10 text-sky-500" />
    },
    {
        id: 3,
        label: 'Javascript',
        icon: <FaJs className="h-8 w-8 lg:h-10 lg:w-10 text-yellow-400" />
    },
    {
        id: 4,
        label: 'Typescript',
        icon: <SiTypescript className="h-8 w-8 lg:h-10 lg:w-10 text-sky-500" />
    },
    {
        id: 5,
        label: 'ReactJS',
        icon: <FaReact className="h-8 w-8 lg:h-10 lg:w-10 text-sky-500" />
    },
    {
        id: 6,
        label: 'Vite',
        icon: <SiVite className="h-8 w-8 lg:h-10 lg:w-10  text-purple-600" />
    },
    {
        id: 7,
        label: 'NodeJS',
        icon: <FaNodeJs className="h-8 w-8 lg:h-10 lg:w-10  text-green-500" />
    },
    {
        id: 8,
        label: 'ExpressJS',
        icon: <SiExpress className="h-8 w-8 lg:h-10 lg:w-10  text-white" />
    },
    {
        id: 9,
        label: 'NestJS',
        icon: <SiNestjs className="h-8 w-8 lg:h-10 lg:w-10  text-rose-600" />
    },
    {
        id: 10,
        label: 'GraphQL',
        icon: <SiGraphql className="h-8 w-8 lg:h-10 lg:w-10  text-pink-600" />
    },
    {
        id: 11,
        label: 'MongoDB',
        icon: <SiMongodb className="h-8 w-8 lg:h-10 lg:w-10  text-green-600" />
    },
    {
        id: 12,
        label: 'PostgreSQL',
        icon: <SiPostgresql className="h-8 w-8 lg:h-10 lg:w-10  text-sky-600" />
    },
    {
        id: 13,
        label: 'MySQL',
        icon: <GrMysql className="h-8 w-8 lg:h-10 lg:w-10  text-sky-600" />
    },
    {
        id: 14,
        label: 'Docker',
        icon: <FaDocker className="h-8 w-8 lg:h-10 lg:w-10  text-blue-600" />
    },
    {
        id: 15,
        label: 'Github',
        icon: <FaGithub className="h-8 w-8 lg:h-10 lg:w-10  text-white" />
    },
    {
        id: 16,
        label: 'AWS',
        icon: <FaAws className="h-8 w-8 lg:h-10 lg:w-10  text-orange-400" />
    },
]