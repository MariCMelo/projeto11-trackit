import { DailyPageContainer, ActivityContainer, Activity, CheckButton } from "./styled"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Daily(){
    return(

        <>
        <NavBar />
            <DailyPageContainer data-test= "today-habit-container">
                <h1 data-test="today">Segunda, 17/05</h1>
                <p data-test="today-counter">Nenhum hábito concluido ainda</p>
                <ActivityContainer>
                    <Activity>
                        <h1 data-test="today-habit-name">Ler 1 capítulo de livro</h1>
                        <p data-test="today-habit-sequence">Sequencia atual: 3dias</p>
                        <p data-test="today-habit-record"> Seu recorde: 5 dias</p>
                    </Activity>
                    <CheckButton data-test="today-habit-check-btn">✔</CheckButton>
                    
                </ActivityContainer>
            </DailyPageContainer>
        <Footer />
        </>
        


        
    )
}