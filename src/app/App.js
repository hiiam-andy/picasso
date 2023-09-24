import { BrowserRouter } from "react-router-dom";

import AppRouter from "./providers/AppRouter";
import "./styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../pages/MainPage/mainApi/mainPageSliced";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.posts.page);

  useEffect(() => {
    dispatch(fetchPosts(page + 1));
  }, [page]);
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
