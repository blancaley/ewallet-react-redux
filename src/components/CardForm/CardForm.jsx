import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCard } from "../User/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./cardform.module.css"
import ErrorMessage from "./ErrorMessage";

const CardForm = ({ userFullName, setCardInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get total cards from store
 const totalCards = useSelector(({ userSlice }) => userSlice.user)?.cards.length;
  // User can have max 4 cards
 const reachedCardLimit = totalCards > 3;

  const validationSchema = Yup.object({
    cardNumber: Yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits.")
      .max(16, "Must be 16 digits.")
      .min(16, "Must be 16 digits.")
      .required("Card Number–Required"),
    cardMonth: Yup
      .number()
      .required("Month–Required"),
    cardYear: Yup
      .number()
      .required("Year–Required"),
    ccv: Yup
      .number()
      .required("CCV–Required"),
    vendor: Yup
      .string()
      .oneOf(["visa", "mastercard", "americanexpress"],    "Invalid card vendor")
      .required("Vendor–Required")
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
    <form onSubmit={formik.handleSubmit} className={css.cardForm}>
    <div className={css.inputGroup}>
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
      {formik.touched.cardNumber && formik.errors.cardNumber ? (<ErrorMessage errorName={formik.errors.cardNumber}/>) : null}
    </div>
    <div className={css.inputGroup}>
      <label htmlFor="cardHolderName">Card Holder Name</label>
      <input 
        id="cardHolderName"
        name="cardHolderName"
        type="text"
        value={`${userFullName?.first} ${userFullName?.last}`}
        disabled
      />
    </div>
    <div className={css.inputGroup}>
      <label>Valid Thru</label>
      <div className={css.validThruInput}>
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
      </div>
      {formik.touched.cardMonth && formik.errors.cardMonth ? (<ErrorMessage errorName={formik.errors.cardMonth}/>) : null}
      {formik.touched.cardYear && formik.errors.cardYear ? (<ErrorMessage errorName={formik.errors.cardYear}/>) : null}
    </div>
    <div className={css.inputGroup}>
      <label htmlFor="ccv">Ccv</label>
      <input 
        id="ccv"
        name="ccv"
        type="number"     
        onChange={(e) => handleOnChange(e)}   
        onBlur={formik.handleBlur}
        value={formik.values.ccv}
      />
      {formik.touched.ccv && formik.errors.ccv ? (<ErrorMessage errorName={formik.errors.ccv}/>) : null}
    </div>
    <div className={css.inputGroup}>
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
        <option value="americanexpress">American Express</option>
      </select> 
      {formik.touched.vendor && formik.errors.vendor ? (<ErrorMessage errorName={formik.errors.vendor}/>) : null}
    </div>
    <button type="submit" disabled={reachedCardLimit} className={`button ${css.addCardBtn}`}>Add card</button>
  </form>
  );
}
 
export default CardForm;