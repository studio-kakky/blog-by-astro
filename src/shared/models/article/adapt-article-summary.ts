import { GetBlogArticlesQuery } from '../../../graphql/generated/graphql';
import { ArticleResponse } from '../../../graphql/interfaces/article';
import { ArticleSummary } from './article-summary';

type ArticleQuery = GetBlogArticlesQuery;

export const adaptArticleSummary = (res: ArticleResponse): ArticleSummary => {
  const adapted = {
    title: res.title,
    heroImage: res.heroImage,
    updatedAt: res.sys.publishedAt,
  };

  return new ArticleSummary(adapted);
};
