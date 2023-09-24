import PostList from "../../entities/postList/PostList";
import styles from "./styles/MainPage.module.css";

export default function MainPage() {
  return (
    <section className={styles.mainPage_section}>
      <div className="container">
        <PostList />
      </div>
    </section>
  );
}
