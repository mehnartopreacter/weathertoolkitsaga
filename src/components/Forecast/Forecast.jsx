import { ForecastWrapper } from "./Forecast.styles";
import { useSelector } from "react-redux";
import { selectWeek } from "../../store/forecast/selectors";
import { convertApiDateToDay } from "../../utils/utils";
import { nanoid } from "@reduxjs/toolkit";

export const Forecast = () => {
  const weekCast = useSelector(selectWeek)?.slice(1, 5);

  return (
    <ForecastWrapper>
      {weekCast?.map((item) => (
        <div key={nanoid()} className="cast-week-item">
          <p>{convertApiDateToDay(item.date)}</p>
          <div className="cast-week-icon">
            <img src={item.day.condition.icon} alt="forecast item icon" />
          </div>
          <div>
            <span>{item.day.avgtemp_c}</span>
            <span>℃</span>
          </div>
        </div>
      ))}
    </ForecastWrapper>
  );
};
