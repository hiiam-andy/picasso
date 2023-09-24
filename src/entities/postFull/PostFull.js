import React, { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePost } from "../../pages/postPage/postPageApi/postPageSlice";
import styles from "./PostFull.module.css";
import { BASE_URL } from "../../shared/constants/constants";

export default function PostFull() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(id));
  }, []);
  const onePost = useSelector((state) => state.onePost.data);
  return (
    <div className={styles.post}>
      <button onClick={() => navigate(-1)} className={styles.post_backLink}>
        <svg
          className={styles.arrow}
          width="14"
          height="22"
          viewBox="-2 -2 14 22"
          id="arrow-left-purple"
          x="240"
          y="328"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.986 16.52L8.606 18 0 9l8.59-9 1.412 1.445L2.633 9z"
            fill="#931680"
          />
        </svg>
        <span className={styles.text}>Назад к постам</span>
      </button>
      <div className={styles.post_info}>
        <div className={`${styles.post_number} ${styles.post_text}`}>
          <b>Пост: </b>
          {onePost.id}
        </div>
        <div className={`${styles.post_heading} ${styles.post_text}`}>
          <b>Заголовок: </b>
          {onePost.title}
        </div>
        <div className={`${styles.post_description} ${styles.post_text}`}>
          <b>Описание: </b>
          {onePost.body}
        </div>
        {/* <div className={`${styles.post_user} ${styles.post_text}`}>
          Пользователь: {onePost.userId}
        </div> */}
      </div>
    </div>
  );
}
