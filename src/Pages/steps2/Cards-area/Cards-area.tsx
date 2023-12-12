import styles from "./Cards-area.module.scss"
import Header from "../../../components/header/Header"
import BtnSection from "./btnSection/BtnSection"

const CardsArea = () =>{
    return(
        <>
        
        <Header/>
        <section className={styles.sectionCardsArea}>
            <BtnSection/>
        </section>
        
        </>
    )
}
export default CardsArea