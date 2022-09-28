import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import withMenu from "../../components/Card/withMenu";
import css from "./cardspage.module.css"

const CardsPage = () => {
  // Get user and cards info from store
  const user = useSelector(({ userSlice }) => userSlice.user);
  const cards = user?.cards;

  if (!user) return <div>No user loaded yet.</div>;

  // Find active card
  const activeCard = cards?.find(({ isActive }) => isActive ) ?? null;

  // User can have max 4 cards
  const limitReached = cards?.length > 3;

  // Add menu to card component
  const CardWithMenu = withMenu(Card);

  return (
    <div>
      <Header title={"E-wallet"} subtitle={"Active Card"}/>
      <Card 
        cardInfo={activeCard}
        userFullName={user?.fullName}
      />
      {/* Show inactive cards */}
      {cards?.map((card, i) => {
        if ( !card.isActive ) {
          return <CardWithMenu 
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
 
export default CardsPage;