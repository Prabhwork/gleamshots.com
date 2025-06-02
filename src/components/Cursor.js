import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseBluePurple {
          0%, 100% {
            box-shadow:
              0 0 8px #6a5acd,
              0 0 20px #7b68ee,
              0 0 30px #9370db;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            box-shadow:
              0 0 20px #483d8b,
              0 0 35px #6a5acd,
              0 0 45px #7b68ee;
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
          }
        }

        @keyframes spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "28px",
          height: "28px",
          background: "radial-gradient(circle, #7b68ee 0%, #483d8b 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow:
            "0 0 12px #6a5acd, 0 0 25px #7b68ee, 0 0 40px #483d8b",
          animation: "pulseBluePurple 3s ease-in-out infinite, spin 4s linear infinite",
          transition: "left 0.1s ease, top 0.1s ease",
          left: 0,
          top: 0,
          mixBlendMode: "difference"
        }}
      />
    </>
  );
}
