//import { getUser } from "../components/Card/cardSlice"
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const Cards = () => {
  const cards = useSelector((state) => state.card.cards);

  // const dispatch = useDispatch();
  // dispatch(getUser);

  const [activeCard] = cards.filter(card => card.isActive );
 // const inactiveCards = cards.

  return (
    <div>
      <h1>E-wallet</h1>
      <h2>Active Card</h2>
      <Card cardInfo={activeCard}/>

      {/* {cards.map((card, i) => <Card cardInfo={card} key={i}/> )} */}
      
      <Link to="/addcard">
        <button>Add card</button>
      </Link>
    </div>
  );
}
 
export default Cards;