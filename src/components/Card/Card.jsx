import { useState } from "react";
import DeleteCardBtn from "./DeleteCardBtn";

const Card = ({ userFullName, cardInfo }) => {

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <article 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}>
        {isHovering && <DeleteCardBtn/>}
        <p>CardNumber: {cardInfo?.cardNumber}</p>
        <p>Cardholder Name {userFullName?.first} {userFullName?.last}</p>
        <p>Valid thru: {cardInfo?.cardMonth}/{cardInfo?.cardYear}</p>
        <i>Vendor: {cardInfo?.vendor}</i>
    </article>
  );
}

export default Card;