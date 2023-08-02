"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { AsideLeftInformations } from "@/components/AsideLeftInformations";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { DashboardInformations } from "@/components/DashboardInformations";

export default function Home() {
  const [showAsideBar, setShowAsideBar] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Painel");

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.positionAux}>
        <AsideLeftInformations
          showAsideBar={showAsideBar}
          setShowAsideBar={setShowAsideBar}
          setSelectedMenuItem={setSelectedMenuItem}
        />
      </div>
      <DashboardInformations selectedMenuItem={selectedMenuItem} />
    </main>
  );
}
