// src/app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Početna",
};

export default function HomePage() {
  return (
    <>
      <div style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        marginTop: "-100px" // To compensate for header padding
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
        
        
      </div>
    </>
  );
}