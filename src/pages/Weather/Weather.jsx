import { WeatherDeatils } from "../../components/WeatherDetails/WeatherDetails";
import { WeatherNavbar } from "../../components/WeatherNavbar/WeatherNavbar";

function Weather() {
  return (
    <div>
      <WeatherNavbar />
      <WeatherDeatils />
    </div>
  );
}

export default Weather;
