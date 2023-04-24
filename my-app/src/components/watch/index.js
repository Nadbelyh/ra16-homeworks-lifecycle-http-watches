import { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as CloseButton } from "../../img/close.svg";

function Watch({ id, timeZone, watchName, onRemove }) {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const clock = () => {
    const date = new Date();
    const hoursOffset = timeZone + date.getTimezoneOffset() / 60;

    const hours = ((date.getHours() + hoursOffset + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    setTime({
      hour,
      minute,
      second,
    });
  };

  useEffect(() => {
    clock();

    const intervalId = setInterval(clock, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div>
        <div className="row">
          <h2>{watchName}</h2>
          <button onClick={() => onRemove(id)} className="svgButton">
            <CloseButton></CloseButton>
          </button>
        </div>
      </div>
      <div>
        <div className="col">
          <div className="clock simple show">
            <div className="hours-container">
              <div
                className="hours"
                style={{ transform: `rotate(${time.hour}deg)` }}
              ></div>
            </div>
            <div className="minutes-container">
              <div
                className="minutes"
                style={{
                  transform: `rotate(${time.minute}deg)`,
                }}
              ></div>
            </div>
            <div className="seconds-container">
              <div
                className="seconds"
                style={{
                  transform: `rotate(${time.second}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
