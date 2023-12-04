import styles from './header.module.scss'
import BtnHeader from './BtnRegistration'

const Header = () =>{
    return( 
        <section className={styles.mainSection}>
            <div className={styles.mainSection__iconBox}>
                <div className={`${styles.mainSection__rectIcons} rectIcons`}>
                    <img className={styles.rectIcons__icon} src="icons/phone.svg" alt="phone-icon"/>
                </div>
                <div className={`${styles.mainSection__rectIcons} rectIcons__Orange`}>
                    <img className={styles.rectIcons__icon} src="icons/mas.svg" alt="mas-icon"/>
                </div>
                <div className={`${styles.mainSection__rectIcons} rectIcons__Yellow`}>
                    <img className={styles.rectIcons__icon} src="icons/tg.svg" alt="tg-icon"/>
                </div>
            </div>
            <div className={styles.mainSection__city}>
                <img className={styles.mainSection__img} src="icons/dot.svg" alt="dot-icon" />
                <h1 className={`${styles.mainSection__titleCity} titleCity`}> МОСКВА
                    <hr className={styles.titleCity__hr}/>
                </h1>
            </div>
            
            <div className={styles.mainSection__mainIcon}>
                <img src="icons/main-icon1 1.svg" alt="" />
            </div>

            <BtnHeader />
            
        </section>
    );
}
export default Header