import style from './weekSchedule.module.scss'

const WeekSchedule = () => {
    return (
        <section className={style.weekScheduleSection}>
            <h2 className={style.weekScheduleSection__TitlePart}>Расписание на неделю</h2>

            <div className={style.weekScheduleSection__MainSection}>
                <table className={style.MainSection__tablePart}>
                    <tr className={style.tablePart__headers}>
                        <th className={style.headers__th1}></th>
                        <th className={style.headers__th1}>ПН</th>
                        <th className={style.headers__th1}>ВТ</th>
                        <th className={style.headers__th1}>СР</th>
                        <th className={style.headers__th1}>ЧТ</th>
                        <th className={style.headers__th1}>ПТ</th>
                        <th className={style.headers__th1}>СБ</th>

                    </tr>
                    <tr className={style.tablePart__headers}>
                        <th className={style.headers__th2}></th>
                        <th className={style.headers__th2}>02</th>
                        <th className={style.headers__th2}>03</th>
                        <th className={style.headers__th2}>04</th>
                        <th className={style.headers__th2}>05</th>
                        <th className={style.headers__th2}>06</th>
                        <th className={style.headers__th2}>07</th>
                    </tr>

                    <tr className={style.tablePart__coll}>

                        <td className={style.coll__time}>09:00</td>
                  
                    </tr>
                    
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>10:00</td>
                    </tr>
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>11:00</td>
                    </tr>
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>12:00</td>
                    </tr>
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>13:00</td>
                    </tr>
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>14:00</td>
                    </tr>
                    <tr className={style.tablePart__coll}>
                        <td className={style.coll__time}>15:00</td>
                    </tr>

                </table>
            </div>


        </section>
    )
}
export default WeekSchedule