import {NavLink} from "react-router-dom";
export default function Nav() {
  return(
    <nav id="main-menu" aria-label="Main navigation">
      <ul id="navLinks">
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/products">products</NavLink></li>
        <li><NavLink to="/locations">locations</NavLink></li>
      </ul>
    </nav>
  )
}