import { Document } from '@contentful/rich-text-types';
import { ImageAsset } from './image-asset';

export interface ArticleSummaryResponse {
  title?: string | null;
  sys: {
    publishedAt: string | null;
  };
  heroImage?: ImageAsset;
  summary?: {
    json: Document;
  };
}
