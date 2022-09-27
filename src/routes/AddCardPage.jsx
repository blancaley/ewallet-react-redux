import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";

const AddCardPage = () => {
 // Get user and cards info from store
 const user = useSelector(({ userSlice }) => userSlice.user);

  const [ cardInfo, setCardInfo ] = useState({
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardMonth: "MM",
    cardYear: "YY",
    ccv: "",
    vendor: "visa",
    isActive: false
  })

  return (
    <div>
      <h1>Add a new bank card</h1>
      <h2>New card</h2>
      <Card 
        cardInfo={cardInfo} 
        userFullName={user?.fullName}/>
      
      <CardForm 
        cardInfo={cardInfo} 
        userFullName={user?.fullName} 
        setCardInfo={setCardInfo}
      />
    </div>
  );
}

export default AddCardPage;