import type { Metadata } from "next";
import styles from "./o-nama.module.css"

export const metadata: Metadata = { title: "O nama" };

export default function AboutPage() {
  return (
    <>
       <div style={{
        position: "relative",
        width: "100vw",
        height: "50vh",
        minHeight: "300px",
        overflow: "hidden",
        marginTop: "-100px",
      }}>

        <div style={{
          position:"absolute",
          fontSize:"clamp(40px, 8vw, 80px)",
          fontFamily:"Oswald",
          color:"white",
          zIndex:"1",
          top:"50%",
          transform: "translate(-50%, -50%)",
          left:"clamp(15%, 20%, 50%)",
          borderBottom:"solid 5px #3F84E5",
          padding: "0 20px",
          whiteSpace: "nowrap"
        }}>

          O nama
        </div>

        <img 
          src="/images/slika1_f.jpg" 
          alt="O nama hero"
          style={{
            filter: "brightness(0.7)",
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        
        
      </div>

      <div className={styles.onama1}>
        <div className={styles.onama1left}>
          <div className={styles.onamanaslov}>
            <div className={styles.naslovname}>Povijest</div>
            <img 
              src="/images/markanovic_black.svg" 
              alt="Markanovic logo"
              style={{width:"200px", transform: "translateY(30%)"}}
            />
          </div>
          <div className={styles.onamatekst}>
            Markanović d.o.o. osnovana je 1987. godine u Gorskom kotaru, kada je Ivan Markanović, inspiriran obiteljskom tradicijom, pokrenuo mali obrt za krovopokrivanje. Zahvaljujući kvaliteti rada i pouzdanosti, tvrtka je brzo stekla povjerenje lokalne zajednice.

            Nakon Domovinskog rata, tvrtka je sudjelovala u obnovi oštećenih objekata diljem Hrvatske, čime je izrasla u uglednog izvođača na nacionalnoj razini. Početkom 2000-ih uveli su inovativne tehnologije poput zelenih krovova i solarnih sustava.

          </div>
        </div>

        <div className={styles.onama1right}>
          <img 
            src="/images/slika3_f.jpg" 
            alt="Povijest"
            style={{width:"600px", borderTopLeftRadius:"15px", borderBottomLeftRadius:"15px", zIndex:"98"}}
          />
        </div>
      </div>

      <div className={styles.onama1}>

        <div className={styles.onama1right2}>
          <img 
            src="/images/slika3_f.jpg" 
            alt="Ciljevi"
            style={{width:"600px", borderTopRightRadius:"15px", borderBottomRightRadius:"15px", zIndex:"98"}}
          />
        </div>

        <div className={styles.onama1left}>
          <div className={styles.onamanaslov}>
            <div className={styles.naslovname}>Ciljevi</div>
            <img 
              src="/images/markanovic_black.svg" 
              alt="Markanovic logo"
              style={{width:"200px", transform: "translateY(30%)"}}
            />
          </div>
          <div className={styles.onamatekst}>
            Ciljevi tvrtke Markanović d.o.o. usmjereni su na pružanje vrhunske kvalitete usluga i isporuku krovnih rješenja koja su izdržljiva, estetski privlačna i prilagođena potrebama klijenata. Tvrtka teži održivoj gradnji kroz korištenje ekološki prihvatljivih materijala i tehnologija, poput solarnih sustava i zelenih krovova, kako bi smanjila negativan utjecaj na okoliš. Kontinuirano ulaže u inovacije i modernizaciju tehnologije kako bi osigurala učinkovitost i preciznost u svom radu. Dugoročno zadovoljstvo klijenata ključno je za poslovanje, što postižu profesionalnošću, poštivanjem rokova i predanošću svakom projektu.

          </div>
        </div>
      </div>
    </>
  );
}