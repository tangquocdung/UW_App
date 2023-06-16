import React from "react";
import "./weather.scss";
import { Layout, Input } from "antd";
import WeatherList from "../../components/WeatherList/WeatherList";

const { Footer } = Layout;
const { Search } = Input;

const Weather = () => {
  const [city, setCity] = React.useState("Hanoi");

  const handleSearch = (value) => {
    setCity(value);
  };
  return (
    <div className="wrapper__weather">
      <Search
        placeholder="Nhập tên thành phố"
        enterButton="Tìm kiếm"
        size="large"
        onSearch={handleSearch}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      />
      <WeatherList city={city} />
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "transparent",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        Weather App ©2023
      </Footer>
    </div>
  );
};

export default Weather;
