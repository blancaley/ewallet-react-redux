const ErrorMessage = ( {errorName } ) => {
  const style = {
    color: "red",
    fontSize: "13px",
    paddingTop: "5px",
    paddingLeft: "10px"
  }
  return (<div 
    style={style}>❗{errorName}</div>);
}
 
export default ErrorMessage;