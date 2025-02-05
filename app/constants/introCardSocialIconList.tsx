import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export const SOCIAL_MEDIA_LIST = [
    {
        id: 1,
        icon: <CiLinkedin className="h-[28px] w-full text-orange-500" />
    },
    {
        id: 2,
        icon: <FaGithub className="h-[25px] w-full text-orange-500"/>
    },
    {
        id: 3,
        icon: <MdOutlineEmail className="h-[28px] w-full text-orange-500"/>
    },
    {
        id: 4,
        icon: <FaInstagram className="h-[25px] w-full text-orange-500"/>
    }
]