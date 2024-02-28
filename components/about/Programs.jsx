import { FaReact, FaCss3Alt, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import {
  SiFramer,
  SiLeaflet,
  SiTailwindcss,
  SiSanity,
  SiMapbox,
  SiMongodb,
  SiMysql,
  SiAxios,
  SiRedux,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

function Programs() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex items-center gap-9 xl:gap-20">
        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl ">
            <TbBrandNextjs />
          </div>
          <div className="text-xs font-medium">NextJS</div>
        </div>
        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl  text-sky-500 dark:text-sky-300">
            <FaReact />
          </div>
          <div className="text-xs font-medium">React</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-blue-500 dark:text-blue-400">
            <SiTypescript />
          </div>
          <div className="text-xs font-medium">TypeScript</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-indigo-800 dark:text-indigo-500">
            <SiRedux />
          </div>
          <div className="text-xs font-medium">Redux</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-sky-500">
            <SiTailwindcss />
          </div>
          <div className="text-xs font-medium">Tailwind</div>
        </div>
      </div>

      <div className="flex items-center gap-9 xl:gap-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <SiPrisma />
          </div>
          <div className="text-xs font-medium">Prisma</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-red-500">
            <SiSanity />
          </div>
          <div className="text-xs font-medium">Sanity</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-green-600 dark:text-green-300">
            <SiMongodb />
          </div>
          <div className="text-xs font-medium">Mongodb</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-sky-800 dark:text-sky-500">
            <SiMysql />
          </div>
          <div className="text-xs font-medium">SQL</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-green-700 dark:text-green-400">
            <FaNodeJs />
          </div>
          <div className="text-xs font-medium">NodeJS</div>
        </div>
      </div>

      <div className="flex items-center gap-9 xl:gap-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-yellow-400">
            <IoLogoJavascript />
          </div>
          <div className="text-xs font-medium">Javascript</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-blue-500 dark:text-blue-300">
            <FaCss3Alt />
          </div>
          <div className="text-xs font-medium">CSS</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <SiMapbox />
          </div>
          <div className="text-xs font-medium">Mapbox</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl  text-green-400">
            <SiLeaflet />
          </div>
          <div className="text-xs font-medium">Leaflet</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <SiFramer />
          </div>
          <div className="text-xs font-medium">Framer</div>
        </div>
      </div>

      <div className="flex items-center gap-9 xl:gap-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <FcLinux />
          </div>
          <div className="text-xs font-medium">Linux</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <FaMobileAlt />
          </div>
          <div className="text-xs font-medium">Responsive</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl ">
            <IoTerminal />
          </div>
          <div className="text-xs font-medium">Terminal</div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
