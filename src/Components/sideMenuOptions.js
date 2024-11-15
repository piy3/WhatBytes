import { GiHistogram } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";
import {  FaRankingStar } from "react-icons/fa6";

const options = [
    {
        name:"Dashboard",
        icon:GiHistogram,
        path:"/dashboard",
    },
    {
        name:"Skill Test",
        icon:FaRankingStar,
        path:"/skillTest",
    },
    {
        name:"Internship",
        icon:MdOutlineContactPage,
        path:"/internships",
    }
]

export default options
{/* <FontAwesomeIcon icon="fa-solid fa-chart-simple" /> */}