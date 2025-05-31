import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const now = new Date();

    var hour = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();

    setInterval(() => {
      second++;
      if (second === 60) {
        minutes++;
        second = 0;
        if (minutes === 60) {
          minutes = 0;
          hour++;
          if (hour === 24) {
            hour = 0;
          }
        }
      }
      console.log(hour + ":" + minutes + ":" + second);
    }, 1000);
  }, []);
  return <div>page</div>;
}
