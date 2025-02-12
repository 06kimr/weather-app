import { FC } from "react";
import { mergeForecastWithShortTermForecast } from "../utils";

interface Props {
  merged_forecast: ReturnType<typeof mergeForecastWithShortTermForecast>;
}

const ForecastSection: FC<Props> = (props) => {
  const { merged_forecast } = props;

  return <section></section>;
};

export { ForecastSection };
