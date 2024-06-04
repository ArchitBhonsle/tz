export function timeParts(
  date: Date,
  intl: Intl.DateTimeFormat,
): {
  hour: string | undefined;
  minute: string | undefined;
  dayPeriod: string | undefined;
} {
  const parts = intl.formatToParts(date);
  return {
    hour: parts.find((part) => part.type === "hour")?.value,
    minute: parts.find((part) => part.type === "minute")?.value,
    dayPeriod: parts.find((part) => part.type === "dayPeriod")?.value,
  };
}

export function getDayIntervals(date: Date): Date[] {
  const base = new Date(date);
  base.setHours(0, 0, 0, 0);

  const intervals = [];
  for (let i = 0; i < 24; i++) {
    const interval = new Date(base);
    interval.setHours(i);
    intervals.push(interval);
  }
  return intervals;
}

export function getLocateTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getSimplifiedTimeZone(timeZoneString: string): string {
  return timeZoneString.includes("/")
    ? timeZoneString.split("/").at(1)!.replaceAll("_", " ")
    : timeZoneString;
}
