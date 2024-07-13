import { useState, useEffect } from "react";
import "./clock.css";

export default function MyClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervaltime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervaltime);
  }, []);

  const formattime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${padzero(hours)}:${padzero(minutes)}:${padzero(
      seconds
    )}  ${padzero(meridiem)}`;
  };

  let padzero = (num) => {
    return (num <= 9 ? "0" : "") + num;
  };

  return (
    <>
      <div className="clock-container">
        <div className="clock-time">
          <span>{formattime()}</span>
        </div>
      </div>
    </>
  );
}
