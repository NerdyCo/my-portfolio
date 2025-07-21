"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Workspace = () => {
  const curtainRef = useRef(null);

  useEffect(() => {
    gsap.to(curtainRef.current, {
      width: "0%",
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed top-0 right-0 h-screen bg-black z-50"
        style={{ width: "100%" }}
      ></div>

      <p>test</p>
    </>
  );
};

export default Workspace;
