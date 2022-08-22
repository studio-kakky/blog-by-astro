import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArticleResponse } from '../../../graphql/interfaces/article';
import { AppDateTime } from '../date/app-date-time';
import { Article } from './article';

export const adaptArticle = (res: ArticleResponse): Article => {
  const adapted = {
    id: res.sys.id,
    title: res.title,
    heroImage: res.heroImage,
    updatedAt: AppDateTime.fromIso(res.sys.publishedAt),
    body: res.body ? documentToReactComponents(res.body.json) : undefined,
  };

  return new Article(adapted);
};
