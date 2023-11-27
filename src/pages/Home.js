import React, { useState, useEffect } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import RaffleEventGrid from "../components/RaffleEventGrid";

function Home() {

  const [raffleEvents, setRaffleEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://raffleshopping.com/api/catalogs")
      .then((response) => {
        setRaffleEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

const handleEnterDraw = (raffleEventId) => {
  console.log(raffleEventId);
}

  return (
    <Center mt={10}>
        <RaffleEventGrid raffleEvents={raffleEvents} onEnterDraw={handleEnterDraw} />
    </Center>
  );
}

export default Home;