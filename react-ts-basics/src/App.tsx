import { useState } from "react";
import "./App.css";
import goalsImg from "./assets/goals.jpg";
import { CourseGoalList } from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          title: goal,
          description: summary,
          id: Math.random(),
        },
      ];
    });
  }

  function handleDeleteGoal(goalId: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
