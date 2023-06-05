import logo from "../../assets/logo-completa.png";
import { PageContainer, Logo, LoginContainer } from "./styled";
import { BASE_URL } from "../../constants/baseUrl";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Registration() {
    const navigate = useNavigate();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function signUp(e) {
        e.preventDefault();
        const newUser = { email, password, name, image }

        const promise = axios.post(`${BASE_URL}/auth/sign-up`, newUser)

        promise.then(res => {
            alert('Você foi cadastrado com sucesso!')
            navigate('/')
        })

        promise.catch(err => alert(err.response.message))
    }
    return (
        <PageContainer>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>
            <LoginContainer onSubmit={signUp}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    data-test="password-input"
                    placeholder="senha"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    data-test="password-input"
                    type="text"
                    placeholder="nome"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    data-test="password-input"
                    type="url"
                    placeholder="foto"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button data-test="signup-btn" type="submit">Cadastrar</button>
                <Link to="/" data-test="login-link">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </LoginContainer>


        </PageContainer>

    )
}