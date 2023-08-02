import styles from "./styles.module.css";

import { BiSearch } from "react-icons/bi";
import { HiOutlineBookmark } from "react-icons/hi";
import { InfoSqueleton } from "../InfoSqueleton";

interface DashboardInformationsProps {
  selectedMenuItem: string;
}

export function DashboardInformations({
  selectedMenuItem,
}: DashboardInformationsProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.containerTexts}>
          <h2 className={styles.title}>{selectedMenuItem}</h2>
          <p className={styles.subtitle}>As últimas atualizações de hoje</p>
        </div>
        <div className={styles.containerIcons}>
          <div className={styles.wrapper}>
            <BiSearch className={styles.icon} />
          </div>
          <div className={styles.wrapper}>
            <HiOutlineBookmark className={styles.icon} />
          </div>
        </div>
      </header>
      <div className={styles.containerInfos}>
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
        <InfoSqueleton />
      </div>
    </div>
  );
}
