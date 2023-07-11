import {
  Box,
  Grid,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { dateFormat } from "../../Helpers/extraFunctions";
import { NewText } from "../SmallComponents/SmallComponents";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import "./forecastmodal.scss";

export const ForcastModal = ({ data }) => {
  const { date, day } = dateFormat(data.dt);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="box" onClick={onOpen}>
        <Text className="text_forecastmodal">
          <Icon as={ImSun} /> {Math.round(data.temp.day)}
          <sup>o</sup> C
        </Text>
        <Text className="text_forecastmodal">
          <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}
          <sup>o</sup> C
        </Text>
        <Text className="text_forecastmodals">{data.weather[0].main}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton className="closebutton" />

          <ModalBody>
            <Box className="box_forecastmodal_tqd">
              <Box className="box_forecastmodal_dqt">
                <Text className="text_forecastmodal_text">{date}</Text>
                <Text className="text_forecastmodal_text">{day}</Text>
              </Box>

              <Grid className="grid_forecast" templateColumns={"50% 50%"}>
                <Box>
                  {[
                    "Nhiệt Độ:",
                    "Độ Ẩm:",
                    "Độ Gió:",
                    "Áp Lực:",
                    "Nhiệt Độ Ngày:",
                    "Nhiệt Độ Tối:",
                    "Nhiệt Độ Đêm:",
                    "Nhiệt Độ Cao:",
                    "Nhiệt Độ Thấp:",
                  ].map((e, i) => (
                    <Text key={i} className="text" pb={"2.5px"}>
                      {e}
                    </Text>
                  ))}
                </Box>
                <Box
                  borderRadius={"30px"}
                  bg={"#5e82f4"}
                  pb={"10px"}
                  pl={"15%"}
                >
                  <NewText>
                    {data.feels_like.day}
                    <sup>o</sup> C
                  </NewText>
                  <NewText>{data.humidity}%</NewText>
                  <NewText>{(data.wind_speed * 3.6).toFixed(2)} Km/h</NewText>
                  <NewText>{data.pressure} hPa</NewText>
                  <NewText>
                    {data.temp.day}
                    <sup>o</sup> C
                  </NewText>
                  <NewText>
                    {data.temp.eve}
                    <sup>o</sup> C
                  </NewText>
                  <NewText>
                    {data.temp.night}
                    <sup>o</sup> C
                  </NewText>
                  <NewText>
                    {data.temp.min}
                    <sup>o</sup> C
                  </NewText>
                  <NewText>
                    {data.temp.max}
                    <sup>o</sup> C
                  </NewText>
                </Box>
              </Grid>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
