import React from "react";
import PostFull from "../../entities/postFull/PostFull";
import styles from "./styles/PostPage.module.css";

export default function PostPage() {
  return (
    <section className={styles.postPage_section}>
      <div className="container">
        <PostFull />
      </div>
    </section>
  );
}
