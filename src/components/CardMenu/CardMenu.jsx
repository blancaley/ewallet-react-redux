
import { useDispatch } from "react-redux";
import { deleteCard, switchActive } from "../User/userSlice";

const CardMenu = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardInfo))
  }

  const toggleActive = () => {
    dispatch(switchActive(cardInfo))
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete X</button>
      <button onClick={toggleActive}>Aktivera</button>
    </div>
  )
}
 
export default CardMenu;