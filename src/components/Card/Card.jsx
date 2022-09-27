import css from "./card.module.css"

const Card = ({ cardInfo, userFullName }) => {

  return (
    <article className={css.cardWrapper}>
      <p>CardNumber: {cardInfo?.cardNumber}</p>
      <p>Cardholder Name {userFullName?.first} {userFullName?.last}</p>
      <p>Valid thru: {cardInfo?.cardMonth}/{cardInfo?.cardYear}</p>
      <i>Vendor: {cardInfo?.vendor}</i>
    </article>
  );
}

export default Card;