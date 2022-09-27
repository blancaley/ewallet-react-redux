
import { useDispatch } from "react-redux";
import { deleteCard, makeActive } from "../User/userSlice";

const CardMenu = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardInfo))
  }

  // const makeActive = () => {
  //   dispatch(makeActive(cardInfo))
  // }

  return (
    <div>
      <button onClick={handleDelete}>Delete X</button>
    </div>
  )
}
 
export default CardMenu;