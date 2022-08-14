import { ReactNode } from 'react';

import { AppDateTime } from '../date/app-date-time';
import { AppImage } from '../image/app-image';

interface ArticleSummaryItem {
  id: string;
  title?: string;
  heroImage?: AppImage;
  updatedAt: AppDateTime;
  summary?: ReactNode;
}

export class ArticleSummary {
  constructor(private item: ArticleSummaryItem) {
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

  get summary(): ReactNode {
    return this.item.summary;
  }
}
