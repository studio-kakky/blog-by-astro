import { ReactNode } from 'react';

import { AppDateTime } from '../date/app-date-time';
import { AppImage } from '../image/app-image';

interface ArticleSummaryItem {
  title?: string;
  heroImage?: AppImage;
  updatedAt: AppDateTime;
  summary?: ReactNode;
}

export class ArticleSummary {
  constructor(private item: ArticleSummaryItem) {
    // noop
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
