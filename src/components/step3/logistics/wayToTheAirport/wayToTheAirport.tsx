import style from './wayToTheAirport.module.scss'


const WayToTheAirport = ()=>{
    return (
        <section className={style.WayToTheAirportSection}>
            <h2 className={style.WayToTheAirportSection__title}>Как добратся до аэропорта (и обратно)</h2>
            <div className={style.WayToTheAirportSection__Way}>
                <div className={style.Way__CheckBoxWay}>
                    <input className={style.CheckBoxWay__input} type='checkbox'/>
                    <h3 className={style.CheckBoxWay__lable}>Аэроэкспресс - электропроезд.</h3>
                </div>
                <div className={style.Way__descriptionWay}>
                    <p className={style.descriptionWay_desc}>Удобен тем, что едет до аэропорта и до ЖД-вокзала и метро). В среднем поездка занимает 1 час. Стоимость билета 500 Р. Поезда отправляются по расписанию. Купить билет можно по факту прибытия и онлайн. Рекомендую покупать заранее, потому нередко приходится, в прямом смысле, бежать до самолета до места отправки аэроэкспресса. Купленный билет действует 3 дня с даты, указанной, при покупке на сайте.</p>
                </div>
            </div>

            <div className={style.WayToTheAirportSection__Way}>
                <div className={style.Way__CheckBoxWay}>
                    <input className={style.CheckBoxWay__input} type='checkbox'/>
                    <h3 className={style.CheckBoxWay__lable}>Общественный транспорт ( автобусы и маршрутки. Дешевле, но дольше от 55 до - 100р. В пути  - 1 час 20 мин.)</h3>
                </div>
                <div className={style.Way__descriptionWay}>
                    <p className={style.descriptionWay_desc}>Общественный транспорт от аэропорта Внуково: Автобус #911 (до м. “Саларьево”), Автобус #611 (до м. “Юго-Западная”),  Автобус №272/272к (дл м. “Филатов Луг”), Автобус №32, (до м. “Рассказовка”), №4411 (до м. “Китай -Город”). От аэропорта Шереметьево: экспресс-автобус “аэроэкспресс” (до м. “Хореино”, стоимость проезда не будет дороже других автобусов -199р). Автобус №817 (до м. ”Планерная”), автобус №8541( до м. ”Речной вокзал”), маршрутка  №948 (ДО М. “Планерная”), маршрутка “949( дом. Речной Вокзал”). Аэропорт Домодедово: автобус или маршрутка №308 (до м. “Домодедовская”)</p>
                </div>
            </div>
            </section>
        )
}
export default WayToTheAirport