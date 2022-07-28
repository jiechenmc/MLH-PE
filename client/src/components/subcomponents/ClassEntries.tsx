import { ClassElement } from "../Education";

const ClassEntries = ({
  courseCode,
  courseName,
  instructor,
  completed,
}: ClassElement) => {
  return (
    <tr className={`${completed ? "text-success" : "text-warning"}`}>
      <td>{courseCode}</td>
      <td>{courseName}</td>
      <td>{instructor}</td>
    </tr>
  );
};

export default ClassEntries;
