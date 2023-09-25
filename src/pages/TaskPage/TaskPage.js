import React from "react";
import styles from "./styles/TaskPage.module.css";

export default function TaskPage() {
  return (
    <section className={styles.taskPage_section}>
      <div className="container">
        <div style={{ maxWidth: "700px" }}>
          <p className={styles.task_text}>
            В данном тестовом задании для Всероссийской сети независимых
            рентгенодиагностических центров «Пикассо» необходимо было
            реализовать приложение для отображения постов.
          </p>
          <p className={styles.task_text}>
            Должна быть главная страница с постами с бесконечным скроллом и его
            виртуализацией. Каждый пост должен содержать номер поста, заголовок
            и описание, орбезанное с помощью '...', если его длина превышает
            размер его контейнера.
          </p>
          <p className={styles.task_text}>
            У каждого поста должна быть кнопка "Просмотр", которая ведет на
            конкретный пост по отдельному роуту, где отображаетя полная
            информация о посте в произвольной форме. Так же должна быть кнопка
            "назад" к возврату к списку всех постов.
          </p>
          <p className={styles.task_text}>
            Из технологий необходимо применить React, RTK query, React Router
            Dom 6, в качестве API - JSON Placeholder Архитектура приложения
            должна соответствовать методологии Feature-Sliced Design
          </p>
          <p className={styles.task_text}>
            Результатом тестового задания ожидается ссылка на GitHub
            репозиторий, с деплоем результата на любой платформе
          </p>
        </div>
      </div>
    </section>
  );
}
