/* eslint-disable @next/next/no-img-element */
import React from "react";

// react icons
import {
  LocationMarkerIcon,
  PhoneIcon,
  ChatIcon,
} from "@heroicons/react/solid";

// next.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = React.useState("");
  const { t } = useTranslation();

  return (
    <div className="relative">
      <img
        src="https://avatars.mds.yandex.net/i?id=6f1cc0925c9b1a55aa33b8c3a16d35b0-5350948-images-thumbs&ref=rim&n=33&w=267&h=150"
        className="absolute top-0 left-0 right-0 bottom-0 w-full object-cover h-full filter blur-sm z-0 text-white"
        alt=""
      />
      <footer className="bg-black opacity-70 bg-gradient-to-br from-black/75 py-5 z-30">
        <div className="max-w-screen-2xl mx-auto px-10 lg:px-0 z-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="py-6 text-xl font-semibold text-white uppercase">
                {t("home:footer_get_in_touch_heading")}
              </h2>
              <div className="space-y-2">
                <p className="footer-link truncate">
                  <LocationMarkerIcon className="h-5 text-skin-muted pr-2" />{" "}
                  {t("home:footer_address")}{" "}
                </p>
                <p className="footer-link">
                  <PhoneIcon className="h-5 text-skin-muted pr-2" />{" "}
                  {t("home:footer_phone")}{" "}
                </p>
                <p className="footer-link">
                  <ChatIcon className="h-5 text-skin-muted pr-2" />{" "}
                  {t("home:footer_email")}{" "}
                </p>
              </div>
            </div>
            <div>
              <h2 className="py-6 text-xl font-semibold text-white uppercase">
                {" "}
                {t("home:footer_usefull_link_heading")}{" "}
              </h2>
              <div className="space-y-2">
                <p
                  onClick={() => router.push("/about")}
                  className="footer-link"
                >
                  {" "}
                  {t("home:footer_about")}{" "}
                </p>
                <p onClick={() => router.push("/404")} className="footer-link">
                  {" "}
                  {t("home:footer_project")}{" "}
                </p>
                <p onClick={() => router.push("/faqs")} className="footer-link">
                  {" "}
                  {t("home:footer_contact")}{" "}
                </p>
              </div>
            </div>
            <div>
              <h2 className="py-6 text-xl font-semibold text-white uppercase">
                {" "}
                {t("home:footer_project_heading")}{" "}
              </h2>
              <div className="space-y-2">
                <p className="footer-link">{t("home:footer_project1")}</p>
                <p className="footer-link">{t("home:footer_project2")}</p>
                <p className="footer-link">{t("home:footer_project3")}</p>
                <p className="footer-link">{t("home:footer_project4")}</p>
              </div>
            </div>
            <div>
              <h2 className="py-6 text-xl font-semibold text-white uppercase">
                {t("home:footer_type_now_heading")}
              </h2>
              <div className="space-y-2">
                <p className="footer-link  no-underline">
                  {t("home:footer_type_now_p")}
                </p>
                <div className="p-2 rounded-md bg-gray-50 flex w-72">
                  <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="outline-none bg-transparent truncate"
                    type="text"
                    placeholder={t("home:footer_placeholder")}
                  />
                  <button
                    className="text-sm rounded-md text-white border bg-purple-600 z-50  p-2 focus:border-none"
                    type="button"
                  >
                    {t("home:footer_submit_btn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-4 pt-4 border-white text-center">
            <p className="text-white">
              <Link href="https://teamit.uz">
                <span className="text-white font-semibold animate-pulse cursor-pointer pr-1">
                  TeamIt coders,
                </span>
              </Link>
              {t("home:footer_protection_of_rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
