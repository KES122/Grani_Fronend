import style from "./SevenOne.module.scss"
import React, { useState } from 'react'

const CheckBox = () => {
    return (
        <section className={style.checkBoxSection}>
            <div className={style.checkBoxSection__MainCheckBoxPart}>

            <div className={style.MainPart__titlePart}>
                            <h1 className={style.titlePart__title}>Чек-лист инвентаря</h1>
                        </div>

                        <div className={style.MainPart__buttonsUnderTheTitle}>
                            <div className={style.buttonsUnderTheTitle__LeftPart}>
                                <div className={style.LeftPart__Edit}>
                                    <a className={style.Edit__TextEdit} href='#'>Редактировать</a>
                                </div>
                            </div>
                            <div className={style.buttonsUnderTheTitle__rightPart}>
                                <button className={style.rightPart__buttonRight}>Банк спорт. товаров</button>
                            </div>
                        </div>
                
                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Памятка для родителей</h3>
                    </div>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Полотенце</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Купальник</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Обувь</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Шапочку</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Предметы личной гигиены</p>
                        </div>
                    </ul>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Памятка для Вас</h3>
                    </div>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Полотенце</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Купальник</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Обувь</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Шапочку</p>
                        </div>
                    </ul>

                    <ul>                       
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Предметы личной гигиены</p>
                        </div>
                    </ul>

                </div>
            </div>
        </section>
    )
}
export default CheckBox
