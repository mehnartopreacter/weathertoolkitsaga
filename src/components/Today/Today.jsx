import { TodayWrapper } from "./Today.styles";
import { useSelector } from "react-redux";
import { selectCity, selectToday } from "../../store/forecast/selectors";

export const Today = () => {
  const todayCast = useSelector(selectToday);
  const city = useSelector(selectCity);

  const temp = todayCast?.temp_c;
  const conditionText = todayCast?.condition.text;
  const conditionIcon = "https:" + todayCast?.condition.icon;
  const realFeel = todayCast?.feelslike_c;
  const windKPH = todayCast?.wind_kph;
  const humidity = todayCast?.humidity;

  return (
    <TodayWrapper>
      <h2 className="city">{city}</h2>
      <div className="today-weather">
        <div className="today-temp">
          <div className="temp">{temp}℃</div>
        </div>
        <div className="today-cast">
          <p className="condition-text">{conditionText}</p>
          <div className="cast-icon">
            <img src={conditionIcon} alt="cast icon" />
          </div>
        </div>
      </div>
      <div className="today-details">
        <p>{`Real Feel: ${realFeel} °C`}</p>
        <p>{`Humidity: ${humidity}%`}</p>
        <p>{`Wind: ${windKPH} m/s`}</p>
      </div>
    </TodayWrapper>
  );
};
