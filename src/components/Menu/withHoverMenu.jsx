// withMenu is a Higher Order Component
// It adds a menu and hover functionality 
// to the component that's passed in the argument.

// const CardwithMenu = withHoverMenu(Card)

import { useState } from "react";
import CardMenu from "./Menu";
import css from "./menu.module.css"

const withHoverMenu = (Component) => {
  // Create a container component to pass wrapped component's props
  const CardwithMenu = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div 
        onMouseOver={()=>setIsHovering(true)} 
        onMouseOut={()=>setIsHovering(false)}
        className={css.cardWithMenu} 
      >
        <Component {...props} />
        {isHovering && <CardMenu cardInfo={props.cardInfo}/>}
      </div>
    );
  }
  return CardwithMenu;
}

export default withHoverMenu;