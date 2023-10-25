import React, { useState, useEffect } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import RaffleEventGrid from "../components/RaffleEventGrid";
import { Link } from "react-router-dom";

function Home() {
    const [raffleEvents] = useState([
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

    // Use useEffect to fetch raffle events from an API or database
    useEffect(() => {
        // Replace with your API call or database query
        // Example:
        // fetchRaffleEvents()
        //   .then((data) => setRaffleEvents(data))
        //   .catch((error) => console.error(error));
    }, []);

    return (
        <Center>
            <Box p={4} maxWidth="800px">
                <Center>
                    <Link to="/RaffleEventForm">
                        <Button colorScheme="blue" mb={4}>
                            Add Raffle Event
                        </Button>
                    </Link>
                </Center>
                <RaffleEventGrid raffleEvents={raffleEvents} />
            </Box>
        </Center>
    );
}

export default Home;
