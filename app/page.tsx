// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import styles from "./pocetna.module.css";

export const metadata: Metadata = {
  title: "Početna",
};

export default function HomePage() {
  const projects = getAllProjects().slice(0, 5);

  return (
    <>
      <div style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        marginTop: "-100px"
      }}>
        <video 
          src="/images/video1.mp4" 
          autoPlay 
          muted 
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover"
          }}
        ></video>
        
        <div className={styles.lingobox}>
          <div className={styles.sigurnost}>SIGURNOST IZNAD VAS</div>
          <button>POŠALJI UPIT</button>
        </div>

        <div className={styles.horizontalline}></div>
      </div>

      {/* Work Culture Section */}
      <div className={styles.cultureSection}>
        <div className={styles.cultureContent}>
          <div className={styles.cultureVideo}>
            <video 
              src="/images/video2.mp4" 
              autoPlay 
              muted 
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            ></video>
          </div>
          
          <div className={styles.cultureText}>
            <h2 className={styles.cultureTitle}>NAŠA KULTURA</h2>
            <div className={styles.cultureLine}></div>
            <p className={styles.cultureDescription}>
              Gradimo na temeljima povjerenja, dosljednosti i lojalnosti. 
              Svaki projekt je pokazatelj naše predanosti kvaliteti i 
              dugogodišnjem partnerstvu s klijentima.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>AKTUALNO</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const cover = project.images?.[0];
            const isFeatured = index === 0;

            return (
              <Link 
                key={project.slug} 
                href={`/projekti/${project.slug}`}
                className={`${styles.projectBox} ${isFeatured ? styles.featured : ''}`}
              >
                <div className={styles.projectImage}>
                  {cover ? (
                    <Image
                      src={cover}
                      alt={project.title}
                      fill
                      sizes={isFeatured ? "(max-width: 1200px) 100vw, 60vw" : "(max-width: 1200px) 50vw, 30vw"}
                      style={{ objectFit: "cover" }}
                      quality={90}
                    />
                  ) : null}
                </div>
                
                <div className={styles.projectOverlay}>
                  <div className={styles.projectTitle}>{project.title}</div>
                  <button className={styles.viewButton}>VIDI DETALJE</button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}