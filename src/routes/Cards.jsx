//import { getUser } from "../components/Card/cardSlice"
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../components/User/userSlice";

const Cards = () => {
  const user = useSelector(({ userSlice })=> userSlice.user);

  const cards = user?.cards;
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [])

  // Find active card
  const [activeCard] = cards?.filter(card => card.isActive ) ?? [];

  if (!activeCard) return null

  return (
    <div>
      <h1>E-wallet</h1>
      <h2>Active Card</h2>
      <Card 
        userFullName={user.fullName}
        cardInfo={activeCard}/>

      {cards.map((card, i) => {
        if ( !card.isActive ) {
          return <Card cardInfo={card} key={i}/>
        }
      })
      }
      
      <Link to="/addcard">
        <button>Add card</button>
      </Link>
    </div>
  );
}
 
export default Cards;