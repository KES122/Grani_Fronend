import StepsMenu from '../../StepsMenu/StepsMenu'
import Header from '../../header/Header'
import style from './logistics.module.scss'

const Logistics = () => {
    return (
        <>
            <Header />
            <div className={style.MainSectionLogistics}>
                <div className={style.MainSectionLogistics__LeftWrap}>
                    <StepsMenu />
                </div>
                <div ></div>
            </div>
        </>
    )
}
export default Logistics