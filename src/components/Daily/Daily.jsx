import { DailyPageContainer, ActivityContainer, CheckButton } from "./styled"
import NavBar from "../NavBar/NavBar"

export default function Daily() {
    return (
        <>
            <NavBar />
            <DailyPageContainer data-test="today-habit-container">
                <h1 data-test="today">Segunda, 17/05</h1>
                <p data-test="today-counter">Nenhum hábito concluido ainda</p>
                <ActivityContainer>
                    <activity>
                        <h1 data-test="today-habit-name">Ler 1 capítulo de livro</h1>
                        <p data-test="today-habit-sequence">Sequencia atual: 3dias</p>
                        <p data-test="today-habit-record"> Seu recorde: 5 dias</p>
                    </activity>
                    <CheckButton data-test="today-habit-check-btn">✔</CheckButton>
                </ActivityContainer>
            </DailyPageContainer>
        </>

    )
}


