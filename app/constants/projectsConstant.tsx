import Image from "next/image";
import ZolaLogo from '../../assets/projects/ZOLA_Logo.png'
import eZTLogo from '../../assets/projects/eZTLogo.svg'
import ZEUSLogo from '../../assets/projects/ZEUS-Logo.webp'
import CBNITSLogo from '../../assets/projects/CBNITS_Logo.svg'

export type Project = {
    id: number;
    img: JSX.Element;
    title: string;
    description: string;
    link: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    img: (
      <Image
        src={ZolaLogo}
        alt="ZOLA"
        height={120}
        width={160}
      />
    ),
    title: "ZOLA - Zuellig Pharma",
    link:"https://zola.zuelligpharma.com/",
    description:
      "A secure web portal designed for enhanced product visibility and accessibility in the pharmaceutical supply chain. I contributed to developing key features including real-time tracking, authentication, and user role management, ensuring compliance with healthcare data standards.",
  },
  {
    id: 2,
    img: (
      <Image
        src={eZTLogo}
        alt="eZTLogo"
        height={120}
        width={160}
      />
    ),
    title: "eZTracker",
    link:"https://app.eztracker.io/home",
    description:
      "Worked on Zuellig Pharma’s blockchain-powered traceability platform enabling patients and providers to verify medicine authenticity via QR code scans. Focused on cold-chain data capture, performance optimization, and dashboard visualization for internal stakeholders.",
  },
  {
    id: 3,
    img: (
      <Image
        src={ZEUSLogo}
        alt="ZEUS RDC"
        height={220}
        width={260}
      />
    ),
    title: "ZEUS RDC – Regional Distribution Center Module",
    link:"https://zeus.eztracker.io/rdc/login",
    description:
      "A specialized logistics portal integrated within the eZTracker ecosystem, focused on managing real-time inventory, dispatch, and order processing for regional hubs. Involved in building frontend components and streamlining backend APIs for warehouse operations.",
  },
  {
    id: 4,
    img: (
      <Image
        src={CBNITSLogo}
        alt="CBNITS_Logo"
        height={120}
        width={160}
      />
    ),
    title: "CBNITS Landing Page",
    link:"https://cbnits.com/",
    description:
      "Designed and developed a clean, responsive landing page for CBNITS using modern frontend technologies. Focused on performance, SEO best practices, and delivering a pixel-perfect UI aligned with branding goals.",
  },
];