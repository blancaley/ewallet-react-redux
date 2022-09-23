import { useState } from "react";
import Card from "../components/Card/Card";
import CardForm from "../components/Card/CardForm/CardForm";

const AddCard = () => {

  const [ cardInfo, setCardInfo ] = useState({
    cardNumber: "XXXXXXXXXXXX",
    userFirstName: "NEW INACTIVE",
    userLastName: "lastname",
    cardMonth: "MM",
    cardYear: "DD",
    ccv: "",
    vendor: "",
    isActive: false
  })

  const onChange = e => {
    setCardInfo({...cardInfo, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(cardInfo)
  }

  return (
    <div>
      <h1>Add a new bank card</h1>
      <h2>New card</h2>
      <Card cardInfo={cardInfo}/>
      
      <CardForm cardInfo={cardInfo} onChange={onChange} handleSubmit={handleSubmit}/>

    </div>
  );
}

export default AddCard;