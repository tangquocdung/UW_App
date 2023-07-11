import {
  Button,
  Center,
  Flex,
  Icon,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../../Redux/Action";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./weathernavbar.scss";

export const WeatherNavbar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChnage = () => {
    dispatch(getWeatherByCity(city, toast));
  };

  const handleLocationData = () => {
    dispatch(getWeatherByLocation(toast));
  };

  return (
    <Flex
      p={"10px"}
      minH={"70px"}
      bg={"#d7defa"}
      justifyContent={"center"}
      flexDirection={["column", "row"]}
      gap={["10px", "0px"]}
    >
      <Link to={"/home"} style={{ textDecoration: "none", margin: "5px" }}>
        <Text className="text_weathernavbar">Weather Forecast</Text>
      </Link>
      <Center px={"10px"}>
        <Input
          onInput={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className="input_navbar"
          placeholder="City"
        />
        <Button onClick={handleChnage} className="button_navbar">
          Search
        </Button>
      </Center>
      <Center px={"10px"}>
        <Button
          className="button_weathernavbar"
          leftIcon={<Icon w={"30px"} h={"30px"} as={HiLocationMarker} />}
          onClick={handleLocationData}
        >
          Your Location Weather
        </Button>
      </Center>
    </Flex>
  );
};
