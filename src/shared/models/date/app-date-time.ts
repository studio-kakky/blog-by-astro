import { DateTime } from 'luxon';

export class AppDateTime {
  private readonly dateTime: DateTime;

  static fromIso(iso: string): AppDateTime {
    const value = DateTime.fromISO(iso).toSeconds();

    return new AppDateTime(value);
  }

  constructor(private value: number) {
    this.dateTime = DateTime.fromSeconds(this.value);
  }

  toDateString(format: string): string {
    return this.dateTime.toFormat(format);
  }

  toLocaleJpDate(): string {
    return this.dateTime.toFormat('yyyy年MM月DD日');
  }
}
