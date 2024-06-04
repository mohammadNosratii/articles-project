import { useQuery } from "react-query";
import { articlesGetApi, mainArticleGetApi, mainArticleInfoGetApi } from "../api/articleApi";

export default function useArticles(word) {
  return useQuery({
    queryKey: ["Articles"],
    queryFn: () => articlesGetApi(word).then((data) => data.data),
  });
}

export function useMainArticle(articleId) {
  return useQuery({
    queryKey: ["Articles", articleId],
    queryFn: () => mainArticleGetApi(articleId).then((data) => data.data),
  });
}

export function useMainArticleInfo(articleId) {
  return useQuery({
    queryKey: ["ArticleInfo", articleId],
    queryFn: () => mainArticleInfoGetApi(articleId).then((data) => data.data),
  });
}
