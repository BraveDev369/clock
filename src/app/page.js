"use client";

import React, { useEffect, useState } from "react";

import "./globals.css";

export default function Page() {
  const [timeState, setTimeState] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTimeState(`${hour}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval); // cleanup!
  }, []);

  return (
    <div className="digitalNumber h-screen flex justify-center text-9xl pt-8">
      {timeState}
    </div>
  );
}
