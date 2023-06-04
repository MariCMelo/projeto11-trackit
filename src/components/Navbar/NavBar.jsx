import { Link } from "react-router-dom"
import { NavContainer, LogoLeft, LogoRight} from "./styled"
import LogoSimple from "../../assets/logo-simplificada.png"
import { useContext } from "react"
import {UserContext} from "../contexts/UserContext"

export default function NavBar() {
const {user} = useContext(UserContext)

    return (
        <NavContainer data-test="header">
            <Link to="/"> 
            <LogoLeft src= {LogoSimple}/>
             </Link>
            <LogoRight src = {user.image} alt="Imagem do Usuário"/>
        </NavContainer>
    )
}