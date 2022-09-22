import { Outlet } from "react-router-dom";
import css from './layoutroot.module.css'

const LayoutRoot = () => {
  return (
    <div>
      <article className={css.card}>
        <Outlet />
      </article>
    </div>
  );
}
 
export default LayoutRoot;