import style from "./Award.module.scss"
import React, { useState } from 'react'

const CheckBox = () => {
    return (
        <section className={style.checkBoxSection}>
            <div className={style.checkBoxSection__MainCheckBoxPart}>
                <div className={style.MainPart__titlePart}>
                    <h1 className={style.titlePart__title}>Награждение</h1>
                </div>

                <div className={style.MainPart__buttonsUnderTheTitle}>
                    <div className={style.buttonsUnderTheTitle__LeftPart}>
                        <div className={style.LeftPart__Edit}>
                            <a className={style.Edit__TextEdit} href='#'>Редактировать</a>
                        </div>
                    </div>
                    <div className={style.buttonsUnderTheTitle__rightPart}>
                            <button className={style.rightPart__buttonRight}>Диск с фото</button>ы
                    </div>
                </div>
                
                <div className={style.MainCheckBoxPart__checkBox}>
                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Шаблоны грамот</h3>
                    </div> 
                </div>
                <div className={style.LeftPart__Edit}>
                    <img className={style.Edit__editIco} src="public/img/firstAward.jpg" />
                    <img className={style.Edit__editIco} src="public/img/secondtAward.jpg" />
                    <img className={style.Edit__editIco} src="public/img/thirdsAward.jpg" />
                </div>

                <div className={style.buttonsUnderTheTitle__rightPart}>
                    <button className={style.rightPart__buttonRight}>Редактировать</button>
                    <button className={style.rightPart__buttonRight}>Авто заполнение</button>
                </div>
                
            </div>
        </section>
    )
}
export default CheckBox