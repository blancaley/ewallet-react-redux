import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import withHoverMenu from "../../components/Menu/withHoverMenu";
import css from "./page.module.css";
import btnStyle from "../../styles/button.module.css"

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
  const CardWithMenu = withHoverMenu(Card);

  return (
    <div className={css.innerContainer}>
      <Header title={"E-wallet"} subtitle={"Active Card"}/>
      <Card 
        cardInfo={activeCard}
        userFullName={user?.fullName}
      />
      {/* Show inactive cards */}
      <ul className={css.cardList}>
      {cards?.map((card, i) => {
        if ( !card.isActive ) {
          return (
          <li key={i}>
            <CardWithMenu 
            cardInfo={card}
            userFullName={user?.fullName}
            />
          </li>)
        }
      })}
      </ul>
      <div className={css.btnContainer}>
        <Link to="/addcard">
          <button disabled={limitReached} className={btnStyle.btn}>Add a new card</button>
        </Link>
        {limitReached && <p>You have reached the card limit of 4. Please delete a card.</p>}
      </div>
    </div>
  );
}
 
export default CardsPage;