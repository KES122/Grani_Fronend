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
                    <JumpBottonStep9 />

                    <h1 className={style.RightWrapper__titlePage}>Исполнители</h1>

                    <h2 className={style.RightWrapper__PartTitle}>Медицинские работники</h2>

                    <div className={style.RightWrapper__MainPart}>

                        <div className={style.MainPart__Container}>
                            <div className={style.Container__Person}>
                                <img className={style.Person__img} src='./public/img/step9.png' />

                                <div className={style.Person__txt}>
                                    <div className={style.txt__head}>
                                        <h3 className={style.txt__h3}>Васильев Пётр Семёнович</h3>
                                        <button ><img src='public\icons\heart.svg' /></button>
                                    </div>
                                    <p className={style.txt__p1}>Медицинский работник</p>
                                    <p className={style.txt__p2}>2500/день</p>
                                </div>

                                <div className={style.Person__button}>
                                    <button className={style.button__but}>ПОЗВОНИТЬ</button>
                                    <button className={style.button__but}>НАПИСАТЬ</button>
                                </div>
                            </div>
                        </div>

                        <div className={style.MainPart__Container}>
                            <div className={style.Container__Person}>
                                <img className={style.Person__img} src='./public/img/step9.png' />

                                <div className={style.Person__txt}>
                                    <div className={style.txt__head}>
                                        <h3 className={style.txt__h3}>Васильев Пётр Семёнович</h3>
                                        <button ><img src='public\icons\heart.svg' /></button>
                                    </div>
                                    <p className={style.txt__p1}>Медицинский работник</p>
                                    <p className={style.txt__p2}>2500/день</p>
                                </div>

                                <div className={style.Person__button}>
                                    <button className={style.button__but}>ПОЗВОНИТЬ</button>
                                    <button className={style.button__but}>НАПИСАТЬ</button>
                                </div>
                            </div>
                        </div>

                        <div className={style.MainPart__pointerArrow}>
                            <a ><img src='public/icons/pointerArrow.svg' /></a>
                        </div>
                    </div>


                    <h2 className={style.RightWrapper__PartTitle}>Спортивное судейство</h2>

                    <div className={style.RightWrapper__MainPart}>

                        <div className={style.MainPart__Container}>
                            <div className={style.Container__Person}>
                                <img className={style.Person__img} src='./public/img/step9.png' />

                                <div className={style.Person__txt}>
                                    <div className={style.txt__head}>
                                        <h3 className={style.txt__h3}>Васильев Пётр Семёнович</h3>
                                        <button ><img src='public\icons\heart.svg' /></button>
                                    </div>
                                    <p className={style.txt__p1}>Судья</p>
                                    <p className={style.txt__p2}>2500/день</p>
                                </div>

                                <div className={style.Person__button}>
                                    <button className={style.button__but}>ПОЗВОНИТЬ</button>
                                    <button className={style.button__but}>НАПИСАТЬ</button>
                                </div>
                            </div>
                        </div>

                        <div className={style.MainPart__Container}>
                            <div className={style.Container__Person}>
                                <img className={style.Person__img} src='./public/img/step9.png' />

                                <div className={style.Person__txt}>
                                    <div className={style.txt__head}>
                                        <h3 className={style.txt__h3}>Васильев Пётр Семёнович</h3>
                                        <button ><img src='public\icons\heart.svg' /></button>
                                    </div>
                                    <p className={style.txt__p1}>Судья</p>
                                    <p className={style.txt__p2}>2500/день</p>
                                </div>

                                <div className={style.Person__button}>
                                    <button className={style.button__but}>ПОЗВОНИТЬ</button>
                                    <button className={style.button__but}>НАПИСАТЬ</button>
                                </div>
                            </div>
                        </div>

                        <div className={style.MainPart__pointerArrow}>
                            <a ><img src='public/icons/pointerArrow.svg' /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PerformersPage