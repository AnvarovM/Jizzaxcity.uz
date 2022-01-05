import { useState } from "react";
import { SearchIcon } from '@heroicons/react/solid'
import { IoLanguageSharp } from 'react-icons/io5'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CgMenuRight } from 'react-icons/cg'
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

const Navbar = () => {
    const router = useRouter();
    const [openLanguage, setOpenLanguage] = useState(false);
    const { t } = useTranslation();
  return (
    <div className="">
      <div className="container px-4 md:px-0 fixed top-0 left-0 right-0 mx-auto flex items-center justify-between text-white my-0 md:my-4 py-8">
        <div className="flex justify-items-end text-2xl font-semibold cursor-pointer hover:text-gray-300">
            <span>Jizzax</span> <br />
            city
        </div>

        <ul className="hidden md:inline-flex items-center space-x-6">
          <li onClick={() => router.push("/")} className={router.pathname == "/" ? "nav_link active" : "nav_link"}>{t("home:nav_home")}</li>
          <li onClick={() => router.push("/about")} className={router.pathname == "/about" ? "nav_link active" : "nav_link"}>{t("home:nav_about")}</li>
          <li onClick={() => router.push("/project")} className={router.pathname == "/project" ? "nav_link active" : "nav_link"}>{t("home:nav_project")}</li>
          <li onClick={() => router.push("/contact")} className={router.pathname == "/contact" ? "nav_link active" : "nav_link"}>{t("home:nav_contact")}</li>
          <div className="nav_animation start_home"></div>
        </ul>

        <div className="flex items-center space-x-4">
            <div className="relative">
                <div onClick={() => setOpenLanguage(!openLanguage)} className="flex items-center cursor-pointer">
                    <RiArrowDropDownLine />
                    <IoLanguageSharp className="text-2xl" />
                </div>
                <div className={openLanguage ? "hidden absolute -bottom-24 -left-6 border rounded-md p-2" : "block absolute -bottom-28 -left-6 border rounded-md p-2"}>
                        <p onClick={() => router.push("/uz", "/uz", { locale: "uz" })} className="px-2 text-center cursor-pointer hover:text-gray-300">O&apos;zb</p>
                        <p onClick={() => router.push("/ru", "/ru", { locale: "ru" })} className="px-2 text-center cursor-pointer hover:text-gray-300">Ру</p>
                        <p onClick={() => router.push("/en", "/en", { locale: "en" })} className="px-2 text-center cursor-pointer hover:text-gray-300">En</p>
                </div>
            </div>
            <div className="hidden md:inline-flex items-center justify-center bg-purple-700 hover:bg-purple-600 rounded-full p-2 md:p-3 cursor-pointer">
                <SearchIcon className="h-6" />
            </div>
            <div>
                <CgMenuRight className="text-2xl cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
