import { PageContainer, HabitCard, CancelButton, SaveButton, ButtonContainer, DaysContainer, Day, HabitListed} from "./styled";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function Habits() {
return (
    <>
        <NavBar />

        <PageContainer>
            <h1>Meus hábitos</h1> 
            <button data-test="habit-create-btn">+</button>

            <HabitCard data-test="habit-create-container">
                

                <input placeholder="nome do hábito" data-test="habit-name-input"></input> 

                <DaysContainer>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                </DaysContainer>

                <ButtonContainer>

                <CancelButton data-test="habit-create-cancel-btn">Cancelar</CancelButton>
                
                <SaveButton data-test="habit-create-save-btn">Salvar</SaveButton>

                </ButtonContainer> 
            
            </HabitCard>

            <HabitCard data-test="habit-create-container">
                <HabitListed data-test="habit-name">X</HabitListed>

                
                <DaysContainer>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                    <Day data-test="habit-day">s</Day>
                </DaysContainer>

               
            
            </HabitCard>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </PageContainer> 
         <Footer />   
    </>
)

};