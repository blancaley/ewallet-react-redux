import css from "./header.module.css"

const Header = ( {title, subtitle} ) => {
  return (
    <div className={css.header}>
      <h1 className={css.mainTitle}>{title}</h1>
      <h2 className={css.subtitle}>{subtitle}</h2>
    </div>
  );
}
 
export default Header;