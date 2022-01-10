import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { CgClose } from 'react-icons/cg'

const Sidebar = ({ sidebar, setSidebar }) => {
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <div>
            <div className={sidebar ? 'sidebar_zero' : 'sidebar_-translate'}>
                <div className='py-10 md:py-20 px-8 lg:px-20'>
                    <div className='flex items-center justify-between'>
                        <div onClick={() => router.push("/")} className="flex justify-items-end text-white text-3xl my-8 leading-4 md:leading-6 font-semibold cursor-pointer hover:text-gray-300">
                        <span>Jizzax</span> <br />
                            city
                        </div>
                        <CgClose onClick={() => setSidebar(!sidebar)} className='text-white text-2xl lg:text-3xl cursor-pointer hover:text-purple-400 transition duration-200' />
                    </div>
                    <ul className="flex flex-col py-10">
                        <li onClick={() => router.push("/")} className={router.pathname == "/" ? "sidebar_link sidebar_active" : "sidebar_link"}>{t("home:nav_home")}</li>
                        <li onClick={() => router.push("/about")} className={router.pathname == "/about" ? "sidebar_link sidebar_active" : "sidebar_link"}>{t("home:nav_about")}</li>
                        <li onClick={() => router.push("/project")} className={router.pathname == "/project" ? "sidebar_link sidebar_active" : "sidebar_link"}>{t("home:nav_project")}</li>
                        <li onClick={() => router.push("/contact")} className={router.pathname == "/contact" ? "sidebar_link sidebar_active" : "sidebar_link"}>{t("home:nav_contact")}</li>
                        <div className="nav_animation start_home"></div>
                    </ul>
                    <div>
                        <div className='flex bg-white py-2 rounded-md flex-grow'>
                            <input className='px-2 py-0 md:py-2 flex-grow outline-none' type="text" placeholder='search something...' />
                            <button className='hidden xl:block mx-2 bg-purple-600 py-2 px-4 rounded-md active:bg-purple-500 text-white focus:ring-2 ring-purple-400'>submit</button>
                        </div>
                        <button className='block xl:hidden w-full py-2 my-2 rounded-md bg-purple-600 active:bg-purple-500 text-white focus:ring-2 ring-purple-400'>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
