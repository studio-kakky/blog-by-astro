import { getGraphqlSdk } from '../../libs/graphql-client/getGraphqlSdk';
import { adaptArticle } from './adapt-article';
import { Article } from './article';

export const getArticles = (): Promise<Article[]> => {
  return getGraphqlSdk()
    .getBlogArticles()
    .then((v) => {
      return v.blogArticleCollection.article.map(adaptArticle);
    });
};
