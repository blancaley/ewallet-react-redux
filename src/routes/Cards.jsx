import Card from "../components/Card/Card";

const Cards = () => {
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