// withMenu is a Higher Order Component
// const CardwithMenu = withMenu(Card)

import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";

const withMenu = (Component) => {
  // Create a container component
  const Container = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}>
        <Component {...props} />
        {isHovering && <CardMenu />}
      </div>
    );
  }
  return Container;
}

export default withMenu;