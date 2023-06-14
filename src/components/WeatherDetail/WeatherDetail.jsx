import React from "react";
import "./weatherdetail.scss";

const WeatherDetail = ({ weather }) => {
  if (!weather) {
    return <div>Chọn một ngày để xem chi tiết thời tiết</div>;
  }

  return (
    <div>
      <h2 className="title__weather">
        Chi tiết thời tiết ngày {weather.dt_txt}
      </h2>
      <p className="text__weather temp" style={{ fontSize: "30px" }}>
        {weather.main.temp.toFixed()}°C
      </p>
      <div className="wrapper__weather__detail">
        <p className="text__weather" style={{ fontSize: "30px" }}>
          Độ ẩm: {weather.main.humidity}%
        </p>
        <p className="text__weather" style={{ fontSize: "30px" }}>
          Áp suất: {weather.main.pressure} hPa
        </p>
        <p className="text__weather" style={{ fontSize: "30px" }}>
          Tốc độ gió: {weather.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherDetail;
