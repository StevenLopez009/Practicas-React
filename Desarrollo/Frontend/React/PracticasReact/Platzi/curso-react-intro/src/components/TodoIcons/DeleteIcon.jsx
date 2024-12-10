import { MdDelete } from "react-icons/md";

function DeleteIcon (props){
  return <MdDelete  onClick={props.onDelete}/>
}

export default DeleteIcon