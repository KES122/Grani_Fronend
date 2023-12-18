import style from "./Listu.module.scss"
import React, { useState } from 'react'

const CheckBox = () => {
    return (
        <section className={style.checkBoxSection}>
            <div className={style.checkBoxSection__MainCheckBoxPart}>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Как добраться до аэропорта (и обратно)</h3>
                    </div>

                    <ul>
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Аэроэкпесс - элекропоезд</p>
                        </div>

                        <div className={style.checkBox__checkBoxDescription}>
                            <p className={style.checkBoxDescription__p}>"Много текста"</p>
                        </div>
                    </ul>

                    <ul>
                        <div className={style.checkBox__checkBoxComponent}>
                            <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                            <p className={style.checkBoxComponent__checkBoxTitle}>Общественный транспорт</p>
                        </div>

                        <div className={style.checkBox__checkBoxDescription}>
                            <p className={style.checkBoxDescription__p}>"Много текста"</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default CheckBox