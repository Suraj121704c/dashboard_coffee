import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/dashboard.module.css"

const Dashboard = () => {
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
            <div style={{textAlign : "center"}}>
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
    </Box>
  );
};

export default Dashboard;
