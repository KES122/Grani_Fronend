import styles from "./StepsMenu.module.scss";
import StepsFooter from "./footer/StepsFooter";

const StepsMenu = () => {
  return (
    <section>
      <div className={styles.mainMenu}>
        <div className={styles.mainMenu__mainIcon}>
          <img src="icons/icons-steps-menu/main-icon2_StepsMenu.svg" alt="" />
          <h1 className={styles.mainMenu__mainTitle}>
            МОИ <br />
            ГРАНИ
          </h1>
        </div>
        <h2 className={styles.mainMenu__title}>
          Конструктор спортивных <br />
          поездок
        </h2>
        <div className={styles.mainMenu__menuSteps}>
        <div className={styles.menuSteps__steps}>
          <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step1.svg" alt="" />
          <a className={styles.menuSteps__text} href="#">
            <span className={styles.text__underline}>1 шаг-анкета</span>
          </a>
        </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step2.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>2 шаг-бронь площадки</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step3.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline} onClick={() => window.location.href = '/Settlement'}>3 шаг-логистика</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step4.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>4 шаг-расписание</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step5.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>5 шаг-документация</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>6 шаг-оплата</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step7.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>7 шаг-инвентарь</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step8.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>8 шаг-турнирная сетка</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step9.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>9 шаг-исполнители</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>10 шаг-проведение выезда</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>11 шаг-награждение</span>
            </a>
          </div>
          <div className={styles.menuSteps__steps}>
            <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
            <a className={styles.menuSteps__text} href="#">
              <span className={styles.text__underline}>12 шаг-отчёт о проведении</span>
            </a>
          </div>
          <button className={styles.menuSteps__btnExit}>
            выйти
            <hr className={styles.btnExit__hr} />
          </button>
        </div>
      
      <StepsFooter/>
      </div>
    </section>
  );
};
export default StepsMenu;
