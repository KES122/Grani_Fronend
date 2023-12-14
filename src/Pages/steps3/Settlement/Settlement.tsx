import styles from "./Settelement.module.scss"
import Header from "../../../components/header/Header"
import StepsMenu from "../../../components/StepsMenu/StepsMenu"
import BackBtn from "./btn-back/BackBtn"
import BtnAutomatic from "./btn-automatic/Btn-automatic"
import BtnPrint from "./btn-print/BtnPrint"


const Settelement = () =>{
    return(
        <>
            <Header/>
            <section className={styles.sectionAll}>
                <StepsMenu/>
                <div className={styles.sectionAll__Settelement}>
                    <BackBtn/>
                    <h1 className={styles.sectionAll__title}>Расселение</h1>
                    <div className={styles.sectionAll__btns}>
                        <BtnAutomatic/>
                        <BtnPrint/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Settelement