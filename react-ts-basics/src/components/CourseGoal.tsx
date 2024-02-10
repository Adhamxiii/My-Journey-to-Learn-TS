import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: () => void;
}>;

export default function CourseGoal({
  title,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
}
