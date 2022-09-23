import { getUser } from "../components/Card/cardSlice"
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardInfo = useSelector((state) => state.card);

  const dispatch = useDispatch();
  dispatch(getUser);

  return (
    <div>
      <h1>E-wallet</h1>
      <h2>Active Card</h2>
      <Card/>
      <Link to="/addcard">
        <button>Add card</button>
      </Link>
    </div>
  );
}
 
export default Cards;