import { WeatherAdapterInterface } from "@/api/weather/types";
import { FC } from "react";
import { mergeForecastWithShortTermForecast } from "./utils";
import { LiveSection } from "./LiveSection";
import { ForecastSection } from "./ForecastSection";
import { Header } from "./Header";
import Image from "next/image";
import { BackgroundImage } from "./BackgroundImage";
import { Layout } from "@/component/Layout";

interface Props {
  live: Awaited<ReturnType<WeatherAdapterInterface["live"]>>;
  today_temperature: Awaited<
    ReturnType<WeatherAdapterInterface["todayTemperature"]>
  >;
  merged_forecast: ReturnType<typeof mergeForecastWithShortTermForecast>;
  update_time: string;
  image_data_url: string | undefined;
}

const WeatherMain: FC<Props> = (props) => {
  const {
    live,
    today_temperature,
    merged_forecast,
    update_time,
    image_data_url,
  } = props;

  console.log(merged_forecast);

  return (
    <main>
      <BackgroundImage image_data_url={image_data_url} />

      <Header update_time={update_time} />

      {/* 라이브 영역 */}
      <LiveSection live={live} today_temperature={today_temperature} />

      {/* forecast 영역 */}
      <ForecastSection forecast_list={merged_forecast} />
      <section></section>
    </main>
  );
};

const WeatherMainWithLayout: FC<Props> = (props) => {
  return (
    <Layout>
      <WeatherMain {...props} />
    </Layout>
  );
};

export { WeatherMainWithLayout as WeatherMain };
