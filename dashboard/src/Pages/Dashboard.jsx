import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/dashboard.module.css";
import axios from "axios";
import PieChart from "../Components/Chart";
import LineChart from "../Components/LineChart";
import BarChart from "../Components/BarChart";
import DonutChart from "../Components/DonutChart";

const Dashboard = () => {
  const [pro, setPro] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [oil, setOil] = useState([]);
  const [gdp, setGdp] = useState([]);

  function chartPie() {
    axios
      .get("https://lively-pink-snail.cyclic.app/products", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.product);
        setPro(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function chartLine() {
    axios
      .get("https://lively-pink-snail.cyclic.app/products?sector=Energy", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.product);
        setEnergy(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function chartBar() {
    axios
      .get("https://lively-pink-snail.cyclic.app/products?topic=oil", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.product);
        setOil(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function chartGdp() {
    axios
      .get("https://lively-pink-snail.cyclic.app/products?topic=gdp", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.product);
        setGdp(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    chartPie();
    chartLine();
    chartBar();
    chartGdp();
  }, []);

  return (
    <Box
      color="pink.600"
      fontWeight={"bold"}
      bgGradient="linear(to-l, blue.100, pink.100)"
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}>
      <Heading>Our Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome !!!</Text>

      <div className={styles.cardBox}>
        <div className={styles.card}>
          <div style={{ textAlign: "center" }}>
            <div className={styles.numbers}>15,045+</div>
            <div className={styles.cardName}>Daily Views</div>
          </div>

          <div className={styles.iconBx}>
            <ion-icon name={styles["eye-outline"]}></ion-icon>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>80,09,657+</div>
            <div className={styles.cardName}>Sales</div>
          </div>

          <div className={styles.iconBx}>
            <ion-icon name={styles["cart-outline"]}></ion-icon>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>28,49,740+</div>
            <div className={styles.cardName}>Comments</div>
          </div>

          <div className="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <div className={styles.numbers}>₹10,00,00,00</div>
            <div className={styles.cardName}>Earning</div>
          </div>

          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>
      <Box style={{ marginTop: "30px" }}>
        <Heading>Likelihood Chart Of The World</Heading>
        <PieChart data={pro} />
      </Box>

      <Box style={{ marginTop: "30px" }}>
        <Heading>Energy Chart Of The World</Heading>
        <LineChart data={energy} />
      </Box>

      <Box style={{ marginTop: "30px" }}>
        <Heading>Oil Reserves of The World</Heading>
        <BarChart data={oil} />
      </Box>

      <Box style={{ marginTop: "30px" }}>
        <Heading>Greates Economies of The World</Heading>
        <BarChart data={gdp} />
      </Box>
    </Box>
  );
};

export default Dashboard;
