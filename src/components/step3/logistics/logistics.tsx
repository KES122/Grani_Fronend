import StepsMenu from '../../StepsMenu/StepsMenu'
import Header from '../../header/Header'
import JumpBottonStep3 from './jumpButtonStep3/jumpButtonStep3'
import style from './logistics.module.scss'
import ChoicePart from './ChoicePart/choicePart'


const Logistics = () => {
    return (
        <>
            <Header />
            <section className={style.MainSectionLogistics}>

                <div className={style.MainSectionLogistics__LeftWrap}>
                    <StepsMenu />
                </div>

                <div className={style.MainSectionLogistics__RightWrap}>
                    <JumpBottonStep3 />

                    <div className={style.RightWrap__TopPartSection}>
                        <h1 className={style.TopPartSection__titl}>Чек-лист по организации перевозок</h1>

                        <div className={style.TopPartSection__Buttons}>

                            <div className={style.Buttons__Edit}>
                                <img className={style.Edit__editIco} src="public/editIco.svg" />
                                <a className={style.Edit__TextEdit} href='#'>Редактировать</a>
                            </div>

                            <div className={style.Buttons__RightButton}>
                                <button className={style.RightButton__but}>База исполнителей</button>
                            </div>

                        </div>

                    </div>

                    <ChoicePart />
                </div>

            </section>
        </>
    )
}
export default Logistics