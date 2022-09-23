import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCard
} from "../components/Card/cardSlice";
import Card from "../components/Card/Card";
import CardForm from "../components/Card/CardForm/CardForm";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ cardInfo, setCardInfo ] = useState({
    cardNumber: "XXXXXXXXXXXX",
    userFirstName: "NEW INACTIVE",
    userLastName: "lastname",
    cardMonth: "MM",
    cardYear: "DD",
    ccv: "",
    vendor: "Visa",
    isActive: false
  })

  // Update card preview when user fills in form
  const onChange = e => {
    setCardInfo({...cardInfo, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard(cardInfo));
    navigate("/cards");
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