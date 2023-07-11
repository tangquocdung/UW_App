import { Container, Image } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Container display={"flex"} justifyContent={"center"}>
      <Image src="/images/Loading.gif" />
    </Container>
  );
};
