import httpService from "./httpService";

export function articlesGetApi(word) {
  return httpService.get(
    `https://apithesaurus.isca.ac.ir/v1/web/terms?search_type=5&word=${
      word.trim() ? word : "*"
    }&domain=1`
  );
}

export function mainArticleGetApi(articleId) {
  return httpService.get(
    `https://apithesaurus.isca.ac.ir/v1/term/${articleId}`
  );
}

export function mainArticleInfoGetApi(articleId) {
  return httpService.get(
    `https://apithesaurus.isca.ac.ir/v1/term/${articleId}/index`
  );
}
