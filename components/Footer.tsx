import styles from "./footer.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footerbox}>
  <img src="/images/markanovic.svg" className={styles.bgImage}></img>
  
  <div className={styles.upperContainer}>
    <div className={styles.upperside}>
      <img style={{position:"relative", width:"150px"}} src="/images/markanovic.svg"></img>
    </div>
    <div className={styles.uppermiddle}>
      <div className={styles.links}>
            <Link className={styles.link} href="/">
              Početna
            </Link>
            <Link className={styles.link} href="/o-nama">
              O nama
            </Link>
            <Link className={styles.link} href="/projekti">
              Projekti
            </Link>
            <Link className={styles.link} href="/kontakt">
              Kontakt
            </Link>
          </div>
    </div>
    <div className={styles.upperside2}></div>
  </div>

  <div className={styles.lowerContainer}>
    <div className={styles.lowerside}></div>
    <div className={styles.lowermiddle}>
      <div>© 2023 Markanović d.o.o. Sva prava pridržana.</div>
      <div>© 2023 Markanović d.o.o. All rights reserved.</div>
    </div>
    <div className={styles.lowerside2}></div>
  </div>
</div>
  );
}
