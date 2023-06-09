import { Box, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

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
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(
        `https://lively-pink-snail.cyclic.app/products/create`,
        [formData],
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert(`A new data has been created...`);
      })
      .catch((err) => {
        console.log(err);
        alert(`something went wrong...`);
      });
  };

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
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          borderRadius : "20px",
          padding: "20px",
        }}
        onSubmit={handleSubmit}>
        <FormLabel>Added</FormLabel>
        <Input
          type="text"
          placeholder="Added..."
          name="added"
          value={formData.added}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Country</FormLabel>
        <Input
          type="text"
          placeholder="Country..."
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />

        <FormLabel>End Year</FormLabel>
        <Input
          type="text"
          placeholder="End..."
          name="end_year"
          value={formData.end_year}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Impact</FormLabel>
        <Input
          type="text"
          placeholder="Impact..."
          name="impact"
          value={formData.impact}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Insight</FormLabel>
        <Input
          type="text"
          placeholder="Insight..."
          name="insight"
          value={formData.insight}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Intensity</FormLabel>
        <Input
          type="text"
          placeholder="Intensity..."
          name="intensity"
          value={formData.intensity}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Likelihood</FormLabel>
        <Input
          type="text"
          placeholder="Likelihood..."
          name="likelihood"
          value={formData.likelihood}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Pestle</FormLabel>
        <Input
          type="text"
          placeholder="Pestle..."
          name="pestle"
          value={formData.pestle}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Published</FormLabel>
        <Input
          type="text"
          placeholder="Published..."
          name="published"
          value={formData.published}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Region</FormLabel>
        <Input
          type="text"
          placeholder="Region..."
          name="region"
          value={formData.region}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Relevance</FormLabel>
        <Input
          type="text"
          placeholder="Relevance..."
          name="relevance"
          value={formData.relevance}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Sector</FormLabel>
        <Input
          type="text"
          placeholder="Sector..."
          name="sector"
          value={formData.sector}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Source</FormLabel>
        <Input
          type="text"
          placeholder="Source..."
          name="source"
          value={formData.source}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Start Year</FormLabel>
        <Input
          type="text"
          placeholder="Start..."
          name="start_year"
          value={formData.start_year}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Title..."
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Topic</FormLabel>
        <Input
          type="text"
          placeholder="Topic..."
          name="topic"
          value={formData.topic}
          onChange={handleChange}
        />
        <br />

        <FormLabel>Read More</FormLabel>
        <Input
          type="text"
          placeholder="url..."
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        <br />
        <button style={{ marginTop: "20px" }}>Create</button>
      </form>
    </Box>
  );
};

export default Add;
