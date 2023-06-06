import { Box, Button, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const initialState = {
  added: [],
  country: "",
  end_year: "",
  impact: "",
  insight: "",
  intensity: "",
  likelihood: "",
  pestle: "",
  published: [],
  region: "",
  relevance: "",
  sector: "",
  source: "",
  start_year: "",
  title: "",
  topic: "",
  url: "",
};

const Add = () => {
  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Create New</Heading>
      <Text color={"#00b5b8"}>Create a Data</Text>
      <form
        style={{
          margin: "30px auto",
          width: "400px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          padding: "20px",
        }}>
        <FormLabel>Added</FormLabel>
        <Input type="text" placeholder="Added..." />
        <br />

        <FormLabel>Country</FormLabel>
        <Input type="text" placeholder="Country..." />
        <br />

        <FormLabel>End Year</FormLabel>
        <Input type="text" placeholder="End..." />
        <br />

        <FormLabel>Impact</FormLabel>
        <Input type="text" placeholder="Impact..." />
        <br />

        <FormLabel>Insight</FormLabel>
        <Input type="text" placeholder="Insight..." />
        <br />

        <FormLabel>Intensity</FormLabel>
        <Input type="text" placeholder="Intensity..." />
        <br />

        <FormLabel>Likelihood</FormLabel>
        <Input type="text" placeholder="Likelihood..." />
        <br />

        <FormLabel>Pestle</FormLabel>
        <Input type="text" placeholder="Pestle..." />
        <br />


        <FormLabel>Published</FormLabel>
        <Input type="text" placeholder="Published..." />
        <br />

        <FormLabel>Region</FormLabel>
        <Input type="text" placeholder="Region..." />
        <br />


        <FormLabel>Relevance</FormLabel>
        <Input type="text" placeholder="Relevance..." />
        <br />


        <FormLabel>Sector</FormLabel>
        <Input type="text" placeholder="Sector..." />
        <br />

        <FormLabel>Source</FormLabel>
        <Input type="text" placeholder="Source..." />
        <br />


        <FormLabel>Start Year</FormLabel>
        <Input type="text" placeholder="Start..." />
        <br />


        <FormLabel>Title</FormLabel>
        <Input type="text" placeholder="Title..." />
        <br />

        <FormLabel>Topic</FormLabel>
        <Input type="text" placeholder="Topic..." />
        <br />


        <FormLabel>Read More</FormLabel>
        <Input type="text" placeholder="url..." />
        <br />
        <Button mt="20px">Create</Button>
      </form>
    </Box>
  );
};

export default Add;
