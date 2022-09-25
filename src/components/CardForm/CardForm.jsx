import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  addCard
} from "../User/userSlice";
import { useNavigate } from "react-router-dom";

const CardForm = ({ userFullName, setCardInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    cardNumber: Yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits.")
      .max(16, "Must be 16 digits.")
      .min(16, "Must be 16 digits.")
      .required("Required"),
    cardMonth: Yup
      .number()
      .required("Required"),
    cardYear: Yup
      .number()
      .required("Required"),
    ccv: Yup
      .number()
      .required("Required"),
    vendor: Yup
      .string()
      .oneOf(["visa", "mastercard", "american express"],    "Invalid card vendor")
      .required("Required")
  })

  const handleOnChange = (e) => {
    // Formik handleChange gets an input id.
    // It returns a function
    const handleChangeFunc = formik.handleChange(e.target.id);
    // Update formik's value state
    handleChangeFunc(e.target.value);

    // Update card preview
    setCardInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
      })
    )
  }

  // const handleSubmit = e => {
//   e.preventDefault();
//   // User can have max 4 cards
//   if (cards.length > 3) {
//     return alert("max 4 card")
//   };

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      ccv: "",
      vendor: "visa"
    },
    validationSchema,
    onSubmit: values => {
      const cardInfo = {...values, isActive: false}
      dispatch(addCard(cardInfo));
      navigate("/cards");
    }    
  });  

  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <label htmlFor="cardNumber">Card Number</label>
      <input 
        id="cardNumber"
        name="cardNumber"
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        onChange={(e) => handleOnChange(e)}
        onBlur={formik.handleBlur}
        value={formik.values.cardNumber}
      />
      {formik.touched.cardNumber && formik.errors.cardNumber ? (<div>{formik.errors.cardNumber}</div>) : null}

    </div>
    <div>
      <label htmlFor="cardHolderName">Card Holder Name</label>
      <input 
        id="cardHolderName"
        name="cardHolderName"
        type="text"
        value={`${userFullName?.first} ${userFullName?.last}`}
        disabled
      />
    </div>
    <div>
      <label>Valid Thru</label>
      <input 
        id="cardMonth"
        name="cardMonth"
        type="number" 
        placeholder="MM"
        onChange={(e) => handleOnChange(e)}  
        onBlur={formik.handleBlur}     
        value={formik.values.cardMonth}
      />
      <input 
        id="cardYear"
        name="cardYear"
        type="number" 
        placeholder="YY"
        onChange={(e) => handleOnChange(e)}
        onBlur={formik.handleBlur}
        value={formik.values.cardYear}
        required
      />
      {formik.touched.cardMonth && formik.errors.cardMonth ? (<div>{formik.errors.cardMonth}</div>) : null}
      {formik.touched.cardYear && formik.errors.cardYear ? (<div>{formik.errors.cardYear}</div>) : null}
    </div>
    <div>
      <label htmlFor="ccv">Ccv</label>
      <input 
        id="ccv"
        name="ccv"
        type="number"     
        onChange={(e) => handleOnChange(e)}   
        onBlur={formik.handleBlur}
        value={formik.values.ccv}
      />
      {formik.touched.ccv && formik.errors.ccv ? (<div>{formik.errors.ccv}</div>) : null}
    </div>
    <div>
      <label htmlFor="vendor">Vendor</label>
      <select 
        id="vendor"
        name="vendor"
        onChange={(e) => handleOnChange(e)}
        onBlur={formik.handleBlur}
        value={formik.values.vendor}
      >
        <option value="visa">Visa</option>
        <option value="mastercard">Mastercard</option>
        <option value="american express">American Express</option>
      </select> 
      {formik.touched.vendor && formik.errors.vendor ? (<div>{formik.errors.vendor}</div>) : null}
    </div>
    <button type="submit">Add card</button>
  </form>
  );
}
 
export default CardForm;