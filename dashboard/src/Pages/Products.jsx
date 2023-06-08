import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";

export const Products = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function fetchData() {
    axios
      .get(
        `https://red-crazy-earthworm.cyclic.app/products?page=${page}&limit=15`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
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
      .get(
        `https://red-crazy-earthworm.cyclic.app/products?title=${title}&limit=15&page=${page}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.product);
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSort1(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?s=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSort2(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?i=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSort3(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?l=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSort4(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?r=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleFilter1(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?topic=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleFilter2(e) {
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?sector=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleFilter3(e){
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?region=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleFilter4(e){
    axios
      .get(`https://red-crazy-earthworm.cyclic.app/products?country=${e}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  function handleFilter5(e){
    axios
    .get(`https://red-crazy-earthworm.cyclic.app/products?pestle=${e}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data.product);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  function handleFilter6(e){
    axios
    .get(`https://red-crazy-earthworm.cyclic.app/products?source=${e}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data.product);
    })
    .catch((err) => {
      console.error(err);
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

      <Box width={"300px"} m={"20px auto"}>
        <Center>
          <Input
            placeholder="search...."
            value={title}
            onChange={(e) => SearchData(e)}
            borderColor={"blue"}
          />
        </Center>
        <Box mt={"20px"}>
          <Button
            onClick={(e) => setPage(page - 1)}
            isDisabled={page == 1}
            borderColor={"blue"}>
            Prev
          </Button>
          &nbsp;&nbsp;
          <Button borderColor={"blue"}>{page}</Button>&nbsp;&nbsp;
          <Button onClick={(e) => setPage(page + 1)} borderColor={"blue"}>
            Next
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        border={"blue"}
        borderColor="white"
        flexWrap={"wrap"}
        mt={"10px"}>
        <FormLabel>Sort By Year</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleSort1(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <FormLabel>Sort By Intensity</FormLabel>
        <select
          onChange={(e) => handleSort2(e.target.value)}
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <FormLabel>Sort By Likelihood</FormLabel>
        <select
          onChange={(e) => handleSort3(e.target.value)}
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <FormLabel>Sort By Relevance</FormLabel>
        <select
          onChange={(e) => handleSort4(e.target.value)}
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </Box>

      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        marginTop={"30px"}
        marginBottom={"30px"}
        >
        <FormLabel>Fiter By Topic</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter1(e.target.value)}>
          <option value="oil">Oil</option>
          <option value="consumption">Consumption</option>
          <option value="market">Market</option>
          <option value="gdp">Gdp</option>
          <option value="war">War</option>
          <option value="export">Export</option>
          <option value="energy">Energy</option>
          <option value="policy">Policy</option>
          <option value="battery">Battery</option>
        </select>

        <FormLabel>Fiter By Sector</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter2(e.target.value)}>
          <option value="Energy">Energy</option>
          <option value="Environment">Environment</option>
          <option value="Government">Government</option>
          <option value="Manufacturing">Manufacturing</option>
        </select>


        <FormLabel>Fiter By Region</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter3(e.target.value)}>
          <option value="Northern America">Northern America</option>
          <option value="Central America">Central America</option>
          <option value="World">World</option>
          <option value="Western Asia">Western Asia</option>
          <option value="Eastern Europe">Eastern Europe</option>
        </select>
      </Box>


      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        marginTop={"30px"}
        marginBottom={"30px"}
        >
        <FormLabel>Fiter By Country</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter4(e.target.value)}>
          <option value="Nigeria">Nigeria</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Mexico">Mexico</option>
          <option value="Russia">Russia</option>
          <option value="Egypt">Egypt</option>
        </select>

        <FormLabel>Fiter By Pestle</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter5(e.target.value)}>
          <option value="Industries">Industries</option>
          <option value="Environmental">Environmental</option>
          <option value="Political">Political</option>
          <option value="Technological">Technological</option>
        </select>


        <FormLabel>Fiter By Source</FormLabel>
        <select
          style={{
            border: "1px solid pink",
            backgroundColor: "pink",
            color: "blue",
            borderRadius: "5px",
          }}
          onChange={(e) => handleFilter6(e.target.value)}>
          <option value="Resilience">Resilience</option>
          <option value="TheNews.NG">TheNews</option>
          <option value="creamermedia">Creamermedia</option>
          <option value="EV Obsession">EV Obsession</option>
          <option value="Abq">Abq</option>
        </select>
      </Box>


      <Box mt={"20px"}>
        {data.length > 0 &&
          data.map((e) => (
            <Box
              key={e._id}
              mt={"20px"}
              boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              padding={"10px"}>
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
