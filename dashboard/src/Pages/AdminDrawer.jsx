import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";
const AdminDrawer = ({
  prodRef,
  orderRef,
  dashboardRef,
  customerRef,
  calenderRef,
  contactRef,
  adminRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <RiMenu2Line fontSize={"32px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          // backgroundColor={"#0c0e1f"}
          bgGradient="linear(to-l, blue.200, pink.300)"
          color={"pink.700"}
          fontWeight={"bold"}
          textAlign={"center"}>
          <DrawerCloseButton fontSize={"xl"} />
          <DrawerBody fontSize={"2xl"} textTransform={"upperCase"}>
            <Box
              mt={"100px"}
              p={"10px"}
              _hover={{ backgroundColor: "blue.500" }}
              onClick={() => {
                dashboardRef.current.click();
                onClose();
              }}>
              Dashboard
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                prodRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              All Data
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                orderRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              Add New Data
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                customerRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              Customers
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                calenderRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              Calender
            </Box>

            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                contactRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              Contact
            </Box>

            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                adminRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}>
              Admin
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
