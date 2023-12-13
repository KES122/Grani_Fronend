import style from './venueReservationPage3.module.scss'
import Header from '../../header/Header'
import StepsMenu from '../../StepsMenu/StepsMenu'
import JumpBottonStepTwo from './jumpButtonStep2/jumpButtonStep2'
import CheckBox from './checkBox/checkBox'

const VenueReservationPage3 = () => {
    return (
        <>
            <Header />
            <div className={style.mainSection}>
                <div className={style.leftWrapper}>
                    <StepsMenu />
                </div>

                <section className={style.venueReservationPage3}>
                   
                    <JumpBottonStepTwo/>
                    <div className={style.venueReservationPage3__MainPart}>
                        <div className={style.MainPart__titlePart}>
                            <h1 className={style.titlePart__title}>Чек-лист по бронированию площадки</h1>
                        </div>

                        <div className={style.MainPart__buttonsUnderTheTitle}>
                            <div className={style.buttonsUnderTheTitle__LeftPart}>
                                <div className={style.LeftPart__Edit}>
                                    <img className={style.Edit__editIco} src="public/editIco.svg" />
                                    <a className={style.Edit__TextEdit} href='#'>Редактировать</a>
                                </div>

                                <div className={style.LeftPart__review}>
                                    <button className={style.review__buttonReview}>Рассказать о хорошей базе</button>
                                </div>
                            </div>

                            <div className={style.buttonsUnderTheTitle__rightPart}>
                                <button className={style.rightPart__buttonRight}>Расселение</button>
                                <button className={style.rightPart__buttonRight}>База площадок</button>
                            </div>

                        </div>
                    </div>
                    <CheckBox/>
                </section>
            </div>
        </>

    )
}
export default VenueReservationPage3