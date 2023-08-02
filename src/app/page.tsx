"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { AsideLeftInformations } from "@/components/AsideLeftInformations";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAsideBar, setShowAsideBar] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className={styles.container}>
      <AsideLeftInformations
        showAsideBar={showAsideBar}
        setShowAsideBar={setShowAsideBar}
      />
      <div className={styles.main}></div>
    </main>
  );
}
