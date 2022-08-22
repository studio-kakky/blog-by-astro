import { ReactNode } from 'react';

import { AppDateTime } from '../date/app-date-time';
import { AppImage } from '../image/app-image';

interface ArticleItem {
  id: string;
  title?: string;
  heroImage?: AppImage;
  updatedAt: AppDateTime;
  body?: ReactNode;
}

export class Article {
  constructor(private item: ArticleItem) {
    // noop
  }

  get id(): string {
    return this.item.id;
  }

  get title(): string {
    return this.item.title;
  }

  get heroImage(): AppImage {
    return this.item.heroImage;
  }

  get updatedAt(): AppDateTime {
    return this.item.updatedAt;
  }

  get body(): ReactNode {
    return this.item.body;
  }
}
