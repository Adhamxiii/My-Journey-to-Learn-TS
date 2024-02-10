import { useEffect, useRef, useState } from "react";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);

  const [remainingState, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (remainingState <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);

      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingState / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
