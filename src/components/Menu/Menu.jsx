import { useDispatch } from "react-redux";
import { deleteCard, switchActiveCard } from "../../redux/User/userSlice";
import css from "./menu.module.css";

const Menu = ({ cardInfo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardInfo))
  }

  const toggleActive = () => {
    dispatch(switchActiveCard(cardInfo))
  }

  return (
    <div className={css.menu}>
      <button onClick={handleDelete} className={css.deleteBtn}>X</button>
      <button onClick={toggleActive} className={css.activateBtn}>Activate Card</button>
    </div>
  )
}
 
export default Menu;