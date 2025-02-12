import { WeatherAdapterInterface } from "@/api/weather/types";
import { FC } from "react";

interface Props {
  live: Awaited<ReturnType<WeatherAdapterInterface["live"]>>;
  today_temperature: Awaited<
    ReturnType<WeatherAdapterInterface["todayTemperature"]>
  >;
}

const LiveSection: FC<Props> = (props) => {
  const { live, today_temperature } = props;
  return <section></section>;
};

export { LiveSection };
