import SearchBar from "../SearchBar/SearchBar"
import {NavLink} from "react-router-dom"
import style from "../Nav/Nav.module.css"
import logo from "../../multimedia/logo.png"


const Nav = ({onSearch}) => {
    return(
        <nav className={style.nav}>
             
            <NavLink className ={style.logout}to="/"></NavLink>
            {/* <button > */}
            <NavLink className={style.about} to="/about"></NavLink>
            {/* </button> */}

            {/* <button> */}
            <NavLink className={style.home}to="/home"><img src={logo} alt="Logo" className={style.logo}/></NavLink>
            {/* </button> */}
            <NavLink  to="/favorites">Favorites</NavLink>
            <SearchBar  onSearch={onSearch} />
        </nav>
    )
}
export default Nav;