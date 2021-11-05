import { Search } from "../Search/Search";
import { Today } from "../Today/Today";
import { Warning } from "../Warning/Warning";
import { Forecast } from "../Forecast/Forecast";
import { WeatherWrapper } from "./Weather.styles";
import { useSelector } from "react-redux";
import {
  selectCity,
  selectIsFailed,
  selectIsLoading,
} from "../../store/forecast/selectors";
import { Loader } from "../Loader/Loader";

export const Weather = () => {
  const isFailed = useSelector(selectIsFailed);
  const isLoading = useSelector(selectIsLoading);
  const city = useSelector(selectCity);

  return (
    <WeatherWrapper>
      <Search />
      {isFailed ? (
        <Warning />
      ) : isLoading ? (
        <Loader />
      ) : city ? (
        <div>
          <Today />
          <Forecast />
        </div>
      ) : (
        <div></div>
      )}
    </WeatherWrapper>
  );
};
