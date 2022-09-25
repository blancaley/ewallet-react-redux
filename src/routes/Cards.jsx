import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const Cards = () => {
  // Get user and cards info from store
  const user = useSelector(({ userSlice }) => userSlice.user);
  const cards = user?.cards;

  // Find active card
  const [activeCard] = cards?.filter(card => card.isActive ) ?? [];

  // User can have max 4 cards
  const limitReached = cards?.length > 3;

  return (
    <div>
      <h1>E-wallet</h1>
      <h2>Active Card</h2>
      <Card 
        cardInfo={activeCard}
        userFullName={user?.fullName}
      />
      {/* Show inactive cards */}
      {cards?.map((card, i) => {
        if ( !card.isActive ) {
          return <Card 
            key={i}
            cardInfo={card}
            userFullName={user?.fullName}
            />
        }
      })}
      
      <Link to="/addcard">
        <button disabled={limitReached}>Add card</button>
      </Link>
      {limitReached && <p>You have reached the card limit of 4. To add a new card please delete one.</p>}
    </div>
  );
}
 
export default Cards;