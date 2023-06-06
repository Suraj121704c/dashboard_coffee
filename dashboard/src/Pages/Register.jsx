import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [second_name, setsecond_name] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      first_name,
      second_name,
      email,
      pass,
    };
    console.log(userDetails);
    axios({
      method: "post",
      url: "https://red-crazy-earthworm.cyclic.app/users/register",
      data: userDetails,
    })
      .then((res) => {
        console.log(res.data);
        alert("Acount created successfully...");
        navigate("/");
      })
      .catch((err) => {
        alert("try again...");
        console.log(err.message);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
      m="auto">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"#002E6E"} fontSize={"4xl"}>
            Register in to Dashboard
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl id="password">
                <FormLabel>Enter First Name</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  placeholder="Enter first_name"
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Enter Second Name</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  placeholder="Enter pass ***"
                  type="text"
                  name="second_name"
                  value={second_name}
                  onChange={(e) => setsecond_name(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Enter Email address</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  type="email"
                  name="email"
                  placeholder="Enter @gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Enter Password</FormLabel>
                <Input
                  focusBorderColor="#002E6E"
                  borderColor={"#002E6E"}
                  placeholder="Enter pass ***"
                  type="password"
                  name="password"
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                />
              </FormControl>

              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.500"}
                  color={"white"}
                  _hover={{
                    bg: "blue.600",
                  }}>
                  Register
                </Button>
                <p>
                  <a href="/">Logged In Here...</a>
                </p>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
