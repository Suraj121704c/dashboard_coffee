import {
  Box,
  Heading,
  Spinner,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://red-crazy-earthworm.cyclic.app/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Customers</Heading>
      <Text color={"#00b5b8"}>List of Customers</Text>

      <Table>
        <Tr>
          <Th>Email</Th>
          <Th>First Name</Th>
          <Th>Second Name</Th>
        </Tr>

        {data.length === 0 ? (
          <Spinner />
        ) : (
          data.map((e) => (
            <Tr key={e._id}>
              <Td>{e.email}</Td>
              <Td>{e.first_name}</Td>
              <Td>{e.second_name}</Td>
            </Tr>
          ))
        )}
      </Table>
    </Box>
  );
};

export default Users;
