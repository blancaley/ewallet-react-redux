import css from "./card.module.css"
// import hologram from "../../assets/img/hologram.jpg"
import chip from "../../assets/img/chip.png"
import contactless from "../../assets/img/contactlessIndicator.svg"

const Card = ({ cardInfo, userFullName }) => {

  // const colors = [blue, purple, orange, black, red];
  // var randomColor = colors[(Math.random() * colors.length) | 0];

  return (
    <article className={`${css.card}`}>
      <img 
        src={contactless} 
        className={css.contactlessImg}
        alt="contactless"
      />
      <img 
        src={chip} 
        className={css.chipImg}
        alt="chip"
      />
      <p className={`${css.cardInfoText} ${css.cardNumber}`}>{cardInfo?.cardNumber}</p>
      <div className={css.bottom}>
        <div className={css.bottomLeft}>
          <div className={css.validThru}>
            <p className={css.description}>Valid thru</p>
            <p className={css.cardInfoText}>{cardInfo?.cardMonth}/{cardInfo?.cardYear}</p>
          </div>
          <div>
            <p className={css.description}>Cardholder Name</p>
            <p className={css.cardInfoText}>{userFullName?.first} {userFullName?.last}</p>
          </div>
        </div>
        <img
          src={`/img/${cardInfo?.vendor}-logo.png`} 
          className={css.vendorLogo}
          alt={`${cardInfo?.vendor} logo`}
        />
      </div>
    </article>
  );
}

export default Card;