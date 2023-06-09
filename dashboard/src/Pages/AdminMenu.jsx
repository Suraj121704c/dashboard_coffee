import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import AdminDrawer from "./AdminDrawer";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Products } from "./Products";
import AccountInfo from "./AccountInfo";
import Users from "./Users";
import Add from "./Add";
import Calender from "./calender";
import Email from "./Email";

const AdminMenu = () => {
  const prodRef = useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();
  const calenderRef = useRef();
  const contactRef = useRef();
  const adminRef = useRef();

  const [admin, setAdmin] = useState([]);

  return (
    <>
      <Tabs display={"flex"}>
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"15px"}
          // backgroundColor={"black"}
          bgGradient="linear(to-l,  green.200, blue.300)"
          color={"pink.700"}
          fontWeight={"bold"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Avatar
              size={"xl"}
              src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=100"></Avatar>
            <Text>{"Suraj Singh"}</Text>
            <Text color={"pink.700"} fontWeight={"bold"}>
              {"nhb668912@gmail.com"}
            </Text>
          </Box>

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            fontWeight={"bold"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Dashboard
          </Tab>

          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            All Data
          </Tab>
          <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Add New Data
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Customers
          </Tab>

          <Tab
            ref={calenderRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Calender
          </Tab>

          <Tab
            ref={contactRef}
            mb={"5px"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Contact Us
          </Tab>

          <Box padding={"5px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={adminRef}
            mb={"5px"}
            fontWeight={"bold"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bgGradient: "linear(to-l,  pink.800, blue.600)",
              transform: "scale(1.05)",
              transition: "0.2s",
            }}
            border={"none"}
            _focus={{ outline: "none" }}>
            Admin Info
          </Tab>
          <Link to={"/"}>
            {" "}
            <Button
              fontWeight={"bold"}
              width={"100%"}
              mt={"5px"}
              variant={"solid"}
              borderRadius={"5px"}
              colorScheme={"red"}
              _focus={{ outline: "none" }}
              border={"none"}>
              Logout
            </Button>
          </Link>
        </TabList>

        <TabPanels pl={{ md: "30%", lg: "20%" }}>
          <TabPanel p={0}>
            <Dashboard />
          </TabPanel>{" "}
          <TabPanel p={0}>
            <Products />
          </TabPanel>
          <TabPanel p={0}>
            <Add />
          </TabPanel>
          <TabPanel p={0}>
            <Users />
          </TabPanel>
          <TabPanel p={0}>
            <Calender />
          </TabPanel>
          <TabPanel p={0}>
            <Email />
          </TabPanel>
          <TabPanel p={0}>
            <AccountInfo />
          </TabPanel>
          {/* <TabPanel p={0}>
            <Products />
          </TabPanel>
          <TabPanel p={0}>
            <AddProducts />
          </TabPanel>
          <TabPanel p={0}>
            <Customers />
          </TabPanel>

          <TabPanel p={0}>
            <AccountInfo />
          </TabPanel> */}
        </TabPanels>
      </Tabs>

      {/* small screen navbars */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        bgGradient="linear(to-l,  pink.200, blue.300)"
        color={"black"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}>
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          // discountRef={discountRef}
          prodRef={prodRef}
          calenderRef={calenderRef}
          contactRef={contactRef}
          adminRef={adminRef}
        />
        <Box>
          <Menu bgGradient="linear(to-l,  pink.200, blue.300)">
            <MenuButton>
              <Avatar
                src="https://avatars.githubusercontent.com/u/112753795?v=4"
                name="boy"></Avatar>
            </MenuButton>
            <MenuList border={"1px solid #27293a"}>
              <MenuItem bgGradient="linear(to-l,  pink.200, blue.300)">
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}>
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                bgGradient="linear(to-l,  pink.200, blue.300)"
                color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}>
                  {" "}
                  <FiLogOut />{" "}
                  <Link to={"/"}>
                    {" "}
                    <Text ml={"20px"} fontSize={"md"}>
                      Logout
                    </Text>
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default AdminMenu;
