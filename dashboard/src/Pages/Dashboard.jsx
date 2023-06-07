import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Our Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome !!!</Text>
    </Box>
  );
};

export default Dashboard;
