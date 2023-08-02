"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function AsideLeftInformations({ showAsideBar, setShowAsideBar }: any) {
  const menuItems = [
    "Painel",
    "Projetos",
    "Leads",
    "Campanhas",
    "Notificações",
  ];

  return showAsideBar ? (
    <aside
      className={styles.container}
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <IoIosArrowBack
        className={styles.closeAsideButton}
        size={20}
        onClick={() => setShowAsideBar(false)}
      />
      <div className={styles.wrapper}>
        <div className={styles.imageAndTitleContainer}>
          <Image
            className={styles.image}
            src="/images/bigbang-logo.jpeg"
            alt="logo da bigbang"
            width={60}
            height={60}
          />
          <h1 className={styles.title}>BigDashboard</h1>
        </div>
        <nav className={styles.containerMenu}>
          <ul className={styles.menuItemsContainer}>
            {menuItems.map((item) => {
              return (
                <li key={item} className={styles.menuItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.userDataContainer}>
        <Image
          className={styles.userImage}
          src="/images/user-icon.jpeg"
          alt="foto de perfil de usuário"
          width={60}
          height={60}
        />
        <span className={styles.userName}>Cláudio Cassimiro</span>
        <span className={styles.userEmail}>claudioletras2019@gmail.com</span>
      </div>
    </aside>
  ) : (
    <div
      className={styles.containerOpenAsideButton}
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <IoIosArrowForward
        className={styles.openAsideButton}
        size={20}
        onClick={() => setShowAsideBar(true)}
      />
    </div>
  );
}
