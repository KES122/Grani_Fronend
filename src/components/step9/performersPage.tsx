import StepsMenu from '../StepsMenu/StepsMenu'
import Header from '../header/Header'
import JumpBottonStep9 from './jumpButtonStep9/jumpButtonStep9'
import style from './performersPage.module.scss'


const PerformersPage = () => {
    return (
        <>
            <Header />
            <section className={style.PerformersPageSection}>

                <div className={style.PerformersPageSection__LeftWrapper}>
                    <StepsMenu />
                </div>

                <div className={style.PerformersPageSection__RightWrapper}>
                    <JumpBottonStep9/>

                    <h1 className={style.RightWrapper__titlePage}>Исполнители</h1>
                    
                    <div className={style.RightWrapper__MainPart}>
                        <h3 className={style.MainPart__}
                    </div>

                </div>
            </section>
        </>
    )
}

export default PerformersPage