import styles from "./Button.module.scss"
import React from 'react'

const Button = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top_header}>
          <div className={styles.text_header}>Площадки</div>
          <input
            className={styles.search_header}
            type="text"
            placeholder="Поиск"
          ></input>
        </div>
        <div className={styles.bottom_header}>
          <div className={styles.buttons}>
            <button className={styles.button_1}>Поиск на карте</button>
            <button className={styles.button_2}>Эмоции</button>
            <button className={styles.button_3}>Дух</button>
            <button className={styles.button_4}>Разум</button>
            <button className={styles.button_5}>Тело</button>
            <button className={styles.button_6}>Параллельное занятие</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button