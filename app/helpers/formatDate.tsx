import dayjs from "dayjs";

type Date = {
  date: string;
  start_time: string;
  end_time: string;
};

export function formatDate(date: Date) {
  const dateFormatted = dayjs(date.date).format("ddd D MMM").toUpperCase();

  const formatTime = (time: string) => {
    // Remove timezone offset, e.g. +00
    const cleanTime = time.slice(0, 8);

    return dayjs(`2000-01-01T${cleanTime}`).format("hA");
  };

  return `${dateFormatted}, ${formatTime(date.start_time)}-${formatTime(date.end_time)}`;
}
