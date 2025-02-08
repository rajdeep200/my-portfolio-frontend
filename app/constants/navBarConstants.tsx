// import { FaRegFolder } from "react-icons/fa";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";

export const NAV_MENU_LIST = [
    {
        id: 'home',
        label: 'Home',
        icon: <IoHomeOutline className="text-white text-lg font-bold lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'tech',
        label: 'Tools & Tech',
        icon: <AiFillTool className="text-white text-lg lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'exp',
        label: 'Experience',
        icon: <MdOutlineWorkOutline className="text-white text-lg lg:text-2xl xl:text-3xl" />
    },
    {
        id: 'contact',
        label: 'Contact',
        icon: <IoCallOutline className="text-white text-lg lg:text-2xl xl:text-3xl font-bold" />
    }
]