import { Outlet } from "react-router-dom";
import css from './layoutroot.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../components/User/userSlice";

const LayoutRoot = () => {
  const dispatch = useDispatch();
  // Fetch user on app start
  useEffect(() => {
    dispatch(getUser())
  }, []);
  
  return (
    <div className={css.layoutContainer}>
      <article className={css.pageContainer}>
        <Outlet />
      </article>
    </div>
  );
}
 
export default LayoutRoot;