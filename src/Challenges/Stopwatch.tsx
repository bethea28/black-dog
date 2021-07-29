import * as React from "react";
import { useState } from "react";

export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [timerId, setTimerId] = useState(0);

  React.useEffect(() => {
    console.log("running effect", running);
    // running &&
    //   setSeconds(
    //     setInterval((prevState) => {
    //       return prevState + 1;
    //     })
    //   );
    // if (!running) {
    //   //   const intervalId = setInterval(
    //   //     () =>
    //   //       setSeconds((prevState) => {
    //   //         return prevState + 1;
    //   //       }),
    //   //     1000
    //   //   );
    //   //   setTimerId(intervalId);
    //   // } else {
    //   //   clearInterval(timerId);
    //   // }
    // if (running) {
    // const timer = setInterval(
    //   () => setSeconds((prevState) => prevState + 1),
    //   1000
    // );

    // const timer = () => {
    // setTimerId(
    //   setInterval(
    //     () =>
    //       setSeconds((prevState) => {
    //         return prevState + 1;
    //       }),
    //     1000
    //   )
    // );
    // };

    if (running) {
      setTimerId(
        setInterval(
          () =>
            setSeconds((prevState) => {
              return prevState + 1;
            }),
          1000
        )
      );
    } else {
      clearInterval(timerId);
    }
    // running ? timer() : clearInterval(timerId);
    // setSeconds((prevState)=> prevState+1)
    // }
    //  clearInterval(timerId);
  }, [running]);

  // const handleOnClick = React.useCallback(() => {
  //   setRunning(!running);
  //   console.log("running", running);
  //   // if (!running) {
  //   //   const intervalId = setInterval(
  //   //     () =>
  //   //       setSeconds((prevState) => {
  //   //         return prevState + 1;
  //   //       }),
  //   //     1000
  //   //   );
  //   //   setTimerId(intervalId);
  //   // } else {
  //   //   clearInterval(timerId);
  //   // }
  //   running
  //     ? clearInterval(timerId)
  //     : setTimerId(
  //         setInterval(
  //           () =>
  //             setSeconds((prevState) => {
  //               return prevState + 1;
  //             }),
  //           1000
  //         )
  //       );
  // }, [running]);
  // console.log("timerId", timerId);
  return (
    <div>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      {/* <button onClick={handleOnClick}>{running ? "Stop" : "Start"}</button> */}
      Stopwatch Value: {seconds}
    </div>
  );
};
