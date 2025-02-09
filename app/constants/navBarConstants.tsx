import { MdWork, MdCall } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

export const NAV_MENU_LIST = [
    {
        id: 'home',
        label: 'Home',
        icon: <FaHome className="text-white text-xl font-bold lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'tech',
        label: 'Tools & Tech',
        icon: <AiFillTool className="text-white text-xl lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'exp',
        label: 'Experience',
        icon: <MdWork className="text-white text-xl lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'contact',
        label: 'Contact',
        icon: <MdCall className="text-white text-xl lg:text-2xl xl:text-3xl font-bold" />
    }
]