import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Email = () => {
  const [state, handleSubmit] = useForm("mlekypkp");
  const toast = useToast();
  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Email</Heading>
      <Text color={"#00b5b8"}>Lets have a Chat ...</Text>

      <Box
        mt={"30px"}
        width={"400px"}
        margin={"30px auto"}
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        borderRadius="20px"
        padding={"30px"}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ color: "var(--main-color)" }}>
            Email Address
          </label>
          <br />
          {/* <input
            id="email"
            type="email"
            name="email"
            placeholder="enter email address"
            border="1px solid green"
          /> */}
          <Input
            id="email"
            type="email"
            placeholder="enter email address"
            name="email"
          />
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label
            htmlFor="email"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              color: "var(--main-color)",
            }}>
            Type your message here
          </label>
          <br />
          <Textarea id="message" name="message" placeholder="write here..." />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <Button
            type="submit"
            disabled={state.submitting}
            color={"white"}
            backgroundColor={"green"}
            onClick={() =>
              toast({
                title: "Message Sent...",
                description:
                  "Thanks for messaging us we will replay you as soon as possible...",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top",
              })
    
            }
            mt={"10px"}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Email;
