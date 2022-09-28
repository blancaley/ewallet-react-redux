
import { useDispatch } from "react-redux";
import { deleteCard, switchActiveCard } from "../User/userSlice";

const CardMenu = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardInfo))
  }

  const toggleActive = () => {
    dispatch(switchActiveCard(cardInfo))
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete X</button>
      <button onClick={toggleActive}>Activate Card</button>
    </div>
  )
}
 
export default CardMenu;