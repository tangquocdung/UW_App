import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./weatherdetails.scss";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../../Helpers/extraFunctions";
import { getItem } from "../../Helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../../Redux/Action";
import { Error } from "../Error/Error";
import { Loading } from "../Loading/Loading";
import { Map } from "../Map/Map";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, NewText } from "../SmallComponents/SmallComponents";
import { Forecast } from "../Forecast/Forecast";

export const WeatherDeatils = () => {
  const {
    isLoading,
    weatherData: data,
    forcastData,
    isError,
  } = useSelector((state) => state, shallowEqual);
  const [isRotate, setIsRotate] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    let weather = getItem("weather");
    !weather && dispatch(getWeatherByLocation(toast));
  }, []);

  const handleSyncData = () => {
    setIsRotate(true);
    dispatch(syncData(data.name, toast));
  };

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <>
      <Box className="box_weather">
        <Grid
          className="grid_weather"
          gridTemplateColumns={[
            "100%",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "30% 27.5% 38%",
          ]}
        >
          <Newbox>
            <Box className="newbox_weather">
              <Flex className="flex">
                <Icon
                  onClick={handleSyncData}
                  onAnimationEnd={() => {
                    setIsRotate(false);
                  }}
                  className={isRotate ? "iconRotate" : undefined}
                  cursor={"pointer"}
                  w={"23px"}
                  h={"23px"}
                  as={FaSyncAlt}
                />
              </Flex>
              <Heading margin={"0px"}>{data.name}</Heading>
              <Heading fontSize={"100px"} margin={"-5px"}>
                {Math.round(data.main.temp - 273)}
                <sup>o</sup>C
              </Heading>
              <Heading>{data.weather[0].main}</Heading>
            </Box>
          </Newbox>

          <Newbox>
            <Grid templateColumns={"50% 50%"} h={"100%"}>
              <Box className="box_weather_box">
                {[
                  "Nhiệt Độ:",
                  "Độ Ẩm:",
                  "Độ Gió:",
                  "Nhìn Thấy:",
                  "Nhiệt Độ Cao:",
                  "Nhiệt Độ Thấp:",
                ].map((e, i) => (
                  <Text
                    key={i}
                    color={"#5e82f4"}
                    fontWeight={500}
                    mt={"15px"}
                    fontSize={"18px"}
                  >
                    {e}
                  </Text>
                ))}
              </Box>
              <Box className="box_weatherdetails">
                <NewText>
                  {celsius(data.main.feels_like)}
                  <sup>o</sup> C
                </NewText>
                <NewText>{data.main.humidity}%</NewText>
                <NewText>{(data.wind.speed * 3.6).toFixed(2)} Km/h</NewText>
                <NewText>{(data.visibility * 0.001).toFixed(2)} Km</NewText>
                <NewText>
                  {celsius(data.main.temp_max)}
                  <sup>o</sup> C
                </NewText>
                <NewText>
                  {celsius(data.main.temp_min)}
                  <sup>o</sup> C
                </NewText>
              </Box>
            </Grid>
          </Newbox>

          <Newbox>
            <Map city={data.name} />
          </Newbox>
        </Grid>

        <Grid
          mt={"40px"}
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={"20px"}
        >
          {forcastData.map((e, i) => (
            <Forecast key={i} data={e} />
          ))}
        </Grid>

        <div className="tagLine">
          <p>© Weather Forecast</p>
        </div>
      </Box>
    </>
  );
};
