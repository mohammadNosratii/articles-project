import React from "react";
import ArticleInfoBox from "./ArticleInfoBox";
import { useParams } from "react-router-dom";
import {
  useMainArticle,
  useMainArticleInfo,
} from "../../../../hooks/useArticles";
import { Spinner } from "@nextui-org/react";

export default function ArticleInfo() {
  const { articleId } = useParams();
  const { data: article, isLoading } = useMainArticle(articleId);
  const { data: articleInfo } = useMainArticleInfo(articleId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="fixed inset-0 bg-black/50 z-40"></div>
        <Spinner
          classNames={{
            label: "text-white",
          }}
          className="z-50"
          label="درحال بارگزاری..."
          color="warning"
        />
      </div>
    );
  }

  return (
    <>
      <div className="container mt-32">
        <h1 className="text-4xl font-bold mb-5">{article?.data.title}</h1>
        <ArticleInfoBox {...article?.data} {...articleInfo} />
      </div>
    </>
  );
}
