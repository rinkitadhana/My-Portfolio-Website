import { BiLogoPostgresql } from "react-icons/bi"
import { DiJavascript } from "react-icons/di"
import { FaRegPlayCircle } from "react-icons/fa"
import { FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import {
  RiHtml5Fill,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux, VscTools } from "react-icons/vsc"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"
const Skills = () => {
  const skills = [
    { id: 1, icon: <RiHtml5Fill />, text: "HTML" },
    { id: 2, icon: <FaCss3Alt />, text: "CSS" },
    { id: 3, icon: <DiJavascript />, text: "JavaScript" },
    { id: 4, icon: <TbBrandTypescript />, text: "TypeScript" },
    { id: 5, icon: <RiTailwindCssFill />, text: "Tailwind" },
    { id: 6, icon: <RiReactjsLine />, text: "ReactJs" },
    { id: 7, icon: <RiNextjsLine />, text: "NextJs" },
    { id: 8, icon: <FaRegPlayCircle />, text: "Flowbite" },
    { id: 9, icon: <TbBrandFramerMotion />, text: "Framer Motion" },
    { id: 10, icon: <IoLogoNodejs />, text: "NodeJS" },
    { id: 11, icon: <SiExpress />, text: "ExpressJS" },
    { id: 12, icon: <SiPostman />, text: "Postman" },
    { id: 13, icon: <BiLogoPostgresql />, text: "PostgreSQL" },
    { id: 14, icon: <SiMongodb />, text: "MongoDB" },
    { id: 15, icon: <FaGitAlt />, text: "Git" },
    { id: 16, icon: <FaGithub />, text: "GitHub" },
    { id: 17, icon: <RiJavaLine />, text: "Java" },
    { id: 18, icon: <TbHexagonLetterC />, text: "C" },
    { id: 19, icon: <TbBrandCpp />, text: "C++" },
    { id: 20, icon: <VscTerminalLinux />, text: "Linux" },
    { id: 21, icon: <SiVercel />, text: "Vercel" },
  ]

  return (
    <CompScreen>
      <Title title="Skills & Tools" icon={<VscTools />} />

      <div className=" mt-3 flex flex-wrap gap-1.5 dark:text-white text-lg   text-gray-700">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-row gap-1 rounded-md justify-center items-center font-medium w-fit px-2 dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 cursor-pointer transition-all"
          >
            {skill.icon}
            {skill.text}
          </div>
        ))}
      </div>
    </CompScreen>
  )
}

export default Skills
