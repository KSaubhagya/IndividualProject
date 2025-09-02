import { useEffect, useRef } from "react";
import Pom from "../assests/pompom2.png";

const PomPom = () => {
  const pomRef = useRef(null);

  useEffect(() => {
    const pomPom = pomRef.current;
    let timeoutId;

    // Create keyframes dynamically
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @keyframes bounce {
        from {
          transform: translateY(0) scale(1);
        }
        to {
          transform: translateY(-6px) scale(1.05);
        }
      }
    `;
    document.head.appendChild(styleEl);

    function movePomPom() {
      if (!pomPom) return;

      const maxX = window.innerWidth - pomPom.offsetWidth;
      const maxY = window.innerHeight - pomPom.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      pomPom.style.transition = "all 3s ease-in-out";
      pomPom.style.left = randomX + "px";
      pomPom.style.top = randomY + "px";

      timeoutId = setTimeout(movePomPom, 2000);
    }

    movePomPom();

    // Cursor interaction
    const handleMouseMove = (e) => {
      if (!pomPom) return;

      const rect = pomPom.getBoundingClientRect();
      const pomX = rect.left + rect.width / 2;
      const pomY = rect.top + rect.height / 2;

      const dx = e.clientX - pomX;
      const dy = e.clientY - pomY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        const maxX = window.innerWidth - pomPom.offsetWidth;
        const maxY = window.innerHeight - pomPom.offsetHeight;

        let newX = pomX - dx * 1.5;
        let newY = pomY - dy * 1.5;

        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        pomPom.style.transition = "all 0.5s ease-out";
        pomPom.style.left = newX + "px";
        pomPom.style.top = newY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div
      ref={pomRef}
      style={{
        position: "fixed",
        width: "60px",
        height: "60px",
        backgroundColor: "#090708ff",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(255,105,180,0.6)",
        animation: "bounce 0.6s infinite alternate",
        borderRadius: "50%",
      }}
    >
      <img
        src={Pom}
        alt="pom face"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default PomPom;
