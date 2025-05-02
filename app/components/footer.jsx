// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";
import { IoLogoGithub, IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/najmul-shaon"
              className="text-[#16f2b3]"
            >
              Najmul Hasan
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
