import Styles from './nav.module.scss';
import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/"> Home </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/dotnet-and-csharp"> .NET and C# </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/html-and-css"> HTML and CSS </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/tpr-wcg"> TPR Web Change Group </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/demo"> Demo </NavLink>

          <NavLink className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/"> <i className="fa-solid fa-house-user"></i> </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/html-and-css"> <i className="fa-solid fa-file-code"></i> </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/tpr-wcg"> <i className="fa-solid fa-briefcase"></i> </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/demo"> <i className="fa-solid fa-laptop-code"></i> </NavLink>
        </div>
      </nav>
    )
}