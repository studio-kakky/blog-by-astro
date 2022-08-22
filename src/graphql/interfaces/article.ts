import { Document } from '@contentful/rich-text-types';
import { ImageAsset } from './image-asset';

export interface ArticleSummaryResponse {
  title?: string | null;
  sys: {
    id: string;
    publishedAt: string | null;
  };
  heroImage?: ImageAsset;
  summary?: {
    json: Document;
  };
}

export interface ArticleResponse {
  title?: string | null;
  sys: {
    id: string;
    publishedAt: string | null;
  };
  heroImage?: ImageAsset;
  body?: {
    json: Document;
  };
}
