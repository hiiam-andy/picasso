import React from "react";
import { NavLink } from "react-router-dom";
import MyButton from "../../shared/UI/myButton/MyButton";
import styles from "./PostCard.module.css";

export default function PostCard({ number, title, body }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.card_heading}>
          <div className={styles.card_number}>{number}.</div>
          <h1 className={styles.card_title}>
            <b>Заголовок: </b>
            {title}
          </h1>
        </div>
        <div className={styles.card_description}>
          <b>Описание: </b>
          <span className={styles.card_description_text}>{body}</span>
        </div>
      </div>
      <NavLink to={`/${number}`} className={styles.card_btn}>
        <MyButton>Просмотр</MyButton>
      </NavLink>
    </div>
  );
}
