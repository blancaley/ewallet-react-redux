import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
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
      <Header title={"Add a new bank card"} subtitle={"New card"}/>
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