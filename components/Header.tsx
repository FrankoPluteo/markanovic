// src/components/Header.tsx
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      backgroundColor: "transparent"
    }}>
      <nav style={{
        width: "100%", 
        height: "100px", 
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid rgba(128, 128, 128, 0.548)"
      }}>
        <div className={styles.logobox}>
          <Link className={styles.link} href="/" style={{color: "white", textDecoration: "none"}}>
            Tu dolazi logo
          </Link>
        </div>

        <div className={styles.links}>
          <Link className={styles.link} href="/" style={{color: "white", textDecoration: "none"}}>Početna</Link>
          <Link className={styles.link} href="/o-nama" style={{color: "white", textDecoration: "none"}}>O nama</Link>
          <Link className={styles.link} href="/projekti" style={{color: "white", textDecoration: "none"}}>Projekti</Link>
          <Link className={styles.link} href="/kontakt" style={{color: "white", textDecoration: "none"}}>Kontakt</Link>
          
          <div className={styles.mobileburgermenu}></div>
        </div>
      </nav>
    </header>
  );
}