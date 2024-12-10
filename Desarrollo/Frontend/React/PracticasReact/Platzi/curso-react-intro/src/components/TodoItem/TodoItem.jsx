import CompleteIcon from "../TodoIcons/CompleteIcon"
import DeleteIcon from "../TodoIcons/DeleteIcon";

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon onComplete={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete}/>
    </li>
  );
}

export default TodoItem