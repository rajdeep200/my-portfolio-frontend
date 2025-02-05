import { FaRegFolder } from "react-icons/fa";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

export const NAV_MENU_LIST = [
    {
        id: 1,
        label: 'Home',
        icon: <IoHomeOutline className="text-white text-lg font-bold" />
    },
    {
        id: 2,
        label: 'Portfolio',
        icon: <FaRegFolder className="text-white text-lg" />
    },
    {
        id: 3,
        label: 'Experience',
        icon: <MdOutlineWorkOutline className="text-white text-lg" />
    },
    {
        id: 4,
        label: 'Contact',
        icon: <IoCallOutline className="text-white text-lg font-bold" />
    }
]