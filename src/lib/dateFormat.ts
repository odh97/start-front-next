import { format, formatDistanceToNow, isToday } from "date-fns";
import { ko, enUS } from "date-fns/locale";

interface formatDateProps {
  type?:
    | "DateDay"
    | "dateTime"
    | "time"
    | "relative"
    | "fullDate"
    | "dateTimeAll"
    | null;
  today?: boolean;
  lang?: string;
}

export function dateFormat(
  time: number | string | undefined,
  { type = null, today = false, lang = "ko" }: formatDateProps = {},
) {
  if (time === undefined) {
    return "-";
  }

  const date = new Date(time);

  if (today && isToday(date)) {
    return format(date, "HH:mm");
  }

  const locale = lang === "ko" ? ko : enUS;
  const fullDateFormat = lang === "ko" ? "yyyy년 M월 d일" : "MMMM d, yyyy";

  switch (type) {
    case "DateDay":
      return format(date, "yyyy.MM.dd.EEE");
    case "dateTime":
      return format(date, "yyyy.MM.dd HH:mm");
    case "time":
      return format(date, "HH:mm");
    case "relative":
      if (isToday(date)) {
        return formatDistanceToNow(date, { addSuffix: true, locale });
      }

      return format(date, "yyyy.MM.dd");

    case "fullDate":
      return format(date, fullDateFormat, { locale });
    case "dateTimeAll":
      return format(date, "yyyy.MM.dd(EEE) a hh:mm:ss", { locale });
    default:
      return format(date, "yyyy.MM.dd");
  }
}
