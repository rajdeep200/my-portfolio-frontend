import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const openNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
}

export const SOCIAL_MEDIA_LIST = [
    {
        id: 1,
        icon: <CiLinkedin className="h-[28px] w-full text-orange-500" onClick={() => openNewTab('https://www.linkedin.com/in/grajdeep2000/')} />
    },
    {
        id: 2,
        icon: <FaGithub className="h-[25px] w-full text-orange-500" onClick={() => openNewTab('https://github.com/rajdeep200')}/>
    },
    {
        id: 3,
        icon: <MdOutlineEmail className="h-[28px] w-full text-orange-500" onClick={() => openNewTab('mailto:grajdeep2000@gmail.com')}/>
    },
    {
        id: 4,
        icon: <SiLeetcode className="h-[25px] w-full text-orange-500" onClick={() => openNewTab('https://leetcode.com/u/rajdeep200/')}/>
    },
    {
        id: 5,
        icon: <FaInstagram className="h-[25px] w-full text-orange-500" onClick={() => openNewTab('https://www.instagram.com/rajdeep4212/')}/>
    }
]