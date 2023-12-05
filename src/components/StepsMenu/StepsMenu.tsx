import styles from './StepsMenu.module.scss'

const StepsMenu = () =>{
    return(
    <section className={styles.mainMenu}>
        <div className={styles.mainMenu__mainIcon}>
            <img src="icons/main-icon2_StepsMenu.svg" alt="" />
            <h1 className={styles.mainMenu__mainTitle}>МОИ <br />ГРАНИ</h1>
        </div>
        <h2 className={styles.mainMenu__title}>Конструктор спортивных <br />поездок</h2>
        <div className={styles.mainMenu__menuSteps}>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">1 шаг-анкета
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">2 шаг-бронь площадки
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">3 шаг-логистика
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">4 шаг-расписание
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">5 шаг-документация
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">6 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">7 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">8 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">9 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">10 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">11 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <div className={styles.menuSteps__steps}>
                <img src="" alt="" /><a className={styles.menuSteps__text} href="#">12 шаг-оплата
                <hr className={styles.text__hr}/>
                </a>
            </div>
            <button className={styles.menuSteps__btnExit}>выйти
            <hr className={styles.btnExit__hr}/>
            </button>

        </div>
    </section>)
}
export default StepsMenu