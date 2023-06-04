import { FooterContainer, CLickContainer } from "./styled"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

export default function Footer({ posterURL, title, weekday, hour }) {
    
    const {progress} = useContext(ProgressContext);
    return (

        <FooterContainer data-test="menu">
            <Link to="/hoje" data-test="today-link">
            </Link>
            <CLickContainer>
                <Link to="/habitos" data-test="habit-link">
                    <p>Hábitos</p>
                </Link>
                <div style={{
                    width: 100,
                    marginBottom: 50,
                }}>
                    <Link to="/" data-test="today-link">
                    <CircularProgressbar
                        value={progress}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                    </Link>
                </div>
                <Link to="/historico" data-test="history-link">
                    <p>Histórico</p>
                </Link>
            </CLickContainer>

        </FooterContainer>
    )
}