import style from './choicePart.module.scss'

const ChoicePart = () => {
    return (
        <section className={style.PhoneAppCheckSection}>

            <h2 className={style.PhoneAppCheckSection__titl}>Что скачать на телефон:</h2>

            <div className={style.PhoneAppCheckSection__App}>

                <div className={style.App__ChoicePart}>
                    <div className={style.ChoicePart__CheckBoxPart}>
                        <input className={style.CheckBoxPart__inp} type='checkbox' />
                        <h3 className={style.CheckBoxPart__label}>Яндекс метро (ios/android)</h3>
                    </div>
                    <div className={style.ChoicePart__description}>

                        <p className={style.description__p}>Схема метро, маршруты и информация о станциях. На схеме видно,
                            какие станции закрыты на ремонт и где находятся вокзалы и аэропорты.
                            Оптимальные маршруты. Приложение подскажет, как быстрее доехать до нужной станции и в какой вагон лучше сесть.
                            Информация о станции.</p>

                    </div>
                </div>
            </div>

            <div className={style.PhoneAppCheckSection__App}>

                <div className={style.App__ChoicePart}>
                    <div className={style.ChoicePart__CheckBoxPart}>
                        <input className={style.CheckBoxPart__inp} type='checkbox' />
                        <h3 className={style.CheckBoxPart__label}>Яндекс транспорт (ios/android)</h3>
                    </div>
                    <div className={style.ChoicePart__description}>

                        <p className={style.description_p}>Приложение Яндекса, созданное для пешеходов и тех, кто ездит на общественном транспорте.
                            Помогает в реальном времени следить за движением автобуса, тролейбусов,
                            травмаев и маршрутек и показывает, когда они нва остнавке.
                            Строит маршруты и рассчитывает время в пути: знает, где лучше проехать на автобусе,
                            а где пройти пешком</p>

                    </div>
                </div>
            </div>

            <div className={style.PhoneAppCheckSection__App}>

                <div className={style.App__ChoicePart}>
                    <div className={style.ChoicePart__CheckBoxPart}>
                        <input className={style.CheckBoxPart__inp} type='checkbox' />
                        <h3 className={style.CheckBoxPart__label}>Яндекс. Такси (ios/ android), Uber(ios/android)</h3>
                    </div>
                    <div className={style.ChoicePart__description}>

                        <p className={style.description_p}>Яндекс.
                            Такси- позволяет вызвать офицальное такси по выгодным тарифам без звонка оператору.
                            Заказать такси можно на сайте и через приложение для IOS
                            (в том числе в Apple Watch, Android и Windows Phone)</p>

                    </div>
                </div>
            </div>

            <h2 className={style.PhoneAppCheckSection__titl}>Как добратся до аэропорта (и обратно)</h2>


            <div className={style.PhoneAppCheckSection__App}>
                <div className={style.App__ChoicePart}>

                    <div className={style.ChoicePart__CheckBoxPart}>
                        <input className={style.CheckBoxPart__inp} type='checkbox' />
                        <h3 className={style.CheckBoxPart__label}>Аэроэкспресс - электропроезд.</h3>
                    </div>
                    <div className={style.ChoicePart__description}>
                        <p className={style.description_p}>Удобен тем, что едет до аэропорта и до ЖД-вокзала и метро). В среднем поездка занимает 1 час. Стоимость билета 500 Р. Поезда отправляются по расписанию. Купить билет можно по факту прибытия и онлайн. Рекомендую покупать заранее, потому нередко приходится, в прямом смысле, бежать до самолета до места отправки аэроэкспресса. Купленный билет действует 3 дня с даты, указанной, при покупке на сайте.</p>
                    </div>
                </div>
            </div>

            <div className={style.PhoneAppCheckSection__App}>
                <div className={style.App__ChoicePart}>

                    <div className={style.ChoicePart__CheckBoxPart}>
                        <input className={style.CheckBoxPart__inp} type='checkbox' />
                        <h3 className={style.CheckBoxPart__label}>Общественный транспорт ( автобусы и маршрутки. Дешевле, но дольше от 55 до - 100р. В пути  - 1 час 20 мин.</h3>
                    </div>
                    <div className={style.ChoicePart__description}>
                        <p className={style.description_p}>Общественный транспорт от аэропорта Внуково: Автобус #911 (до м. “Саларьево”), Автобус #611 (до м. “Юго-Западная”),  Автобус №272/272к (дл м. “Филатов Луг”), Автобус №32, (до м. “Рассказовка”), №4411 (до м. “Китай -Город”). От аэропорта Шереметьево: экспресс-автобус “аэроэкспресс” (до м. “Хореино”, стоимость проезда не будет дороже других автобусов -199р). Автобус №817 (до м. ”Планерная”), автобус №8541( до м. ”Речной вокзал”), маршрутка  №948 (ДО М. “Планерная”), маршрутка “949( дом. Речной Вокзал”). Аэропорт Домодедово: автобус или маршрутка №308 (до м. “Домодедовская”)</p>
                    </div>
                </div>
            </div>
            
            

        </section>
    )
}


export default ChoicePart