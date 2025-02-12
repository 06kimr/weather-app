import { WeatherAdapterInterface } from "@/api/weather/types";
import { FC } from "react";
import { mergeForecastWithShortTermForecast } from "./utils";
import { LiveSection } from "./LiveSection";
import { ForecastSection } from "./ForecastSection";
import { Header } from "./Header";

interface Props {
  live: Awaited<ReturnType<WeatherAdapterInterface["live"]>>;
  today_temperature: Awaited<
    ReturnType<WeatherAdapterInterface["todayTemperature"]>
  >;
  merged_forecast: ReturnType<typeof mergeForecastWithShortTermForecast>;
  update_time: string;
}

const WeatherMain: FC<Props> = (props) => {
  const { live, today_temperature, merged_forecast, update_time } = props;

  console.log(merged_forecast);

  return (
    <main>
      <Header update_time={update_time} />

      {/* 라이브 영역 */}
      <LiveSection live={live} today_temperature={today_temperature} />

      {/* forecast 영역 */}
      <ForecastSection merged_forecast={merged_forecast} />
      <section></section>
    </main>
  );
};

export { WeatherMain };
