const CardForm = ({ cardInfo, onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="cardNumber">Card Number</label>
      <input 
        type="number"
        placeholder="XXXXXXXXX"
        id="cardNumber"
        value={cardInfo.cardNumber}
        onChange={onChange}
      />
    </div>
    <div>
      <label htmlFor="cardHolderName">Card Holder Name</label>
      <input 
        type="text"
        placeholder="Name"
        id="cardHolderName"
        value={`${cardInfo.userFirstName} ${cardInfo.userLastName}`}
        disabled
      />
    </div>
    <div>
      <label htmlFor="cardMonth">Valid Thru</label>
      <input 
        type="number"
        placeholder=""
        id="cardMonth"
        value={cardInfo.cardMonth}
        onChange={onChange}
      />
      <input 
        type="number"
        placeholder=""
        id="cardYear"
        value={cardInfo.cardYear}
        onChange={onChange}
      />
    </div>
    <div>
      <label htmlFor="ccv">Ccv</label>
      <input 
        type="number"
        placeholder="222"
        id="ccv"
        value={cardInfo.ccv}
        onChange={onChange}
      />
    </div>
    <div>
      <label htmlFor="vendor">Vendor</label>
      <select 
        id="vendor"
        onChange={onChange}
      >
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="American">American</option>
      </select> 
    </div>
    <button type="submit">Add card</button>
  </form>
  );
}
 
export default CardForm;