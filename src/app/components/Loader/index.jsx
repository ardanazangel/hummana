"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  // () => typeof window !== "undefined" && !sessionStorage.getItem("visited")

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        // sessionStorage.setItem("visited", "true"); // Guardamos en sessionStorage
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="loader">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
