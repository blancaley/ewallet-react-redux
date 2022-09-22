import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <div>
      LayoutRoot
      <Outlet />
    </div>
  );
}
 
export default LayoutRoot;