import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import styles from "./Projekti.module.css";

export const metadata: Metadata = { title: "Projekti" };

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (

    <>

    <div style={{
        position: "relative",
        width: "100vw",
        height: "50vh",
        overflow: "hidden",
        marginTop: "-100px",
      }}>

        <div style={{
          position:"absolute",
          fontSize:"80px",
          fontFamily:"Oswald",
          color:"white",
          zIndex:"1",
          top:"50%",
          transform: "translate(-50%, -50%)",
          left:"20%",
          borderBottom:"solid 5px #3F84E5"
        }}>

          Projekti
        </div>

        <img 
          src="/images/slika2_f.jpg" 
          style={{
            filter: "brightness(0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        ></img>
        
        
      </div>


      <div className={styles.wrap}>

        <div className={styles.grid} style={{ marginTop: 18 }}>
          {projects.map((p) => {
            const cover = p.images?.[0]; 

            return (
              <Link key={p.slug} href={`/projekti/${p.slug}`} className={styles.card}>
                <div className={styles.media}>
                  {cover ? (
                    <Image
                      src={cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 820px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      quality={90}
                      priority={false}
                    />
                  ) : null}
                </div>

                <div className={styles.body}>
                  <div className={styles.title}>{p.title}</div>

                  {(p.location || p.date) && (
                    <div className={styles.meta}>
                      {p.location ?? ""}
                      {p.location && p.date ? " • " : ""}
                      {p.date ?? ""}
                    </div>
                  )}

                  {p.excerpt ? <div className={styles.excerpt}>{p.excerpt}</div> : null}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </>
  );
}
