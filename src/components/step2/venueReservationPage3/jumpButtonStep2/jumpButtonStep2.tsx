import style from './jumpButtonStep2.module.scss'

const JumpBottonStepTwo = () => {
    return (
        <section className={style.JumpBottonStepTwo}>
            <div className={style.JumpBottonStepTwo__buttonStyleStepTwo}>
                <button className={style.buttonStyleStepTwo__buttJump}><img className={style.buttonStyleTwo__img} src='./Arrow.svg'/>Шаг 1 - Заполнение основной информации</button>
            </div>
        </section>
    )
}
export default JumpBottonStepTwo