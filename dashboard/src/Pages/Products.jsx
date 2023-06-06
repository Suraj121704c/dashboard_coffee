import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
    const [data,setData] = useState([])

    function fetchData() {
        axios.get('https://red-crazy-earthworm.cyclic.app/')
    }

    useEffect(() => {
        
    } , [])
  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Data</Heading>
      <Text color={"#00b5b8"}>List of Data</Text>
    </Box>
  );
};
