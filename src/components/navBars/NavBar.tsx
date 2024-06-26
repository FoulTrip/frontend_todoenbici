"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";
import Avatar from "react-avatar";

import iconLogo from "@/assets/logo_page.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/ContextDashboard";

import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoMdCloseCircle, IoIosMusicalNotes } from "react-icons/io";
import { FaMap, FaBicycle, FaBed } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";

// interface NavBarProps {
//   openModal: (content: React.ReactNode) => void;
// }

function Navbar({ isUser }: { isUser: boolean }) {
  const router = useRouter();
  const responsive = useMediaQuery({ query: "(min-width: 900px)" });
  const [openDropDown, setOpenDropDown] = useState(false);
  const { user } = useGlobalContext();

  const handlerDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.imageLogo}>
            <Image className={styles.iconLogo} src={iconLogo} alt="iconLogo" />
          </div>
          <div onClick={() => router.push("/")} className={styles.logoTitle}>
            Todo en bicicleta
          </div>
        </div>
        {responsive ? (
          <div className={styles.account}>
            <div className={styles.subAccount}>
              <Link href={"/stream"} className={styles.login}>
               Streaming
              </Link>
            </div>
            <div className={styles.subAccount}>
              <Link href={"/music"} className={styles.login}>
                Musica
              </Link>
            </div>
            <div className={styles.subAccount}>
              <Link href={"/ruta"} className={styles.login}>
                Ruta
              </Link>
            </div>

            <div className={styles.subAccount}>
              <Link href={"/cicloviajero"} className={styles.login}>
                Cicloviajero
              </Link>
            </div>

            <div className={styles.subAccount}>
              <Link href={"/books"} className={styles.login}>
                Libros
              </Link>
            </div>

            {user && user.rol == "streamer" ? (
              <div className={styles.subAccount}>
                <Link href={"/profile/panel"} className={styles.login}>
                  Panel
                </Link>
              </div>
            ) : null}

            {user ? (
              <>
                <div
                  className={styles.supaBoxAccount}
                  onClick={() => router.push(`/profile/${user.username}`)}
                >
                  <div className={styles.boxAccount}>
                    <Avatar
                      src={"https://github.com/foultrip.png"}
                      round={true}
                      size="20"
                    />
                  </div>
                  <p className={styles.username}>{user?.username}</p>
                </div>
              </>
            ) : (
              <div
                className={styles.supaBoxAccountResponsiveDesktop}
                onClick={() => router.push("/auth")}
              >
                <div className={styles.boxAccount}>
                  <MdAccountCircle size={25} />
                </div>
                <p className={styles.username}>Cuenta</p>
              </div>
            )}
          </div>
        ) : (
          <div
            className={openDropDown ? styles.menuIconClose : styles.menuIcon}
          >
            {openDropDown ? null : (
              <AiOutlineMenu
                size={20}
                className={openDropDown}
                onClick={handlerDropDown}
              />
            )}
            {openDropDown ? (
              <ul
                className={styles.dropdown}
                {...(isUser ? null : { style: { height: "460px" } })}
              >
                <div className={styles.boxBtnClose}>
                  <div className={styles.boxAccount}>
                    <div className={styles.IconUser}>
                      {user ? (
                        <>
                          <div
                            className={styles.supaBoxAccountResponsive}
                            onClick={() =>
                              router.push(`/profile/${user.username}`)
                            }
                          >
                            <div className={styles.boxAccount}>
                              <Avatar
                                src={"https://github.com/foultrip.png"}
                                round={true}
                                size="20"
                              />
                            </div>
                            <p className={styles.username}>{user?.username}</p>
                          </div>
                        </>
                      ) : (
                        <div
                          className={styles.supaBoxAccountResponsive}
                          onClick={() => router.push("/auth")}
                        >
                          <div className={styles.boxAccount}>
                            <MdAccountCircle size={25} />
                          </div>
                          <p className={styles.username}>Cuenta</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <IoMdCloseCircle
                    size={25}
                    onClick={handlerDropDown}
                    className={styles.iconCloseDrop}
                  />
                </div>
                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/")}
                >
                  <div className={styles.dropdown_link}>
                    <AiFillHome />
                    <span className={styles.dropdown_span}>Inicio</span>
                  </div>
                </li>

                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/music")}
                >
                  <div className={styles.dropdown_link}>
                    <IoIosMusicalNotes />
                    <span className={styles.dropdown_span}>Musica</span>
                  </div>
                </li>

                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/ruta")}
                >
                  <div className={styles.dropdown_link}>
                    <FaMap />
                    <span className={styles.dropdown_span}>Ruta</span>
                  </div>
                </li>

                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/stream")}
                >
                  <div className={styles.dropdown_link}>
                    <FaBicycle />
                    <span className={styles.dropdown_span}>Streaming</span>
                  </div>
                </li>

                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/cicloviajero")}
                >
                  <div className={styles.dropdown_link}>
                    <FaBed />
                    <span className={styles.dropdown_span}>
                      Casa del cicloviajero
                    </span>
                  </div>
                </li>

                <li
                  className={styles.dropdown_list}
                  onClick={() => router.push("/books")}
                >
                  <div className={styles.dropdown_link}>
                    <PiUsersThreeFill />
                    <span className={styles.dropdown_span}>Libros</span>
                  </div>
                </li>

                {user && user.rol == "streamer" ? (
                  <li
                    className={styles.dropdown_list}
                    onClick={() => router.push("/profile/panel")}
                  >
                    <div className={styles.dropdown_link}>
                      <PiUsersThreeFill />
                      <span className={styles.dropdown_span}>Panel</span>
                    </div>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
