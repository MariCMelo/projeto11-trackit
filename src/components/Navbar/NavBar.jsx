import { Link } from "react-router-dom"
import { NavContainer, LogoLeft, LogoRight} from "./styled"
import LogoSimple from "../../assets/logo-simplificada.png"


export default function NavBar() {


    return (
        <NavContainer data-test="header">
            <Link to="/"> 
            <LogoLeft src= {LogoSimple}/>
             </Link>
           
        </NavContainer>
    )
}