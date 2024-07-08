import { type FC, type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// Alternative way
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// interface CourseGoalProps {
//   title: string;
//   description: string;
// };

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// }

// Alternative way
const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
