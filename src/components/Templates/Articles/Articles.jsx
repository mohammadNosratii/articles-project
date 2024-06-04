import ArticlesBox from "./ArticlesBox";
import useArticles from "../../../hooks/useArticles";
import { Spinner } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export default function Articles() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const word = queryParams.get("word");
  const { data: articles, isLoading, isError } = useArticles(word ?? "");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="fixed inset-0 bg-black/50 z-40"></div>
        <Spinner
          className="z-50"
          label="درحال بارگزاری..."
          color="warning"
          classNames={{
            label: "text-white",
          }}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>خطا در دریافت اطلاعات</h1>
      </div>
    );
  }

  return (
    <div className="border dark:border-gray-400 border-black mt-32 pt-8 pb-12 px-6 rounded-lg space-y-8">
      <h2 className="text-3xl">جدید ترین مقالات</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.data.map((article) => (
          <ArticlesBox key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
