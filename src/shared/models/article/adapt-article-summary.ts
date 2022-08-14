import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetBlogArticlesQuery } from '../../../graphql/generated/graphql';
import { ArticleSummaryResponse } from '../../../graphql/interfaces/article';
import { AppDateTime } from '../date/app-date-time';
import { ArticleSummary } from './article-summary';

type ArticleQuery = GetBlogArticlesQuery;

export const adaptArticleSummary = (
  res: ArticleSummaryResponse,
): ArticleSummary => {
  const adapted = {
    title: res.title,
    heroImage: res.heroImage,
    updatedAt: AppDateTime.fromIso(res.sys.publishedAt),
    summary: res.summary
      ? documentToReactComponents(res.summary.json)
      : undefined,
  };

  return new ArticleSummary(adapted);
};
