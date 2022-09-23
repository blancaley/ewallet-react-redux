const Card = ({ cardInfo }) => {
  return (
    <article>
      <p>CardNumber: {cardInfo?.cardNumber}</p>
      <p>Cardholder Name {cardInfo?.userFirstName} {cardInfo?.userLastName}</p>
      <p>Valid thru: {cardInfo?.cardMonth}/{cardInfo?.cardYear}</p>
      <i>Vendor: {cardInfo?.vendor}</i>
    </article>
  );
}

export default Card;