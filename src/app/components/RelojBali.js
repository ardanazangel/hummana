"use client";

import { useEffect, useState } from "react";

export default function BaliClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateBaliTime() {
      const options = {
        timeZone: "Asia/Makassar",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    }

    // Actualizar cada segundo
    const interval = setInterval(updateBaliTime, 1000);
    updateBaliTime(); // Llamar la función al cargar la página

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return <span>{time},</span>;
}
