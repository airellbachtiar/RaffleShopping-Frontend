import React, { useState, useEffect } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import RaffleEventGrid from "../components/RaffleEventGrid";

function Home() {

  const [raffleEvents, setRaffleEvents] = useState([
    {
      id: 1,
      name: "Raffle Event 1",
      description: "This is the first raffle event",
      startDate: "2021-05-01",
      endDate: "2021-05-31"
    },
    {
      id: 2,
      name: "Raffle Event 2",
      description: "This is the second raffle event",
      startDate: "2021-06-01",
      endDate: "2021-06-30"
    }
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:50001/api/raffle-events/get-raffle-event")
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