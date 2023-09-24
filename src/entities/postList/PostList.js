import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setPage,
} from "../../pages/MainPage/mainApi/mainPageSliced";
import PostCard from "../postCard/PostCard";
import { useEffect } from "react";
import styles from "./PostList.module.css";

export default function PostList2() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const page = useSelector((state) => state.posts.page);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const fetchMoreData = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => fetchMoreData(), 100);
      dispatch(setLoading(false));
    }
  }, [isLoading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      90
    ) {
      dispatch(setLoading(true));
    }
  };

  return (
    <div className={styles.post_list}>
      {posts.map((el) => (
        <PostCard key={el.id} number={el.id} title={el.title} body={el.body} />
      ))}
    </div>
  );
}
