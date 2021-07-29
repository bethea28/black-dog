import * as React from "react";
import { useState } from "react";
import { LongText, Stopwatch } from "../Challenges";

import styles from "./App.module.css";

enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

type Challenges = {
  component: React.FC;
  title: string;
  difficulty: Difficulty;
};

export function App() {
  const [challengeNum, setChallengeNum] = useState<number>();
  const challenges: Challenges[] = [
    { component: Stopwatch, title: "Stopwatch", difficulty: Difficulty.EASY },
    {
      component: LongText,
      title: "Long Text Display",
      difficulty: Difficulty.HARD
    }
  ];

  const ChallengeComponent =
    typeof challengeNum === "number"
      ? challenges[challengeNum].component
      : null;
  // console.log('challeng', ChallengeComponent)/
  return (
    <div className={styles.app}>
      <h1>App Challenge</h1>
      <hr />
      <form>
        {challenges.map(({ title, difficulty }, idx) => {
          return (
            <div className={styles.challengeOption} key={idx}>
              <input
                onClick={() => setChallengeNum(idx)}
                name="challenge"
                type="radio"
                value={idx}
              />
              <label className={styles.challengeTitle}>{title}</label>
              <label className={styles.challengeDifficulty}>{difficulty}</label>
            </div>
          );
        })}
      </form>
      <hr />
      <div className={styles.challengeBox}>
        {ChallengeComponent ? (
          <ChallengeComponent />
        ) : (
          <span>Please select a challenge</span>
        )}
      </div>
    </div>
  );
}
