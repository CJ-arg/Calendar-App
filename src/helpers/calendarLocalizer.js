import esES from "date-fns/locale/es";
import enUS from "date-fns/locale/en-US";
import { getDay, startOfWeek, parse, format } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
const locales = {
  "en-US": enUS,
  es: esES,
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
