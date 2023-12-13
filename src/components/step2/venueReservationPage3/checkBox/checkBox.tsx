import style from './checkBox.module.scss'

const CheckBox = () => {
    return (
        <section className={style.checkBoxSection}>
            <div className={style.checkBoxSection__MainCheckBoxPart}>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Здоровье и безопасность</h3>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck}/>
                        <p className={style.checkBoxComponent__checkBoxTitle}>Охраняется ли место проведения мероприятия</p>
                    </div>

                </div>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Кейтеринг</h3>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Каково минимальное количество для бронирования / какова минимальная сумма оплаты Специальные предложения для заказы группы</p>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Когда нужно предоставить окончательные пожелания в отношении еды на мероприятии?</p>
                    </div>

                </div>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Мультимедиа средства и WI FI</h3>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Есть ли какое либо встроенное оборудование в комнатах, например, подвесной проектор, интерактивные доски, экраны?</p>
                    </div>

                    <div className={style.checkBox__checkBoxDescription}>
                        <p className={style.checkBoxDescription__p}>Если да то какими? Предоставляют ли они свой ноутбук, кликер, экран, проектор, микрофоны, гарнитуры, удлинители?</p>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Есть ли какое либо встроенное оборудование в комнатах, например, подвесной проектор, интерактивные доски, экраны?</p>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Есть ли лекционная трибуна? Можно ли выбрать кафедру? Возможно ли их увидеть?</p>
                    </div>

                </div>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Экологичность события</h3>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Возможность использовать кулеры или графины, а не пластиковые бутылки ( или замена их на стекло) </p>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Возможность замены одноразовой посуды на фарфоровую?</p>
                    </div>

                </div>

                <div className={style.MainCheckBoxPart__checkBox}>

                    <div className={style.checkBox__headerBox}>
                        <h3 className={style.headerBox__title}>Помещение</h3>
                    </div>

                    <div className={style.checkBox__checkBoxComponent}>
                        <input type='checkbox' className={style.checkBoxComponent__inputCheck} />
                        <p className={style.checkBoxComponent__checkBoxTitle}>Где будет располагаться регистрация?</p>
                    </div>

                </div>

            </div>

        </section>
    )
}
export default CheckBox