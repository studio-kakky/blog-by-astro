import { ImageAsset } from './image-asset';

export interface ArticleResponse {
  title?: string | null;
  sys: {
    publishedAt: string | null;
  };
  heroImage?: ImageAsset;
}
