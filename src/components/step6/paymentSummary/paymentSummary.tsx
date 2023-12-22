import style from './paymentSummary.module.scss'

const PaymentSummary = () => {
    return (
        <section className={style.paymentSummary}>
            <div className={style.paymentSummary__title}>
                <h1 className={style.title__titl}>Сводка по оплате участников</h1>
            </div>

            <div className={style.paymentSummary__tablePart}>
                <table className={style.tablePart__table}>
                    <tr className={style.table__tr1}>
                        <th className={style.tr1__th1}>Дата</th>
                        <th className={style.tr1__th1}>ФИО</th>
                        <th className={style.tr1__th1}>1 этап</th>
                        <th className={style.tr1__th1}>2 этап</th>
                        <th className={style.tr1__th1}>3 этап</th>
                        <th className={style.tr1__th1}>Всего оплачено</th>
                        <th className={style.tr1__th1}>Всего не оплачено</th>

                    </tr>
                    <tr className={style.table__tr1}>
                        <td className={style.tr1__date}>01.09.2023<br />13:00</td>
                        <td className={style.tr1__FIO}>Иванов Иван<br />Владимирович</td>
                        <td className={style.tr1__1stage}>Внесено 7000</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__totalPaid}>7000</td>
                        <td className={style.tr1__totalPaid}>21000</td>

                    </tr>
                    <tr className={style.table__tr1}>
                        <td className={style.tr1__date}>01.09.2023<br />13:00</td>
                        <td className={style.tr1__FIO}>Петров Петр<br />Владимирович</td>
                        <td className={style.tr1__1stage}>Внесено 10000</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__totalPaid}>10000</td>
                        <td className={style.tr1__totalPaid}>21000</td>
                    </tr>
                    <tr className={style.table__tr1}>
                        <td className={style.tr1__date}>01.09.2023<br />13:00</td>
                        <td className={style.tr1__FIO}>Зверев Игнат<br />Владимирович</td>
                        <td className={style.tr1__1stage}>Внесено 10000</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__23stage}>Не оплачено</td>
                        <td className={style.tr1__totalPaid}>10000</td>
                        <td className={style.tr1__totalPaid}>21000</td>
                    </tr>
                </table>
            </div>

            <div className={style.paymentSummary__buttonInExel}>
                <button className={style.buttonInExel__thisButton}>
                    Скачать в формате .эксель
                </button>
            </div>
        </section>
    )
}



export default PaymentSummary