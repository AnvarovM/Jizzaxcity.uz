import { useState, useEffect } from "react";
import { SearchIcon } from '@heroicons/react/solid'
import { IoLanguageSharp } from 'react-icons/io5'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CgMenuRight } from 'react-icons/cg'
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import Sidebar from "./Sidebar";

const Navbar = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);
    const [sidebar, setSidebar] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(true);
    const { t } = useTranslation();

     // scroll animation
    const controlNavbar = () => {(window.scrollY > 300) ? setShow(false) : setShow(true)};
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, []);

  return (
    <div>
      <div className={show ?  "px-4  md:px-0 fixed top-0 left-0 right-0 z-40 text-white my-0 py-8 transition-all duration-200": "px-4 md:px-0 z-40 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 text-white my-0 py-4 transition-all duration-200"}>
        <div className="container mx-auto flex items-center justify-between ">
          <div onClick={() => router.push("/")} className="flex justify-items-end text-2xl leading-4 md:leading-6 font-semibold cursor-pointer hover:text-gray-300">
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
              <div className="hidden md:inline-flex items-center justify-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-full p-2 cursor-pointer">
                  <SearchIcon className="h-5" />
              </div>
              <div className="relative">
                  <div onClick={() => setOpenLanguage(!openLanguage)} className="flex items-center cursor-pointer">
                      <RiArrowDropDownLine />
                      <IoLanguageSharp className="text-2xl" />
                  </div>
                  <div className={openLanguage ? "hidden absolute -bottom-24 -left-6 border rounded-md p-2" : "block absolute -bottom-28 md:-bottom-[7.5rem] -left-6 border rounded-md p-2"}>
                          <p onClick={() => router.push("/uz", "/uz", { locale: "uz" })} className="px-2 text-center cursor-pointer hover:text-gray-300">O&apos;zb</p>
                          <p onClick={() => router.push("/ru", "/ru", { locale: "ru" })} className="px-2 text-center cursor-pointer hover:text-gray-300">Ру</p>
                          <p onClick={() => router.push("/en", "/en", { locale: "en" })} className="px-2 text-center cursor-pointer hover:text-gray-300">En</p>
                  </div>
              </div>
              <div>
                  <CgMenuRight onClick={() => setSidebar(!sidebar)} className="text-2xl cursor-pointer" />
              </div>
          </div>
        </div>
      </div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Navbar;
