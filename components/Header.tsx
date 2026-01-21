"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on a project detail page (slug route)
  const isProjectPage = pathname?.startsWith('/projekti/') && pathname !== '/projekti';

  useEffect(() => {
    const handleScroll = () => {
      // Try multiple scroll sources
      const windowScroll = window.scrollY || window.pageYOffset;
      const documentScroll = document.documentElement.scrollTop;
      const bodyScroll = document.body.scrollTop;
      
      const scrollPosition = windowScroll || documentScroll || bodyScroll;
      
      // Change background when scrolled more than 300px
      if (scrollPosition > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    // Add listeners to multiple elements
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Determine if header should have blue background
  const shouldBeBlue = scrolled || isProjectPage;

  return (
    <>
      <header className={`${styles.header} ${shouldBeBlue ? styles.headerScrolled : ''}`}>
        <nav className={styles.nav}>
          <div className={styles.logobox}>
            <Link className={styles.linklogo} href="/">
              <img
                className={styles.logo}
                src="/images/markanovic.svg"
                alt="Markanovic Logo"
              />
            </Link>
          </div>

          <div className={styles.links}>
            <Link className={styles.link} href="/">
              Početna
              <div className={styles.linkline}></div>
            </Link>
            <Link className={styles.link} href="/o-nama">
              O nama
              <div className={styles.linkline}></div>
            </Link>
            <Link className={styles.link} href="/projekti">
              Projekti
              <div className={styles.linkline}></div>
            </Link>
            <Link className={styles.link} href="/kontakt">
              Kontakt
              <div className={styles.linkline}></div>
            </Link>
          </div>

          <div
            className={styles.mobileburgermenu}
            onClick={toggleMobileMenu}
          >
            <div className={`${styles.burgerLine} ${mobileMenuOpen ? styles.burgerLineOpen1 : ''}`}></div>
            <div className={`${styles.burgerLine} ${mobileMenuOpen ? styles.burgerLineOpen2 : ''}`}></div>
            <div className={`${styles.burgerLine} ${mobileMenuOpen ? styles.burgerLineOpen3 : ''}`}></div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuLinks}>
          <Link
            className={styles.mobileLink}
            href="/"
            onClick={toggleMobileMenu}
          >
            Početna
          </Link>
          <Link
            className={styles.mobileLink}
            href="/o-nama"
            onClick={toggleMobileMenu}
          >
            O nama
          </Link>
          <Link
            className={styles.mobileLink}
            href="/projekti"
            onClick={toggleMobileMenu}
          >
            Projekti
          </Link>
          <Link
            className={styles.mobileLink}
            href="/kontakt"
            onClick={toggleMobileMenu}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}