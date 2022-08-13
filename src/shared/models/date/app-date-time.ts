import { DateTime } from 'luxon';

export class AppDateTime {
  static fromIso(iso: string): AppDateTime {
    const value = DateTime.fromISO(iso).toSeconds();

    return new AppDateTime(value);
  }

  constructor(value: number) {
    // noop
  }
}
