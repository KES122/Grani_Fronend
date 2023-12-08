import ButtonsBellow from './buttonsBelowProfile/ButtonsBelow'
import JumpBottonStepOne from './jumpButtonStep1/JumpButtonStep1'
import TravelChapter from './travelChapter/TravelChapter'
import style from './application.module.scss'
import InputNumber from './InputNumper/InputNumber'
import React, { useState } from 'react';


const Application: React.FC=() => {
    const [number, setNumber] = useState<number>(0);
    return (

        <section className={style.sectionApplication}>
            <JumpBottonStepOne/>
            <TravelChapter />
            <div className={style.sectionApplication__HeaderSection}>
                <h2 className={style.HeaderSection__titleAppli}>Оставьте заявку на участие в поездке</h2>
                <div className={style.HeaderSection__Edit}>
                    <img className={style.Edit__editIco} src="public/editIco.svg" />
                    <a className={style.Edit__TextEdit} href='#'>Редактировать</a>
                </div>
            </div>
            <div className={style.sectionApplication__applicationData}>

                <div className={style.applicationData__photo}>
                    {/* <input type="file" multiple accept="image/*" />*/}
                </div>

                <div className={style.applicationData__user}>
                    <p className={style.user__lab}>Фамилия Имя</p>
                    <input className={style.user__input} placeholder="Иванов Иван" type="text" />
                </div>

                <div className={style.applicationData__user}>
                    <p className={style.user__lab}>Возраст</p>
                    <select className={style.user__input}/>
                </div>

                <div className={style.applicationData__user}>
                    <p className={style.user__lab}>Вес</p>
                    {/*<input className={style.user__input} placeholder="777777" type="number" />*/}
                    <InputNumber value={number} onChange={setNumber}/>
                </div>

                <div className={style.applicationData__user}>
                    <p className={style.user__lab}>Аллергия</p>
                    <input className={style.user__input} placeholder="Есть/Нет" type="text" />
                </div>

                <div className={style.applicationData__user}>
                    <p className={style.user__lab}>Роль</p>
                    <select className={style.user__input} placeholder="Список"  />
                </div>
            </div>

            <div className={style.sectionApplication__buttonSectionApplication}>

                <button className={style.buttonSectionApplication__but} type='submit'>ДОБАВИТЬ УЧАСТНИКА</button>
                <button className={style.buttonSectionApplication__but} type='submit'>ОТПРАВИТЬ ЗАЯВКУ</button>

            </div>
            <ButtonsBellow />
        </section>

    )
}
export default Application