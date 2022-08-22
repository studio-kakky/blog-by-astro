import { getGraphqlSdk } from '../../libs/graphql-client/getGraphqlSdk';
import { adaptArticleSummary } from './adapt-article-summary';
import { ArticleSummary } from './article-summary';

export const getArticleSummary = (): Promise<ArticleSummary[]> => {
  return getGraphqlSdk()
    .getBlogArticleSummaries()
    .then((v) => {
      return v.blogArticleCollection.article.map(adaptArticleSummary);
    });
};
