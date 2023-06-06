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
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      pass,
    };
    console.log(userDetails)
    axios({
      method: "post",
      url: "https://red-crazy-earthworm.cyclic.app/users/login",
      data: userDetails,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        alert("logged in successfully...");
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("if haven't register ... please register first !!!");
        console.log(err.message);
      });
  };
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}
        m="auto">
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading color={"#002E6E"} fontSize={"4xl"}>
              Log in to Dashboard
            </Heading>
          </Stack>
          <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
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
                    Log In
                  </Button>
                  <p><a href="/reg">SignUp Here...</a></p>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
      {/* <Footer2 /> */}
      
    </div>
  );
};

export default AdminLogin;
