import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function fetchData() {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?page=${page}&limit=15`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.product);
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  function SearchData(e) {
    setTitle(e.target.value);
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?title=${title}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.product);
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

      <Box mt={"20px"}>
        <Center>
          <Input
            placeholder="search...."
            value={title}
            onChange={(e) => SearchData(e)}
          />
        </Center>
        <Box mt={"20px"}>
          <Button onClick={(e) => setPage(page - 1)} isDisabled={page == 1}>Prev</Button>&nbsp;&nbsp;
          <Button>{page}</Button>&nbsp;&nbsp;
          <Button onClick={(e) => setPage(page + 1)}>Next</Button>
        </Box>
      </Box>

      <Box mt={"20px"}>
        {data.map((e) => (
          <Box
            key={e._id}
            mt={"20px"}
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px">
            <h1>Title : {e.title ? e.title : "NA"}</h1>
            <h3>Country : {e.country ? e.country : "NA"}</h3>
            <h3>Region : {e.region ? e.region : "NA"}</h3>
            <h5>Sector : {e.sector ? e.sector : "NA"}</h5>
            <h5>Start Year : {e.start_year ? e.start_year : "NA"}</h5>
            <h5>End Year : {e.end_year ? e.end_year : "NA"}</h5>
            <h5>Added : {e.added ? e.added : "NA"}</h5>
            <h5>Impact : {e.impact ? e.impact : "NA"}</h5>
            <h5>Topic : {e.topic ? e.topic : "NA"}</h5>
            <h5>Pestle : {e.pestle ? e.pestle : "NA"}</h5>
            <h5>Insight : {e.insight ? e.insight : "NA"}</h5>
            <h5>Intensity : {e.intensity ? e.intensity : "NA"}</h5>
            <h5>Likelihood : {e.likelihood ? e.likelihood : "NA"}</h5>
            <h5>Published : {e.published[0] ? e.published[0] : "NA"}</h5>
            <h5>Relevance : {e.relevance ? e.relevance : "NA"}</h5>
            <h5>Sector : {e.sector ? e.sector : "NA"}</h5>
            <h5>Source : {e.source ? e.source : "NA"}</h5>
            <h5>{<a href={e.url}>ReadMore...</a>}</h5>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
