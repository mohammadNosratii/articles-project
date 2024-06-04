import Home from "../page/home/Index";
import Article from "../page/article/Index";
import ArticleInfo from "../components/Templates/Articles/ArticleInfo/ArticleInfo";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Article /> },
  { path: "/articles/:articleId", element: <ArticleInfo /> },
];

export default routes;
