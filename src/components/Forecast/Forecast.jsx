import { Box, Icon, Text } from "@chakra-ui/react";
import { ForcastBox } from "../SmallComponents/SmallComponents";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import { dateFormat } from "../../Helpers/extraFunctions";
import { setItem } from "../../Helpers/sessionStorage";
import { ForcastModal } from "../ForecastModal/ForecastModal";
import "./forecast.scss";

export const Forecast = ({ data }) => {
  const { date, day } = dateFormat(data.dt);

  return (
    <Box>
      <ForcastBox>
        <Box className="box_forecast">
          <Text className="text_forecast">{date}</Text>
          <Text className="text_forecast">{day}</Text>
        </Box>
        <ForcastModal data={data} />
      </ForcastBox>
    </Box>
  );
};
