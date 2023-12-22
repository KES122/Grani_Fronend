import style from './SportCamps.module.scss'
import React, { useState } from 'react'

const Sport = () => {
    return (
        <section className={style.applicationPage3}>
            <div className={style.applicationPage3__mainImg}></div>
            <div className={style.applicationPage3__TitlePage3}>
                <h1 className={style.TitlePage3__h1}>Спортивные сборы по футболу</h1>
                <h3 className={style.TitlePage3__h3}>с 10 по 13 Сентября </h3>
            </div>

            <div className={style.MainPart__Container}>
                <div className={style.Container__Person}>
                    <img className={style.Person__img} src='./public/img/step9.png' />
                    <img className={style.Person__img} src='./public/img/step9.png' />
                </div>

                <div className={style.Container__Person}>
                    <img className={style.Person__img} src='./public/img/step9.png' />
                    <img className={style.Person__img} src='./public/img/step9.png' />
                </div>

            </div>

            <div className={style.applicationPage3__butBotton}>
                <button className={style.butBotton__buB}>Создать альбом</button>
            </div>
            <div className={style.applicationPage3__butBotton}>
                <button className={style.butBotton__buB}>Сохранить фото</button>
                <button className={style.butBotton__buB}>Поделиться</button>
            </div>
        </section>
    )
}
export default Sport